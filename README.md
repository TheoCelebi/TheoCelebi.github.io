# Portfolio — Théo Celebi

Portfolio personnel de Théo Celebi, développeur fullstack.

**Site en ligne : <https://theocelebi.github.io>**

## Présentation

Un site d'une page, bilingue français / anglais, qui présente :

- six projets, chacun avec une fiche détaillée (contexte, démarche, choix techniques, rôle exact) ;
- un bloc « Labo » pour des travaux de cours plus courts (algorithmique, graphes, reverse engineering) ;
- les compétences, le parcours et les moyens de contact.

Le site a deux thèmes :

- **clair**, façon manga : papier blanc, encre noire, cases à bordure épaisse, trames et lignes de vitesse ;
- **sombre**, façon rock et metal : fond noir, titres gothiques, invite de commande verte.

La couleur d'accent change au fil du défilement, d'une section à l'autre.

## Stack

| Rôle | Outil |
|---|---|
| Interface | React 19 |
| Outil de build | Vite 8 |
| Mise en page | Tailwind CSS 4 |
| Thèmes et effets | CSS pur (variables, `@property`, animations) |
| Polices | Anton, Pirata One, Space Grotesk, JetBrains Mono, auto-hébergées |
| Déploiement | GitHub Actions et GitHub Pages |

Le projet n'a aucune dépendance de routage ni d'animation : la navigation repose sur le
fragment d'URL (`#projets`, `#/projets/blind-reck`) et les animations sur CSS et
`IntersectionObserver`.

## Lancer le projet en local

Prérequis : Node.js 22 ou plus récent.

```bash
git clone https://github.com/TheoCelebi/TheoCelebi.github.io.git
cd TheoCelebi.github.io
npm install
npm run dev
```

Le site est alors disponible sur <http://localhost:5173>.

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Version de production dans `dist/` |
| `npm run preview` | Sert la version de production en local |

## Organisation du code

```
├── index.html               Page d'entrée, thème et langue appliqués avant l'affichage
├── public/                  Favicon et robots.txt
├── src/
│   ├── App.jsx              Assemblage des sections et routage par fragment d'URL
│   ├── assets/              Images
│   ├── components/          Un composant par section, plus les éléments partagés
│   ├── content/             Tous les textes, en français et en anglais
│   ├── context/             Thème clair/sombre et langue
│   ├── hooks/               Routage et section active
│   └── styles/              Jetons de design, thèmes, composants et effets
└── .github/workflows/       Déploiement automatique
```

## Modifier le contenu

Tous les textes sont dans `src/content/`. Un texte bilingue s'écrit `{ fr: '…', en: '…' }`.

- `projects.js` : les six projets et leurs fiches ;
- `lab.js` : le bloc « Labo » ;
- `skills.js` : les compétences ;
- `journey.js` : la formation et les expériences ;
- `site.js` : l'accueil, la section À propos, le contact et les libellés de l'interface.

Pour proposer le CV en téléchargement, déposer le PDF dans `public/` puis renseigner
`cvUrl` dans `src/content/site.js`. Les boutons de téléchargement apparaissent alors
dans l'accueil et dans la section Parcours.

## Accessibilité et performances

- Navigation complète au clavier, lien d'évitement et focus visible.
- Contrastes conformes au niveau AA dans les deux thèmes.
- Animations désactivées pour les visiteurs qui ont réglé `prefers-reduced-motion`.
- Images en WebP avec plusieurs tailles, polices auto-hébergées.

Scores Lighthouse mesurés sur la version de production, en local :

| Profil | Performance | Accessibilité | Bonnes pratiques | SEO |
|---|---|---|---|---|
| Mobile | 97 | 100 | 100 | 100 |
| Ordinateur | 100 | 100 | 100 | 100 |

## Déploiement

Chaque push sur `main` lance le workflow `.github/workflows/deploy.yml` : il compile le
site puis le publie sur GitHub Pages.

## Contact

- E-mail : <theo.celebi@gmail.com>
- LinkedIn : <https://www.linkedin.com/in/theo-celebi/>
- GitHub : <https://github.com/TheoCelebi>
