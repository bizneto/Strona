import Image from "next/image";
import Link from "next/link";
import { BlogPost, CATEGORY_LABELS, getBlogPostUrl, getFeaturedImageUrl, generateExcerpt } from "@/types/blog";

interface FinanceHighlightedArticleProps {
  post: BlogPost;
}

export default function FinanceHighlightedArticle({ post }: FinanceHighlightedArticleProps) {
  return (
    <Link href={getBlogPostUrl(post.slug)}>
      <article className='flex flex-col lg:flex-row mx-auto md:max-h-[650px] lg:max-h-[504px] gap-4 md:gap-12 my-8 md:mb-12 w-full hover:shadow-lg transition-shadow rounded-lg overflow-hidden bg-white border border-gray-200'>
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src={getFeaturedImageUrl(post.featuredImage, post.imageUrl, post.image)}
            alt={post.imageAlt || post.title}
            fill
            className='object-cover rounded-l-lg'
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {CATEGORY_LABELS[post.category]}
            </span>
          </div>
        </div>
        <div className='flex flex-col py-6 px-6 gap-6 justify-between font-medium lg:w-1/2'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl md:text-3xl font-bold leading-tight hover:text-blue-600 transition-colors'>
              {post.title}
            </h2>
            <p className='text-gray-600 text-lg leading-relaxed'>
              {post.excerpt || generateExcerpt(post.content, 200)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {new Date(post.publishedAt || post.createdAt).toLocaleDateString('pl-PL')}
              </span>
              {post.readingTime && (
                <span className="text-sm text-gray-500">
                  {post.readingTime} min czytania
                </span>
              )}
            </div>
            <div className="text-blue-600 font-semibold">
              Czytaj więcej →
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
