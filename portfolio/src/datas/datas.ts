export const technicalskills = [
  { id: 1, name: "HtML" },
  { id: 2, name: "Css" },
  { id: 3, name: "Javascript" },
  { id: 4, name: "typescript" },
  { id: 5, name: "Python" },
  { id: 6, name: "React" },
  { id: 7, name: "Next.js" },
  { id: 8, name: "tailwindCss" },
  { id: 9, name: "sass" },
  { id: 10, name: "NeutralinoJs" },
  { id: 11, name: "Node.js" },
  { id: 12, name: "Express" },
  { id: 13, name: "MysQL" },
  { id: 14, name: "PostgresQL" },
  { id: 15, name: "Prisma" },
  { id: 16, name: "docker" },
  { id: 17, name: "Figma" },
  { id: 18, name: "Git/GitHub" },
];

export const projects = [
  {
    id: 1,
    image: "../../../../assets/images/bionbe/accueil.png",
    title: "Bionbe",
    subtitle: "Projet de stage",
  },
  {
    id: 2,
    image: "",
    title: "Aelys",
    subtitle: "Projet de stage",
  },
  {
    id: 3,
    image: "",
    title: "Bijoux de soins",
    subtitle: "Projet autonome",
  },
  {
    id: 4,
    image: "",
    title: "Externatic",
    subtitle: "Projet de Formation en Groupe",
  },
  {
    id: 5,
    image: "",
    title: "Ecotripr",
    subtitle: "Projet de Formation en Groupe",
  },
  {
    id: 6,
    image: "",
    title: "FleetGo",
    subtitle: "Projet de Formation en Groupe",
  },
  {
    id: 7,
    image: "",
    title: "WildFit",
    subtitle: "Projet de Formation en Groupe",
  },
  {
    id: 8,
    image: "",
    title: "Wild Code school Biarritz Website",
    subtitle: "Projet de Formation en Groupe",
  },
];

//modifier les descriptions des projets 5, 6, 7 et 8 et rajouter Pets Compagnie
export const Projectdetails = [
  {
    id: 1,
    title: "Bionbe",
    subtitle: "Projet de stage",
    description:
      "Ce projet à été réalisé durant de mon stage chez Pic digital en collaboration avec mon tuteur. C'est un projet que j'ai démarré de zéro. Je devais améliorer la modale de recherche pour le site Bionbe afin que les utilisateurs puissent filtrer leurs recherches facilement et ainsi trouver des activités, des évènements, des clubs et des personnes autour d'eux.",
    technologiestitle: "Les technologies utilisées",
    technologies: ["Vite", "typescript", "sass"],
    image: "../../../assets/images/bionbe/accueil.png",
    imageGallery: [
      "../../../assets/images/bionbe/accueil.png",
      "../../../assets/images/bionbe/mobile_accueil.png",
      "../../../assets/images/bionbe/mobile1.png",
      "../../../assets/images/bionbe/recherche.png",
      "../../../assets/images/bionbe/tablette.png",
    ],
  },
  {
    id: 2,
    title: "Aelys",
    subtitle: "Projet de stage",
    description:
      "Ce projet à été réalisé au cour de mon stage chez Pic digital en collaboration avec mon tuteur. C'est un projet que j'ai démarré de zéro. Je devais améliorer l'interface et l'utilisation du site pour les employés du magasin Aelys afin qu'ils puissent gérer leuurs commandes facilement. Pour cela j'ai utilisé NeutralinoJs qui m'a permi de concevoir un application bureau compatible avec toute les plateformes, ainsi que React et son framework Vite",
    technologiestitle: "Les technologies utilisées",
    technologies: ["Vite", "typescript", "sass"],
    image: "../../../assets/images/aelys/accueil.png",
    imageGallery: [
      "../../../assets/images/aelys/accueil.png",
      "../../../assets/images/aelys/aelys.png",
      "../../../assets/images/aelys/settings.png",
    ],
  },
  {
    id: 3,
    title: "Bijoux de soins",
    subtitle: "Projet en Autonomie",
    description:
      "J'ai réalisé ce projet à au cour de ma formation et de mon stage de la conception de la maquette, en passant par la modélisation de la base de donnée jusqu'au développement des fonctionnalités. il a été nécessaire pour moi afin de reprendre toutes les compétences vu pendant mes précédentes expériences et pratiquer seule. C'est un projet Fullstack que j'ai présenté lors de mon passage du titre de développeur web et web mobile. il est encoore en cours de construction et reste des fonctionnalités à implémenter telle que la prise de rendez vous. Je suis fière du travaille accomplis jusqu'ici et compte bien continuer à améliorer ce site.",
    technologiestitle: "Les technologies utilisées",
    technologies: [
      "NextJs",
      "typescript",
      "tailwind",
      "Node.js",
      "PostresQL",
      "Express",
      "Prisma",
      "docker",
    ],
    image: "../../../assets/images/bijoux_desoins/accueil.png",
    imageGallery: [
      "../../../assets/images/bijoux_desoins/accueil.png",
      "../../../assets/images/bijoux_desoins/connexion.png",
      "../../../assets/images/bijoux_desoins/dashboard.png",
      "../../../assets/images/bijoux_desoins/home.png",
      "../../../assets/images/bijoux_desoins/inscription.png",
      "../../../assets/images/bijoux_desoins/prestations.png",
      "../../../assets/images/bijoux_desoins/products.png",
      "../../../assets/images/bijoux_desoins/soins.png",
      "../../../assets/images/bijoux_desoins/tarifs.png",
      "../../../assets/images/bijoux_desoins/mobile_contact1.png",
      "../../../assets/images/bijoux_desoins/mobile_contact.png",
      "../../../assets/images/bijoux_desoins/mobile_home.png",
      "../../../assets/images/bijoux_desoins/mobile_contact1.png",
      "../../../assets/images/bijoux_desoins/mobile_footer.png",
      "../../../assets/images/bijoux_desoins/mobile_prestations.png",
      "../../../assets/images/bijoux_desoins/mobile_products.png",
      "../../../assets/images/bijoux_desoins/mobile_tarifs.png",
      "../../../assets/images/bijoux_desoins/mobile.png",
    ],
  },

  {
    id: 4,
    title: "Externatic",
    subtitle: "Projet de Formartion en Groupe",
    description:
      "Ce projet à été réalisé au cour de ma formation en groupe de trois sur une durée de 8 semaines. Le but était de mettre en pratique nos connaissances nouvellement asquises. Nous devions construire un site Fullstack. Cela nous à permit d'appréhender de nouvelles technologies telles que Prisma et typescript",
    technologiestitle: "Les technologies utilisées",
    technologies: [
      "NextJs",
      "typescript",
      "tailwind",
      "Node.js",
      "PostresQL",
      "Express",
      "Prisma",
      "docker",
    ],
    image: "../../../assets/images/externatic/accueil.png",
    imageGallery: [
      "../../../assets/images/externatic/accueil.png",
      "../../../assets/images/externatic/connection.png",
      "../../../assets/images/externatic/entreprises.png",
      "../../../assets/images/externatic/navbar.png",
      "../../../assets/images/externatic/offres.png",
      "../../../assets/images/externatic/mobile_accueil.png",
      "../../../assets/images/externatic/mobile_offres.png",
      "../../../assets/images/externatic/profile.png",
      "../../../assets/images/externatic/mobile_footer.png",
      "../../../assets/images/externatic/navbar_mobile.png",
    ],
  },
  {
    id: 5,
    title: "Ecotripr",
    subtitle: "Projet de Formartion en Groupe",
    description:
      "Ce projet à été réalisé au cour de mon stage chez Pic digital en collaboration avec mon tuteur. C'est un projet que j'ai démarré de zéro. Je devais améliorer la modale de recherche pour le site Bionbe afin que les utilisateurs puissent filtrer leurs recherches facilement et ainsi trouver des activités, des évènements, des clubs et des personnes autour d'eux.",
    technologiestitle: "Les technologies utilisées",
    technologies: ["Vite", "typescript", "sass"],
    image: "../../../assets/images/",
    imageGallery: ["Chemin_vers_image1", "Chemin_vers_image2"],
  },
  {
    id: 6,
    title: "FleetGo",
    subtitle: "Projet de Formartion en Groupe",
    description:
      "Ce projet à été réalisé au cour de mon stage chez Pic digital en collaboration avec mon tuteur. C'est un projet que j'ai démarré de zéro. Je devais améliorer la modale de recherche pour le site Bionbe afin que les utilisateurs puissent filtrer leurs recherches facilement et ainsi trouver des activités, des évènements, des clubs et des personnes autour d'eux.",
    technologiestitle: "Les technologies utilisées",
    technologies: ["Vite", "typescript", "sass"],
    image: "Chemin_vers_une_image",
    imageGallery: ["Chemin_vers_image1", "Chemin_vers_image2"],
  },
  {
    id: 7,
    title: "WildFit",
    subtitle: "Projet de Formartion en Groupe",
    description:
      "Ce projet à été réalisé au cour de mon stage chez Pic digital en collaboration avec mon tuteur. C'est un projet que j'ai démarré de zéro. Je devais améliorer la modale de recherche pour le site Bionbe afin que les utilisateurs puissent filtrer leurs recherches facilement et ainsi trouver des activités, des évènements, des clubs et des personnes autour d'eux.",
    technologiestitle: "Les technologies utilisées",
    technologies: ["Vite", "typescript", "sass"],
    image: "../../../assets/images/WildFit/accueil.png",
    imageGallery: ["Chemin_vers_image1", "Chemin_vers_image2"],
  },
  {
    id: 8,
    title: "Wild Code school Biarritz Website",
    subtitle: "Projet de Formation en Groupe",
    description:
      "Ce projet était le premier de ma formation. il nous a permis de nous familiariser avec les langages de base du développement web (HtML, Css, Javascript). Nous l’avons réalisé par groupe de 4 et avons chacun travaillé sur une page différente du site. Pour ma part j’ai réalisé la page contact, avec la création d’une navigation responsive, un formulaire de contact, comprenant quelques animations, une validation du message à la soumission du formulaire, une carte indiquant l’emplacement de l’école, ainsi qu’un Footer avec l’accès aux différents réseaux sociaux de l’école.",
    technologiestitle: "Les technologies utilisées",
    technologies: ["HtML", "Css", "Javascript"],
    image: "../../../assets/images/wsc_siteweb/contact.png",
    imageGallery: [
      "Chemin_vers_image1",
      "Chemin_vers_image2",
      "Chemin_vers_image3",
    ],
  },
];