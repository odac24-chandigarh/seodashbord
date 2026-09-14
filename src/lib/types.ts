export type AgentStatus = 'active' | 'idle' | 'running' | 'warning';

export interface SeoAgent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  lastActive: string;
  tasksCompleted: number;
  description: string;
  icon: string;
}

export interface Competitor {
  id: string;
  domain: string;
  name: string;
  topRankCount: number;
  estTraffic: string;
  strengths: string[];
  contentGaps: string[];
  lastChecked: string;
}

export type SuggestionCategory = 
  | 'Technical' 
  | 'On-Page' 
  | 'Content Gap' 
  | 'Internal Linking' 
  | 'Cannibalization' 
  | 'Local SEO';

export type SuggestionImpact = 'High' | 'Medium' | 'Low';
export type SuggestionStatus = 'pending' | 'approved' | 'rejected';

export interface Suggestion {
  id: string;
  category: SuggestionCategory;
  title: string;
  targetUrl: string;
  reason: string;
  impact: SuggestionImpact;
  potentialGain: string;
  fileAffected: string;
  diffBefore: string;
  diffAfter: string;
  status: SuggestionStatus;
  createdAt: string;
}

export interface KeywordMetric {
  query: string;
  impressions: number;
  clicks: number;
  ctr: number;
  position: number;
  change: number; // positive = gain, negative = drop
  targetUrl: string;
  intent: 'Commercial' | 'Transactional' | 'Informational';
  status: 'striking' | 'top3' | 'dropping' | 'opportunity';
}

export interface TriCityLocation {
  name: string;
  slug: string;
  targetQuery: string;
  currentRank: number;
  impressions: number;
  status: 'Ranking' | 'Needs Optimization' | 'Missing Page';
  schemaValid: boolean;
}
