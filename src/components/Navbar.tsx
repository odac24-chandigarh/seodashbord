'use client';

import { useState } from 'react';
import { RefreshCw, CheckCircle, Bell, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  title: string;
  subtitle?: string;
}

export function Navbar({ title, subtitle }: NavbarProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [lastRunText, setLastRunText] = useState('Last audit: 15m ago');

  const handleRunAudit = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLastRunText('Audit completed just now');
    }, 2000);
  };

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950/60 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
      <div>
        <h2 className="text-lg font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-3">
        {/* Safe Mode Badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Production Protected: <strong>Approval Required</strong></span>
        </div>

        {/* Sync / Run Audit Button */}
        <button
          onClick={handleRunAudit}
          disabled={isRunning}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Auditing 12 Agents...' : 'Run Full SEO Audit'}</span>
        </button>

        {/* Notification Bell */}
        <div className="relative p-2 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-900">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
        </div>
      </div>
    </header>
  );
}
