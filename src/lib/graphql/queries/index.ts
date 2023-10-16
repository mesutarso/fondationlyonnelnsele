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


export const GET_OFFERS = `
query getOffers {
  offres(first: 4) {
    edges {
      node {
        id
        poste
        title(format: RENDERED)
        slug
        catGoriesOffre {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}
`

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
query getHome {
  page(id: "/home", idType: URI) {
    home {
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
    }
  }
}

`
