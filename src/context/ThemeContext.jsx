import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

const THEME_COLORS = { light: '#ffffff', dark: '#0b0b0b' };

function readInitialTheme() {
  // Le script de index.html a déjà posé data-theme avant le premier affichage.
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  // useLayoutEffect : l'attribut est en place avant les effets qui lisent les couleurs du thème.
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Stockage indisponible (navigation privée) : le choix vaut pour la visite en cours.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider');
  }
  return context;
}
