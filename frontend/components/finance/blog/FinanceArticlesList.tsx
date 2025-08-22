import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, CATEGORY_LABELS, getBlogPostUrl, getFeaturedImageUrl, generateExcerpt } from "@/types/blog";

interface FinanceArticlesListProps {
  posts: BlogPost[];
}

export default function FinanceArticlesList({ posts }: FinanceArticlesListProps) {
  if (!posts || posts.length === 0) {
    return (
      <section className='w-full py-16 text-center'>
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Brak artykułów do wyświetlenia
        </h3>
        <p className="text-gray-500">
          Wkrótce pojawią się tutaj interesujące artykuły o księgowości.
        </p>
      </section>
    );
  }

  return (
    <section>
      <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:pt-2 md:pb-8'>
        {posts.map((post) => (
          <Link key={post.id} href={getBlogPostUrl(post.slug)}>
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src={getFeaturedImageUrl(post.featuredImage, post.imageUrl, post.image)}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {CATEGORY_LABELS[post.category]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt || generateExcerpt(post.content)}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString('pl-PL')}</span>
                  {post.readingTime && <span>{post.readingTime} min czytania</span>}
                </div>
                <div className="mt-4 text-blue-600 font-semibold text-sm">
                  Czytaj więcej →
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
