import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/tmp/',
        '/uploads/',
      ],
    },
    sitemap: 'https://bizneto.pl/sitemap.xml',
  }
}
