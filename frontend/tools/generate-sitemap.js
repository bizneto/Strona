/**
 * Sitemap Generator for Bizneto
 * 
 * Generates sitemap.xml with all pages and their SEO priorities
 * Usage: node tools/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Import cities data
const citiesPath = path.join(__dirname, '../data/cities.ts');
let cities = [];

try {
  const citiesContent = fs.readFileSync(citiesPath, 'utf8');
  // Extract city slugs from the TypeScript file
  const cityMatches = citiesContent.match(/slug:\s*["']([^"']+)["']/g);
  if (cityMatches) {
    cities = cityMatches.map(match => match.match(/["']([^"']+)["']/)[1]);
  }
} catch (error) {
  console.warn('Could not read cities data, using fallback list');
  cities = ['warszawa', 'krakow', 'wroclaw', 'gdansk', 'poznan', 'lodz', 'katowice', 'lublin', 'szczecin', 'bydgoszcz', 'rzeszow'];
}

// Define all pages with their SEO properties
const SITEMAP_PAGES = [
  // Main pages
  {
    url: '/finanse',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['biuro rachunkowe', 'księgowość', 'usługi księgowe']
  },
  
  // Service pages
  {
    url: '/finanse/uslugi',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['usługi księgowe', 'przegląd usług']
  },
  {
    url: '/finanse/uslugi/ksiegowosc',
    priority: 0.9,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['księgowość', 'usługi księgowe', 'ewidencja księgowa']
  },
  {
    url: '/finanse/uslugi/doradztwo-podatkowe',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['doradztwo podatkowe', 'rozliczenia podatkowe']
  },
  {
    url: '/finanse/uslugi/konsulting-biznesowy',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['konsulting biznesowy', 'doradztwo biznesowe']
  },
  {
    url: '/finanse/uslugi/kadry-place',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['kadry i płace', 'obsługa kadrowa']
  },
  {
    url: '/finanse/uslugi/audyt-finansowy',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['audyt finansowy', 'kontrola finansowa']
  },
  {
    url: '/finanse/uslugi/obsluga-prawna',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['obsługa prawna', 'doradztwo prawne']
  },
  
  // New service pages
  {
    url: '/finanse/otworz-firme',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['otwórz firmę', 'założenie działalności gospodarczej']
  },
  {
    url: '/finanse/przenies-ksiegowosc',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['przenieś księgowość', 'zmiana biura rachunkowego']
  },
  
  // Utility pages
  {
    url: '/finanse/kalkulator',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['kalkulator księgowy', 'wycena usług księgowych']
  },
  {
    url: '/kontakt',
    priority: 0.5,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: ['kontakt', 'biuro rachunkowe kontakt']
  }
];

// Add city pages
cities.forEach(citySlug => {
  SITEMAP_PAGES.push({
    url: `/finanse/${citySlug}`,
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: new Date().toISOString().split('T')[0],
    keywords: [`biuro rachunkowe ${citySlug}`, `księgowość ${citySlug}`]
  });
});

// Generate XML sitemap
function generateSitemap() {
  const baseUrl = 'https://bizneto.pl';
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  SITEMAP_PAGES.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://bizneto.pl/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all search engines to access important pages
Allow: /finanse
Allow: /finanse/uslugi
Allow: /finanse/*/
Allow: /kontakt

# Block admin and private areas (if any)
Disallow: /admin/
Disallow: /private/
Disallow: /_next/
Disallow: /api/

# Block common bot traps
Disallow: /*?*
Disallow: /*#*
`;

  return robotsTxt;
}

// Generate SEO analysis report
function generateSEOAnalysis() {
  const analysis = {
    generatedAt: new Date().toISOString(),
    totalPages: SITEMAP_PAGES.length,
    pagesByPriority: {},
    pagesByChangefreq: {},
    cityPages: cities.length,
    servicePages: SITEMAP_PAGES.filter(p => p.url.includes('/uslugi/')).length,
    recommendations: []
  };

  // Group by priority
  SITEMAP_PAGES.forEach(page => {
    const priority = page.priority.toString();
    if (!analysis.pagesByPriority[priority]) {
      analysis.pagesByPriority[priority] = [];
    }
    analysis.pagesByPriority[priority].push(page.url);
  });

  // Group by changefreq
  SITEMAP_PAGES.forEach(page => {
    if (!analysis.pagesByChangefreq[page.changefreq]) {
      analysis.pagesByChangefreq[page.changefreq] = [];
    }
    analysis.pagesByChangefreq[page.changefreq].push(page.url);
  });

  // Generate recommendations
  analysis.recommendations = [
    `Total ${analysis.totalPages} pages in sitemap - good coverage`,
    `${analysis.cityPages} city pages for local SEO`,
    `${analysis.servicePages} service pages for keyword targeting`,
    'High priority (1.0) given to main finance page',
    'Service pages have 0.7-0.9 priority for good indexing',
    'City pages have 0.7 priority for local search visibility',
    'Monthly changefreq for most pages - appropriate for business site',
    'Consider adding blog section for content marketing',
    'Monitor Google Search Console for crawl errors',
    'Update lastmod dates when content changes'
  ];

  return analysis;
}

// Main execution
if (require.main === module) {
  console.log("🗺️  Sitemap Generator for Bizneto");
  console.log("==================================\n");

  const sitemap = generateSitemap();
  const robotsTxt = generateRobotsTxt();
  const analysis = generateSEOAnalysis();

  // Create public directory if it doesn't exist
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Save sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log("✅ Generated sitemap.xml");

  // Save robots.txt
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log("✅ Generated robots.txt");

  // Save analysis report
  const reportsDir = path.join(__dirname, '../reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(reportsDir, 'sitemap-analysis.json'),
    JSON.stringify(analysis, null, 2)
  );
  console.log("✅ Generated sitemap analysis report");

  console.log(`\n📊 Sitemap Statistics:`);
  console.log(`   Total pages: ${analysis.totalPages}`);
  console.log(`   City pages: ${analysis.cityPages}`);
  console.log(`   Service pages: ${analysis.servicePages}`);
  
  console.log(`\n📈 Pages by priority:`);
  Object.entries(analysis.pagesByPriority)
    .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
    .forEach(([priority, pages]) => {
      console.log(`   Priority ${priority}: ${pages.length} pages`);
    });

  console.log(`\n💡 SEO Recommendations:`);
  analysis.recommendations.forEach((rec, index) => {
    console.log(`   ${index + 1}. ${rec}`);
  });

  console.log(`\n📁 Files generated:`);
  console.log(`   - ${publicDir}/sitemap.xml`);
  console.log(`   - ${publicDir}/robots.txt`);
  console.log(`   - ${reportsDir}/sitemap-analysis.json`);
}

module.exports = {
  SITEMAP_PAGES,
  generateSitemap,
  generateRobotsTxt,
  generateSEOAnalysis
};
