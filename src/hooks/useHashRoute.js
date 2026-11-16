import { useEffect, useState } from 'react';

/**
 * Routage minimal par le fragment d'URL, sans dépendance :
 *   #projets                → page d'accueil, ancre « projets »
 *   #/projets/blind-reck    → fiche détaillée du projet
 * Ce format fonctionne tel quel sur un hébergement statique comme GitHub Pages.
 */
function parseHash(hash) {
  const match = hash.match(/^#\/projets\/([a-z0-9-]+)\/?$/);
  if (match) {
    return { view: 'project', slug: match[1] };
  }
  return { view: 'home', anchor: decodeURIComponent(hash.replace(/^#/, '')) };
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

export function projectHref(slug) {
  return `#/projets/${slug}`;
}
