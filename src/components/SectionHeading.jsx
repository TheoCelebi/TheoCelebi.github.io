import Reveal from './Reveal.jsx';

/**
 * En-tête de section : une ligne de commande, puis le titre.
 * L'identifiant du titre sert d'étiquette accessible à la section (aria-labelledby).
 */
export default function SectionHeading({ id, command, title, intro, level = 2 }) {
  const Heading = `h${level}`;

  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="eyebrow mb-4">
        <span aria-hidden="true">&gt; </span>
        {command}
      </p>
      <Heading id={id} className="section-title">
        {title}
      </Heading>
      {intro ? <p className="text-muted mt-6 max-w-2xl">{intro}</p> : null}
    </Reveal>
  );
}
