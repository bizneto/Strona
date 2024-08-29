"use server";

export interface ArticleAttributes {
  title: string;
  categories: string;
  admission: string;
  articleHeader: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  articleAdmission: string;
  articleMain: [];
  thumbnail: {
    data: object;
  };
  articleImage: {
    data: object;
  };
}

export interface Article {
  id: number;
  attributes: ArticleAttributes;
}
const STRAPI_KEY = process.env.STRAPI_KEY;

export default async function fetchAllArticles() {
  const response = await fetch(
    "http://bizneto.programero.pl/api/article-pages?populate[Page][populate]=*",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${STRAPI_KEY}`,
      },
    }
  );

  if (response.ok) {
    return await response.json();
  }
}

export async function fetchArticleById(id: number) {
  try {
    const response = await fetch(
      `http://bizneto.programero.pl/api/article-pages/${id}?populate[Page][populate]=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${STRAPI_KEY}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data?.data?.attributes?.Page || null;
    } else {
      console.error("Error:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
