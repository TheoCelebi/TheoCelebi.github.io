import portraitSmall from '../assets/portrait-480.webp';
import portraitLarge from '../assets/portrait-880.webp';
import { about } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="a-propos" aria-labelledby="titre-a-propos" className="section">
      <div className="container-page">
        <SectionHeading id="titre-a-propos" command={about.eyebrow} title={t(about.title)} />

        <div className="grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
          <div>
            <Reveal className="grid gap-5">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className={index === 0 ? 'lead font-medium' : undefined}>
                  {t(paragraph)}
                </p>
              ))}
            </Reveal>

            <Reveal className="mt-10" delay={100}>
              <h3 className="eyebrow mb-4">
                <span aria-hidden="true">&gt; </span>
                {t(about.interestsTitle)}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {about.interests.map((interest, index) => (
                  <li key={index} className="panel panel-sm px-3 py-2 text-sm">
                    <span className="font-semibold">{t(interest.label)}</span>
                    {interest.detail ? <span className="text-muted"> · {t(interest.detail)}</span> : null}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal as="figure" className="panel self-start p-3" delay={150}>
            <img
              className="block h-auto w-full"
              src={portraitLarge}
              srcSet={`${portraitSmall} 480w, ${portraitLarge} 880w`}
              sizes="(min-width: 768px) 380px, 92vw"
              width="880"
              height="982"
              loading="lazy"
              decoding="async"
              alt={t(about.photoAlt)}
            />
            <figcaption className="mt-3 font-mono text-xs">{t(about.photoCaption)}</figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
