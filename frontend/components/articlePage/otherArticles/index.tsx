import React from "react";
import OtherArticlesMobile from "@/components/articlePage/otherArticles/otherArticlesMobile";
import OtherArticlesDesktop from "@/components/articlePage/otherArticles/otherArticlesDesktop";
import fetchAllArticles, { fetchArticleById } from "@/utils/articles";

interface IOtherArticles {
  id: number;
}

export interface ArticleComponent {
  __component: string;
  title: string;
  category: string;
  text?: {}[];
  image?: {
    data: {
      attributes: {
        width: number;
        url: string;
        height: number;
      };
    };
  };
  articleAdmission?: string;
  articleHeader?: string;
  articleMain?: {}[];
}

export interface Article {
  id: number;
  attributes: {
    Page: ArticleComponent[];
  };
}

export interface FetchAllArticlesResponse {
  data: Article[];
}

export default async function OtherArticles({ id }: IOtherArticles) {
  const allArticlesResponse: FetchAllArticlesResponse =
    await fetchAllArticles();
  const { data } = allArticlesResponse;
  const articleComponents: ArticleComponent[] = await fetchArticleById(id);

  const headerComponent = articleComponents.find(
    (component) => component.__component === "blog-components.header"
  );

  if (!headerComponent || !headerComponent.category || !headerComponent.title) {
    return null;
  }

  const { category, title } = headerComponent;

  const dataFilteredByCategoryAndTitle = data.filter(
    ({ attributes: { Page } }) =>
      Page.some((component) => component.category === category) &&
      !Page.some((component) => component.title === title)
  );

  return (
    <>
      <OtherArticlesMobile data={dataFilteredByCategoryAndTitle} />
      <OtherArticlesDesktop data={dataFilteredByCategoryAndTitle} />
    </>
  );
}
