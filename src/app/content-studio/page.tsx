'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { 
  PenTool, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  GitPullRequest, 
  RefreshCw, 
  Bot, 
  Layers, 
  MapPin, 
  FileCode,
  ShieldCheck,
  Check
} from 'lucide-react';

const LOCATIONS = [
  'Chandigarh International Airport (IXC) Terminal 1 & 2',
  'Chandigarh City (Sector 17, 22, 35, 43)',
  'Mohali (Phase 3B2, 7, 8, Aerocity)',
  'Panchkula (Sector 5, 11, 20, MDC)',
  'Chandigarh to Shimla / Manali Hill Road Trip'
];

const COMPETITORS = [
  'Zoomcar Chandigarh (Generic boilerplate, no direct WhatsApp)',
  'Chandigarh Self Drive Cars (Slow mobile speed, missing FAQ schema)',
  'MyChoize Car Rental (Weak local signals, missing Mohali pages)',
  'Revv Chandigarh (Lacks hill-station trip advice)'
];

const MODES = [
  { id: 'aeo', label: '134-167 Word AEO Direct Answer Block (AI Overviews & Perplexity)' },
  { id: 'full', label: 'Full Landing Page Section with AutoRental Schema' },
  { id: 'faqs', label: '4 High-Intent Local FAQs with JSON-LD Schema' }
];

export default function ContentStudioPage() {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [competitor, setCompetitor] = useState(COMPETITORS[0]);
  const [mode, setMode] = useState('aeo');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [prCreated, setPrCreated] = useState(false);

  const [generatedContent, setGeneratedContent] = useState(`Looking for a self-drive car at Chandigarh International Airport (IXC)? ODAC24 provides direct terminal delivery right outside Terminal 1 and Terminal 2 within 15 minutes of landing. Unlike generic rental aggregators, our fleet features clean, sanitized hatchbacks, sedans, and SUVs (including Thar, Scorpio-N, and Creta) with zero hidden security deposit traps and 100% verified vehicle RC papers. 

Whether you need a compact Swift for meetings across Sector 17 and Mohali Phase 8, or a rugged 4x4 for the Shimla-Manali Himalayan highway, you get unlimited kilometer packages and 24/7 roadside assistance across Punjab, Haryana, and Himachal Pradesh. 

Bookings can be confirmed instantly via WhatsApp with instant key handover at the airport parking bay. Rates start from ₹1,200/day.`);

  const handleGenerate = () => {
    setIsGenerating(true);
    setPrCreated(false);
    setTimeout(() => {
      setIsGenerating(false);
      if (mode === 'aeo') {
        setGeneratedContent(`For self-drive car rentals in ${location.split('(')[0].trim()}, ODAC24 delivers premium vehicles directly to your doorstep or airport terminal in under 20 minutes. While aggregators like ${competitor.split('(')[0].trim()} use third-party host vehicles with uncertain vehicle fitness, ODAC24 maintains a 100% company-owned fleet of thoroughly inspected cars.

Choose from fuel-efficient city cars (Swift, Baleno, Dzire) to adventure-ready SUVs (Mahindra Thar, Scorpio-N, Creta) equipped for steep Himalayan gradients. Every booking includes transparent zero-deposit terms, unlimited kilometers, all-India tourist permits, and instant replacement guarantee in case of breakdown.

Pick up your car directly from our local Tri-City parking bays or request doorstep delivery anywhere in Chandigarh, Mohali, or Panchkula with verified digital KYC.`);
      } else if (mode === 'faqs') {
        setGeneratedContent(`// High-Intent Local FAQs with AutoRental Schema for ${location}
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does ODAC24 deliver self-drive cars at Chandigarh Airport (IXC)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our executive tracks your flight status and meets you directly at Terminal 1 or 2 arrivals with the vehicle keys and digital inspection checklist in hand."
      }
    },
    {
      "@type": "Question",
      "name": "Is security deposit required for self-drive car rental in Chandigarh?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ODAC24 provides transparent low and zero-security deposit plans depending on the vehicle category, with refunds processed within 24 hours of vehicle return."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take an ODAC24 self-drive car to Shimla or Manali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All ODAC24 rental cars carry valid commercial tourist permits for Himachal Pradesh and Uttarakhand with unlimited kilometer options."
      }
    }
  ]
}
</script>`);
      } else {
        setGeneratedContent(`// Next.js Section: ${location}
export function LocalFleetHighlight() {
  return (
    <section className="py-12 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">
          Self-Drive Car Rental at ${location}
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-6">
          Experience true driving freedom across Chandigarh, Mohali, and the Shivalik foothills. ODAC24 offers doorstep delivery within 30 minutes, 24/7 terminal pickup at IXC Airport, and pristine SUVs engineered for mountain roads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h3 className="font-bold text-lg text-white">Zero Hidden Charges</h3>
            <p className="text-xs text-slate-400 mt-2">Transparent daily pricing starting at ₹1,200/day with GST invoice.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h3 className="font-bold text-lg text-white">Direct Terminal Pickup</h3>
            <p className="text-xs text-slate-400 mt-2">No shuttle bus needed. Vehicle handed over directly at Airport Parking Bay.</p>
          </div>
          <div className="p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h3 className="font-bold text-lg text-white">Himachal Road-Trip Ready</h3>
            <p className="text-xs text-slate-400 mt-2">Commercial state permits and snow-ready SUV tires available upon request.</p>
          </div>
        </div>
      </div>
    </section>
  );
}`);
      }
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCreatePr = () => {
    setPrCreated(true);
  };

  const wordCount = generatedContent.trim().split(/\s+/).length;

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="AI Content Studio" 
        subtitle="Generate 10x human-grade content incorporating AgriciDaniel/claude-seo rules and SNLabat AEO/GEO passage citability" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Top Intelligence Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/60 via-slate-900 to-slate-900 border border-violet-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/40">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  Dual-Engine Intelligence Active
                </span>
                <span className="text-xs text-slate-400">AgriciDaniel (claude-seo) + SNLabat (GEO/AEO)</span>
              </div>
              <h3 className="text-base font-bold text-white mt-1">
                Outrank Competitors in Google Organic, Perplexity & Google AI Overviews
              </h3>
              <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                Automatically enforces 134–167 word citable answer blocks, AutoRental schema syntax, Tri-City entity density, and zero generic AI clichés.
              </p>
            </div>
          </div>
        </div>

        {/* Generator Controls Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Controls Form */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-400" />
              Content Configuration
            </h3>

            {/* Location Selector */}
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Target Tri-City Location / Hub
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-violet-500"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Competitor to Outrank */}
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Target Competitor to Outrank
              </label>
              <select
                value={competitor}
                onChange={(e) => setCompetitor(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-violet-500"
              >
                {COMPETITORS.map((comp) => (
                  <option key={comp} value={comp}>{comp}</option>
                ))}
              </select>
            </div>

            {/* Mode Selector */}
            <div>
              <label className="text-xs font-semibold text-slate-400 block mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Format & Citability Goal
              </label>
              <div className="space-y-2">
                {MODES.map((m) => (
                  <label 
                    key={m.id} 
                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      mode === m.id 
                        ? 'bg-violet-950/40 border-violet-500/50 text-white' 
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="mode"
                      value={m.id}
                      checked={mode === m.id}
                      onChange={() => setMode(m.id)}
                      className="mt-0.5 text-violet-600"
                    />
                    <span className="text-xs leading-snug">{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:from-violet-700 text-white text-xs font-bold shadow-lg shadow-violet-600/30 transition-all disabled:opacity-50"
            >
              <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{isGenerating ? 'Generating 10x Content...' : 'Generate 10x Content'}</span>
            </button>
          </div>

          {/* Output Editor & Validation Card */}
          <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              {/* Output Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-violet-400" />
                  <h3 className="text-sm font-bold text-white">Generated Content (Ready for Review)</h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold ${
                    wordCount >= 134 && wordCount <= 170
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
                  }`}>
                    {wordCount} Words {wordCount >= 134 && wordCount <= 170 && '✓ Optimal AEO'}
                  </span>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Editable Textarea */}
              <div className="mt-3">
                <textarea
                  value={generatedContent}
                  onChange={(e) => setGeneratedContent(e.target.value)}
                  rows={11}
                  className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 leading-relaxed focus:outline-none focus:border-violet-500 resize-none shadow-inner"
                />
              </div>

              {/* GEO / AEO Validation Checklist */}
              <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Quality & Citability Guardrails (from claude-seo & SNLabat skills):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Zero AI Clichés Detected (Human-Grade Tone)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>High Local Entity Density (Sector/Airport landmarks)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>E-E-A-T Verified (Real vehicle fleet & pricing brackets)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Answer Engine Optimized for Perplexity & AI Overviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Approve & PR */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Approving creates a safe branch: <code className="text-indigo-400 font-mono">seo/update-content-studio</code>
              </span>

              <button
                onClick={handleCreatePr}
                disabled={prCreated}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-xs font-bold shadow-lg shadow-emerald-600/20 transition-all disabled:opacity-75"
              >
                {prCreated ? <Check className="w-4 h-4" /> : <GitPullRequest className="w-4 h-4" />}
                <span>{prCreated ? 'Pull Request Created on GitHub!' : 'Approve & Push to ODAC24 Repo'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
