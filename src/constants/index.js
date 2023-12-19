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
  acla1,
  acla2,
  acla3,
  acla4,
  acla5,
  acla6,
  acla7,
  acla8,
  logo1,
  logo2,
  logo3,
  logo4,
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
  design10,
  design11,
  design12,
  autre1,
  autre2,
  autre3,
  autre4,
  autre5,
  autre6,
  autre7,
} from '../assets';

export const navLinks = [
  {
    id: 'apropos',
    title: 'A propos',
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
    image: web,
    repo: 'https://blueecho.netlify.app/profil',
  },
  {
    id: 'project-2',
    name: 'Acla Odyssey',
    descriptionRapide: 'Découvrez ma polyvalence au travers des jeux vidéo et des assets que j’ai réalisé',
    description: `Acla Odyssey est un jeu de plateforme 2D réalisé au cours du module de jeu vidéo 4. Étalé sur 15 semaines, mon rôle consistait à développer tous les éléments visuels nécessaires pour le jeu. Travaillant en équipe avec deux développeurs back-end, Thomas Brunet et Michaël Malard, ainsi qu'un développeur front-end, nous avions la responsabilité de concevoir un thème et un monde imaginaire où un personnage évoluerait de niveau en niveau.\n\n Ce projet m'a permis de développer ma persévérance, me poussant à pousser mes réflexions et mon travail au-delà de mes limites grâce à un processus constant de retravail des éléments. Du cinémahine aux animations 2D, de la musique d'ambiance à la parallaxe, rien n'a été laissé au hasard. Le jeu mêle un style fantastique, plongeant le personnage au cœur de la nature pour éradiquer les ennemis du pays d'Acla Odyssey.\n\nJ'ai utilisé divers logiciels tels que Unity, Adobe Animate, Bandlab, Adobe Photoshop, ainsi que des outils comme Shader Graph et Procreate lors de la conception d'Acla Odyssey. Ces outils ont été extrêmement utiles pour concrétiser ma vision artistique et contribuer au succès du projet.`,
    competences: [
      {
        competence: "Travailler en collaboration",
      },
      {
        competence: "Développement de jeu vidéo",
      },
      {
        competence: "Création d'assets",
      },
      {
        competence: "Respecter un échéancier",
      },
      {
        competence: "Concevoir et planifier un jeu vidéo",
      },
      {
        competence: "Persévérance et savoir recevoir la critique",
      },
    ],  
    pic: [
      {
        name: 'acla1',
        url: acla1,
      },
      {
        name: 'acla2',
        url: acla2,
      },
      {
        name: 'acla3',
        url: acla3,
      },
      {
        name: 'acla4',
        url: acla4,
      },
      {
        name: 'acla5',
        url: acla5,
      },
      {
        name: 'acla6',
        url: acla6,
      },
      {
        name: 'acla7',
        url: acla7,
      },
      {
        name: 'acla8',
        url: acla8,
      },
    ],  
    image: jeu,
    repo: 'https://jtremblay.tim-cstj.ca/jeu4/2023/promo/j1/',
  },
  {
    id: 'project-3',
    name: 'Logos',
    descriptionRapide: 'Plusieurs cordes à mon arc, découvrez mes réalisations de logos',
    description: `Durant mes études, j'ai pu faire l'acquisition de diverses capacité. Parmi celles-ci, la création de logo est l'une des plus stimulantes. J'ai eu l'occasion de créer plusieurs logos pour divers projets, dont certains sont présentés ci-dessous.\n\nJ'ai utilisé divers logiciels tels que Adobe Illustrator, Adobe Photoshop, Adobe XD et Adobe After Effects, Adobe Premiere Pro pour des projets d'animation de logos. Ces outils ont été extrêmement utiles pour concrétiser ma vision artistique. Je prône dans mon processus de création l'importance de la simplicité, de la créativité, la recherche d'inspiration, la compréhension du concept du projet et bien sûr, l'importance de savoir retravailler un concept jusqu'à ce qu'il soit le mieux exécuté possible.`,
    competences: [
      {
        competence: "Création de logo",
      },
      {
        competence: "Compréhension de la demande d'un client",
      },
      {
        competence: "Professionnalisme dans la présentation des assets",
      },
      {
        competence: "Créativité",
      },
      {
        competence: "Adaptabilité",
      },
    ],  
    pic: [
      {
        name: 'logo1',
        url: logo1,
      },
      {
        name: 'logo2',
        url: logo2,
      },
      {
        name: 'logo3',
        url: Blue6,
      },
      {
        name: 'logo4',
        url: logo3,
      },
      {
        name: 'logo5',
        url: logo4,
      },
    ],  
    image: video,
    repo: 'https://vimeo.com/896299536?share=copy',
  },
  {
    id: 'project-4',
    name: 'Design UI/UX',
    descriptionRapide: `Le design UI/UX, un domaine où ma créativié s'exprime et est mise à l'épreuve.`,
    description: `Le design est un domaine que j'ai exploré avec passion, nourrissant ma créativité tout au long de mes études en multimédia axé sur l'aspect artistique. En découvrant les coulisses du développement, j'ai réussi à fusionner ces deux domaines complémentaires, créant ainsi des designs réfléchis, efficaces sur le plan utilisateur et esthétiques.Mon approche du design 3.0 se caractérise par l'ajout de superpositions pour instiller un dynamisme distinct à mes sites web. Cependant, je suis également fasciné par le côté épuré et simpliste qui, bien souvent, fait toute la différence sur le web.
    J'ai utilisé divers logiciels tels que Adobe Illustrator, Adobe Photoshop et Adobe XD pour donner vie à mes idées créatives. Dans mes créations, j'accorde une attention particulière à des aspects cruciaux tels que le parcours client, la recherche d'inspiration, les demandes du client et le schéma d'interactivité. Cette approche réfléchie vise à rendre l'expérience utilisateur non seulement agréable visuellement, mais également fluide et intuitive. L'expérience acquise m'a permis de développer des compétences dans la réflexion stratégique nécessaire à un design de qualité, tout en m'adaptant aux besoins spécifiques de chaque projet. Mon objectif est de créer des designs qui captivent, engagent et offrent une expérience mémorable aux utilisateurs.`,
    image: design,
    competences: [
      {
        competence: "Design d'interface",
      },
      {
        competence: "Conception multiplateforme (responsive design)",
      },
      {
        competence: "Compréhension de la demande d'un client",
      },
      {
        competence: "Stratégie de développement",
      },
      {
        competence: "Adaptabilité",
      },
      {
        competence: "Expérience utilisateur	",
      },
    ],  
    pic: [
      {
        name: 'design1',
        url: design1,
      },
      {
        name: 'design2',
        url: design2,
      },
      {
        name: 'design3',
        url: design3,
      },
      {
        name: 'design4',
        url: design4,
      },
      {
        name: 'design5',
        url: design5,
      },
      {
        name: 'design6',
        url: design6,
      },
      {
        name: 'design7',
        url: design7,
      },
      {
        name: 'design8',
        url: design8,
      },
      {
        name: 'design9',
        url: design9,
      },
      {
        name: 'design10',
        url: design10,
      },
      {
        name: 'design11',
        url: design11,
      },
      {
        name: 'design12',
        url: design12,
      },
    ],  
  },
  {
    id: 'project-5',
    name: 'Autres',
    descriptionRapide:
      "Voyez l'étendue de ma polyvalence au travers divers autres projets et réalisations",
    description: `Mes études en Techniques d'intégration multimédia m'ont permis d'acquérir toutes sortes de compétences au travers divers projets. J'ai eu l'occasion de travailler sur du 3D, du 2D, de l'animation, du montage vidéo, du traitement sonore, de la conception de jeu, de la réalité virtuelle, de l'infographie, etc. Jetez un coup d'oeil à quelques-uns de mes projets!`,
    image: troisD,
    competences: [
      {
        competence: "Polyvalence",
      },
      {
        competence: "Montage vidéo | traitement sonore | conception de bande sonore | effects vidéos",
      },
      {
        competence: "Compréhension de la demande d'un client",
      },
      {
        competence: "Stratégie de développement",
      },
      {
        competence: "Adaptabilité",
      },
      {
        competence: "Expérience utilisateur	",
      },
    ],  
    pic: [
      {
        name: 'autre1',
        url: autre1,
      },
      {
        name: 'autre2',
        url: autre2,
      },
      {
        name: 'autre3',
        url: autre3,
      },
      {
        name: 'autre4',
        url: autre4,
      },
      {
        name: 'autre5',
        url: autre5,
      },
      {
        name: 'autre6',
        url: autre6,
      },
      {
        name: 'autre7',
        url: autre7,
      }
    ],  
    repo: 'https://vimeo.com/user208908974',
  },
];

export { services, technologies, experiences, projects };
