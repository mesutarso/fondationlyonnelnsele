// @ts-nocheck
import { GET_PARTNERS, GET_SLIDERS, GET_OFFERS, GET_POSTS, GET_HOME,GET_HOME_DATA } from "./queries";
import { fetchGraphql } from "../utils/fetcher";
import { formatDate } from "../helpers";

export const getPartners = async () => {
  const {
    partenaires: { edges },
  } = await fetchGraphql(GET_PARTNERS);
  return edges.map(({ node }) => node);
};

export const getHomeData = async () => {
  const {
    sliders: { edges },
  } = await fetchGraphql(GET_HOME);
  return edges.map(({ node }) => {
    return {
      id: node.id,
      title: node.titre,
      image: node.image?.sourceUrl,
      description: node.description,
      slogan : node.slogan
    };
  });
};


export const infosHome = async () => {
  
    const {page,sliders,actions,teams, temoignage, posts,magazine} = await fetchGraphql(GET_HOME_DATA)

    const {edges} = await sliders

    const heroSliders = edges.map(({ node }) => {
      return {
        id: node.id,
        title: node.titre,
        image: node.image?.sourceUrl,
        description: node.description,
        slogan : node.slogan
      };
    });

    const homeActions = await actions.edges.map(({ node }) => {
      return {
        id: node.id,
        title: node.title,
        image: node.featuredImage.node?.sourceUrl,
        excerpt:node.excerpt,
        slug : node.slug
      };
    });

    const homeTeams = await teams.edges.map(({ node }) => {
      return {
        
        name: node.title,
        image: node.featuredImage.node?.sourceUrl,
        poste : node.teamsFields.poste,
        socials : node.teamsFields.reseauxSociaux
       
      };
    });
  
  const homeMagazine = magazine.edges.map(({ node }) => {
    return {
      title: node.title,
      image: node.featuredImage.node?.sourceUrl,
      fichier : node.magazine_fields.fichier.mediaItemUrl,  
     
    };
  })[0];

    const historique = await page.home.historique
    const infos = await page.home.infos
    const missions = await page.home.missionsObjectifs

    return {historique,infos,heroSliders,homeActions,missions,homeTeams,homeMagazine}
  
  
}


