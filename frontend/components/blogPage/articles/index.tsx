import ArticlesList from "../highlightedArticle";
import fetchAllArticles from "@/utils/articles";

export default async function Articles() {
  const { data } = await fetchAllArticles();

  const articlesList = data.map(
    (article: {
      id: number;
      attributes: {
        Page: {
          __component: string;
          title?: string;
          category?: string;
          admission?: [];
          articleHeader?: string;
          articleAdmission?: [];
          articleMain?: [];
          text?: [];
          image?: {
            data: {
              attributes: {
                width: number;
                height: number;
                url: string;
              };
            };
          };
        }[];
        createdAt: any
        updatedAt: any;
        publishedAt: any;
      };
    }) => {
      const headerComponent = article.attributes.Page.find(
        (component) => component.__component === "blog-components.header"
      );
      const thumbnailComponent = article.attributes.Page.find(
        (component) => component.__component === "blog-components.thumbnail"
      );
      const admissonComponent = article.attributes.Page.find(
        (component) => component.__component === "blog-components.admission"
      );

      return {
        id: article.id,
        title: headerComponent?.title || "",
        category: headerComponent?.category || "",
        admission: admissonComponent?.text || [],
        articleHeader: headerComponent?.articleHeader || "",
        createdAt: article.attributes.createdAt,
        updatedAt: article.attributes.updatedAt,
        publishedAt: article.attributes.publishedAt,
        articleAdmission: headerComponent?.articleAdmission || [],
        articleMain: headerComponent?.articleMain || [],
        thumbnail: thumbnailComponent?.image || null,
      };
    }
  );

  return (
    <main>
      <ArticlesList articlesList={articlesList} />
    </main>
  );
}
