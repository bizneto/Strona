import { blogAPI } from "@/lib/blog-api";
import FinanceArticlesList from "@/components/finance/blog/FinanceArticlesList";
import BlogHeader from "@/components/finance/blog/BlogHeader";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

// Valid categories mapping
const CATEGORY_MAPPING: Record<string, string> = {
  'ksiegowosc': 'ksiegowosc',
  'podatki': 'podatki', 
  'prawo': 'prawo',
};

const CATEGORY_NAMES: Record<string, string> = {
  'ksiegowosc': 'Księgowość',
  'podatki': 'Podatki',
  'prawo': 'Prawo',
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  
  // Validate category
  if (!CATEGORY_MAPPING[category]) {
    notFound();
  }

  try {
    // Get posts for this category
    const posts = await blogAPI.getPostsByCategory(CATEGORY_MAPPING[category]);
    const categoryName = CATEGORY_NAMES[category];

    return (
      <>
        <BlogHeader />
        <section className='w-full flex flex-col items-center py-[5%]'>
          <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] flex flex-col'>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kategoria: {categoryName}
              </h2>
              <p className="text-lg text-gray-600">
                Wszystkie artykuły z kategorii {categoryName.toLowerCase()}
              </p>
            </div>
            
            {posts.length > 0 ? (
              <FinanceArticlesList posts={posts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Brak artykułów w tej kategorii.
                </p>
              </div>
            )}
          </div>
        </section>
      </>
    );
  } catch (error) {
    console.error('Error loading category page:', error);
    return (
      <>
        <BlogHeader />
        <section className='w-full flex flex-col items-center py-[5%]'>
          <div className='w-10/12 md:w-[89%] 2xl:w-[1440px] flex flex-col'>
            <div className="text-center py-12">
              <p className="text-red-600 text-lg">
                Wystąpił błąd podczas ładowania artykułów.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

// Generate static params for known categories
export async function generateStaticParams() {
  return Object.keys(CATEGORY_MAPPING).map((category) => ({
    category,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = params;
  const categoryName = CATEGORY_NAMES[category];
  
  if (!categoryName) {
    return {
      title: 'Kategoria nie znaleziona',
    };
  }

  return {
    title: `${categoryName} - Blog Finansowy | Bizneto`,
    description: `Artykuły z kategorii ${categoryName.toLowerCase()} - porady, wskazówki i najnowsze informacje dla przedsiębiorców.`,
  };
}
