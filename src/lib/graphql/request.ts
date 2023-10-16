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
  
    const {page} = await fetchGraphql(GET_HOME_DATA)

    const historique = await page.home.historique

    return {historique}
  
  
}


