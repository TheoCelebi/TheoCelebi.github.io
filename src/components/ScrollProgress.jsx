import { useEffect, useRef } from 'react';

/**
 * Barre fine en haut de l'écran : elle avance avec le défilement
 * et prend la couleur d'accent de la section en cours.
 */
export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      ref.current?.style.setProperty('--progress', progress.toFixed(4));
    };

    const onScroll = () => {
      if (frame === 0) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
}
