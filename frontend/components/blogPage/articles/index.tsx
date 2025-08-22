import { blogAPI } from "@/lib/blog-api";
import ArticlesList from "../articlesList";
import HighlightedArticle from "../highlightedArticle";

export default async function Articles() {
  try {
    // Fetch latest posts from EspoCRM
    const latestPosts = await blogAPI.getLatestPosts(10);
    const featuredPosts = await blogAPI.getFeaturedPosts(1);

    const highlightedPost = featuredPosts.length > 0 ? featuredPosts[0] : latestPosts[0];
    const remainingPosts = featuredPosts.length > 0
      ? latestPosts.filter(post => post.id !== highlightedPost?.id)
      : latestPosts.slice(1);

    return (
      <section className='w-full flex flex-col items-center py-[5%]'>
        <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] flex flex-col'>
          {highlightedPost && <HighlightedArticle post={highlightedPost} />}
          <ArticlesList posts={remainingPosts} />
        </div>
      </section>
    );
  } catch (error) {
    console.error('Error loading blog articles:', error);

    return (
      <section className='w-full flex flex-col items-center py-[5%]'>
        <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] flex flex-col'>
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              Brak artykułów do wyświetlenia
            </h3>
            <p className="text-gray-500">
              Wkrótce pojawią się tutaj interesujące artykuły o księgowości.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
