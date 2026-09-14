import { SeoAgent, Competitor, Suggestion, KeywordMetric, TriCityLocation } from '../types';

export const INITIAL_AGENTS: SeoAgent[] = [
  {
    id: 'master',
    name: 'Master SEO Agent',
    role: 'Orchestrator & Strategy Director',
    status: 'active',
    lastActive: 'Just now',
    tasksCompleted: 48,
    description: 'Coordinates worker agents, deduplicates findings, prioritizes ranking opportunities.',
    icon: 'Brain'
  },
  {
    id: 'technical',
    name: 'Technical SEO Agent',
    role: 'Code & Web Vitals Auditor',
    status: 'active',
    lastActive: '5m ago',
    tasksCompleted: 142,
    description: 'Scans Next.js code for canonicals, sitemap, schema, broken links, Core Web Vitals.',
    icon: 'Wrench'
  },
  {
    id: 'gsc',
    name: 'Search Console Agent',
    role: 'GSC Traffic & Anomaly Tracker',
    status: 'active',
    lastActive: '12m ago',
    tasksCompleted: 310,
    description: 'Detects striking distance queries (rank 4-20), low CTR anomalies, ranking drops.',
    icon: 'TrendingUp'
  },
  {
    id: 'serp_competitor',
    name: 'SERP & Competitor Agent',
    role: 'Market Benchmarker',
    status: 'active',
    lastActive: '25m ago',
    tasksCompleted: 89,
    description: 'Benchmarks Top 10 Google results in Chandigarh against competitor landing pages.',
    icon: 'ShieldCheck'
  },
  {
    id: 'onpage',
    name: 'On-Page SEO Agent',
    role: 'Metadata & Content Density',
    status: 'idle',
    lastActive: '1h ago',
    tasksCompleted: 64,
    description: 'Optimizes H1/H2 hierarchy, semantic entities, LocalBusiness schema, and FAQs.',
    icon: 'FileText'
  },
  {
    id: 'content_gap',
    name: 'Content Gap Agent',
    role: 'Cluster & Topic Architect',
    status: 'active',
    lastActive: '30m ago',
    tasksCompleted: 22,
    description: 'Identifies missing location pages, car-specific pages, and airport rental guides.',
    icon: 'Layers'
  },
  {
    id: 'internal_linking',
    name: 'Internal Linking Agent',
    role: 'Graph & Flow Optimizer',
    status: 'idle',
    lastActive: '2h ago',
    tasksCompleted: 51,
    description: 'Builds internal link graph, detects orphan pages, recommends source -> target anchors.',
    icon: 'GitPullRequest'
  },
  {
    id: 'cannibalization',
    name: 'Keyword Cannibalization Agent',
    role: 'Conflict Resolver',
    status: 'active',
    lastActive: '45m ago',
    tasksCompleted: 18,
    description: 'Flags multiple ODAC24 URLs competing for the same Chandigarh search query.',
    icon: 'AlertTriangle'
  },
  {
    id: 'content',
    name: 'Content Agent',
    role: 'Brief & Draft Generator',
    status: 'idle',
    lastActive: '3h ago',
    tasksCompleted: 34,
    description: 'Generates helpful, localized rental briefs with Tri-city landmarks and fleet specs.',
    icon: 'PenTool'
  },
  {
    id: 'local_seo',
    name: 'Local SEO Agent',
    role: 'Tri-City Geo Specialist',
    status: 'active',
    lastActive: '15m ago',
    tasksCompleted: 95,
    description: 'Focuses on Chandigarh, Mohali, Panchkula, IXC Airport, and Railway Station.',
    icon: 'MapPin'
  },
  {
    id: 'keyword_research',
    name: 'Keyword Research Agent',
    role: 'Opportunity Discoverer',
    status: 'active',
    lastActive: '18m ago',
    tasksCompleted: 120,
    description: 'Discovers long-tail, road trip, and high-intent rental queries in Punjab/Haryana/HP.',
    icon: 'Search'
  },
  {
    id: 'qa_gatekeeper',
    name: 'SEO QA Agent',
    role: 'Pre-Deployment Gatekeeper',
    status: 'active',
    lastActive: 'Just now',
    tasksCompleted: 77,
    description: 'Guarantees no accidental noindex, valid schema, no broken links, and clean build tests.',
    icon: 'CheckCircle2'
  }
];

export const INITIAL_COMPETITORS: Competitor[] = [
  {
    id: 'comp-1',
    domain: 'chandigarhselfdrivecars.com',
    name: 'Chandigarh Self Drive Cars',
    topRankCount: 14,
    estTraffic: '12.4K / mo',
    strengths: ['High keyword density for Sector 17/43', 'Dedicated Airport delivery FAQs', 'Old domain age'],
    contentGaps: ['Poor mobile PageSpeed (Score 42)', 'Missing FAQ Schema JSON-LD', 'No fleet comparison tables'],
    lastChecked: 'Today at 11:20 AM'
  },
  {
    id: 'comp-2',
    domain: 'zoomcar.com',
    name: 'Zoomcar Chandigarh',
    topRankCount: 28,
    estTraffic: '45.8K / mo',
    strengths: ['Massive brand domain authority', 'App download hooks', 'High internal link density'],
    contentGaps: ['Generic boilerplate city content', 'No direct phone/WhatsApp booking CTA', 'Slow customer support reviews'],
    lastChecked: 'Yesterday'
  },
  {
    id: 'comp-3',
    domain: 'mychoize.com',
    name: 'MyChoize Car Rental',
    topRankCount: 8,
    estTraffic: '6.2K / mo',
    strengths: ['Clear pricing breakdown', 'Unlimited KMs package highlighted'],
    contentGaps: ['No specific Mohali or Panchkula sub-pages', 'Weak local Google Business signals'],
    lastChecked: '2 days ago'
  },
  {
    id: 'comp-4',
    domain: 'revv.co.in',
    name: 'Revv Chandigarh',
    topRankCount: 11,
    estTraffic: '18.1K / mo',
    strengths: ['Clean booking UI', 'Strong brand recognition'],
    contentGaps: ['Does not cover Shimla / Manali road trip packages from Chandigarh', 'Zero local FAQ schema'],
    lastChecked: '3 days ago'
  }
];

export const INITIAL_SUGGESTIONS: Suggestion[] = [
  {
    id: 'sug-1',
    category: 'On-Page',
    title: 'Add Chandigarh Airport (IXC) Terminal Pickup Schema & Title Optimization',
    targetUrl: 'https://odac24.in/self-drive-cars-chandigarh-airport',
    reason: 'Search Console shows 840 impressions for "self drive cars Chandigarh airport" stuck at Position 6.8 with 1.9% CTR. Competitor #1 ranks with specific Terminal 2 pickup instructions.',
    impact: 'High',
    potentialGain: '+400 clicks/mo (Move from Rank 7 to Top 3)',
    fileAffected: 'src/app/self-drive-cars-chandigarh-airport/page.tsx',
    diffBefore: `export const metadata = {
  title: "Car Rental Chandigarh Airport | ODAC24",
  description: "Rent a self drive car at Chandigarh airport with ODAC24.",
};`,
    diffAfter: `export const metadata = {
  title: "Self Drive Cars Chandigarh Airport (IXC) | 24/7 Terminal Delivery - ODAC24",
  description: "Get instant self-drive car delivery at Chandigarh International Airport (IXC) Terminal 1 & 2. Zero security deposit options, unlimited KMs & sanitize fleet.",
};

// Added LocalBusiness / AutoRental Structured Schema + 4 FAQs`,
    status: 'pending',
    createdAt: 'Today at 09:15 AM'
  },
  {
    id: 'sug-2',
    category: 'Technical',
    title: 'Inject Missing AutoRental Schema JSON-LD on Main Chandigarh Page',
    targetUrl: 'https://odac24.in/self-drive-cars-chandigarh',
    reason: 'Google rich results test found zero structured data on the primary revenue page. Adding AutoRental Schema will qualify ODAC24 for the rich snippet star ratings and price ranges in SERP.',
    impact: 'High',
    potentialGain: '+15% Organic CTR boost via Rich Snippets',
    fileAffected: 'src/app/self-drive-cars-chandigarh/layout.tsx',
    diffBefore: `// No JSON-LD Schema markup present in layout.tsx`,
    diffAfter: `<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoRental",
      "name": "ODAC24 Self Drive Cars Chandigarh",
      "image": "https://odac24.in/assets/logo.png",
      "telephone": "+91-XXXXXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chandigarh",
        "addressRegion": "CH",
        "addressCountry": "IN"
      },
      "priceRange": "₹1,200 - ₹5,000/day"
    })
  }}
/>`,
    status: 'pending',
    createdAt: 'Today at 10:40 AM'
  },
  {
    id: 'sug-3',
    category: 'Internal Linking',
    title: 'Link Mohali & Panchkula Landing Pages from Chandigarh Fleet Hub',
    targetUrl: 'https://odac24.in/fleet',
    reason: 'The Mohali (/self-drive-cars-in-mohali) page is currently an orphan page with only 1 inbound link from the footer. Distributing link juice from /fleet will raise its ranking power.',
    impact: 'Medium',
    potentialGain: 'Lift Mohali rank from Pos 14.2 to Top 8',
    fileAffected: 'src/components/FleetSection.tsx',
    diffBefore: `<div className="mt-4 text-sm text-gray-500">
  Available across Chandigarh city locations.
</div>`,
    diffAfter: `<div className="mt-4 text-sm text-gray-400">
  Available across Chandigarh, 
  <Link href="/self-drive-cars-in-mohali" className="text-brand-400 hover:underline">
    Mohali (Phase 7, 8, Aerocity)
  </Link>, and 
  <Link href="/self-drive-cars-in-panchkula" className="text-brand-400 hover:underline">
    Panchkula
  </Link>.
</div>`,
    status: 'pending',
    createdAt: 'Yesterday'
  },
  {
    id: 'sug-4',
    category: 'Content Gap',
    title: 'Create New Dedicated Landing Page: Chandigarh to Shimla/Manali Road Trip Cars',
    targetUrl: 'https://odac24.in/chandigarh-to-shimla-manali-self-drive-cars',
    reason: 'GSC shows 620 monthly impressions for "self drive car from Chandigarh to Manali". Competitors Revv and Zoomcar get 25% of their weekend bookings through hill-station road trips.',
    impact: 'High',
    potentialGain: 'Capture 35+ high-value weekend bookings/month',
    fileAffected: 'src/app/chandigarh-to-shimla-manali-self-drive-cars/page.tsx',
    diffBefore: `// Page does not exist (404)`,
    diffAfter: `// New Next.js Server Component with hill-station SUV fleet (Thar, Scorpio, Creta), 
// hill driving guidelines, permit information & 24/7 roadside assistance guarantee.`,
    status: 'pending',
    createdAt: '2 days ago'
  }
];

export const INITIAL_KEYWORDS: KeywordMetric[] = [
  {
    query: 'self drive cars in Chandigarh',
    impressions: 4820,
    clicks: 312,
    ctr: 6.47,
    position: 4.8,
    change: 1.2,
    targetUrl: '/self-drive-cars-chandigarh',
    intent: 'Transactional',
    status: 'striking'
  },
  {
    query: 'self drive car rental Chandigarh',
    impressions: 3950,
    clicks: 245,
    ctr: 6.20,
    position: 5.2,
    change: 0.8,
    targetUrl: '/self-drive-cars-chandigarh',
    intent: 'Transactional',
    status: 'striking'
  },
  {
    query: 'self drive cars Chandigarh airport',
    impressions: 1840,
    clicks: 82,
    ctr: 4.45,
    position: 6.8,
    change: -1.1,
    targetUrl: '/self-drive-cars-chandigarh-airport',
    intent: 'Commercial',
    status: 'striking'
  },
  {
    query: 'car rental Chandigarh',
    impressions: 6200,
    clicks: 188,
    ctr: 3.03,
    position: 8.4,
    change: -0.4,
    targetUrl: '/',
    intent: 'Commercial',
    status: 'opportunity'
  },
  {
    query: 'self drive cars in Mohali',
    impressions: 980,
    clicks: 44,
    ctr: 4.48,
    position: 12.1,
    change: 2.4,
    targetUrl: '/self-drive-cars-in-mohali',
    intent: 'Transactional',
    status: 'opportunity'
  },
  {
    query: 'self drive cars in Panchkula',
    impressions: 740,
    clicks: 31,
    ctr: 4.18,
    position: 14.6,
    change: 0.2,
    targetUrl: '/self-drive-cars-in-panchkula',
    intent: 'Transactional',
    status: 'opportunity'
  },
  {
    query: 'Chandigarh self drive cars',
    impressions: 2150,
    clicks: 140,
    ctr: 6.51,
    position: 4.1,
    change: 1.5,
    targetUrl: '/self-drive-cars-chandigarh',
    intent: 'Commercial',
    status: 'striking'
  }
];

export const INITIAL_LOCATIONS: TriCityLocation[] = [
  {
    name: 'Chandigarh City (Sector 17, 22, 35, 43)',
    slug: 'self-drive-cars-chandigarh',
    targetQuery: 'self drive cars in Chandigarh',
    currentRank: 4.8,
    impressions: 4820,
    status: 'Ranking',
    schemaValid: true
  },
  {
    name: 'Chandigarh International Airport (IXC)',
    slug: 'self-drive-cars-chandigarh-airport',
    targetQuery: 'self drive cars Chandigarh airport',
    currentRank: 6.8,
    impressions: 1840,
    status: 'Needs Optimization',
    schemaValid: false
  },
  {
    name: 'Mohali (Phase 3B2, 7, 8, Aerocity)',
    slug: 'self-drive-cars-in-mohali',
    targetQuery: 'self drive cars in Mohali',
    currentRank: 12.1,
    impressions: 980,
    status: 'Needs Optimization',
    schemaValid: false
  },
  {
    name: 'Panchkula (Sector 5, 11, 20, MDC)',
    slug: 'self-drive-cars-in-panchkula',
    targetQuery: 'self drive cars in Panchkula',
    currentRank: 14.6,
    impressions: 740,
    status: 'Needs Optimization',
    schemaValid: false
  },
  {
    name: 'Chandigarh Railway Station',
    slug: 'self-drive-cars-chandigarh-railway-station',
    targetQuery: 'car rental Chandigarh railway station',
    currentRank: 0,
    impressions: 420,
    status: 'Missing Page',
    schemaValid: false
  }
];
