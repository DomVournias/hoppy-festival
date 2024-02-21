import { HOME_SECTIONS_QUERY, MAIN_MENU_QUERY } from "../queries";

export async function fetchDataNoCache(query) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}?query=${encodeURIComponent(
      query
    )}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // ... any other headers you need to include (like authentication tokens)
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data;
}

export async function fetchHomeSections() {
  const data = await fetchDataNoCache(HOME_SECTIONS_QUERY);
  return data;
}

export async function fetchHomeHeroSection() {
  const data = await fetchDataNoCache(HOME_SECTIONS_QUERY);
  return data;
}

export async function fetchMainMenu() {
  const data = await fetchDataNoCache(MAIN_MENU_QUERY);
  return data;
}
