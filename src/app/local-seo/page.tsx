'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { TriCityLocation } from '@/lib/types';
import { INITIAL_LOCATIONS } from '@/lib/data/initialData';
import { 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ExternalLink,
  Car,
  Compass
} from 'lucide-react';

export default function LocalSeoPage() {
  const [locations] = useState<TriCityLocation[]>(INITIAL_LOCATIONS);
  const [generatedBrief, setGeneratedBrief] = useState<string | null>(null);

  const handleGenerateBrief = (locName: string) => {
    setGeneratedBrief(`Local SEO Brief generated for ${locName}:
1. Focus Keywords: self drive cars ${locName}, car hire near ${locName}, doorstep delivery
2. Local Entities: Sector market, parking landmarks, delivery timings, security deposit policy
3. Recommended Schema: AutoRental with geo-coordinates (latitude/longitude)
4. WhatsApp Direct Booking CTA hook`);
  };

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="Tri-City Local SEO & Landing Pages" 
        subtitle="Hyper-local targeting for Chandigarh, Mohali, Panchkula, Airport IXC, and Railway Station" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Local Brief Modal/Banner if generated */}
        {generatedBrief && (
          <div className="p-5 rounded-2xl bg-indigo-950/70 border border-indigo-500/40 text-xs text-indigo-200 shadow-xl space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                AI Local Content Brief Ready
              </span>
              <button 
                onClick={() => setGeneratedBrief(null)}
                className="text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
            <pre className="font-mono text-[11px] whitespace-pre-wrap bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-slate-300">
              {generatedBrief}
            </pre>
          </div>
        )}

        {/* Local Tri-City Strategic Map Header */}
        <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Tri-City Geo-Targeting Matrix</h2>
              <p className="text-xs text-slate-400">
                Self-drive rentals are strictly geo-dependent. Dedicated landing pages capture 85% of high-intent bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Locations List */}
        <div className="space-y-4">
          {locations.map((loc) => (
            <div 
              key={loc.slug}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-indigo-400 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{loc.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-0.5">
                      <span>Target Query: <strong className="text-slate-200">{loc.targetQuery}</strong></span>
                      <span className="text-slate-600">|</span>
                      <span>Target Slug: <code className="text-indigo-400 font-mono">/{loc.slug}</code></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleGenerateBrief(loc.name)}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Generate Local Brief</span>
                  </button>
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                <div>
                  <span className="text-[11px] text-slate-500 block">Google Rank</span>
                  <span className="font-bold text-white mt-0.5 block">
                    {loc.currentRank > 0 ? `#${loc.currentRank}` : 'Not Ranked'}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Monthly Impressions</span>
                  <span className="font-bold text-indigo-400 mt-0.5 block font-mono">
                    {loc.impressions.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Schema Markup</span>
                  <span className="mt-0.5 block">
                    {loc.schemaValid ? (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Valid
                      </span>
                    ) : (
                      <span className="text-rose-400 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> Missing
                      </span>
                    )}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 block">Action Status</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold inline-block mt-0.5 ${
                    loc.status === 'Ranking'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : loc.status === 'Needs Optimization'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}>
                    {loc.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
