export const menu = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "la cellule",
    path: "/cellule",
    children: [
      {
        label: "Mot du Coordonnateur National",
        path: "/cellule/mot-coordonnateur",
      },
      {
        label: "Présentation",
        path: "/cellule/presentation",
      },
      {
        label: "Organigramme",
        path: "/cellule/organigramme",
      },
      {
        label: "Notre Portefeuille",
        path: "/cellule/portefeuille",
      },
      {
        label: "Contactez-nous",
        path: "/contact",
      },
    ],
  },
  {
    label: "Projets",
    path: "/projets",
    children: [
      {
        label: "Trésor Public",
        path: "/projets/categories/tresor-public",
        // children: [
        //   {
        //     label: "PDL-145T",
        //     path: "/projets/pdl-145t",
        //   },
        //   {
        //     label: "PABRC",
        //     path: "/projets/pabrc",
        //   },
        // ],
      },
      {
        label: "Banque Mondiale",
        path: "/projets/categories/banque-mondiale",
        // children: [
        //   {
        //     label: "PDPC",
        //     path: "/projets/pdpc",
        //   },
        //   {
        //     label: "PRSDHU",
        //     path: "/projets/prsdhu",
        //   },
        //   {
        //     label: "PDIFM",
        //     path: "/projets/pdifm",
        //   },
        // ],
      },
      {
        label: "Banque Africaine de Développement",
        path: "/projets/categories/banque-africaine-developpement",
        // children: [
        //   {
        //     label: "PAMRIM-FP",
        //     path: "/projets/pamrim-fp",
        //   },
        //   {
        //     label: "PAREC",
        //     path: "/projets/parec",
        //   },
        //   {
        //     label: "PAMFP",
        //     path: "/projets/pamfp",
        //   },
        // ],
      },
    ],
  },
  {
    label: "Passation de Marchés",
    path: "/offres",
    children: [
      {
        label: "Travaux",
        path: "/offres/categories/travaux",
      },
      {
        label: "Fournitures des biens",
        path: "/offres/categories/fournitures-biens",
      },
      {
        label: "Fournitures des services",
        path: "/offres/categories/fournitures-services",
      },
      {
        label: "Prestations intellectuelles",
        path: "/offres/categories/prestations-intellectuelles",
      },
    ],
  },
  {
    label: "publications",
    path: "#",
    children: [
      {
        label: "lois, décrets et arrêtés",
        path: "/documents?category=lois-decrets-arretes",
      },
      {
        label: "Actualités",
        path: "/actualites",
      },
      {
        label: "Realisations",
        path: "/realisations",
      },
      {
        label: "Rapport et Etudes",
        path: "/documents?category=rapports-et-etudes",
      },
      {
        label: "Documents",
        path: "/documents?category=all",
      },
      {
        label: "Mediathèque",
        path: "/mediatheque",
      },
      {
        label: "Liens utiles",
        path: "/liens-utiles",
      },
      {
        label: "notes d'information",
        path: "/documents?category=notes-information",
      },
      {
        label: "Etats financiers",
        path: "/documents?category=etats-financiers",
      },
    ],
  },
  {
    label: "services",
    path: "#",
    children: [
      {
        label: "plaintes",
        path: "/services/plaintes",
      },
      {
        label: "Plan anti-corruption",
        path: "/services/plan-anti-corruption",
      },
      {
        label: "Autentification",
        path: "https://authentification.cfef.cd/",
      },
    ],
  },
];

export const usefulsLinks = [
  {
    label: "Présidence de la République",
    path: "https://presidence.cd/",
  },
  {
    label: "Primature",
    path: "https://primature.cd",
  },
  {
    label: "Ministère des Finances",
    path: "https://www.finances.gouv.cd/",
  },
  {
    label: "Ministère d'Agriculture",
    path: "https://agriculture.gouv.cd/",
  },
  {
    label: "Banque Mondiale",
    path: "https://www.banquemondiale.org/fr/country/drc",
  },
  {
    label: "Banque Africaine de Développement",
    path: "https://www.afdb.org/fr/",
  },
];
export const othersLinks = [
  {
    label: "Présentation",
    path: "/cellule/presentation",
  },
  {
    label: "Documents",
    path: "/documents?category=all",
  },
  {
    label: "Mediatheque",
    path: "/mediatheque",
  },
  {
    label: "Contactez-nous",
    path: "/contact",
  },
  {
    label: "Plan du site",
    path: "/sitemap.xml",
  },
];

export const contactInfos = {
  phone: "+243 81 000 00 00",
  email: "infos@cfef.cd",
  adress: "32 bis, Avenue des Forces Armées, Kinshasa/Gombe",
};
