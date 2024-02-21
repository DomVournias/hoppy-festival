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
