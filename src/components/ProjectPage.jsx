import { useEffect, useRef } from 'react';
import { findProject, projects } from '../content/projects.js';
import { projectsSection } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { projectHref } from '../hooks/useHashRoute.js';
import { Facts, ProjectBadges } from './ProjectCard.jsx';
import { ArrowLeftIcon, ArrowRightIcon, ExternalIcon } from './icons.jsx';

function BackLink() {
  const { t } = useLanguage();

  return (
    <a className="nav-link inline-flex items-center gap-2" href="#projets">
      <ArrowLeftIcon size={16} />
      {t(projectsSection.back)}
    </a>
  );
}

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="container-page py-16 md:py-24">
      <BackLink />
      <h1 className="project-title display mt-8">{t(projectsSection.notFoundTitle)}</h1>
      <p className="lead mt-5">{t(projectsSection.notFoundText)}</p>
    </div>
  );
}

export default function ProjectPage({ slug }) {
  const { t } = useLanguage();
  const headingRef = useRef(null);
  const project = findProject(slug);

  // À l'ouverture d'une fiche, le focus va sur son titre : les lecteurs d'écran
  // et la navigation au clavier repartent du bon endroit.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container-page py-10 md:py-16" aria-labelledby="titre-projet">
      <BackLink />

      <header className="mt-8">
        <ProjectBadges project={project} featured={Boolean(project.featured)} />
        <h1 id="titre-projet" ref={headingRef} tabIndex={-1} className="project-title display mt-4 outline-none">
          {t(project.title)}
        </h1>
        <p className="lead mt-5 max-w-3xl font-medium">{t(project.tagline)}</p>
        <p className="mt-4 max-w-3xl text-muted">{t(project.summary)}</p>
      </header>

      <Facts facts={project.facts} className="mt-10 max-w-3xl sm:grid-cols-4" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-14">
        <aside className="panel order-first self-start p-6 lg:order-last">
          <dl className="grid gap-5">
            <div>
              <dt className="meta-label">{t(projectsSection.roleLabel)}</dt>
              <dd className="font-medium">{t(project.role)}</dd>
            </div>

            {project.team ? (
              <div>
                <dt className="meta-label">{t(projectsSection.teamLabel)}</dt>
                <dd>{t(project.team)}</dd>
              </div>
            ) : null}

            <div>
              <dt className="meta-label">{t(projectsSection.stackLabel)}</dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tag, tagIndex) => (
                    <li key={tagIndex} className="tag">
                      {t(tag)}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            {project.links.length > 0 || project.repoNote ? (
              <div>
                <dt className="meta-label">{t(projectsSection.linksLabel)}</dt>
                <dd className="grid gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="link inline-flex w-fit items-center gap-2"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {t(link.label)}
                      <ExternalIcon size={16} />
                      <span className="sr-only">{t(projectsSection.externalHint)}</span>
                    </a>
                  ))}
                  {project.repoNote ? <span className="text-muted">{t(project.repoNote)}</span> : null}
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>

        <div className="grid gap-12">
          {project.sections.map((section, sectionIndex) => {
            const sectionId = `partie-${sectionIndex}`;
            return (
              <section key={sectionIndex} aria-labelledby={sectionId}>
                <h2 id={sectionId} className="subhead">
                  {t(section.title)}
                </h2>
                {section.note ? <p className="mt-3 font-mono text-xs text-muted">{t(section.note)}</p> : null}
                <ul className="bullet-list mt-5 max-w-3xl">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{t(item)}</li>
                  ))}
                </ul>
                {section.code ? (
                  <pre className="code-block mt-5">
                    <code>{section.code}</code>
                  </pre>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>

      <nav
        aria-label={`${t(projectsSection.previous)} / ${t(projectsSection.next)}`}
        className="mt-16 grid gap-5 sm:grid-cols-2"
      >
        <a className="panel panel-interactive block p-5 no-underline" href={projectHref(previous.slug)}>
          <span className="flex items-center gap-2 font-mono text-xs text-muted">
            <ArrowLeftIcon size={14} />
            {t(projectsSection.previous)}
          </span>
          <span className="mt-2 block text-lg font-bold">{t(previous.title)}</span>
        </a>
        <a className="panel panel-interactive block p-5 no-underline sm:text-right" href={projectHref(next.slug)}>
          <span className="flex items-center gap-2 font-mono text-xs text-muted sm:justify-end">
            {t(projectsSection.next)}
            <ArrowRightIcon size={14} />
          </span>
          <span className="mt-2 block text-lg font-bold">{t(next.title)}</span>
        </a>
      </nav>
    </article>
  );
}
