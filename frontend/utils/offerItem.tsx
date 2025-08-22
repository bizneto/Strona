"use server";

const STRAPI_KEY = process.env.STRAPI_KEY;
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

const headersList = {
  Authorization: `Bearer ${STRAPI_KEY}`,
  "Cache-Control": "no-store",
};

export async function fetchOfferItemByName(name: string) {
  try {
    const response = await fetch(
      `${STRAPI_URL}/api/offer-item-pages?populate[Slider][populate]=*&populate[Offer][populate]=*&populate[Process][populate]=*&populate[Projekt]=*&populate[Value]=*&populate[FAQ]=*&filters[OfferItem][$contains]=${name}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch data for name: ${name}`);
      return null;
    }

    const data = await response.json();
    return data.data[0].attributes || null;
  } catch (error) {
    console.error(`Error fetching: ${name}`, error);
    return null;
  }
}
