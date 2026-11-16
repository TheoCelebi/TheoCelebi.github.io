import { education, experience } from '../content/journey.js';
import { hero, journeySection, site } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { DownloadIcon } from './icons.jsx';

function Timeline({ titleId, title, items }) {
  const { t } = useLanguage();

  return (
    <Reveal>
      <h3 id={titleId} className="subhead mb-8">
        {title}
      </h3>
      <ol className="timeline" aria-labelledby={titleId}>
        {items.map((item) => (
          <li key={item.id} className="timeline-item" data-current={item.current ? 'true' : undefined}>
            {item.period ? <p className="font-mono text-xs text-muted">{t(item.period)}</p> : null}
            <h4 className="mt-1 text-xl font-bold">{t(item.title)}</h4>
            <p className="font-medium">{t(item.place)}</p>
            {item.detail ? <p className="mt-2 text-muted">{t(item.detail)}</p> : null}
            {item.items ? (
              <ul className="bullet-list mt-3 text-[0.95rem]">
                {item.items.map((line, index) => (
                  <li key={index}>{t(line)}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="parcours" aria-labelledby="titre-parcours" className="section">
      <div className="container-page">
        <SectionHeading id="titre-parcours" command={journeySection.eyebrow} title={t(journeySection.title)} />

        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-16">
          <Timeline titleId="titre-experiences" title={t(journeySection.experienceTitle)} items={experience} />
          <Timeline titleId="titre-formation" title={t(journeySection.educationTitle)} items={education} />
        </div>

        {site.cvUrl ? (
          <Reveal className="panel mt-14 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">{t(journeySection.cvText)}</p>
            <a className="btn btn-primary" href={site.cvUrl} download>
              <DownloadIcon size={18} />
              {t(hero.ctaCv)}
            </a>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
