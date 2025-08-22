// Blog Post Types for EspoCRM Integration

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: BlogPostStatus;
  category: BlogPostCategory;
  content: string;
  description?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  featuredImage?: string;
  image?: string; // Physical image file
  imageUrl?: string; // Image URL
  headerimage?: string; // Header background image
  headerimageId?: string; // Header image ID
  headerimageName?: string; // Header image filename
  imageId?: string; // EspoCRM image ID
  imageName?: string; // Image filename
  imageAlt?: string;
  tags?: BlogPostTag[];
  targetKeywords?: string;
  difficulty?: SEODifficulty;
  publishedAt?: string;
  scheduledAt?: string;
  author?: string;
  authorName?: string;
  readingTime?: number;
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  priority?: number;
  changeFreq?: ChangeFrequency;
  relatedServices?: string[];
  viewsCount?: number;
  featured?: boolean;
  trending?: boolean;
  createdAt: string;
  modifiedAt: string;
}

export type BlogPostStatus = 'draft' | 'published' | 'scheduled' | 'archived';

export type BlogPostCategory = 
  | 'ksiegowosc' 
  | 'podatki' 
  | 'kadry' 
  | 'biznes' 
  | 'prawo' 
  | 'finanse' 
  | 'technologie' 
  | 'poradniki';

export type BlogPostTag = 
  | 'pit' 
  | 'vat' 
  | 'cit' 
  | 'kpir' 
  | 'ryczalt' 
  | 'spolka' 
  | 'jdg' 
  | 'startup' 
  | 'ecommerce' 
  | 'it' 
  | 'rozliczenie' 
  | 'deklaracje' 
  | 'faktury' 
  | 'umowy' 
  | 'pracownicy';

export type SEODifficulty = 'easy' | 'medium' | 'hard';

export type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

// API Response Types
export interface BlogPostsResponse {
  total: number;
  list: BlogPost[];
}

export interface BlogPostResponse {
  data: BlogPost;
}

// Category and Tag Labels
export const CATEGORY_LABELS: Record<BlogPostCategory, string> = {
  ksiegowosc: 'Księgowość',
  podatki: 'Podatki i Rozliczenia',
  kadry: 'Kadry i Płace',
  biznes: 'Prowadzenie Biznesu',
  prawo: 'Prawo Gospodarcze',
  finanse: 'Finanse Firmowe',
  technologie: 'Technologie w Księgowości',
  poradniki: 'Poradniki Krok po Kroku'
};

export const TAG_LABELS: Record<BlogPostTag, string> = {
  pit: 'PIT',
  vat: 'VAT',
  cit: 'CIT',
  kpir: 'KPiR',
  ryczalt: 'Ryczałt',
  spolka: 'Spółka z o.o.',
  jdg: 'Jednoosobowa Działalność',
  startup: 'Startup',
  ecommerce: 'E-commerce',
  it: 'Branża IT',
  rozliczenie: 'Rozliczenie Roczne',
  deklaracje: 'Deklaracje',
  faktury: 'Faktury',
  umowy: 'Umowy',
  pracownicy: 'Pracownicy'
};

export const STATUS_LABELS: Record<BlogPostStatus, string> = {
  draft: 'Szkic',
  published: 'Opublikowany',
  scheduled: 'Zaplanowany',
  archived: 'Zarchiwizowany'
};

// Blog Post Filters
export interface BlogFilters {
  category?: BlogPostCategory;
  tag?: BlogPostTag;
  status?: BlogPostStatus;
  featured?: boolean;
  trending?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
  orderBy?: 'publishedAt' | 'createdAt' | 'modifiedAt' | 'title' | 'viewsCount';
  order?: 'asc' | 'desc';
}

// SEO Related Types
export interface BlogSEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

// Reading Time Calculation
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Slug Generation
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (match) => {
      const map: Record<string, string> = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
      };
      return map[match] || match;
    })
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// URL Generation
export function getBlogPostUrl(slug: string): string {
  return `/finanse/blog/${slug}`;
}

export function getBlogCategoryUrl(category: BlogPostCategory): string {
  return `/finanse/blog/kategoria/${category}`;
}

export function getBlogTagUrl(tag: BlogPostTag): string {
  return `/blog/tag/${tag}`;
}

// Helper function to convert Pexels page URL to direct image URL
function convertPexelsUrl(url: string): string {
  // Convert Pexels page URL to direct image URL
  // Example: https://www.pexels.com/pl-pl/zdjecie/pioro-na-czarnej-ksiedze-dziennika-934062/
  // Extract photo ID and create direct image URL
  const match = url.match(/\/zdjecie\/[^\/]+-(\d+)\//);
  if (match) {
    const photoId = match[1];
    // Use Pexels API format for medium size image
    return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=800`;
  }
  return url; // Return original if can't convert
}

// Process content to fix EspoCRM attachment URLs and style YouTube iframes
export function processContentImages(content: string): string {
  if (!content) return content;

  // Replace EspoCRM attachment URLs with our proxy endpoint
  // Handle both & and &amp; in URLs
  let processed = content.replace(
    /src="\?entryPoint=attachment&amp;id=([^"]+)"/g,
    'src="/api/espo-image/$1"'
  );

  processed = processed.replace(
    /src="\?entryPoint=attachment&id=([^"]+)"/g,
    'src="/api/espo-image/$1"'
  );

  // Style YouTube iframes to be responsive
  processed = processed.replace(
    /<iframe([^>]*src="https:\/\/www\.youtube\.com\/embed\/[^"]*"[^>]*)><\/iframe>/g,
    '<div class="relative w-full h-0 pb-[56.25%] my-6"><iframe$1 class="absolute top-0 left-0 w-full h-full rounded-lg"></iframe></div>'
  );

  return processed;
}

// Featured Image URL
export function getFeaturedImageUrl(imagePath?: string, imageUrl?: string, image?: string): string {
  // Priority: imageUrl > image > featuredImage > default
  if (imageUrl && imageUrl.startsWith('http')) {
    // Handle Pexels URLs
    if (imageUrl.includes('pexels.com') && imageUrl.includes('/zdjecie/')) {
      return convertPexelsUrl(imageUrl);
    }
    return imageUrl;
  }
  if (image) {
    if (image.startsWith('http')) {
      // Handle Pexels URLs
      if (image.includes('pexels.com') && image.includes('/zdjecie/')) {
        return convertPexelsUrl(image);
      }
      return image;
    }
    return `https://kepr.pl/client/img/${image}`;
  }
  if (imagePath) {
    if (imagePath.startsWith('http')) {
      // Handle Pexels URLs
      if (imagePath.includes('pexels.com') && imagePath.includes('/zdjecie/')) {
        return convertPexelsUrl(imagePath);
      }
      return imagePath;
    }
    return `https://kepr.pl/client/img/${imagePath}`;
  }
  return '/images/blog/default-featured.jpg';
}

// Excerpt Generation
export function generateExcerpt(content: string, maxLength: number = 300): string {
  const plainText = content.replace(/<[^>]*>/g, '').trim();
  if (plainText.length <= maxLength) return plainText;
  
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

// Related Posts Logic
export interface RelatedPostsOptions {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxResults?: number;
}

export function getRelatedPosts({ 
  currentPost, 
  allPosts, 
  maxResults = 3 
}: RelatedPostsOptions): BlogPost[] {
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.status === 'published' &&
      (post.category === currentPost.category || 
       post.tags?.some(tag => currentPost.tags?.includes(tag)))
    )
    .sort((a, b) => {
      // Prioritize same category
      const aCategoryMatch = a.category === currentPost.category ? 1 : 0;
      const bCategoryMatch = b.category === currentPost.category ? 1 : 0;
      
      if (aCategoryMatch !== bCategoryMatch) {
        return bCategoryMatch - aCategoryMatch;
      }
      
      // Then by publication date
      return new Date(b.publishedAt || b.createdAt).getTime() - 
             new Date(a.publishedAt || a.createdAt).getTime();
    })
    .slice(0, maxResults);
}
