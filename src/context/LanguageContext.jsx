import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

function readInitialLang() {
  // Le script de index.html a déjà posé l'attribut lang avant le premier affichage.
  return document.documentElement.lang === 'en' ? 'en' : 'fr';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // Stockage indisponible : le choix vaut pour la visite en cours.
    }
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => (current === 'fr' ? 'en' : 'fr'));
  }, []);

  /**
   * Traduit une valeur de contenu : { fr, en } renvoie le texte de la langue
   * active, toute autre valeur (texte commun aux deux langues) est renvoyée telle quelle.
   */
  const t = useCallback(
    (value) => {
      if (value && typeof value === 'object' && 'fr' in value) {
        return value[lang] ?? value.fr;
      }
      return value;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage doit être utilisé dans un LanguageProvider');
  }
  return context;
}
