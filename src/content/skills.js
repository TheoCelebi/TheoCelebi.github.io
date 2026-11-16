/**
 * Compétences, regroupées par famille.
 * Le nom de dossier (dir) sert à l'habillage « terminal » de la section.
 */

export const skills = [
  {
    dir: 'langages',
    title: { fr: 'Langages', en: 'Languages' },
    items: [
      'JavaScript',
      'Python',
      'C',
      'C++',
      'Java',
      'PHP',
      'SQL',
      'HTML / CSS',
      { fr: 'Assembleur x86-64', en: 'x86-64 assembly' },
    ],
  },
  {
    dir: 'front',
    title: { fr: 'Front-end', en: 'Front end' },
    items: ['React', 'Vite', 'Tailwind CSS', 'Figma'],
  },
  {
    dir: 'back',
    title: { fr: 'Back-end et données', en: 'Back end and data' },
    items: ['Node.js', 'Express', { fr: 'API REST', en: 'REST APIs' }, 'PostgreSQL', 'MySQL', 'Pandas', 'NumPy'],
  },
  {
    dir: 'outils',
    title: { fr: 'Outils', en: 'Tools' },
    items: [
      'Git',
      'Docker',
      'GitHub Actions',
      'Railway',
      'VS Code',
      'Thelia CMS',
      'FileZilla',
      'Adobe Fireworks',
      { fr: "Variables d'environnement", en: 'Environment variables' },
      { fr: 'Assistants IA', en: 'AI assistants' },
    ],
  },
  {
    dir: 'bas-niveau',
    title: { fr: 'Bas niveau et sécurité', en: 'Low level and security' },
    items: ['Linux', 'OpenSSL / TLS', 'radare2', 'Reverse engineering'],
  },
  {
    dir: 'algo',
    title: { fr: 'Algorithmique', en: 'Algorithms' },
    items: [
      { fr: 'Théorie des graphes', en: 'Graph theory' },
      { fr: 'Recherche de chemin (BFS, UCS, A*)', en: 'Pathfinding (BFS, UCS, A*)' },
    ],
  },
  {
    dir: 'langues',
    title: { fr: 'Langues', en: 'Spoken languages' },
    items: [
      { fr: 'Français · natif', en: 'French · native' },
      { fr: 'Anglais · professionnel', en: 'English · professional' },
    ],
  },
  {
    dir: 'savoir-etre',
    title: { fr: 'Savoir-être', en: 'Soft skills' },
    items: [
      { fr: "Esprit d'équipe", en: 'Team spirit' },
      { fr: 'Rigueur', en: 'Rigour' },
      { fr: 'Communication', en: 'Communication' },
      { fr: 'Curiosité', en: 'Curiosity' },
      { fr: 'Passion', en: 'Passion' },
    ],
  },
];
