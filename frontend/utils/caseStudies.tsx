"use server";

import "server-only";

const STRAPI_KEY = process.env.STRAPI_KEY;

const headersList = {
  Authorization: `Bearer ${STRAPI_KEY}`,
  "Cache-Control": "no-cache",
};

export async function fetchCaseStudyByID(id: number) {
  try {
    const response = await fetch(
      `http://bizneto.programero.pl/api/case-study-pages/${id}?populate[Page][populate]=*`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch data for case study ID: ${id}`);
      return null;
    }

    const data = await response.json();
    return data?.data?.attributes?.Page || null;
  } catch (error) {
    console.error(`Error fetching case study ID: ${id}`, error);
    return null;
  }
}

export async function fetchAllCaseStudies() {
  try {
    const response = await fetch(
      `http://bizneto.programero.pl/api/case-study-pages?populate[Page][populate]=*`,
      // `http://127.0.0.1:1337/api/case-study-pages?populate[Page][populate]=*`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching all case studies", error);
    throw error;
  }
}
