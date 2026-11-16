/**
 * Logo « trois éclats » : trois triangles séparés et, au centre, une rune
 * construite sur le T de Théo, entaillée d'un trait de couleur d'accent.
 */
export default function Logo({ size = 40, title, className = '' }) {
  return (
    <svg
      className={`logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <polygon className="shard shard-top" points="50,6 30,42 70,42" fill="currentColor" />
      <polygon className="shard shard-left" points="26,50 6,86 46,86" fill="currentColor" />
      <polygon className="shard shard-right" points="74,50 54,86 94,86" fill="currentColor" />
      <path
        className="rune"
        d="M41 52H59M50 52V74M44 68L56 58"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="5"
        strokeLinecap="square"
      />
    </svg>
  );
}
