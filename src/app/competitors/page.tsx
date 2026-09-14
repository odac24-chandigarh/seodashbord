'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Competitor } from '@/lib/types';
import { INITIAL_COMPETITORS } from '@/lib/data/initialData';
import { 
  ShieldAlert, 
  Plus, 
  Trash2, 
  RefreshCw, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle,
  Flame,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function CompetitorsPage() {
  const [competitors, setCompetitors] = useState<Competitor[]>(INITIAL_COMPETITORS);
  const [newDomain, setNewDomain] = useState('');
  const [newName, setNewName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [scanningDomain, setScanningDomain] = useState<string | null>(null);

  const handleAddCompetitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDomain.trim()) return;

    const cleanedDomain = newDomain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/$/, '');
    const entryName = newName.trim() || cleanedDomain.split('.')[0].toUpperCase();

    const newComp: Competitor = {
      id: `comp-${Date.now()}`,
      domain: cleanedDomain,
      name: entryName,
      topRankCount: Math.floor(Math.random() * 15) + 5,
      estTraffic: 'Scanning...',
      strengths: ['Local Chandigarh keyword presence', 'Active service fleet in Tri-city'],
      contentGaps: ['Scanning schema...', 'Analyzing FAQ structure...'],
      lastChecked: 'Just added'
    };

    setCompetitors(prev => [newComp, ...prev]);
    setNewDomain('');
    setNewName('');
    setIsAdding(false);

    // Simulate agent scanning
    setScanningDomain(cleanedDomain);
    setTimeout(() => {
      setCompetitors(prev => prev.map(c => {
        if (c.domain === cleanedDomain) {
          return {
            ...c,
            estTraffic: '8.5K / mo',
            contentGaps: ['Missing Panchkula sub-pages', 'Lacks transparent deposit policy', 'No Airport delivery FAQ']
          };
        }
        return c;
      }));
      setScanningDomain(null);
    }, 2500);
  };

  const handleDelete = (id: string) => {
    setCompetitors(prev => prev.filter(c => c.id !== id));
  };

  const handleRescan = (domain: string) => {
    setScanningDomain(domain);
    setTimeout(() => {
      setScanningDomain(null);
    }, 2000);
  };

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="Competitor Radar & Benchmarking" 
        subtitle="Track competitors, identify their content gaps, and direct agents on who to beat in Chandigarh" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Header & Add Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Target Competitor Watchlist</h2>
              <p className="text-xs text-slate-400">
                SERP Agent continuously scrapes these domains to find opportunities for ODAC24
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdding(!isAdding)}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add Competitor Domain</span>
          </button>
        </div>

        {/* Add Competitor Form Drawer */}
        {isAdding && (
          <form 
            onSubmit={handleAddCompetitor}
            className="p-5 rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-3 duration-200"
          >
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-indigo-400" />
              Add Target Competitor for AI Agent Analysis
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">
                  Competitor Domain (e.g. zoomcar.com or local site)
                </label>
                <input
                  type="text"
                  required
                  placeholder="chandigarhselfdrivecars.com"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">
                  Brand / Nickname (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Local Competitor"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/20"
              >
                Start AI Analysis
              </button>
            </div>
          </form>
        )}

        {/* Competitors Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {competitors.map((comp) => {
            const isScanning = scanningDomain === comp.domain;
            return (
              <div 
                key={comp.id}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 space-y-4 shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">{comp.name}</h3>
                      <a 
                        href={`https://${comp.domain}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-500 hover:text-indigo-400 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <p className="text-xs font-mono text-indigo-400">{comp.domain}</p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleRescan(comp.domain)}
                      disabled={isScanning}
                      className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Rescan Domain"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin text-indigo-400' : ''}`} />
                    </button>
                    <button
                      onClick={() => handleDelete(comp.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors"
                      title="Remove Competitor"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Top 10 Rankings</span>
                    <span className="text-sm font-bold text-white flex items-center gap-1 mt-0.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" />
                      {comp.topRankCount} Core Queries
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Estimated Organic Traffic</span>
                    <span className="text-sm font-bold text-emerald-400 mt-0.5 block">
                      {comp.estTraffic}
                    </span>
                  </div>
                </div>

                {/* Content Gaps & Opportunities Found for ODAC24 */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    Their Vulnerabilities / Opportunities for ODAC24:
                  </span>
                  <ul className="space-y-1.5">
                    {comp.contentGaps.map((gap, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-rose-400 font-bold shrink-0">✕</span>
                        <span>{gap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Strengths */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Why they currently rank:
                  </span>
                  <ul className="space-y-1">
                    {comp.strengths.map((str, i) => (
                      <li key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[10px] text-slate-500 pt-1">
                  Last audited by SERP Agent: {comp.lastChecked}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
