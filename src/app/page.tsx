'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { 
  TrendingUp, 
  Eye, 
  Target, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  Car,
  MapPin,
  Cpu,
  Brain,
  Wrench,
  Layers,
  Search,
  PenTool,
  GitPullRequest,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { INITIAL_AGENTS, INITIAL_LOCATIONS, INITIAL_COMPETITORS } from '@/lib/data/initialData';

export default function OverviewPage() {
  const [agents] = useState(INITIAL_AGENTS);
  const [locations] = useState(INITIAL_LOCATIONS);
  const [competitors] = useState(INITIAL_COMPETITORS);

  return (
    <div className="flex-1 flex flex-col pb-12">
      <Navbar 
        title="SEO Command Center" 
        subtitle="Live performance, 12 specialized agents, and Tri-City ranking telemetry for ODAC24.in" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Urgent Improvement Action Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-600/20 border border-indigo-500/40 rounded-xl text-indigo-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Ready for Review
                </span>
                <span className="text-xs text-slate-400">Master SEO Agent synthesized report</span>
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                4 High-Impact SEO Improvements Waiting For Your Approval
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                Including Chandigarh Airport IXC title & schema revamp, and internal link distribution for Mohali. Approving creates a safe Git PR with 0 risk to production.
              </p>
            </div>
          </div>
          <Link
            href="/suggestions"
            className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
          >
            <span>Review & Approve</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Key KPI Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Impressions */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">Search Impressions</span>
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">21,830</span>
              <span className="flex items-center text-xs font-bold text-emerald-400">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +14.2%
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Past 28 days via Search Console</p>
          </div>

          {/* Card 2: Average Position */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">Average Position</span>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">5.4</span>
              <span className="flex items-center text-xs font-bold text-emerald-400">
                <ArrowUpRight className="w-3.5 h-3.5" />
                +1.8 Pos
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Top 7 Core Chandigarh Queries</p>
          </div>

          {/* Card 3: Striking Distance */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">Striking Distance (4-15)</span>
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Target className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white tracking-tight">18 Queries</span>
              <span className="text-xs font-semibold text-amber-400">Quick Wins</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Small tweaks = direct Top 3 rank</p>
          </div>

          {/* Card 4: Mobile Core Web Vitals */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider">Mobile Performance</span>
              <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-400 tracking-tight">92 / 100</span>
              <span className="text-xs font-semibold text-slate-400">LCP 2.1s</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">PageSpeed Insights Core Web Vitals</p>
          </div>
        </div>

        {/* Middle Section: Tri-City Local Status & Competitor Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tri-City Focus Card */}
          <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <h3 className="text-sm font-bold text-white">Tri-City Local Landing Page Matrix</h3>
              </div>
              <Link href="/local-seo" className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
                View Full Heatmap →
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-2 font-semibold">Location / Hub</th>
                    <th className="pb-2 font-semibold">Target Query</th>
                    <th className="pb-2 font-semibold">Current Rank</th>
                    <th className="pb-2 font-semibold">Schema</th>
                    <th className="pb-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {locations.map((loc) => (
                    <tr key={loc.slug} className="hover:bg-slate-800/30 transition-colors">
                      <td className="py-2.5 font-medium text-slate-200">{loc.name}</td>
                      <td className="py-2.5 text-slate-400 font-mono text-[11px]">{loc.targetQuery}</td>
                      <td className="py-2.5 font-bold text-white">
                        {loc.currentRank > 0 ? `#${loc.currentRank}` : 'Unranked'}
                      </td>
                      <td className="py-2.5">
                        {loc.schemaValid ? (
                          <span className="text-emerald-400 font-medium">Valid</span>
                        ) : (
                          <span className="text-rose-400 font-medium">Missing</span>
                        )}
                      </td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          loc.status === 'Ranking'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : loc.status === 'Needs Optimization'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}>
                          {loc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Competitor Watchlist Snapshot */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  <h3 className="text-sm font-bold text-white">Competitor Radar</h3>
                </div>
                <Link href="/competitors" className="text-xs font-medium text-indigo-400 hover:text-indigo-300">
                  Manage →
                </Link>
              </div>

              <div className="space-y-2.5">
                {competitors.slice(0, 3).map((comp) => (
                  <div key={comp.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-white">{comp.name}</span>
                      <span className="text-[10px] text-indigo-400 font-mono">{comp.domain}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5 pt-1.5 border-t border-slate-800">
                      <span>Top 10 Ranks: <strong className="text-slate-200">{comp.topRankCount}</strong></span>
                      <span className="text-rose-400 font-medium">{comp.contentGaps.length} Gaps found</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/competitors"
              className="w-full text-center py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-all block mt-2"
            >
              Add New Competitor Domain
            </Link>
          </div>
        </div>

        {/* 12 AI Agents Health & Activity Grid */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" />
                12 Specialized AI SEO Agents (Live Heartbeat)
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Each agent handles a specific domain of ODAC24's organic search engine optimization.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              All Systems Operational
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {agents.map((agent) => (
              <div 
                key={agent.id} 
                className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-white">{agent.name}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                      agent.status === 'active' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-indigo-400 font-medium mb-1.5">{agent.role}</p>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 pt-3 mt-3 border-t border-slate-800/80">
                  <span>Tasks: {agent.tasksCompleted}</span>
                  <span>{agent.lastActive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
