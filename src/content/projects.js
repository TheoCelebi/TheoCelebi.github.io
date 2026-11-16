/**
 * Les six projets mis en avant.
 * Pour les projets d'équipe, la contribution personnelle est toujours séparée
 * du travail commun et du travail des autres membres.
 */

export const projects = [
  {
    slug: 'blind-reck',
    featured: true,
    title: 'Blind Reck',
    kind: { fr: 'Projet personnel en binôme', en: 'Personal project, built as a pair' },
    period: { fr: 'Juin – octobre 2026', en: 'June – October 2026' },
    tagline: {
      fr: 'Party game musical multijoueur : devine qui a ajouté ce son.',
      en: 'Multiplayer music party game: guess who added that track.',
    },
    summary: {
      fr: "Chaque joueur importe en secret des morceaux depuis ses plateformes de streaming. Un extrait de 30 secondes passe à l'aveugle, et tout le monde vote pour deviner qui l'a ajouté. Jusqu'à 12 joueurs, chacun sur son téléphone, synchronisés en temps réel.",
      en: 'Each player secretly imports tracks from their streaming platforms. A 30-second clip plays blind, and everyone votes to guess who added it. Up to 12 players, each on their own phone, synchronised in real time.',
    },
    role: { fr: 'Co-développeur', en: 'Co-developer' },
    team: {
      fr: 'Idée originale de Thess. Créé à deux avec Thomas Pigeard.',
      en: 'Original idea by Thess. Built as a pair with Thomas Pigeard.',
    },
    stack: [
      'React 18',
      'Vite',
      'Framer Motion',
      'Node.js 22',
      'Express',
      'Socket.IO',
      'Firebase Auth',
      'Firestore',
      'Deezer',
      'Spotify',
      'Apple Music',
      'YouTube Data API',
      'Railway',
    ],
    facts: [
      { value: '12', label: { fr: 'joueurs maximum', en: 'players at most' } },
      { value: '~105', label: { fr: 'commits', en: 'commits' } },
      { value: '~14 000', label: { fr: 'lignes de JavaScript', en: 'lines of JavaScript' } },
      { value: '10', label: { fr: 'suites de tests de bout en bout', en: 'end-to-end test suites' } },
    ],
    sections: [
      {
        title: { fr: 'Le jeu', en: 'The game' },
        items: [
          {
            fr: 'Points dégressifs selon la rapidité du vote, bonus de bluff quand on trompe les autres, piège si on ne reconnaît pas son propre son.',
            en: "Points decrease with voting time, a bluff bonus rewards fooling the others, and there is a trap for players who don't recognise their own track.",
          },
          {
            fr: 'Interface entièrement en français, pensée pour le mobile : tout tient sur un écran, sans défilement.',
            en: 'Interface entirely in French and designed for mobile: everything fits on one screen, with no scrolling.',
          },
        ],
      },
      {
        title: { fr: 'Architecture du projet', en: 'Project architecture' },
        note: { fr: 'Travail commun du binôme.', en: 'Joint work of the pair.' },
        items: [
          {
            fr: "Serveur autoritaire : tout l'état de la partie vit côté serveur, chronos compris. Un client ne peut ni tricher ni bloquer la partie, et un joueur déconnecté peut revenir en pleine manche.",
            en: 'Authoritative server: the whole game state lives on the server, timers included. A client can neither cheat nor block the game, and a disconnected player can come back mid-round.',
          },
          {
            fr: "Sessions sécurisées : un jeton de reconnexion secret, distinct de l'identifiant public du joueur, empêche de prendre la place d'un autre.",
            en: "Secure sessions: a secret reconnection token, separate from the player's public identifier, prevents anyone from taking another player's seat.",
          },
          {
            fr: 'Économie de jeu (XP, niveaux, monnaie) calculée côté serveur, avec des écritures Firestore en transaction pour éviter tout double crédit.',
            en: 'Game economy (XP, levels, currency) computed on the server, with transactional Firestore writes to avoid any double credit.',
          },
          {
            fr: 'Extraits audio : les liens Deezer signés expirent en 15 minutes environ et sont re-signés juste à temps.',
            en: 'Audio clips: signed Deezer links expire after about 15 minutes and are re-signed just in time.',
          },
          {
            fr: 'Qualité : des bots Socket.IO jouent de vraies parties contre le serveur, la plupart hors ligne grâce à de faux services Deezer, iTunes et YouTube.',
            en: 'Quality: Socket.IO bots play real games against the server, most of them offline thanks to fake Deezer, iTunes and YouTube services.',
          },
        ],
      },
      {
        title: { fr: 'Ma contribution', en: 'My contribution' },
        items: [
          {
            fr: "Import par lien de partage (Deezer, Apple Music, YouTube) : le joueur colle un lien, le serveur reconnaît la plateforme et importe playlist, album, titre ou profil, avec pagination, dédoublonnage et messages d'erreur clairs. Une route unique sert les trois plateformes : c'est ma plus grosse contribution côté serveur.",
            en: 'Import by share link (Deezer, Apple Music, YouTube): the player pastes a link, the server recognises the platform and imports a playlist, album, track or profile, with pagination, de-duplication and clear error messages. A single route serves all three platforms: this is my largest server-side contribution.',
          },
          {
            fr: 'Résolution exacte des extraits Deezer par identifiant plutôt que par recherche texte : on joue toujours le bon morceau, jamais une reprise.',
            en: 'Exact resolution of Deezer clips by identifier rather than text search: the right track always plays, never a cover.',
          },
          {
            fr: "Migration de l'API Spotify après son changement de février 2026 : les playlists étaient ignorées en silence, ce que j'ai corrigé par une lecture défensive du nouveau format.",
            en: 'Migration of the Spotify API after its February 2026 change: playlists were being silently ignored, which I fixed with a defensive read of the new format.',
          },
          {
            fr: "Contrôle du volume pour le téléphone qui diffuse la musique, bouton Quitter avec confirmation et bouton pour retirer toutes ses musiques d'un coup.",
            en: 'Volume control for the phone that plays the music, a Leave button with confirmation, and a button to remove all of your tracks at once.',
          },
          {
            fr: 'Interface : pseudo aux couleurs de la carte de joueur, lobby restylé, logos des plateformes, podium qui se replace au-dessus de la carte des gains.',
            en: "Interface: nickname in the player card's colours, restyled lobby, platform logos, and a podium that repositions itself above the rewards card.",
          },
        ],
      },
      {
        title: { fr: 'Méthode', en: 'Method' },
        items: [
          {
            fr: 'Travail en binôme sur Git et GitHub : branches, pull requests, merges.',
            en: 'Pair work on Git and GitHub: branches, pull requests, merges.',
          },
          {
            fr: 'Développement assisté par IA, avec relecture et vérification par les tests de bout en bout avant chaque push.',
            en: 'AI-assisted development, with code review and end-to-end test checks before every push.',
          },
        ],
      },
      {
        title: { fr: 'Ce que le projet montre', en: 'What the project shows' },
        items: [
          {
            fr: "Du temps réel multijoueur, plusieurs API tierces aux contraintes très différentes, de la sécurité et de l'anti-triche côté serveur, une persistance transactionnelle et un design mobile soigné.",
            en: 'Real-time multiplayer, several third-party APIs with very different constraints, server-side security and anti-cheat, transactional persistence and careful mobile design.',
          },
        ],
      },
    ],
    links: [],
    repoNote: { fr: 'Dépôt privé', en: 'Private repository' },
  },

  {
    slug: 'gestion-courses-cuisine',
    title: { fr: 'Gestion de courses & cuisine', en: 'Groceries & recipes manager' },
    kind: { fr: 'Projet pédagogique · équipe de 3', en: 'School project · team of 3' },
    period: { fr: 'Novembre – décembre 2025', en: 'November – December 2025' },
    tagline: {
      fr: 'Une appli web fullstack pour gérer ses listes de courses, ses recettes et ses ingrédients.',
      en: 'A fullstack web app to manage shopping lists, recipes and ingredients.',
    },
    summary: {
      fr: "Une API REST en Node.js et Express, une base PostgreSQL et une interface React, le tout conteneurisé : l'application se lance avec une seule commande Docker.",
      en: 'A REST API in Node.js and Express, a PostgreSQL database and a React interface, all containerised: the app starts with a single Docker command.',
    },
    role: {
      fr: 'Architecture, authentification et listes de courses',
      en: 'Architecture, authentication and shopping lists',
    },
    team: {
      fr: 'Avec Mathis (recettes) et Yassine (ingrédients et catégories).',
      en: 'With Mathis (recipes) and Yassine (ingredients and categories).',
    },
    stack: [
      'React',
      'Vite',
      'React Router',
      'Axios',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Docker Compose',
    ],
    facts: [
      { value: '3', label: { fr: "personnes dans l'équipe", en: 'people on the team' } },
      { value: '20 / 35', label: { fr: 'commits à mon nom', en: 'commits under my name' } },
      { value: '1', label: { fr: 'commande Docker pour tout lancer', en: 'Docker command to start it all' } },
    ],
    sections: [
      {
        title: { fr: 'Ma part', en: 'My part' },
        items: [
          {
            fr: 'Mise en place du serveur Node.js et Express et de la base PostgreSQL avec Sequelize.',
            en: 'Setting up the Node.js and Express server and the PostgreSQL database with Sequelize.',
          },
          {
            fr: "Inscription et connexion : mots de passe hachés avec bcrypt, jetons JWT et middlewares de contrôle d'accès.",
            en: 'Sign-up and login: passwords hashed with bcrypt, JWT tokens and access-control middleware.',
          },
          {
            fr: 'Gestion des listes de courses : ajouter, supprimer et cocher les articles.',
            en: 'Shopping lists: adding, removing and ticking off items.',
          },
          {
            fr: 'Structure du front React avec Vite.',
            en: 'Structure of the React front end with Vite.',
          },
        ],
      },
      {
        title: { fr: "Le reste de l'équipe", en: 'The rest of the team' },
        items: [
          {
            fr: 'Mathis : fiches recettes, visibilité privée ou publique, liaison entre recettes et utilisateurs.',
            en: 'Mathis: recipe pages, private or public visibility, linking recipes to users.',
          },
          {
            fr: 'Yassine : gestion des ingrédients et classement par catégories.',
            en: 'Yassine: ingredient management and sorting by category.',
          },
        ],
      },
      {
        title: { fr: 'Ce que le projet montre', en: 'What the project shows' },
        items: [
          {
            fr: 'Un socle fullstack complet : modèle de données relationnel, API REST sécurisée, interface React et environnement reproductible avec Docker.',
            en: 'A complete fullstack foundation: relational data model, secured REST API, React interface and a reproducible environment with Docker.',
          },
          {
            fr: 'Le travail à trois sur un même dépôt Git, avec une répartition claire des responsabilités.',
            en: 'Three people working in the same Git repository, with a clear split of responsibilities.',
          },
        ],
      },
    ],
    links: [
      {
        label: { fr: 'Code sur GitHub', en: 'Code on GitHub' },
        href: 'https://github.com/MathisBernarde/node-react-site-project',
      },
    ],
  },

  {
    slug: 'carnet-de-cuisine',
    title: { fr: 'Mon carnet de cuisine', en: 'My cooking notebook' },
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    period: { fr: 'Octobre – novembre 2026', en: 'October – November 2026' },
    tagline: {
      fr: 'Une vidéo de recette TikTok, Instagram ou YouTube devient une fiche complète, avec valeurs nutritionnelles et liste de courses.',
      en: 'A TikTok, Instagram or YouTube recipe video becomes a full recipe card, with nutrition facts and a shopping list.',
    },
    summary: {
      fr: "Une application iPhone personnelle, pensée pour un étudiant sportif : on partage une vidéo, l'appli la transcrit et en tire la recette, ses valeurs nutritionnelles, la liste de courses et le scan des produits en magasin.",
      en: 'A personal iPhone app designed for a student who trains: share a video and the app transcribes it, then produces the recipe, its nutrition facts, the shopping list and in-store product scanning.',
    },
    role: { fr: "Conception produit et pilotage d'IA", en: 'Product design and AI direction' },
    stack: [
      'Python',
      'FastAPI',
      'SQLite',
      'yt-dlp',
      'ffmpeg',
      'faster-whisper',
      'Claude',
      'PWA',
      'Service worker',
      'Open Food Facts',
      'Tailscale',
    ],
    facts: [
      { value: '37', label: { fr: 'versions publiées', en: 'published versions' } },
      { value: '~4 000', label: { fr: 'lignes de code', en: 'lines of code' } },
      { value: '0 €', label: { fr: "d'hébergement et d'API", en: 'in hosting and API costs' } },
    ],
    sections: [
      {
        title: { fr: 'Mon rôle', en: 'My role' },
        items: [
          {
            fr: "J'ai défini le produit, les besoins et les priorités, testé chaque version sur mon iPhone et fait les choix de design. L'IA a écrit l'essentiel du code.",
            en: 'I defined the product, the needs and the priorities, tested every version on my iPhone and made the design choices. The AI wrote most of the code.',
          },
          {
            fr: "C'est un projet de conception produit et de pilotage d'IA, pas du code écrit entièrement à la main.",
            en: 'This is a product design and AI direction project, not code written entirely by hand.',
          },
        ],
      },
      {
        title: { fr: 'Le problème', en: 'The problem' },
        items: [
          {
            fr: "Les recettes trouvées sur les réseaux sociaux se perdent dans les favoris, sans liste d'ingrédients claire ni valeurs nutritionnelles.",
            en: 'Recipes found on social media get lost in bookmarks, with no clear ingredient list and no nutrition facts.',
          },
        ],
      },
      {
        title: { fr: 'Fonctionnalités', en: 'Features' },
        items: [
          {
            fr: 'Import par la feuille de partage iOS : la vidéo est téléchargée, la voix transcrite, des images extraites, puis la recette rédigée (titre, ingrédients, étapes, temps, portions).',
            en: 'Import through the iOS share sheet: the video is downloaded, the voice transcribed, frames extracted, then the recipe written (title, ingredients, steps, time, servings).',
          },
          {
            fr: "File d'attente : plusieurs liens à la suite, traités un par un, même ajoutés hors ligne.",
            en: 'Queue: several links in a row, processed one by one, even when added offline.',
          },
          {
            fr: 'Nutrition par portion, pour 100 g et pour la recette entière, avec des repères sportifs comme les protéines pour 100 kcal.',
            en: 'Nutrition per serving, per 100 g and for the whole recipe, with training-oriented indicators such as protein per 100 kcal.',
          },
          {
            fr: "Scanner de code-barres : en magasin, l'étiquette réelle du produit remplace l'estimation.",
            en: "Barcode scanner: in the shop, the product's actual label replaces the estimate.",
          },
          {
            fr: 'Liste de courses regroupée entre recettes, avec prix estimés, utilisable entièrement hors ligne.',
            en: 'Shopping list merged across recipes, with estimated prices, fully usable offline.',
          },
          {
            fr: "Mode cuisine plein écran, étape par étape, et lien avec l'app Santé par un Raccourci iOS.",
            en: 'Full-screen, step-by-step cooking mode, and a link to the Health app through an iOS Shortcut.',
          },
        ],
      },
      {
        title: { fr: 'Choix techniques', en: 'Technical choices' },
        items: [
          {
            fr: 'Backend Python avec FastAPI et SQLite ; transcription locale et gratuite avec faster-whisper.',
            en: 'Python back end with FastAPI and SQLite; free, local transcription with faster-whisper.',
          },
          {
            fr: "Le modèle d'IA dépend de la tâche : le plus précis pour l'extraction et la nutrition, des modèles plus légers pour le rangement, les prix et les questions.",
            en: 'The AI model depends on the task: the most accurate one for extraction and nutrition, lighter models for sorting, prices and questions.',
          },
          {
            fr: "L'IA estime les ingrédients, mais les totaux, les portions et les pourcentages sont calculés par le code de façon déterministe, puis mis en cache.",
            en: 'The AI estimates the ingredients, but totals, servings and percentages are computed deterministically by the code, then cached.',
          },
          {
            fr: "Application web installable, sans framework, avec service worker et copie locale des données pour l'usage hors ligne.",
            en: 'Installable web app with no framework, using a service worker and a local copy of the data for offline use.',
          },
          {
            fr: "Le serveur tourne sur mon Mac ; l'appli n'est joignable en HTTPS que par mes appareils, via un réseau privé Tailscale.",
            en: 'The server runs on my Mac; the app is reachable over HTTPS only from my own devices, through a private Tailscale network.',
          },
        ],
      },
      {
        title: { fr: 'Limites assumées', en: 'Known limits' },
        items: [
          {
            fr: 'Les valeurs nutritionnelles sont des estimations, avec un indice de fiabilité affiché.',
            en: 'Nutrition values are estimates, shown with a reliability indicator.',
          },
          {
            fr: "L'appli dépend du Mac allumé.",
            en: 'The app depends on the Mac being switched on.',
          },
        ],
      },
      {
        title: { fr: 'Ce que le projet montre', en: 'What the project shows' },
        items: [
          {
            fr: "Partir d'un vrai besoin personnel et en faire un produit utilisé au quotidien.",
            en: 'Starting from a real personal need and turning it into a product used every day.',
          },
          {
            fr: 'Itérer vite à partir de tests réels : 37 versions en deux semaines environ.',
            en: 'Iterating fast from real-world tests: 37 versions in about two weeks.',
          },
          {
            fr: "Arbitrer coût, fiabilité et simplicité : aucun coût d'hébergement ni d'API, hors ligne d'abord.",
            en: 'Balancing cost, reliability and simplicity: no hosting or API costs, offline first.',
          },
        ],
      },
    ],
    links: [
      {
        label: { fr: 'Code sur GitHub', en: 'Code on GitHub' },
        href: 'https://github.com/TheoCelebi/projet_recette_insta_tiktok',
      },
    ],
  },

  {
    slug: 'bot-piscine',
    title: { fr: 'Bot de réservation piscine', en: 'Pool booking bot' },
    kind: { fr: 'Projet personnel', en: 'Personal project' },
    period: { fr: 'Depuis octobre 2026 · en production', en: 'Since October 2026 · in production' },
    tagline: {
      fr: "Un bot qui réserve mes séances d'aquasport à la seconde où les places ouvrent.",
      en: 'A bot that books my aqua fitness sessions the second the slots open.',
    },
    summary: {
      fr: "Les places ouvrent 48 heures avant chaque séance, à heure fixe, et partent en quelques heures. Le bot appelle directement l'API de la plateforme de réservation, tourne sur GitHub Actions et me prévient par notification.",
      en: "Slots open 48 hours before each session, at a fixed time, and are gone within hours. The bot calls the booking platform's API directly, runs on GitHub Actions and notifies me.",
    },
    role: { fr: 'Conception et développement, seul', en: 'Design and development, solo' },
    stack: ['Python', 'requests', 'PyYAML', 'GitHub Actions', 'cron-job.org', 'ntfy', 'gitleaks', 'Dependabot'],
    facts: [
      {
        value: { fr: '0,01 s', en: '0.01 s' },
        label: { fr: "après l'ouverture, mesuré en test", en: 'after opening, measured in a test' },
      },
      { value: '60+', label: { fr: 'exécutions automatiques réussies', en: 'successful automated runs' } },
      { value: '~700', label: { fr: 'lignes de Python, 5 modules', en: 'lines of Python, 5 modules' } },
    ],
    sections: [
      {
        title: { fr: 'Démarche', en: 'Approach' },
        items: [
          {
            fr: "Rétro-ingénierie de l'API : plutôt que d'automatiser des clics dans un navigateur, j'ai analysé le JavaScript public de l'application et ses requêtes réseau pour retrouver l'API REST. Le bot fait directement les mêmes appels HTTP.",
            en: "Reverse engineering the API: rather than automating clicks in a browser, I analysed the app's public JavaScript and its network requests to work out the REST API. The bot makes the same HTTP calls directly.",
          },
          {
            fr: 'Moteur de règles en YAML plutôt que des dates fixes, car le planning change souvent : activité, salle, jours, heure exacte ou plage horaire.',
            en: 'A YAML rule engine rather than fixed dates, because the schedule changes often: activity, room, days, exact time or time range.',
          },
          {
            fr: "Réservation à la seconde : le bot calcule l'heure d'ouverture, se reconnecte une minute avant, puis réessaie chaque seconde.",
            en: 'Booking to the second: the bot computes the opening time, reconnects a minute before, then retries every second.',
          },
          {
            fr: "Mémoire persistante : si une réservation disparaît de mon compte, le bot en déduit que je l'ai annulée et ne la reprend jamais.",
            en: 'Persistent memory: if a booking disappears from my account, the bot infers that I cancelled it and never books it again.',
          },
          {
            fr: 'Séances complètes surveillées pour récupérer une place libérée par un désistement.',
            en: 'Full sessions are watched so a slot freed by a cancellation can be picked up.',
          },
          {
            fr: 'Menu de gestion dans le terminal pour voir, ajouter et supprimer des règles.',
            en: 'A terminal menu to view, add and delete rules.',
          },
        ],
      },
      {
        title: { fr: 'Infrastructure', en: 'Infrastructure' },
        items: [
          {
            fr: "GitHub Actions : le bot démarre, réserve, puis s'arrête. Aucun serveur à maintenir.",
            en: 'GitHub Actions: the bot starts, books, then stops. No server to maintain.',
          },
          {
            fr: "Incident en production : les tâches planifiées de GitHub partaient avec des heures de retard et des séances ont été ratées. J'ai posé le diagnostic à partir des journaux, puis fait déclencher le bot par un service externe via l'API GitHub, le cron GitHub restant en secours.",
            en: "Production incident: GitHub's scheduled jobs were starting hours late and sessions were missed. I diagnosed it from the run logs, then had an external service trigger the bot through the GitHub API, keeping GitHub's cron as a fallback.",
          },
          {
            fr: 'Notifications push avec ntfy, différées au matin quand la réservation a lieu la nuit.',
            en: 'Push notifications with ntfy, deferred to the morning when the booking happens at night.',
          },
        ],
      },
      {
        title: { fr: "Sécurité d'un dépôt public", en: 'Securing a public repository' },
        items: [
          {
            fr: 'Identifiants jamais dans le code : fichier .env local ignoré par git, GitHub Secrets en production.',
            en: 'Credentials never in the code: a local .env file ignored by git, GitHub Secrets in production.',
          },
          {
            fr: 'Scan de secrets gitleaks à chaque push, blocage des push contenant un secret, Dependabot.',
            en: 'gitleaks secret scan on every push, push protection against leaked secrets, Dependabot.',
          },
          {
            fr: 'Permissions minimales pour GitHub Actions et actions figées sur un SHA de commit.',
            en: 'Minimal permissions for GitHub Actions, and actions pinned to a commit SHA.',
          },
          {
            fr: 'Les journaux étant publics, le bot masque le détail des séances, et mes règles sont stockées en secret.',
            en: 'Because the logs are public, the bot hides session details, and my rules are stored as a secret.',
          },
        ],
      },
      {
        title: { fr: 'Tests et méthode', en: 'Tests and method' },
        items: [
          {
            fr: 'Tests sans réseau avec une fausse API : réservation, annulation détectée, désistement récupéré, mémoire relue après redémarrage.',
            en: 'Offline tests with a fake API: booking, detected cancellation, recovered slot, memory reloaded after a restart.',
          },
          {
            fr: 'Vérifications en lecture seule sur mon compte, et confirmation explicite avant toute réservation réelle.',
            en: 'Read-only checks on my account, and explicit confirmation before any real booking.',
          },
          {
            fr: 'Conçu et développé seul, avec un assistant IA de programmation.',
            en: 'Designed and built on my own, with an AI coding assistant.',
          },
        ],
      },
    ],
    links: [
      {
        label: { fr: 'Code sur GitHub', en: 'Code on GitHub' },
        href: 'https://github.com/TheoCelebi/projet_piscine_auto',
      },
    ],
  },

  {
    slug: 'serveur-https-c',
    title: { fr: 'Serveur HTTPS en C', en: 'HTTPS server in C' },
    kind: { fr: 'Projet pédagogique · réalisé seul', en: 'School project · built solo' },
    period: { fr: 'Octobre – novembre 2025', en: 'October – November 2025' },
    tagline: {
      fr: 'Un serveur web HTTP et HTTPS écrit en C, à partir des sockets.',
      en: 'An HTTP and HTTPS web server written in C, starting from sockets.',
    },
    summary: {
      fr: 'Projet du cours de programmation système et réseau : écouter sur un port, lire et valider les requêtes HTTP, servir des fichiers et chiffrer la connexion avec TLS, sans bibliothèque web.',
      en: 'Project for the systems and network programming course: listening on a port, reading and validating HTTP requests, serving files and encrypting the connection with TLS, without any web library.',
    },
    role: { fr: 'Réalisé seul', en: 'Built solo' },
    stack: ['C', { fr: 'Sockets POSIX', en: 'POSIX sockets' }, 'OpenSSL', 'Makefile', 'Linux'],
    facts: [
      { value: '~640', label: { fr: 'lignes de C', en: 'lines of C' } },
      { value: 'TLS', label: { fr: 'chiffrement avec OpenSSL', en: 'encryption with OpenSSL' } },
      { value: '1', label: { fr: 'processus par client', en: 'process per client' } },
    ],
    sections: [
      {
        title: { fr: 'Ce que fait le serveur', en: 'What the server does' },
        items: [
          {
            fr: 'Sockets TCP et un processus par client, créé avec fork.',
            en: 'TCP sockets and one process per client, created with fork.',
          },
          {
            fr: "Validation stricte des requêtes HTTP/1.0 : méthodes GET, HEAD et POST, réponses d'erreur 400, 404, 405 et 505.",
            en: 'Strict validation of HTTP/1.0 requests: GET, HEAD and POST methods, with 400, 404, 405 and 505 error responses.',
          },
          {
            fr: "Service de fichiers statiques, avec plusieurs sites configurables : emplacement, dossier racine et page d'index.",
            en: 'Static file serving, with several configurable sites: location, root folder and index page.',
          },
          {
            fr: "Mode sécurisé : connexion chiffrée en TLS avec OpenSSL, à partir d'un certificat et d'une clé privée.",
            en: 'Secure mode: TLS-encrypted connection with OpenSSL, using a certificate and a private key.',
          },
          {
            fr: 'Fichier de configuration, options en ligne de commande (port, fichier journal, mode debug, TLS) et journalisation.',
            en: 'Configuration file, command-line options (port, log file, debug mode, TLS) and logging.',
          },
          {
            fr: "Compilation par Makefile et script d'installation.",
            en: 'Build through a Makefile, plus an install script.',
          },
        ],
      },
      {
        title: { fr: 'Ce que le projet montre', en: 'What the project shows' },
        items: [
          {
            fr: 'Comprendre ce que font HTTP et TLS sous un framework web.',
            en: 'Understanding what HTTP and TLS do underneath a web framework.',
          },
          {
            fr: 'Programmer au niveau système sous Linux : sockets, processus, signaux et gestion de la mémoire.',
            en: 'Programming at system level on Linux: sockets, processes, signals and memory management.',
          },
        ],
      },
    ],
    links: [],
    repoNote: { fr: 'Dépôt privé', en: 'Private repository' },
  },

  {
    slug: 'bras-pick-and-place',
    wip: true,
    title: { fr: 'Bras pick and place', en: 'Pick-and-place arm' },
    kind: { fr: 'Projet pédagogique · équipe de 3', en: 'School project · team of 3' },
    period: { fr: 'Depuis octobre 2026', en: 'Since October 2026' },
    tagline: {
      fr: 'Un bras manipulateur qui saisit des objets sur un convoyeur et les dépose dans une caisse.',
      en: 'A robotic arm that picks objects off a conveyor and drops them into a crate.',
    },
    summary: {
      fr: "Projet de robotique sur deux semestres : étude et simulation d'abord, prototype réel ensuite. La synchronisation entre la pince et le passage de l'objet se fait par programmation, pas par un mécanisme câblé.",
      en: 'A two-semester robotics project: study and simulation first, a real prototype next. The gripper is synchronised with the passing object in software, not through a wired mechanism.',
    },
    role: {
      fr: 'Rôle C : logiciel, communication et intégration',
      en: 'Role C: software, communication and integration',
    },
    team: {
      fr: 'Alexandre : mécanique et cinématique. Benjamin : capteurs et électronique.',
      en: 'Alexandre: mechanics and kinematics. Benjamin: sensors and electronics.',
    },
    stack: ['Python', 'Raspberry Pi', { fr: 'ROS 2 (prévu)', en: 'ROS 2 (planned)' }, 'Git'],
    facts: [
      { value: '3', label: { fr: "personnes dans l'équipe", en: 'people on the team' } },
      { value: '2', label: { fr: 'semestres', en: 'semesters' } },
      { value: 'S1', label: { fr: 'étude et simulation, en cours', en: 'study and simulation, in progress' } },
    ],
    sections: [
      {
        title: { fr: 'Le scénario', en: 'The scenario' },
        items: [
          {
            fr: 'Un objet avance sur le convoyeur, et un capteur détecte son arrivée dans la zone de prise.',
            en: 'An object moves along the conveyor, and a sensor detects it entering the pick-up zone.',
          },
          {
            fr: "Le programme calcule l'instant de fermeture de la pince et commande le bras.",
            en: 'The program computes when to close the gripper and drives the arm.',
          },
          {
            fr: "La pince saisit l'objet, le bras pivote vers la caisse, dépose l'objet et revient en position d'attente.",
            en: 'The gripper grabs the object, the arm swings to the crate, drops it and returns to its waiting position.',
          },
        ],
      },
      {
        title: { fr: 'Mon périmètre', en: 'My scope' },
        note: {
          fr: "Ce dont je suis responsable dans l'équipe.",
          en: 'What I am responsible for within the team.',
        },
        items: [
          {
            fr: "Architecture du code et dépôt Git de l'équipe.",
            en: "Code architecture and the team's Git repository.",
          },
          {
            fr: "Synchronisation : calcul de l'instant de prise à partir de la détection de l'objet et de la vitesse du convoyeur.",
            en: "Synchronisation: computing the grab time from the object's detection and the conveyor speed.",
          },
          {
            fr: "Commande à distance en Bluetooth et autorisation de l'opérateur par badge RFID.",
            en: 'Bluetooth remote control and operator authorisation by RFID badge.',
          },
          {
            fr: "Supervision : machine à états du cycle, journal et compteur d'objets.",
            en: 'Supervision: state machine for the cycle, log and object counter.',
          },
        ],
        code: 't_prise = t0 + d / v − t_pince',
      },
      {
        title: { fr: 'Où en est le projet', en: 'Where the project stands' },
        items: [
          {
            fr: 'Cahier des charges rédigé en octobre 2026.',
            en: 'Specification written in October 2026.',
          },
          {
            fr: 'Semestre 1 : étude et simulation, en cours.',
            en: 'Semester 1: study and simulation, in progress.',
          },
          {
            fr: 'Semestre 2 : prototype réel avec ROS 2. Cette partie est prévue, pas encore réalisée.',
            en: 'Semester 2: real prototype with ROS 2. This part is planned, not built yet.',
          },
        ],
      },
    ],
    links: [],
  },
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
