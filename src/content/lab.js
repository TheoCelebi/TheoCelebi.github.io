/**
 * Bloc « Labo » : travaux de cours plus courts, sans dépôt public.
 */

const coursework = { fr: 'TP de cours', en: 'Coursework' };

export const lab = [
  {
    id: 'algorithmes-ia',
    title: { fr: "Algorithmes d'IA", en: 'AI search algorithms' },
    kind: coursework,
    text: {
      fr: 'Recherche de chemin dans un labyrinthe : DFS, BFS, UCS, Greedy et A*, avec comparaison des heuristiques.',
      en: 'Pathfinding in a maze: DFS, BFS, UCS, Greedy and A*, with a comparison of heuristics.',
    },
    tags: ['Python', 'Jupyter'],
  },
  {
    id: 'theorie-des-graphes',
    title: { fr: 'Théorie des graphes', en: 'Graph theory' },
    kind: coursework,
    text: {
      fr: "Composantes connexes d'un graphe, et résolution d'un labyrinthe par parcours en largeur sur une matrice d'adjacence.",
      en: 'Connected components of a graph, and solving a maze with breadth-first search over an adjacency matrix.',
    },
    tags: ['C++'],
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse engineering',
    kind: coursework,
    text: {
      fr: "Analyse de binaires Linux x86-64 de type crackme, en assembleur, avec radare2. Tous les crackmes du cours résolus, avec une aide ponctuelle de l'enseignant.",
      en: 'Analysis of Linux x86-64 crackme binaries in assembly, with radare2. All the course crackmes solved, with occasional help from the teacher.',
    },
    tags: [{ fr: 'Assembleur x86-64', en: 'x86-64 assembly' }, 'radare2', 'Linux'],
  },
];
