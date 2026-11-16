import { useEffect, useState } from 'react';
import { sections, ui } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import Logo from './Logo.jsx';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons.jsx';

export default function Header({ activeSection }) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  // Le menu mobile se ferme avec Échap et dès que l'on change de page ou d'ancre.
  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    const close = () => setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('hashchange', close);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('hashchange', close);
    };
  }, [menuOpen]);

  const links = sections.map((section) => (
    <li key={section.id}>
      <a
        className="nav-link"
        href={`#${section.id}`}
        aria-current={activeSection === section.id ? 'location' : undefined}
        onClick={() => setMenuOpen(false)}
      >
        {t(section.label)}
      </a>
    </li>
  ));

  return (
    <header className="site-header sticky top-0 z-50 bg-paper">
      <div className="container-page flex h-16 items-center gap-3">
        <a
          href="#accueil"
          className="flex items-center gap-3 text-ink no-underline"
          aria-label={t(ui.home)}
        >
          <Logo size={38} />
          <span className="hidden font-mono text-sm font-medium sm:inline md:hidden lg:inline" aria-hidden="true">
            theo.celebi
          </span>
        </a>

        <nav aria-label={t(ui.mainNav)} className="ml-auto hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-6">{links}</ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <button type="button" className="icon-btn" onClick={toggleLang}>
            {/* Le nom accessible reprend le texte visible « FR / EN », précédé de l'action. */}
            <span className="sr-only" lang={lang === 'fr' ? 'en' : 'fr'}>
              {t(ui.switchLang)} :{' '}
            </span>
            <span className="flex items-center gap-1">
              <span className={lang === 'fr' ? 'lang-on' : 'lang-off'}>FR</span>
              <span className="lang-off">/</span>
              <span className={lang === 'en' ? 'lang-on' : 'lang-off'}>EN</span>
            </span>
          </button>

          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={t(theme === 'dark' ? ui.toLight : ui.toDark)}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            className="icon-btn md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={t(menuOpen ? ui.closeMenu : ui.openMenu)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label={t(ui.mainNav)}
        className="mobile-menu md:hidden"
        hidden={!menuOpen}
      >
        <ul className="container-page flex flex-col gap-1 py-4">{links}</ul>
      </nav>
    </header>
  );
}
