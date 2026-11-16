import { useEffect, useState } from 'react';

/**
 * Renvoie l'identifiant de la section qui traverse le milieu de l'écran.
 * Sert à surligner le lien de navigation et à changer la couleur d'accent.
 */
export function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    // Une fine bande horizontale juste au-dessus du milieu de l'écran :
    // une seule section la traverse à la fois.
    const observer = new IntersectionObserver(
      (entries) => {
        const crossing = entries.filter((entry) => entry.isIntersecting);
        if (crossing.length > 0) {
          setActive(crossing[crossing.length - 1].target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
