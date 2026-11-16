import { lab } from '../content/lab.js';
import { projects } from '../content/projects.js';
import { labSection, projectsSection } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

// Largeur de chaque carte dans la grille : le projet phare prend toute la ligne,
// puis deux cartes larges, puis trois cartes plus étroites.
const SPANS = [
  'md:col-span-2 lg:col-span-6',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'md:col-span-2 lg:col-span-2',
];

function Lab() {
  const { t } = useLanguage();

  return (
    <div className="mt-20 md:mt-28">
      <Reveal className="mb-8">
        <p className="eyebrow mb-3">
          <span aria-hidden="true">&gt; </span>
          {labSection.eyebrow}
        </p>
        <h3 className="subhead">{t(labSection.title)}</h3>
        <p className="mt-4 max-w-2xl text-muted">{t(labSection.intro)}</p>
      </Reveal>

      <ul className="grid gap-6 md:grid-cols-3">
        {lab.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 80} className="panel panel-sm flex flex-col p-5">
            <p className="font-mono text-xs text-muted">{t(item.kind)}</p>
            <h4 className="mt-2 text-xl font-bold">{t(item.title)}</h4>
            <p className="mt-3 text-[0.95rem]">{t(item.text)}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-5">
              {item.tags.map((tag, tagIndex) => (
                <li key={tagIndex} className="tag">
                  {t(tag)}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projets" aria-labelledby="titre-projets" className="section">
      <div className="container-page">
        <SectionHeading
          id="titre-projets"
          command={projectsSection.eyebrow}
          title={t(projectsSection.title)}
          intro={t(projectsSection.intro)}
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={Boolean(project.featured)}
              delay={index === 0 ? 0 : ((index - 1) % 3) * 80}
              className={SPANS[index] ?? ''}
            />
          ))}
        </div>

        <Lab />
      </div>
    </section>
  );
}
