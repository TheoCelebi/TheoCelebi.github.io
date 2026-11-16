import { contact, projectsSection, site } from '../content/site.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons.jsx';

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      id: 'email',
      label: t(contact.emailLabel),
      value: site.email,
      href: `mailto:${site.email}`,
      icon: <MailIcon size={26} />,
      external: false,
    },
    {
      id: 'linkedin',
      label: contact.linkedinLabel,
      value: contact.linkedinHandle,
      href: site.linkedin,
      icon: <LinkedInIcon size={26} />,
      external: true,
    },
    {
      id: 'github',
      label: contact.githubLabel,
      value: contact.githubHandle,
      href: site.github,
      icon: <GitHubIcon size={26} />,
      external: true,
    },
  ];

  return (
    <section id="contact" aria-labelledby="titre-contact" className="section">
      <div className="container-page">
        <SectionHeading id="titre-contact" command={contact.eyebrow} title={t(contact.title)} />

        <Reveal>
          <p className="lead max-w-2xl font-medium">{t(contact.text)}</p>
        </Reveal>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {links.map((link, index) => (
            <Reveal as="li" key={link.id} delay={index * 80} className="panel panel-interactive">
              <a
                className="contact-link"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
              >
                <span className="text-accent">{link.icon}</span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs text-muted">{link.label}</span>
                  <span className="block font-semibold break-words">{link.value}</span>
                </span>
                {link.external ? <span className="sr-only">{t(projectsSection.externalHint)}</span> : null}
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
