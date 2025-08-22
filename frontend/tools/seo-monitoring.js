/**
 * SEO Position Monitoring Tool for Bizneto
 * 
 * This tool helps monitor keyword positions and SEO performance
 * Usage: node tools/seo-monitoring.js
 */

const fs = require('fs');
const path = require('path');

// Key phrases to monitor with their target URLs
const KEYWORDS_TO_MONITOR = {
  // Tier 1 - Main keywords (high volume, high competition)
  tier1: [
    {
      keyword: "biuro rachunkowe",
      targetUrl: "/finanse",
      volume: 22200,
      difficulty: "High",
      priority: 1
    },
    {
      keyword: "księgowość",
      targetUrl: "/finanse/uslugi/ksiegowosc",
      volume: 18100,
      difficulty: "High", 
      priority: 1
    },
    {
      keyword: "usługi księgowe",
      targetUrl: "/finanse",
      volume: 8100,
      difficulty: "High",
      priority: 1
    },
    {
      keyword: "doradztwo podatkowe",
      targetUrl: "/finanse/uslugi/doradztwo-podatkowe",
      volume: 6600,
      difficulty: "High",
      priority: 1
    },
    {
      keyword: "księgowy",
      targetUrl: "/finanse",
      volume: 14800,
      difficulty: "High",
      priority: 1
    },
    {
      keyword: "kadry i płace",
      targetUrl: "/finanse/uslugi/kadry-place",
      volume: 4400,
      difficulty: "Medium",
      priority: 1
    },
    {
      keyword: "obsługa księgowa",
      targetUrl: "/finanse",
      volume: 3600,
      difficulty: "Medium",
      priority: 1
    },
    {
      keyword: "biuro księgowe",
      targetUrl: "/finanse",
      volume: 2900,
      difficulty: "Medium",
      priority: 1
    }
  ],

  // Tier 2 - Local keywords (medium volume, medium competition)
  tier2_cities: [
    {
      keyword: "biuro rachunkowe Warszawa",
      targetUrl: "/finanse/warszawa",
      volume: 1300,
      difficulty: "High",
      priority: 2
    },
    {
      keyword: "księgowość Kraków",
      targetUrl: "/finanse/krakow",
      volume: 880,
      difficulty: "High",
      priority: 2
    },
    {
      keyword: "biuro rachunkowe Wrocław",
      targetUrl: "/finanse/wroclaw",
      volume: 720,
      difficulty: "High",
      priority: 2
    },
    {
      keyword: "księgowość Gdańsk",
      targetUrl: "/finanse/gdansk",
      volume: 590,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "biuro rachunkowe Poznań",
      targetUrl: "/finanse/poznan",
      volume: 480,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "księgowość Łódź",
      targetUrl: "/finanse/lodz",
      volume: 390,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "biuro rachunkowe Katowice",
      targetUrl: "/finanse/katowice",
      volume: 320,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "księgowość Lublin",
      targetUrl: "/finanse/lublin",
      volume: 260,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "biuro rachunkowe Szczecin",
      targetUrl: "/finanse/szczecin",
      volume: 210,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "księgowość Bydgoszcz",
      targetUrl: "/finanse/bydgoszcz",
      volume: 180,
      difficulty: "Medium",
      priority: 2
    },
    {
      keyword: "biuro rachunkowe Rzeszów",
      targetUrl: "/finanse/rzeszow",
      volume: 140,
      difficulty: "Low",
      priority: 2
    },
    {
      keyword: "księgowość Rzeszów",
      targetUrl: "/finanse/rzeszow",
      volume: 110,
      difficulty: "Low",
      priority: 2
    }
  ],

  // Tier 3 - Long-tail keywords (low volume, low competition)
  tier3_longtail: [
    {
      keyword: "otwórz firmę",
      targetUrl: "/finanse/otworz-firme",
      volume: 2400,
      difficulty: "Medium",
      priority: 3
    },
    {
      keyword: "założenie działalności gospodarczej",
      targetUrl: "/finanse/otworz-firme",
      volume: 1600,
      difficulty: "Medium",
      priority: 3
    },
    {
      keyword: "księgowość online",
      targetUrl: "/finanse/uslugi/ksiegowosc",
      volume: 1900,
      difficulty: "Medium",
      priority: 3
    },
    {
      keyword: "kalkulator księgowy",
      targetUrl: "/finanse/kalkulator",
      volume: 880,
      difficulty: "Low",
      priority: 3
    },
    {
      keyword: "przeniesienie księgowości",
      targetUrl: "/finanse/przenies-ksiegowosc",
      volume: 320,
      difficulty: "Low",
      priority: 3
    },
    {
      keyword: "zmiana biura rachunkowego",
      targetUrl: "/finanse/przenies-ksiegowosc",
      volume: 260,
      difficulty: "Low",
      priority: 3
    },
    {
      keyword: "księgowość dla firm IT",
      targetUrl: "/finanse/uslugi/ksiegowosc",
      volume: 210,
      difficulty: "Low",
      priority: 3
    },
    {
      keyword: "księgowość e-commerce",
      targetUrl: "/finanse/uslugi/ksiegowosc",
      volume: 170,
      difficulty: "Low",
      priority: 3
    }
  ],

  // Tier 4 - Competitive keywords
  tier4_competitive: [
    {
      keyword: "najlepsze biuro rachunkowe",
      targetUrl: "/finanse",
      volume: 590,
      difficulty: "High",
      priority: 4
    },
    {
      keyword: "tanie usługi księgowe",
      targetUrl: "/finanse",
      volume: 480,
      difficulty: "Medium",
      priority: 4
    },
    {
      keyword: "ceny księgowości",
      targetUrl: "/finanse",
      volume: 720,
      difficulty: "Medium",
      priority: 4
    },
    {
      keyword: "ile kosztuje księgowy",
      targetUrl: "/finanse/kalkulator",
      volume: 1300,
      difficulty: "Medium",
      priority: 4
    }
  ],

  // Seasonal keywords
  seasonal: [
    {
      keyword: "rozliczenie roczne firmy",
      targetUrl: "/finanse/uslugi/doradztwo-podatkowe",
      volume: 4400,
      difficulty: "Medium",
      priority: 2,
      season: "Q1" // Peak in March
    },
    {
      keyword: "PIT dla firm",
      targetUrl: "/finanse/uslugi/doradztwo-podatkowe",
      volume: 2900,
      difficulty: "Medium",
      priority: 2,
      season: "Q1-Q2" // Peak in March-April
    },
    {
      keyword: "sprawozdanie finansowe",
      targetUrl: "/finanse/uslugi/ksiegowosc",
      volume: 1600,
      difficulty: "Medium",
      priority: 2,
      season: "Q1" // Peak in January
    }
  ]
};

// SEO monitoring configuration
const SEO_CONFIG = {
  domain: "bizneto.pl",
  baseUrl: "https://bizneto.pl",
  trackingTools: {
    googleSearchConsole: {
      enabled: true,
      propertyUrl: "https://bizneto.pl/",
      note: "Free tool - monitor queries, positions, CTR, impressions"
    },
    senuto: {
      enabled: false, // Set to true when subscribed
      cost: "199 PLN/month",
      features: ["Position tracking", "Competitor analysis", "Keyword suggestions", "Monthly reports"],
      note: "Polish SEO tool - recommended for local market"
    },
    ahrefs: {
      enabled: false, // Set to true when subscribed
      cost: "$99/month",
      features: ["Global keyword tracking", "Backlink analysis", "Content gap analysis", "Site audit"],
      note: "International tool - good for comprehensive analysis"
    }
  },
  monitoringSchedule: {
    daily: ["Google Search Console check", "Organic traffic monitoring"],
    weekly: ["Position changes review", "Competitor analysis"],
    monthly: ["Full SEO report", "ROI analysis", "Strategy planning"]
  },
  kpis: {
    positions: {
      top3: { target: 50, current: 0, description: "Keywords in top 3 positions" },
      top10: { target: 200, current: 0, description: "Keywords in top 10 positions" },
      averagePosition: { target: 10, current: 0, description: "Average position for key phrases" }
    },
    traffic: {
      organicSessions: { target: "+20% YoY", current: 0, description: "Monthly organic sessions growth" },
      newUsers: { target: "+25% YoY", current: 0, description: "New users from search engines" },
      timeOnSite: { target: ">2 minutes", current: 0, description: "Average session duration" }
    },
    conversions: {
      leadsFromSEO: { target: 50, current: 0, description: "Monthly leads from organic search" },
      phoneCallsFromSEO: { target: 30, current: 0, description: "Monthly phone calls from SEO" },
      calculatorUsage: { target: 100, current: 0, description: "Monthly calculator usage from SEO" }
    }
  }
};

// Generate monitoring report
function generateMonitoringReport() {
  const report = {
    generatedAt: new Date().toISOString(),
    domain: SEO_CONFIG.domain,
    totalKeywords: 0,
    keywordsByTier: {},
    priorityKeywords: [],
    localKeywords: [],
    seasonalKeywords: [],
    recommendations: []
  };

  // Count keywords by tier
  Object.keys(KEYWORDS_TO_MONITOR).forEach(tier => {
    const keywords = KEYWORDS_TO_MONITOR[tier];
    report.keywordsByTier[tier] = {
      count: keywords.length,
      totalVolume: keywords.reduce((sum, kw) => sum + kw.volume, 0),
      keywords: keywords
    };
    report.totalKeywords += keywords.length;
  });

  // Extract priority keywords (priority 1-2)
  Object.values(KEYWORDS_TO_MONITOR).flat().forEach(kw => {
    if (kw.priority <= 2) {
      report.priorityKeywords.push(kw);
    }
    if (kw.keyword.includes(' ')) {
      const words = kw.keyword.split(' ');
      if (words.some(word => ['Warszawa', 'Kraków', 'Wrocław', 'Gdańsk', 'Poznań', 'Łódź', 'Katowice', 'Lublin', 'Szczecin', 'Bydgoszcz', 'Rzeszów'].includes(word))) {
        report.localKeywords.push(kw);
      }
    }
    if (kw.season) {
      report.seasonalKeywords.push(kw);
    }
  });

  // Generate recommendations
  report.recommendations = [
    "Set up Google Search Console property verification",
    "Consider subscribing to Senuto for Polish market analysis (199 PLN/month)",
    "Implement weekly position tracking for Tier 1 keywords",
    "Create monthly SEO performance reports",
    "Monitor seasonal keywords performance during peak periods",
    "Track local keyword performance for each city page",
    "Set up conversion tracking for leads from organic search",
    "Implement schema markup for better SERP visibility",
    "Create content calendar based on seasonal keyword trends",
    "Monitor competitor positions for key phrases"
  ];

  return report;
}

// Export keywords for external tools
function exportKeywordsForTools() {
  const exports = {
    senuto: {
      format: "CSV",
      columns: ["Keyword", "Target URL", "Volume", "Difficulty", "Priority"],
      data: []
    },
    googleSearchConsole: {
      format: "Manual setup",
      queries: [],
      pages: []
    }
  };

  // Prepare data for Senuto
  Object.values(KEYWORDS_TO_MONITOR).flat().forEach(kw => {
    exports.senuto.data.push([
      kw.keyword,
      `${SEO_CONFIG.baseUrl}${kw.targetUrl}`,
      kw.volume,
      kw.difficulty,
      kw.priority
    ]);
    exports.googleSearchConsole.queries.push(kw.keyword);
    if (!exports.googleSearchConsole.pages.includes(kw.targetUrl)) {
      exports.googleSearchConsole.pages.push(kw.targetUrl);
    }
  });

  return exports;
}

// Main execution
if (require.main === module) {
  console.log("🔍 SEO Monitoring Tool for Bizneto");
  console.log("=====================================\n");

  const report = generateMonitoringReport();
  const exports = exportKeywordsForTools();

  console.log(`📊 Total keywords to monitor: ${report.totalKeywords}`);
  console.log(`🎯 Priority keywords (Tier 1-2): ${report.priorityKeywords.length}`);
  console.log(`🏙️  Local keywords: ${report.localKeywords.length}`);
  console.log(`📅 Seasonal keywords: ${report.seasonalKeywords.length}\n`);

  console.log("📈 Keywords by tier:");
  Object.entries(report.keywordsByTier).forEach(([tier, data]) => {
    console.log(`  ${tier}: ${data.count} keywords (${data.totalVolume.toLocaleString()} total volume)`);
  });

  console.log("\n🎯 Top 10 Priority Keywords:");
  report.priorityKeywords
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 10)
    .forEach((kw, index) => {
      console.log(`  ${index + 1}. "${kw.keyword}" (${kw.volume.toLocaleString()}/month) → ${kw.targetUrl}`);
    });

  console.log("\n💡 Recommendations:");
  report.recommendations.forEach((rec, index) => {
    console.log(`  ${index + 1}. ${rec}`);
  });

  // Save reports to files
  const reportsDir = path.join(__dirname, '../reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(reportsDir, 'seo-monitoring-report.json'),
    JSON.stringify(report, null, 2)
  );

  fs.writeFileSync(
    path.join(reportsDir, 'keywords-export.json'),
    JSON.stringify(exports, null, 2)
  );

  console.log(`\n📁 Reports saved to: ${reportsDir}`);
  console.log("   - seo-monitoring-report.json");
  console.log("   - keywords-export.json");
}

module.exports = {
  KEYWORDS_TO_MONITOR,
  SEO_CONFIG,
  generateMonitoringReport,
  exportKeywordsForTools
};
