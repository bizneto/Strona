"use client";
import useCategoriesContext from "@/hooks/useBlogContext";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
import ArticleThumbnailTemplate from "../articleThumbnailTemplate";
import { imageUrl } from "@/shared";

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

  const articlesCopy = [...articlesToDisplay];

  const highlightedArticle =
    articlesCopy.length > 0 ? articlesCopy.pop() : null;

  if (!highlightedArticle) {
    return null;
  }

  const {
    id,
    category,
    title,
    admission,
    thumbnail: {
      data: {
        attributes: { url, width, height },
      },
    },
  } = highlightedArticle;

  return (
    <>
      <Link href={`/blog/${id}`}>
        <article className='flex flex-col lg:flex-row mx-auto md:max-h-[650px]  lg:max-h-[504px] gap-4 md:gap-12 my-8 md:mb-32 w-10/12 md:w-[89%] 2xl:w-[1440px]'>
          <Image
            src={imageUrl(url)}
            width={width}
            height={height}
            alt='thumbnail'
            className='md:max-w-[680px] md:max-h-[440px] w-full object-cover rounded-[10px]'
          />
          <div className='flex flex-col py-6 gap-8 md:gap-6 md:justify-between font-medium'>
            <span className='flex flex-col gap-4 md:max-w-[520px] md:max-h-[440px]'>
              <h2 className='text-[24px] leading-[28.8px] md:text-[32px] md:leading-[39px]'>
                {title}
              </h2>
              <h3 className='hidden md:block text-[#505050] text-[18px] leading-[25.2px]'>
                <BlocksRenderer content={admission} />
              </h3>
            </span>
            <h4 className='rounded-[100px] border-[1.2px] border-black px-8 py-[14px] w-fit text-center h-[46px] md:h-[50px] flex items-center justify-center'>
              {category}
            </h4>
          </div>
        </article>
      </Link>
      <section>
        <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 my-8 md:py-8'>
          {articlesCopy.map(({ thumbnail, category, title, id }) => (
            <Link key={id} href={`/blog/${id}`}>
              <ArticleThumbnailTemplate
                title={title}
                thumbnail={thumbnail}
                category={category}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
