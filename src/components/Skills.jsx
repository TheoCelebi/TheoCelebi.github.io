import { skillsSection } from '../content/site.js';
import { skills } from '../content/skills.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="competences" aria-labelledby="titre-competences" className="section">
      <div className="container-page">
        <SectionHeading id="titre-competences" command={skillsSection.eyebrow} title={t(skillsSection.title)} />

        {/* Colonnes « en maçonnerie » : chaque groupe garde sa hauteur naturelle. */}
        <div className="gap-7 sm:columns-2 lg:columns-3">
          {skills.map((group, index) => (
            <Reveal key={group.dir} delay={(index % 3) * 80} className="panel mb-7 break-inside-avoid p-5">
              <p className="eyebrow mb-2">
                <span aria-hidden="true">$ ls </span>
                {group.dir}/
              </p>
              <h3 className="text-xl font-bold">{t(group.title)}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="tag text-[0.8125rem]">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
