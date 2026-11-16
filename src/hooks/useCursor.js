import { useEffect } from 'react';

// Couleur d'accent de chaque section, telle que définie dans styles/tokens.css.
const ACCENT_VARIABLES = {
  accueil: '--red',
  'a-propos': '--violet',
  projets: '--blue',
  competences: '--teal',
  parcours: '--green',
  contact: '--red',
};

// La pointe du triangle est le point actif du pointeur.
const HOTSPOT = '3 2';

/**
 * Dessine un éclat du logo : un triangle dont la pointe vise en haut à gauche.
 * Le contour, de la couleur opposée au remplissage, le garde lisible sur tous les fonds.
 */
function shard({ fill, stroke, tip }) {
  const outline = '3,2 27,12 12,27';
  const tipShape = tip ? `<polygon points="3,2 13,6.2 6.8,12.4" fill="${tip}"/>` : '';
  // Le contour est tracé en dernier pour recouvrir les bords de la pointe colorée.
  return (
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">' +
    `<polygon points="${outline}" fill="${fill}"/>` +
    tipShape +
    `<polygon points="${outline}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>` +
    '</svg>'
  );
}

function toCursor(svg, fallback) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${HOTSPOT}, ${fallback}`;
}

/**
 * Remplace le pointeur de la souris par un éclat du logo, aux couleurs du thème.
 * - pointeur normal : triangle couleur encre, pointe à la couleur d'accent de la section ;
 * - sur les liens et les boutons : triangle entièrement à la couleur d'accent.
 * Les styles lisent ces deux pointeurs dans --cursor-default et --cursor-pointer.
 * Sans souris (écran tactile), rien n'est modifié.
 */
export function useCursor(theme, section) {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const read = (name) => styles.getPropertyValue(name).trim();

    const ink = read('--ink');
    const paper = read('--paper');
    const accent = read(ACCENT_VARIABLES[section] ?? '--red');

    root.style.setProperty('--cursor-default', toCursor(shard({ fill: ink, stroke: paper, tip: accent }), 'auto'));
    root.style.setProperty('--cursor-pointer', toCursor(shard({ fill: accent, stroke: ink }), 'pointer'));
  }, [theme, section]);
}
