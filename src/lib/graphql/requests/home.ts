import {GET_HOME_DATA } from "../queries";
import { fetchGraphql } from "../../utils/fetcher";
import { formatDate } from "../../helpers";



export const getHomeData = async () => {
  

  const {page, sliders,actions,teams, temoignages, posts,magazine} = await fetchGraphql(GET_HOME_DATA)

    const {edges} = await sliders

    const heroSliders = edges.map(({ node }:any) => {
      return {
        id: node.id,
        title: node.titre,
        image: node.image?.sourceUrl,
        description: node.description,
        slogan : node.slogan
      };
    });

    const homeActions = await actions.edges.map(({ node }:any) => {
      return {
        id: node.id,
        title: node.title,
        image: node.featuredImage.node?.sourceUrl,
        excerpt:node.excerpt,
        slug : node.slug
      };
    });

    const homeTeams = await teams.edges.map(({ node }:any) => {
      return {
        
        name: node.title,
        image: node.featuredImage.node?.sourceUrl,
        poste : node.teamsFields.poste,
        socials : node.teamsFields.reseauxSociaux
       
      };
    });
  
  const homeMagazine = await magazine.edges.map(({ node }:any) => {
    return {
      title: node.title,
      image: node.featuredImage.node?.sourceUrl,
      fichier : node.magazine_fields.fichier.mediaItemUrl,
     
    };
  })[0];


  const homeTemoignage = await temoignages.edges.map(({ node }:any) => {
    return {
      image: node.featuredImage.node?.sourceUrl,
      temoignage: node.content,
      personne: {
        nom: node.tesmonies_field.personne.noms,
        image: node.tesmonies_field.personne.photo.sourceUrl,
        position : node.tesmonies_field.personne.position
      }
     
    };
  });

  const homePosts = await posts.edges.map(({ node }: any) => {
    return {
      id: node.id,
      title: node.title,
      image: node.featuredImage?.node?.sourceUrl,
      excerpt: node.excerpt,
      slug: node.slug,
      date: formatDate(node.date),
      categorie : node.categories.edges.map(({ node }: any) => node.name)
    };
  })

    const historique = await page.home.historique
    const infos = await page.home.infos
    const missions = await page.home.missionsObjectifs

    return {historique,infos,heroSliders,homeActions,missions,homeTeams,homeMagazine,homeTemoignage,homePosts}
  
 
  
}
