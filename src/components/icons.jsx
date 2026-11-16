/**
 * Icônes dessinées au trait. Elles sont décoratives : le texte ou l'attribut
 * aria-label du bouton qui les contient porte le sens.
 */
function Icon({ size = 20, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function SunIcon(props) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
    </Icon>
  );
}

export function MoonIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
    </Icon>
  );
}

export function MenuIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </Icon>
  );
}

export function CloseIcon(props) {
  return (
    <Icon {...props}>
      <path d="M5 5l14 14M19 5L5 19" />
    </Icon>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Icon {...props}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Icon>
  );
}

export function ArrowLeftIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </Icon>
  );
}

export function ArrowUpIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 20V5M6 11l6-6 6 6" />
    </Icon>
  );
}

export function ExternalIcon(props) {
  return (
    <Icon {...props}>
      <path d="M14 4h6v6M20 4l-9 9M10 6H4v14h14v-6" />
    </Icon>
  );
}

export function DownloadIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 4v11M7 11l5 5 5-5M4 20h16" />
    </Icon>
  );
}

export function MailIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
    </Icon>
  );
}

export function LinkedInIcon(props) {
  return (
    <Icon {...props}>
      <path d="M3 3h18v18H3zM7.5 10v7M7.5 7v.5M11.5 17v-7M11.5 13a2.5 2.5 0 0 1 5 0v4" />
    </Icon>
  );
}

export function GitHubIcon(props) {
  return (
    <Icon {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 19c-5 1.5-5-2.500-7-3m14 6v-3.870a3.370 3.370 0 0 0-.940-2.610c3.140-.350 6.440-1.540 6.440-7A5.440 5.440 0 0 0 20 4.770 5.070 5.070 0 0 0 19.910 1S18.730.650 16 2.480a13.380 13.380 0 0 0-7 0C6.270.650 5.090 1 5.090 1A5.070 5.070 0 0 0 5 4.770a5.440 5.440 0 0 0-1.500 3.780c0 5.420 3.300 6.610 6.440 7A3.370 3.370 0 0 0 9 18.130V22"
      />
    </Icon>
  );
}
