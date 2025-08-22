// Blog API Client for EspoCRM Integration

import { BlogPost, BlogPostsResponse, BlogFilters, BlogPostCategory, BlogPostTag } from '@/types/blog';

const ESPOCRM_BASE_URL = process.env.ESPOCRM_URL ? `${process.env.ESPOCRM_URL}/api/v1` : 'https://kepr.pl/api/v1';
const API_KEY = process.env.ESPOCRM_API_KEY || '42e09d451fa151de753dbf94b5616808';
const ESPOCRM_ENTITY = process.env.ESPOCRM_ENTITY || 'CBlogPost';

class BlogAPIError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'BlogAPIError';
  }
}

// Base API client
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<T> {
  const url = `${ESPOCRM_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': API_KEY,
      ...options.headers,
    },
    cache: 'no-store', // Disable caching to get fresh data
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new BlogAPIError(
        `API request failed: ${response.status} ${response.statusText}`,
        response.status
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof BlogAPIError) {
      throw error;
    }
    throw new BlogAPIError(`Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Build query parameters for EspoCRM
function buildQueryParams(filters: BlogFilters): string {
  const params = new URLSearchParams();
  
  // Basic filters
  if (filters.category) {
    params.append('where[0][type]', 'equals');
    params.append('where[0][attribute]', 'category');
    params.append('where[0][value]', filters.category);
  }
  
  if (filters.status) {
    const whereIndex = params.has('where[0][type]') ? 1 : 0;
    params.append(`where[${whereIndex}][type]`, 'equals');
    params.append(`where[${whereIndex}][attribute]`, 'status');
    params.append(`where[${whereIndex}][value]`, filters.status);
  }
  
  if (filters.featured !== undefined) {
    const whereIndex = Array.from(params.keys()).filter(k => k.includes('where[')).length;
    params.append(`where[${whereIndex}][type]`, 'equals');
    params.append(`where[${whereIndex}][attribute]`, 'featured');
    params.append(`where[${whereIndex}][value]`, filters.featured.toString());
  }
  
  if (filters.search) {
    const whereIndex = Array.from(params.keys()).filter(k => k.includes('where[')).length;
    params.append(`where[${whereIndex}][type]`, 'or');
    params.append(`where[${whereIndex}][value][0][type]`, 'contains');
    params.append(`where[${whereIndex}][value][0][attribute]`, 'title');
    params.append(`where[${whereIndex}][value][0][value]`, filters.search);
    params.append(`where[${whereIndex}][value][1][type]`, 'contains');
    params.append(`where[${whereIndex}][value][1][attribute]`, 'content');
    params.append(`where[${whereIndex}][value][1][value]`, filters.search);
  }
  
  // Pagination
  if (filters.limit) {
    params.append('limit', filters.limit.toString());
  }
  
  if (filters.offset) {
    params.append('offset', filters.offset.toString());
  }
  
  // Ordering
  if (filters.orderBy) {
    params.append('orderBy', filters.orderBy);
    params.append('order', filters.order || 'desc');
  }
  
  return params.toString();
}

// Transform EspoCRM response to our BlogPost type
function transformBlogPost(espoData: any): BlogPost {
  return {
    id: espoData.id,
    title: espoData.title || espoData.name || '',
    slug: espoData.slug || '',
    status: espoData.status || 'draft',
    category: espoData.category || 'ksiegowosc',
    content: espoData.content || '',
    description: espoData.description,
    excerpt: espoData.excerpt,
    metaTitle: espoData.metaTitle,
    metaDescription: espoData.metaDescription,
    metaKeywords: espoData.metaKeywords,
    featuredImage: espoData.featuredImage,
    image: espoData.image,
    imageUrl: espoData.imageurl || espoData.imageUrl,
    headerimage: espoData.headerimage,
    headerimageId: espoData.headerimageId,
    headerimageName: espoData.headerimageName,
    imageId: espoData.imageId,
    imageName: espoData.imageName,
    imageAlt: espoData.imageAlt,
    tags: espoData.tags ? espoData.tags.split(',').map((t: string) => t.trim()) : [],
    targetKeywords: espoData.targetKeywords,
    difficulty: espoData.difficulty,
    publishedAt: espoData.publishedAt,
    scheduledAt: espoData.scheduledAt,
    author: espoData.author,
    authorName: espoData.authorName,
    readingTime: espoData.readingTime,
    canonicalUrl: espoData.canonicalUrl,
    noIndex: espoData.noIndex || false,
    noFollow: espoData.noFollow || false,
    priority: espoData.priority || 0.5,
    changeFreq: espoData.changeFreq || 'monthly',
    relatedServices: espoData.relatedServices ? espoData.relatedServices.split(',') : [],
    viewsCount: espoData.viewsCount || 0,
    featured: espoData.featured || false,
    trending: espoData.trending || false,
    createdAt: espoData.createdAt,
    modifiedAt: espoData.modifiedAt
  };
}

// API Functions
export const blogAPI = {
  // Get all blog posts with filters
  async getPosts(filters: BlogFilters = {}): Promise<BlogPostsResponse> {
    try {
      const queryParams = buildQueryParams({
        ...filters,
        status: filters.status || 'published' // Default to published only
      });

      const endpoint = `/${ESPOCRM_ENTITY}${queryParams ? `?${queryParams}` : ''}`;
      const response = await apiRequest<any>(endpoint);

      return {
        total: response.total || 0,
        list: (response.list || []).map(transformBlogPost)
      };
    } catch (error) {
      console.error('Error in getPosts:', error);
      throw error;
    }
  },

  // Get single blog post by ID
  async getPostById(id: string): Promise<BlogPost | null> {
    try {
      const response = await apiRequest<any>(`/${ESPOCRM_ENTITY}/${id}`);
      return transformBlogPost(response);
    } catch (error) {
      if (error instanceof BlogAPIError && error.status === 404) {
        return null;
      }
      throw error;
    }
  },

  // Get single blog post by slug
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      // Get all posts and filter by slug (EspoCRM filtering is complex)
      const response = await this.getPosts({
        limit: 50, // Get more posts to ensure we find the one we need
        orderBy: 'createdAt',
        order: 'desc'
      });

      const post = response.list.find(p => p.slug === slug);
      return post || null;
    } catch (error) {
      console.error('Error loading post by slug:', error);
      return null;
    }
  },

  // Get posts by category
  async getPostsByCategory(category: BlogPostCategory, limit: number = 10): Promise<BlogPost[]> {
    const response = await this.getPosts({
      category,
      limit,
      orderBy: 'createdAt',
      order: 'desc'
    });
    
    return response.list;
  },

  // Get posts by tag
  async getPostsByTag(tag: BlogPostTag, limit: number = 10): Promise<BlogPost[]> {
    const response = await this.getPosts({
      tag,
      limit,
      orderBy: 'createdAt',
      order: 'desc'
    });
    
    return response.list;
  },

  // Get featured posts
  async getFeaturedPosts(limit: number = 5): Promise<BlogPost[]> {
    try {
      // For now, return latest posts as featured posts
      return await this.getLatestPosts(limit);
    } catch (error) {
      console.error('Error loading featured posts:', error);
      return [];
    }
  },

  // Get trending posts
  async getTrendingPosts(limit: number = 5): Promise<BlogPost[]> {
    const response = await this.getPosts({
      trending: true,
      limit,
      orderBy: 'viewsCount',
      order: 'desc'
    });
    
    return response.list;
  },

  // Get latest posts
  async getLatestPosts(limit: number = 10): Promise<BlogPost[]> {
    try {
      const params = new URLSearchParams();
      // Don't use limit for now - EspoCRM seems to have issues with it
      // params.append('limit', limit.toString());
      // Use EspoCRM sorting parameters
      params.append('sortBy', 'createdAt');
      params.append('asc', 'false'); // false = descending

      const endpoint = `/${ESPOCRM_ENTITY}?${params.toString()}`;
      const response = await apiRequest<any>(endpoint);

      if (response.list && Array.isArray(response.list)) {
        return response.list.map(transformBlogPost);
      }

      return [];
    } catch (error) {
      console.error('Error loading latest posts:', error);
      return [];
    }
  },

  // Search posts
  async searchPosts(query: string, limit: number = 10): Promise<BlogPost[]> {
    const response = await this.getPosts({
      search: query,
      limit,
      orderBy: 'createdAt',
      order: 'desc'
    });
    
    return response.list;
  },

  // Get related posts
  async getRelatedPosts(currentPostId: string, limit: number = 3): Promise<BlogPost[]> {
    // First get the current post to know its category and tags
    const currentPost = await this.getPostById(currentPostId);
    if (!currentPost) return [];

    // Get posts from same category
    const categoryPosts = await this.getPostsByCategory(currentPost.category, limit * 2);
    
    // Filter out current post and limit results
    return categoryPosts
      .filter(post => post.id !== currentPostId)
      .slice(0, limit);
  },

  // Increment view count (if we want to track this)
  async incrementViewCount(id: string): Promise<void> {
    try {
      await apiRequest(`/${ESPOCRM_ENTITY}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          viewsCount: 'INCREMENT'
        })
      });
    } catch (error) {
      // Silently fail - view counting is not critical
      console.warn('Failed to increment view count:', error);
    }
  }
};

// Export for use in components
export default blogAPI;
