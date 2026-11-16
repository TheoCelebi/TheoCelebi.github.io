import { projectsSection } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { projectHref } from '../hooks/useHashRoute.js';
import Reveal from './Reveal.jsx';
import { ArrowRightIcon } from './icons.jsx';

export function ProjectBadges({ project, featured = false }) {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {featured ? <span className="badge">{t(projectsSection.featured)}</span> : null}
      {project.wip ? <span className="badge">{t(projectsSection.wip)}</span> : null}
      <p className="font-mono text-xs text-muted">
        {t(project.kind)} · {t(project.period)}
      </p>
    </div>
  );
}

export function Facts({ facts, className = '' }) {
  const { t } = useLanguage();

  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-6 ${className}`}>
      {facts.map((fact, index) => (
        <div key={index} className="fact">
          <dt className="fact-label">{t(fact.label)}</dt>
          <dd className="fact-value">{t(fact.value)}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProjectCard({ project, featured = false, delay = 0, className = '' }) {
  const { t } = useLanguage();
  const titleId = `carte-${project.slug}`;
  const visibleStack = project.stack.slice(0, featured ? 9 : 5);
  const hiddenCount = project.stack.length - visibleStack.length;

  return (
    <Reveal
      as="article"
      delay={delay}
      aria-labelledby={titleId}
      className={`panel panel-interactive flex flex-col p-6 md:p-8 ${className}`}
    >
      <div className={featured ? 'grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12' : 'flex grow flex-col'}>
        <div className="flex grow flex-col">
          <ProjectBadges project={project} featured={featured} />

          <h3 id={titleId} className={`display card-title mt-4 ${featured ? 'card-title-featured' : ''}`}>
            <a className="stretched-link" href={projectHref(project.slug)}>
              {t(project.title)}
            </a>
          </h3>

          <p className="mt-3 font-medium">{t(project.tagline)}</p>
          {featured ? <p className="mt-3 text-muted">{t(project.summary)}</p> : null}

          <p className="mt-4 text-sm">
            <span className="font-mono text-xs text-prompt">{t(projectsSection.roleLabel)} : </span>
            {t(project.role)}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label={t(projectsSection.stackLabel)}>
            {visibleStack.map((tag, index) => (
              <li key={index} className="tag">
                {t(tag)}
              </li>
            ))}
            {hiddenCount > 0 ? <li className="tag">+{hiddenCount}</li> : null}
          </ul>

          <p className="read-more mt-auto pt-6" aria-hidden="true">
            {t(projectsSection.readMore)}
            <ArrowRightIcon size={16} />
          </p>
        </div>

        {featured ? <Facts facts={project.facts} className="content-center" /> : null}
      </div>
    </Reveal>
  );
}
