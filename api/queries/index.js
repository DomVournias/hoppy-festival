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
            description
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
            gallery {
              nodes {
                id
                title
                sourceUrl
              }
            }
          }
          sponsors {
            description
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
