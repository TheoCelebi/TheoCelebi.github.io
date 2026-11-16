import { site, ui } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Logo from './Logo.jsx';
import { ArrowUpIcon } from './icons.jsx';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-page flex flex-col gap-5 py-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <Logo size={30} />
          <p className="font-mono text-sm">
            © {year} {site.name}
          </p>
        </div>
        <p className="text-muted text-sm sm:ml-6">{t(ui.builtWith)}</p>
        <a className="nav-link inline-flex items-center gap-2 self-start sm:ml-auto sm:self-auto" href="#accueil">
          <ArrowUpIcon size={16} />
          {t(ui.backToTop)}
        </a>
      </div>
    </footer>
  );
}
