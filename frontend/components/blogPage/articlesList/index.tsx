"use client";

import React from "react";
import ArticleThumbnailTemplate from "../articleThumbnailTemplate";
import Link from "next/link";
import useCategoriesContext from "@/hooks/useBlogContext";

interface Article {
  id: number;
  title: string;
  category: string;
  admission: [];
  articleHeader: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  articleAdmission: [];
  articleMain: [];
  thumbnail: {
    data: {
      attributes: {
        width: number;
        height: number;
        url: string;
      };
    };
  };
  articleImage: {
    data: object;
  };
}

interface ArticlesListProps {
  articlesList: Article[];
}

export default function ArticlesList({ articlesList }: ArticlesListProps) {
  const { selectedCategories } = useCategoriesContext();

  const articlesToDisplay =
    selectedCategories.length === 0
      ? articlesList
      : articlesList.filter((article) =>
          selectedCategories.includes(article.category)
        );

  return (
    <section>
      <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-8 md:py-8'>
        {articlesToDisplay.map((article, index) => (
          <Link key={index} href={`/blog/${article.id}`}>
            <ArticleThumbnailTemplate
              title={article.title}
              thumbnail={article.thumbnail}
              category={article.category}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
