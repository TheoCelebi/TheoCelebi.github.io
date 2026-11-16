/**
 * Textes généraux du site, en français et en anglais.
 * Chaque texte bilingue est un objet { fr, en } lu par la fonction t() du contexte de langue.
 */

export const site = {
  name: 'Théo Celebi',
  email: 'theo.celebi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/theo-celebi/',
  github: 'https://github.com/TheoCelebi',
  // Chemin du CV une fois le PDF ajouté dans public/ (par exemple '/cv-theo-celebi.pdf').
  // Tant que la valeur est null, les boutons de téléchargement ne s'affichent pas.
  cvUrl: null,
};

// Identifiants des sections : ils servent d'ancres et pilotent la couleur d'accent.
export const sections = [
  { id: 'a-propos', label: { fr: 'À propos', en: 'About' } },
  { id: 'projets', label: { fr: 'Projets', en: 'Projects' } },
  { id: 'competences', label: { fr: 'Compétences', en: 'Skills' } },
  { id: 'parcours', label: { fr: 'Parcours', en: 'Background' } },
  { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
];

export const ui = {
  skipLink: { fr: 'Aller au contenu', en: 'Skip to content' },
  mainNav: { fr: 'Navigation principale', en: 'Main navigation' },
  home: { fr: "Retour à l'accueil", en: 'Back to home' },
  openMenu: { fr: 'Ouvrir le menu', en: 'Open menu' },
  closeMenu: { fr: 'Fermer le menu', en: 'Close menu' },
  menu: { fr: 'menu', en: 'menu' },
  switchLang: { fr: 'Switch to English', en: 'Passer en français' },
  toDark: { fr: 'Passer au thème sombre', en: 'Switch to dark theme' },
  toLight: { fr: 'Passer au thème clair', en: 'Switch to light theme' },
  backToTop: { fr: 'Haut de page', en: 'Back to top' },
  builtWith: {
    fr: 'Conçu et développé avec React, Vite et Tailwind CSS.',
    en: 'Designed and built with React, Vite and Tailwind CSS.',
  },
  meta: {
    title: {
      fr: 'Théo Celebi — Développeur fullstack',
      en: 'Théo Celebi — Fullstack developer',
    },
    description: {
      fr: 'Portfolio de Théo Celebi, développeur fullstack : applications web en React et Node.js, projets Python et C, robotique et algorithmique.',
      en: 'Portfolio of Théo Celebi, fullstack developer: web apps in React and Node.js, Python and C projects, robotics and algorithms.',
    },
  },
};

export const hero = {
  command: 'whoami',
  role: { fr: 'Développeur fullstack', en: 'Fullstack developer' },
  tagline: {
    fr: "Je construis des applis web de bout en bout, du serveur à l'écran.",
    en: 'I build web apps end to end, from the server to the screen.',
  },
  sub: {
    fr: "Étudiant en Bachelor Informatique et Cybersécurité à l'ESILV.",
    en: "Bachelor's student in Computer Science and Cybersecurity at ESILV.",
  },
  ctaProjects: { fr: 'Voir les projets', en: 'See the projects' },
  ctaCv: { fr: 'Télécharger le CV', en: 'Download my résumé' },
  ctaContact: { fr: 'Me contacter', en: 'Get in touch' },
  sfx: { fr: 'CLAC !', en: 'CLACK!' },
};

export const about = {
  eyebrow: 'cat a-propos.md',
  title: { fr: 'À propos', en: 'About' },
  paragraphs: [
    {
      fr: "Je m'appelle Théo. J'étudie l'informatique et la cybersécurité à l'ESILV, à Paris La Défense, et je développe aussi bien l'interface que le serveur et la base de données.",
      en: "I'm Théo. I study computer science and cybersecurity at ESILV, in Paris La Défense, and I work on the interface as much as on the server and the database.",
    },
    {
      fr: "Mes projets partent d'un besoin réel : une appli pour retrouver mes recettes, un bot qui réserve mes séances de piscine, un jeu de soirée construit avec un ami. Je les mène jusqu'à un outil qui tourne vraiment.",
      en: 'My projects start from a real need: an app to keep track of my recipes, a bot that books my pool sessions, a party game built with a friend. I take them all the way to a tool that actually runs.',
    },
    {
      fr: "À côté du web, j'aime comprendre ce qui se passe en dessous : un serveur HTTPS écrit en C, de l'assembleur et du reverse engineering, de la théorie des graphes, et un bras robotisé en cours de conception.",
      en: 'Beyond the web, I like to understand what happens underneath: an HTTPS server written in C, assembly and reverse engineering, graph theory, and a robotic arm currently being designed.',
    },
    {
      fr: "Depuis 2023, j'intègre aussi des sites en HTML et CSS chez Speedyweb, en parallèle de mes études.",
      en: 'Since 2023, I have also been building sites in HTML and CSS at Speedyweb, alongside my studies.',
    },
  ],
  interestsTitle: { fr: "Centres d'intérêt", en: 'Interests' },
  interests: [
    { label: { fr: 'Rock et metal', en: 'Rock and metal' } },
    { label: { fr: 'Manga', en: 'Manga' }, detail: { fr: 'Berserk en tête', en: 'Berserk above all' } },
    {
      label: { fr: 'Jeux vidéo', en: 'Video games' },
      detail: { fr: 'The Legend of Zelda avant tout', en: 'The Legend of Zelda first' },
    },
    {
      label: { fr: 'Informatique', en: 'Computers' },
      detail: { fr: 'montage de PC', en: 'PC building' },
    },
    { label: { fr: 'Cuisine', en: 'Cooking' } },
    { label: { fr: 'Musculation', en: 'Weight training' } },
  ],
  photoAlt: {
    fr: 'Portrait en noir et blanc, de profil : un bob noir sur la tête, en train de prendre une photo avec un téléphone.',
    en: 'Black-and-white portrait in profile: wearing a black bucket hat, taking a picture with a phone.',
  },
  photoCaption: { fr: 'Hors écran, parfois.', en: 'Away from the screen, sometimes.' },
};

export const projectsSection = {
  eyebrow: 'ls projets/',
  title: { fr: 'Projets', en: 'Projects' },
  intro: {
    fr: 'Six projets, personnels ou pédagogiques. Pour chacun, mon rôle est précisé.',
    en: 'Six projects, personal or school work. My role is stated for each one.',
  },
  roleLabel: { fr: 'Mon rôle', en: 'My role' },
  teamLabel: { fr: 'Équipe', en: 'Team' },
  stackLabel: { fr: 'Technologies', en: 'Technologies' },
  linksLabel: { fr: 'Liens', en: 'Links' },
  readMore: { fr: 'Lire la fiche', en: 'Read the case study' },
  featured: { fr: 'Projet phare', en: 'Featured project' },
  back: { fr: 'Tous les projets', en: 'All projects' },
  previous: { fr: 'Projet précédent', en: 'Previous project' },
  next: { fr: 'Projet suivant', en: 'Next project' },
  notFoundTitle: { fr: 'Projet introuvable', en: 'Project not found' },
  notFoundText: {
    fr: "Cette fiche n'existe pas ou a été déplacée.",
    en: 'This page does not exist or has been moved.',
  },
  externalHint: { fr: '(nouvel onglet)', en: '(new tab)' },
};

export const labSection = {
  eyebrow: 'ls labo/',
  title: { fr: 'Labo', en: 'Lab' },
  intro: {
    fr: 'Des travaux de cours plus courts : algorithmique, graphes et bas niveau.',
    en: 'Shorter coursework: algorithms, graphs and low-level programming.',
  },
};

export const skillsSection = {
  eyebrow: 'cat competences.json',
  title: { fr: 'Compétences', en: 'Skills' },
};

export const journeySection = {
  eyebrow: 'git log --oneline',
  title: { fr: 'Parcours', en: 'Background' },
  educationTitle: { fr: 'Formation', en: 'Education' },
  experienceTitle: { fr: 'Expériences', en: 'Experience' },
  cvText: {
    fr: 'Le détail tient sur une page.',
    en: 'The details fit on one page.',
  },
};

export const contact = {
  eyebrow: 'ssh theo@contact',
  title: { fr: 'Contact', en: 'Contact' },
  text: {
    fr: "Une question, un projet ou une proposition ? Écris-moi, je réponds par e-mail ou sur LinkedIn.",
    en: 'A question, a project or an offer? Drop me a line, I reply by email or on LinkedIn.',
  },
  emailLabel: { fr: 'E-mail', en: 'Email' },
  linkedinLabel: 'LinkedIn',
  linkedinHandle: 'in/theo-celebi',
  githubLabel: 'GitHub',
  githubHandle: 'TheoCelebi',
};
