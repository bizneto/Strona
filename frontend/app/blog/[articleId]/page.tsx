import dynamic from "next/dynamic";
import Navbar from "@/components/articlePage/navbar";
import { fetchArticleById } from "@/utils/articles";
import ArticleImage from "@/components/articlePage/articleImage";
import ArticleMain from "@/components/articlePage/articleMain";
import OtherArticles from "@/components/articlePage/otherArticles";

const componentsMap = {
  "blog-components.header": dynamic(
    () => import("@/components/articlePage/header")
  ),
  "blog-components.thumbnail": dynamic(
    () => import("@/components/articlePage/thumbnail")
  ),
  "blog-components.admission": dynamic(
    () => import("@/components/articlePage/admission")
  ),
  "blog-components.article": dynamic(
    () => import("@/components/articlePage/article")
  ),
};

export default async function ArticlePage({
  params,
}: {
  params: { articleId: number };
}) {
  const components: {
    image: {
      data: { attributes: { width: number; height: number; url: string } };
    };
    articleMain: any;
    __component: string;
  }[] = await fetchArticleById(params.articleId ?? []);

  return (
    <>
      <Navbar />
      {components.map((component, index) => {
        const Component =
          componentsMap[component.__component as keyof typeof componentsMap];
        if (!Component) return null;

        if (component.__component === "blog-components.article") {
          return (
            <Component
              key={index}
              title={""}
              category={""}
              text={[]}
              articleAdmission={""}
              articleHeader={""}
              {...component}
            >
              <ArticleImage image={component.image} />
              <ArticleMain articleMain={component.articleMain} />
            </Component>
          );
        }

        return (
          <Component
            title={""}
            category={""}
            text={[]}
            articleAdmission={""}
            articleHeader={""}
            key={index}
            {...component}
          >
            <></>
          </Component>
        );
      })}
      <OtherArticles id={params.articleId} />
    </>
  );
}
