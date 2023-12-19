import {
  frontend,
  backend,
  ux,
  prototyping,
  css,
  git,
  html,
  javascript,
  tailwind,
  react,
  sass,
  aftereffects,
  ai,
  unity,
  vue,
  xd,
  troisD,
  jeu,
  video,
  design,
  vector,
  multi,
  collaboration,
  smiley,
  brain,
  respect,
  web,
  blue1,
  Blue2,
  Blue3,
  Blue4,
  Blue5,
  Blue6,
  Blue7,
  Blue8,
} from '../assets';

export const navLinks = [
  {
    id: 'apropos',
    title: 'À propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Développeur Front-End',
    icon: frontend,
  },
  {
    title: 'Création de logo',
    icon: vector,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: "Réalisation d'assets",
    icon: backend,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Vue JS',
    icon: vue,
  },
  {
    name: 'React JS',
    icon: react,
  },
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'SCSS',
    icon: sass,
  },
  {
    name: 'After Effects',
    icon: aftereffects,
  },
  {
    name: 'illustrator',
    icon: ai,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Adobe XD',
    icon: xd,
  },
];

const experiences = [
  {
    title: "Travailler en collaboration",
    company_name: 'Travailler ensemble pour mieux evoluer',
    icon: collaboration,
    iconBg: '#333333',
  },
  {
    title: 'Conception de maquettes',
    company_name: 'UI et UX Design',
    icon: ux,
    iconBg: '#333333',
  },
  {
    title: 'Esprit critique',
    company_name: 'Perfectibilite et remise en question',
    icon: brain,
    iconBg: '#333333',
  },
  {
    title: 'Respect & Ouverture',
    company_name: 'Savoire vivre ensemble',
    icon: respect,
    iconBg: '#333333',
  },
  {
    title: 'Sourire et positivité',
    company_name: 'Apprendre interagir et travailler avec le sourire pour une meilleure experience',
    icon: smiley,
    iconBg: '#333333',
  },
  {
    title: 'Polyvalence',
    company_name: 'Web Jeu Assets Logos Montage Effets videos et plus encore',
    icon: multi,
    iconBg: '#333333',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'BlueEcho',
    date: '2023',
    descriptionRapide: 'Découvrez BlueEcho, un projet web React JSX et Tailwind.',
    description: `BlueEcho est un projet de développement web centré sur une application de musique. Réalisé en collaboration avec deux développeurs back-end (Camilien Provencher & Zachary Chandonnet) et moi-même en tant que développeur front-end, BlueEcho a été développé en React et utilise principalement Tailwind et CSS pour le style. Il intègre également l'API Deezer ainsi qu'une base de données Firebase pour ses aspects techniques.\n\nL'application offre la possibilité d'écouter des extraits de chansons, de créer des listes de lecture, de découvrir vos artistes et albums favoris, en plus d'ajouter des amis et de suivre en temps réel leurs activités musicales. BlueEcho a été développé dans le cadre d'un projet scolaire.\n\nLe design, le développement front-end et la création des logos ont été assurés par mes soins. J'ai opté pour un style sombre, marqué par un contraste vibrant de bleu, rose et mauve. Ce design moderne, animé, conjugue simplicité, efficacité et expérience utilisateur.`,
    competences: [
      {
        competence: "Travailler en collaboration",
      },
      {
        competence: "Développement web",
      },
      {
        competence: "React.js et Tailwind CSS",
      },
      {
        competence: "Respecter un échéancier",
      },
      {
        competence: "Designer une application web (UI/UX)",
      },
      {
        competence: "Travailler sous pression",
      },
    ],  
    pic: [
      {
        name: 'blue1',
        url: blue1,
      },
      {
        name: 'blue2',
        url: Blue2,
      },
      {
        name: 'blue3',
        url: Blue3,
      },
      {
        name: 'blue4',
        url: Blue4,
      },
      {
        name: 'blue5',
        url: Blue5,
      },
      {
        name: 'blue6',
        url: Blue6,
      },
      {
        name: 'blue7',
        url: Blue7,
      },
      {
        name: 'blue8',
        url: Blue8,
      },
    ],  
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: web,
    repo: 'https://blueecho.netlify.app/profil',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Jeu vidéo',
    description:
      'Découvrez ma polyvalence au travers des jeux vidéo et des assets que j’ai réalisé.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jeu,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Vidéo',
    description: 'Des effets vidéos, du montage et du tournage.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: video,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Design',
    description: `Le design UI/UX, un domaine où ma créativié s'exprime et est mise à l'épreuve.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: design,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Autres',
    description:
      "Voyez l'étendue de ma polyvalence au travers divers autres projets et réalisations",
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: troisD,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
