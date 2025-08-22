import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogAPI } from "@/lib/blog-api";
import { CATEGORY_LABELS, getFeaturedImageUrl, generateExcerpt, processContentImages } from "@/types/blog";
import dynamic from "next/dynamic";
import Header from "@/components/financePage/header";

// Dynamic import for client-side HTML rendering
const HTMLContent = dynamic(() => import('@/components/HTMLContent'), { ssr: false });

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await blogAPI.getPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: "Artykuł nie znaleziony | Bizneto",
      };
    }

    return {
      title: `${post.title} | Blog Finansowy Bizneto`,
      description: post.excerpt || generateExcerpt(post.content, 160),
      keywords: `${post.title}, ${CATEGORY_LABELS[post.category]}, księgowość, finanse`,
      openGraph: {
        title: post.title,
        description: post.excerpt || generateExcerpt(post.content, 160),
        images: post.featuredImage || post.imageUrl || post.image ? [getFeaturedImageUrl(post.featuredImage, post.imageUrl, post.image)] : [],
      },
    };
  } catch (error) {
    return {
      title: "Błąd ładowania artykułu | Bizneto",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await blogAPI.getPostBySlug(params.slug);

    if (!post) {
      notFound();
    }





    // Get related posts
    const relatedPosts = await blogAPI.getPostsByCategory(post.category, 3);
    const filteredRelatedPosts = relatedPosts.filter(p => p.id !== post.id).slice(0, 3);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header with blog post background */}
        <div className="relative">
          {/* Background Image for Header */}
          {(post.headerimageId || post.headerimage || post.featuredImage || post.imageUrl || post.image) && (
            <div className="absolute inset-0 z-0">
              <Image
                src={
                  post.headerimageId
                    ? `/api/espo-image/${post.headerimageId}`
                    : post.headerimage || getFeaturedImageUrl(post.featuredImage, post.imageUrl, post.image)
                }
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
            </div>
          )}

          {/* Header with navigation */}
          <div className="relative z-10">
            <Header blogPost={{
              title: post.title,
              description: post.description,
              excerpt: post.excerpt,
              category: post.category,
              headerimageId: post.headerimageId,
              publishedAt: post.publishedAt,
              createdAt: post.createdAt
            }} />
          </div>

          {/* Blog Post Info Overlay - HIDDEN */}
          <div className="relative z-10 text-white hidden">
            <div className="max-w-6xl mx-auto px-4 py-16">
              <nav className="mb-6">
                <Link href="/finanse/blog" className="text-white hover:text-gray-200 transition-colors">
                  ← Wróć do Bloga Finansowego
                </Link>
              </nav>

              <div className="mb-6">
                <span className="bg-white text-[#FF3C50] px-4 py-2 rounded-full text-sm font-semibold">
                  {CATEGORY_LABELS[post.category]}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-gray-200">
                <span>
                  Opublikowano: {new Date(post.publishedAt || post.createdAt).toLocaleDateString('pl-PL')}
                </span>
                {post.readingTime && (
                  <span>{post.readingTime} min czytania</span>
                )}
              </div>
            </div>
          </div>
        </div>



        {/* Content */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 py-16">
            {post.content ? (
              <HTMLContent
                content={processContentImages(post.content)}
                className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#FF3C50] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-img:rounded-lg prose-img:shadow-md"
              />
            ) : (
              <div className="text-gray-600 text-center py-8">
                <p>Treść artykułu jest obecnie niedostępna.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Posts */}
        {filteredRelatedPosts.length > 0 && (
          <div className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Powiązane artykuły</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredRelatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/finanse/blog/${relatedPost.slug}`}>
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src={getFeaturedImageUrl(relatedPost.featuredImage, relatedPost.imageUrl, relatedPost.image)}
                          alt={relatedPost.imageAlt || relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt || generateExcerpt(relatedPost.content)}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
              <Link
                href="/finanse/blog"
                className="bg-[#FF3C50] text-white px-8 py-4 rounded-lg hover:bg-[#e63946] transition-colors font-semibold"
              >
                Zobacz więcej artykułów
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}
