"use server";

import { revalidatePath } from "next/cache";
import "server-only";

const STRAPI_KEY = process.env.STRAPI_KEY;

const headersList = {
  Authorization: `Bearer ${STRAPI_KEY}`,
  cache: "no-store",
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
    revalidatePath(`/digital/realizacje/${id}`);
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

export interface CaseStudy {
  id: number;
  attributes: {
    Page: Array<{
      shortDescription: string;
      client: string;
      date: string;
      __component: string;
      title?: string;
      services?: string;
      image?: {
        data: {
          attributes: {
            formats: {
              large?: { url: string; width: number; height: number };
              medium?: { url: string; width: number; height: number };
              thumbnail?: { url: string; width: number; height: number };
            };
          };
        };
      };
    }>;
  };
}

export interface CaseStudyItem {
  id: number;
  shortDescription: string;
  title: string;
  date: string;
  services: string;
  client: string;
  thumbnail: { url: string; width: number; height: number };
  miniThumbnail?: { url: string; width: number; height: number };
}

export async function getAllCaseStudiesData() {
  const data: CaseStudy[] = await fetchAllCaseStudies();
  if (!data) return [];

  const caseStudiesList: CaseStudyItem[] = data.map(
    ({ id, attributes: { Page } }) => {
      const headerComponent = Page.find(
        (component) => component.__component === "component.header"
      );
      const thumbnailComponent = Page.find(
        (component) => component.__component === "component.thumbnail"
      );
      const miniThumbnailComponent = Page.find(
        (component) => component.__component === "component.mini-thumbnail"
      );

      const getImageAttributes = (component: any) => {
        return component && component?.image?.data?.attributes
          ? component.image.data.attributes
          : null;
      };

      const thumbnailAttributes = getImageAttributes(thumbnailComponent);
      const miniThumbnailAttributes = getImageAttributes(
        miniThumbnailComponent
      );

      const thumbnail = thumbnailAttributes
        ? {
            url: thumbnailAttributes.url,
            width: thumbnailAttributes.width,
            height: thumbnailAttributes.height,
          }
        : { url: "", width: 800, height: 600 };

      const miniThumbnail = miniThumbnailAttributes
        ? {
            url: miniThumbnailAttributes.url,
            width: miniThumbnailAttributes.width,
            height: miniThumbnailAttributes.height,
          }
        : { url: "", width: 800, height: 600 };

      return {
        id: id,
        shortDescription: headerComponent
          ? headerComponent.shortDescription || "Brak opisu"
          : "Brak opisu",
        title: headerComponent
          ? headerComponent.title || "Brak tytułu"
          : "Brak tytułu",
        client: headerComponent
          ? headerComponent.client || "Brak klienta"
          : "Brak klienta",
        date: headerComponent
          ? headerComponent.date || "Brak daty"
          : "Brak daty",
        services: headerComponent
          ? headerComponent.services || "Brak usług"
          : "Brak usług",
        thumbnail: thumbnail,
        miniThumbnail: miniThumbnail,
      };
    }
  );

  return caseStudiesList;
}
