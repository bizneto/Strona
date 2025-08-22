import Image from "next/image";
import Link from "next/link";
import { BlogPost, CATEGORY_LABELS, getBlogPostUrl, getFeaturedImageUrl, generateExcerpt } from "@/types/blog";

interface HighlightedArticleProps {
  post: BlogPost;
}

export default function HighlightedArticle({ post }: HighlightedArticleProps) {
  return (
    <Link href={getBlogPostUrl(post.slug)}>
      <article className='flex flex-col lg:flex-row mx-auto md:max-h-[650px] lg:max-h-[504px] gap-4 md:gap-12 my-8 md:mb-32 w-10/12 md:w-[89%] 2xl:w-[1440px] hover:shadow-lg transition-shadow rounded-lg overflow-hidden'>
        <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
          <Image
            src={getFeaturedImageUrl(post.featuredImage, post.imageUrl, post.image)}
            alt={post.imageAlt || post.title}
            fill
            className='object-cover rounded-[10px]'
          />
        </div>
        <div className='flex flex-col py-6 gap-8 md:gap-6 md:justify-between font-medium lg:w-1/2'>
          <span className='flex flex-col gap-4'>
            <h2 className='text-[24px] leading-[28.8px] md:text-[32px] md:leading-[39px] hover:text-blue-600 transition-colors'>
              {post.title}
            </h2>
            <h3 className='hidden md:block text-[#505050] text-[18px] leading-[25.2px]'>
              {post.excerpt || generateExcerpt(post.content, 200)}
            </h3>
          </span>
          <div className="flex items-center gap-4">
            <h4 className='rounded-[100px] border-[1.2px] border-black px-8 py-[14px] w-fit text-center h-[46px] md:h-[50px] flex items-center justify-center'>
              {CATEGORY_LABELS[post.category]}
            </h4>
            <span className="text-sm text-gray-500">
              {new Date(post.publishedAt || post.createdAt).toLocaleDateString('pl-PL')}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
