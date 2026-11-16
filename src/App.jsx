import { useEffect, useRef } from 'react';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { sections, ui } from './content/site.js';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { useActiveSection } from './hooks/useActiveSection.js';
import { useHashRoute } from './hooks/useHashRoute.js';

// Sections observées pour la navigation et la couleur d'accent.
const SECTION_IDS = ['accueil', ...sections.map((section) => section.id)];

function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

function Shell() {
  const route = useHashRoute();
  const { t } = useLanguage();
  const isProject = route.view === 'project';
  const visibleSection = useActiveSection(SECTION_IDS, !isProject);
  const activeSection = isProject ? 'projets' : visibleSection;
  const previousView = useRef(null);

  // La couleur d'accent suit la section en cours.
  useEffect(() => {
    document.documentElement.dataset.accent = activeSection;
  }, [activeSection]);

  // Titre et description de la page dans la langue active.
  useEffect(() => {
    document.title = t(ui.meta.title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', t(ui.meta.description));
  }, [t]);

  // Position de défilement au changement de vue.
  useEffect(() => {
    if (isProject) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (previousView.current !== 'home') {
      // Premier affichage ou retour depuis une fiche : on se place sur l'ancre demandée.
      const target = route.anchor ? document.getElementById(route.anchor) : null;
      if (target) {
        target.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else if (previousView.current === 'project') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
    previousView.current = route.view;
  }, [route, isProject]);

  return (
    <>
      <a className="skip-link" href="#contenu">
        {t(ui.skipLink)}
      </a>
      <ScrollProgress />
      <Header activeSection={activeSection} />
      <main id="contenu" tabIndex={-1} className="outline-none">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Shell />
      </LanguageProvider>
    </ThemeProvider>
  );
}
