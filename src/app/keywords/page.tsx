'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { KeywordMetric } from '@/lib/types';
import { INITIAL_KEYWORDS } from '@/lib/data/initialData';
import { 
  Search, 
  Target, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Sparkles,
  Filter,
  ExternalLink
} from 'lucide-react';

export default function KeywordsPage() {
  const [keywords] = useState<KeywordMetric[]>(INITIAL_KEYWORDS);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'striking' | 'top3' | 'opportunity'>('all');

  const filteredKeywords = keywords.filter(kw => {
    const matchesSearch = kw.query.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterType === 'all') return matchesSearch;
    return matchesSearch && kw.status === filterType;
  });

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="Keyword Intelligence & Striking Distance" 
        subtitle="Search Console query telemetry, position tracking, and high-CTR quick win opportunities" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Quick Insights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Striking Distance (Pos 4–15)</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-amber-400">
                {keywords.filter(k => k.status === 'striking').length}
              </span>
              <span className="text-xs text-slate-400">High-intent queries</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Top priority for On-Page & Schema optimizations
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Total Monthly Tracked Impressions</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-indigo-400">
                {keywords.reduce((acc, k) => acc + k.impressions, 0).toLocaleString()}
              </span>
              <span className="text-xs text-emerald-400 font-bold">+18% vs prev</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Tri-City self-drive car searches in GSC
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium">Average Top Query CTR</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-emerald-400">5.2%</span>
              <span className="text-xs text-slate-400">Industry avg: 3.1%</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Higher CTR achieved via direct car rates in title
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search target keyword or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-indigo-500 placeholder-slate-500"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All ({keywords.length})
            </button>
            <button
              onClick={() => setFilterType('striking')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'striking'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Striking Distance (4–15)
            </button>
            <button
              onClick={() => setFilterType('opportunity')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filterType === 'opportunity'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              High Opportunity
            </button>
          </div>
        </div>

        {/* Keywords Table */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="pb-3 font-semibold">Search Query</th>
                  <th className="pb-3 font-semibold">Intent</th>
                  <th className="pb-3 font-semibold">Impressions</th>
                  <th className="pb-3 font-semibold">Clicks</th>
                  <th className="pb-3 font-semibold">CTR</th>
                  <th className="pb-3 font-semibold">Current Rank</th>
                  <th className="pb-3 font-semibold">Target Landing Page</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredKeywords.map((kw, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 font-semibold text-white">
                      {kw.query}
                    </td>
                    <td className="py-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        kw.intent === 'Transactional'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}>
                        {kw.intent}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300 font-mono">{kw.impressions.toLocaleString()}</td>
                    <td className="py-3 text-slate-300 font-mono">{kw.clicks}</td>
                    <td className="py-3 text-slate-300 font-mono">{kw.ctr}%</td>
                    <td className="py-3">
                      <div className="flex items-center gap-1.5 font-bold text-white">
                        <span>#{kw.position}</span>
                        {kw.change > 0 ? (
                          <span className="flex items-center text-[10px] text-emerald-400 font-normal">
                            <ArrowUpRight className="w-3 h-3" /> +{kw.change}
                          </span>
                        ) : kw.change < 0 ? (
                          <span className="flex items-center text-[10px] text-rose-400 font-normal">
                            <ArrowDownRight className="w-3 h-3" /> {kw.change}
                          </span>
                        ) : null}
                      </div>
                    </td>
                    <td className="py-3 text-indigo-400 font-mono text-[11px]">
                      {kw.targetUrl}
                    </td>
                    <td className="py-3 text-right">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        kw.status === 'striking'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                      }`}>
                        {kw.status === 'striking' ? 'Striking Distance' : 'Opportunity'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
