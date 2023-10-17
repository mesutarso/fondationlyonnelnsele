export const GET_PARTNERS = `
query partners {
    partenaires {
      edges {
        node {
          id
          nom
          logo {
            sourceUrl(size: LARGE)
            sizes(size: LARGE)
          }
          website
        }
      }
    }
  }
    `;

export const GET_HOME = `
query sliders {
  sliders(first: 5) {
    edges {
      node {
        id
        titre
        image {
          sourceUrl
        }
        description
        slogan
      }
    }
  }
}    

`;




export const GET_POSTS = `
query getPosts {
  posts(first: 4) {
    edges {
      node {
        id
        title(format: RENDERED)
        slug
        date
        author {
          node {
            firstName
            lastName
            name
          }
        }
        categories(first: 1) {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
  }
}
`


export const GET_HOME_DATA = `
query getInfosData {
  page(id: "/home", idType: URI) {
    title
    home {
      infos {
        nombreDesMembres
        nombresDesActions
        nombresDesVolontaires
      }
      historique {
        description
        image {
          sourceUrl
        }
        slogan
        titre
        onglets {
          titre
        }
      }
      missionsObjectifs {
        titre
        slogan
        description
        video {
          lienYoutube
          poster {
            sourceUrl
          }
        }
        objectifs {
          description
          titre
        }
      }
    }
  }
  sliders(first: 1) {
    edges {
      node {
        id
        titre
        image {
          sourceUrl
        }
        description
        slogan
      }
    }
  }
  actions(first: 3) {
    edges {
      node {
        id
        date
        categoriesAction{
          edges{
            node{
              name
            }
          }
        }
        title(format: RENDERED)
        slug
        excerpt(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
      }
    }
  }
  teams(first: 4) {
    edges {
      node {
        title(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
          }
        }
        teamsFields {
          poste
          reseauxSociaux {
            nom
            lien
          }
        }
      }
    }
  }
  temoignage(first: 4) {
    edges {
      node {
        content(format: RENDERED)
        featuredImage {
          node {
            sourceUrl(size: THUMBNAIL)
          }
        }
        title(format: RENDERED)
        tesmonies_field {
          personne {
            noms
            photo {
              sourceUrl(size: THUMBNAIL)
            }
          }
        }
      }
    }
  }
  posts {
    edges {
      node {
        date
        featuredImage {
          node {
            sourceUrl(size: MEDIUM)
          }
        }
        categories(first: 1) {
          edges {
            node {
              name
            }
          }
        }
        id
        slug
        title(format: RENDERED)
      }
    }
  }
  magazine(first: 1) {
    edges {
      node {
        title(format: RENDERED)
        featuredImage {
          node {
            sourceUrl
          }
        }
        magazine_fields {
          fichier {
            mediaItemUrl
          }
        }
      }
    }
  }
}

`
