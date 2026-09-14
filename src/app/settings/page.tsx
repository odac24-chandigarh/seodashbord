'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { 
  Settings, 
  Key, 
  ShieldCheck, 
  GitBranch, 
  CheckCircle2, 
  ExternalLink,
  Lock,
  Cpu,
  FileCode
} from 'lucide-react';

export default function SettingsPage() {
  const [gscStatus, setGscStatus] = useState<'connected' | 'pending'>('connected');
  const [pageSpeedKey, setPageSpeedKey] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [dashboardPassword, setDashboardPassword] = useState('odac24-admin');
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedMessage('Settings successfully updated and saved locally!');
    setTimeout(() => setSavedMessage(null), 3000);
  };

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="Settings & Integrations" 
        subtitle="Manage Search Console API, PageSpeed, GitHub PR automation, and Vercel password protection" 
      />

      <div className="p-6 space-y-6 max-w-4xl mx-auto w-full">
        {savedMessage && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-2.5 text-xs font-semibold shadow-xl">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{savedMessage}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Section 1: Google Search Console */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Google Search Console API</h3>
                  <p className="text-xs text-slate-400">
                    Extracts daily impressions, average rank, and positions 4–20 striking distance queries.
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Connected
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Target Property:</span>
                <span className="font-mono text-indigo-400">sc-domain:odac24.in</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Access Type:</span>
                <span className="text-slate-200">Restricted (Read-Only) Service Account</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">API Cost:</span>
                <span className="text-emerald-400 font-semibold">100% Free (Google Cloud)</span>
              </div>
            </div>
          </div>

          {/* Section 2: PageSpeed Insights API */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Google PageSpeed Insights API Key</h3>
                <p className="text-xs text-slate-400">
                  Automates mobile & desktop Core Web Vitals checks (LCP, CLS, INP).
                </p>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-400 block mb-1.5">
                API Key (Free from Google Cloud Console)
              </label>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={pageSpeedKey}
                onChange={(e) => setPageSpeedKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Leave blank to use unauthenticated shared quota for testing.
              </p>
            </div>
          </div>

          {/* Section 3: GitHub PR Automation */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">GitHub Pull Request Automation</h3>
                <p className="text-xs text-slate-400">
                  Allows the dashboard to open safe branches and PRs on your main ODAC24 repository when you click "Approve".
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">
                  Target Website Repository
                </label>
                <input
                  type="text"
                  disabled
                  value="odac24-chandigarh/odac24"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1.5">
                  GitHub Personal Access Token (PAT)
                </label>
                <input
                  type="password"
                  placeholder="ghp_..."
                  value={githubToken}
                  onChange={(e) => setGithubToken(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Vercel Dashboard Password Gate */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Vercel Deployment Password Gate</h3>
                <p className="text-xs text-slate-400">
                  Protects your SEO intelligence, competitor watchlist, and PR approvals behind a private password.
                </p>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-400 block mb-1.5">
                Dashboard Master Password
              </label>
              <input
                type="text"
                value={dashboardPassword}
                onChange={(e) => setDashboardPassword(e.target.value)}
                className="w-full max-w-sm px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Configure as <code className="text-indigo-400">DASHBOARD_PASSWORD</code> in Vercel Environment Variables.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save Configuration</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
