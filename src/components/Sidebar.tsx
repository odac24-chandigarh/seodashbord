'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Sparkles, 
  ShieldAlert, 
  Search, 
  MapPin, 
  Settings, 
  Car, 
  ExternalLink,
  CheckCircle,
  Activity,
  PenTool
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Command Center', href: '/', icon: LayoutDashboard },
  { name: 'AI Content Studio', href: '/content-studio', icon: PenTool, badge: 'GEO/AEO' },
  { name: 'Suggestions Queue', href: '/suggestions', icon: Sparkles, badge: '4' },
  { name: 'Competitor Radar', href: '/competitors', icon: ShieldAlert },
  { name: 'Keyword Tracker', href: '/keywords', icon: Search },
  { name: 'Tri-City Local SEO', href: '/local-seo', icon: MapPin },
  { name: 'Settings & APIs', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0 h-screen sticky top-0">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
          <Car className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="font-bold text-white tracking-wide text-base">ODAC24.in</h1>
            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
              AI SEO
            </span>
          </div>
          <p className="text-xs text-slate-400">Command Center</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Management
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                  isActive ? 'bg-white text-indigo-700' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                }`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}

        <div className="pt-5 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Active Target
        </div>
        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Target Domain</span>
            <span className="text-xs text-indigo-400 font-mono flex items-center gap-1">
              odac24.in
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Primary Region</span>
            <span className="text-xs text-slate-200 font-medium">Chandigarh (Tri-City)</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-slate-800">
            <span className="text-xs text-slate-400">Safe PR Mode</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
              <CheckCircle className="w-3 h-3" />
              Active
            </span>
          </div>
        </div>
      </nav>

      {/* Live System Activity Bar */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/80">
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">12 Agents Active</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Search Console & Competitor Radar syncing live data.
        </p>
      </div>
    </aside>
  );
}
