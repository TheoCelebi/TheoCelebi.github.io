import { hero, site } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { ArrowRightIcon, DownloadIcon } from './icons.jsx';

// Longueurs des barres de l'égaliseur du thème sombre (en unités du dessin).
const EQ_BARS = [96, 150, 70, 210, 120, 260, 90, 180, 140, 60, 230, 110, 170, 80, 200, 130, 250, 100, 160, 75, 190, 120];
const EQ_ACCENT_INDEX = 9;

// Extrémités des lignes de vitesse du thème clair : elles partent toutes du même foyer.
const SPEED_LINES = [
  [0, 120, 1.5],
  [0, 190, 3],
  [40, 250, 1],
  [0, 300, 4],
  [60, 350, 1.5],
  [0, 400, 2.5],
  [30, 450, 1],
  [0, 500, 4.5],
  [80, 540, 1.5],
  [0, 580, 2],
  [120, 600, 1],
  [200, 600, 3],
];

function MangaArt({ sfx }) {
  return (
    <svg
      className="hero-art-light h-full w-full text-ink"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="trame" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="1.9" fill="currentColor" />
        </pattern>
      </defs>
      <polygon points="150,0 400,0 400,290" fill="url(#trame)" />
      <g className="speed-lines" stroke="currentColor" fill="none">
        {SPEED_LINES.map(([x, y, width]) => (
          <path key={`${x}-${y}`} d={`M400 470L${x} ${y}`} strokeWidth={width} />
        ))}
      </g>
      <polygon points="255,600 400,385 400,600" fill="var(--accent)" />
      <text
        x="120"
        y="545"
        transform="rotate(-9 120 545)"
        fontFamily="Anton, Impact, sans-serif"
        fontSize="62"
        fill="var(--paper)"
        stroke="currentColor"
        strokeWidth="5"
        paintOrder="stroke"
        strokeLinejoin="round"
      >
        {sfx}
      </text>
    </svg>
  );
}

function MetalArt() {
  return (
    <svg
      className="hero-art-dark h-full w-full"
      viewBox="0 0 400 600"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {EQ_BARS.map((width, index) => (
        <rect
          key={index}
          className="eq-bar"
          style={{ '--i': index }}
          x={400 - width}
          y={40 + index * 24}
          width={width}
          height="7"
          fill={index === EQ_ACCENT_INDEX ? 'var(--accent)' : 'var(--line)'}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="accueil" aria-labelledby="titre-accueil" className="hero relative overflow-hidden">
      <div className="hero-art pointer-events-none absolute inset-y-0 right-0 w-[70%] md:w-[46%]">
        <MangaArt sfx={t(hero.sfx)} />
        <MetalArt />
      </div>

      <div className="container-page relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16">
        <p className="eyebrow mb-5 text-base">
          <span aria-hidden="true">&gt; </span>
          <span className="typed" style={{ '--chars': hero.command.length }}>
            {hero.command}
          </span>
          <span className="cursor" aria-hidden="true" />
        </p>

        <h1 id="titre-accueil" className="hero-name display">
          <span className="block">Théo</span>
          <span className="hero-name-last block">Celebi</span>
        </h1>

        <p className="hero-role mt-6">{t(hero.role)}</p>

        <p className="lead mt-6 max-w-xl font-medium">{t(hero.tagline)}</p>
        <p className="text-muted mt-2 max-w-xl">{t(hero.sub)}</p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a className="btn btn-primary" href="#projets">
            {t(hero.ctaProjects)}
            <ArrowRightIcon size={18} />
          </a>
          {site.cvUrl ? (
            <a className="btn btn-ghost" href={site.cvUrl} download>
              <DownloadIcon size={18} />
              {t(hero.ctaCv)}
            </a>
          ) : null}
          <a className="btn btn-ghost" href="#contact">
            {t(hero.ctaContact)}
          </a>
        </div>
      </div>
    </section>
  );
}
