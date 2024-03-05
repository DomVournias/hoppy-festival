export const HOME_SECTIONS_QUERY = `
  query GetHomeSections {
    sectionCategory(idType: SLUG, id: "home") {
      sections {
        nodes {
          id
          slug
          title
          content
          hero {
            heading
            description
          }
          festival {
            heading
            description
            background {
              nodes {
                title
                sourceUrl
              }
            }
            image {
              nodes {
                title
                sourceUrl
              }
            }
            time_heading
            time_description
            place_heading
            place_description
            goal_heading
            goal_description
          }
          upcoming {
            eventDate
            heading
            description
          }
          info {
            heading
            description
            faq {
              question
              answer
            }
          }
          actions {
            heading
            description
            actions {
              title
            }
            gallery(first: 50) {
              nodes {
                id
                title
                sourceUrl
                srcSet(size: MEDIUM_LARGE)
              }
            }
          }
          sponsors {
            heading
            description
            image {
              nodes {
                title
                sourceUrl
              }
            }
            first_support_description
            first_support_logos {
              nodes {
                title
                sourceUrl
              }
            }
            second_support_description
            second_support_logos {
              nodes {
                title
                sourceUrl
              }
            }
            sponsors {
              nodes {
                title
                sourceUrl
              }
            }
            supporters {
              nodes {
                title
                sourceUrl
              }
            }
            top_sponsor {
              node {
                title
                sourceUrl
              }
            }
          }
          testimonials {
            heading
            logos(first: 30) {
              nodes {
                sourceUrl
                altText
              }
            }
          }
          about {
            heading
            description
            image {
              node {
                title
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const MAIN_MENU_QUERY = `
query GetMainMenu {
  menu(idType: NAME, id: "Main") {
    menuItems {
      nodes {
        id
        url
        label
      }
    }
  }
}
`;
