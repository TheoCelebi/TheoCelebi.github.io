/**
 * Formation et expériences professionnelles.
 */

export const education = [
  {
    id: 'esilv',
    title: { fr: 'Bachelor Informatique et Cybersécurité', en: "Bachelor's in Computer Science and Cybersecurity" },
    place: 'ESILV · Paris La Défense',
    period: { fr: 'En cours', en: 'In progress' },
    current: true,
  },
  {
    id: 'bac',
    title: { fr: 'Baccalauréat STI2D', en: 'Baccalauréat STI2D (technology track)' },
    place: 'Lycée Léonard de Vinci',
    detail: {
      fr: 'Option Système Informatique Numérique.',
      en: 'Digital and information systems option.',
    },
  },
];

export const experience = [
  {
    id: 'speedyweb',
    title: { fr: 'Intégration web', en: 'Web integration' },
    place: { fr: 'Speedyweb · télétravail complet', en: 'Speedyweb · fully remote' },
    period: { fr: 'Depuis février 2023', en: 'Since February 2023' },
    current: true,
    detail: {
      fr: 'Intégration de sites de location à destination des loueurs.',
      en: 'Building rental websites for rental companies.',
    },
    items: [
      { fr: 'Intégration HTML et CSS.', en: 'HTML and CSS integration.' },
      {
        fr: 'Gestion des contenus textuels avec le CMS Thelia.',
        en: 'Managing text content with the Thelia CMS.',
      },
      {
        fr: 'Sélection et optimisation des visuels avec la suite Adobe.',
        en: 'Selecting and optimising visual assets with the Adobe suite.',
      },
      {
        fr: 'Déploiement sur les 8 serveurs avec FileZilla.',
        en: 'Deployment to the 8 servers with FileZilla.',
      },
    ],
  },
  {
    id: 'hyatt',
    title: { fr: 'Employé polyvalent', en: 'Multi-skilled hotel employee' },
    place: 'Hyatt Paris Regency · Paris 17e',
    period: { fr: 'Depuis janvier 2023', en: 'Since January 2023' },
    current: true,
    items: [
      { fr: 'Runner et room service.', en: 'Runner and room service.' },
      { fr: 'Accompagnement des clients en anglais.', en: 'Assisting guests in English.' },
      { fr: 'Réassort et gestion des stocks.', en: 'Restocking and stock management.' },
    ],
  },
];
