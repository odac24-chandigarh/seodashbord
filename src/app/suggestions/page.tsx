'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { DiffModal } from '@/components/DiffModal';
import { Suggestion, SuggestionCategory } from '@/lib/types';
import { INITIAL_SUGGESTIONS } from '@/lib/data/initialData';
import { 
  Sparkles, 
  Check, 
  X, 
  Eye, 
  GitPullRequest, 
  FileCode, 
  AlertCircle, 
  CheckCircle2,
  Filter
} from 'lucide-react';

const CATEGORIES: ('All' | SuggestionCategory)[] = [
  'All',
  'On-Page',
  'Technical',
  'Internal Linking',
  'Content Gap',
  'Cannibalization',
  'Local SEO'
];

export default function SuggestionsPage() {
  const [suggestions, setSuggestions] = useState<Suggestion[]>(INITIAL_SUGGESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<'All' | SuggestionCategory>('All');
  const [activeDiffSuggestion, setActiveDiffSuggestion] = useState<Suggestion | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const handleApprove = (id: string) => {
    setSuggestions(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: 'approved' };
      }
      return s;
    }));
    setActiveDiffSuggestion(null);
    showNotification(`Success! Safe branch 'seo/update-${id}' created. GitHub Pull Request generated for review.`);
  };

  const handleReject = (id: string) => {
    setSuggestions(prev => prev.map(s => {
      if (s.id === id) {
        return { ...s, status: 'rejected' };
      }
      return s;
    }));
    setActiveDiffSuggestion(null);
    showNotification(`Suggestion ${id} dismissed.`);
  };

  const filteredSuggestions = suggestions.filter(s => {
    if (selectedCategory === 'All') return true;
    return s.category === selectedCategory;
  });

  const pendingCount = suggestions.filter(s => s.status === 'pending').length;
  const approvedCount = suggestions.filter(s => s.status === 'approved').length;

  return (
    <div className="flex-1 flex flex-col pb-16">
      <Navbar 
        title="SEO Improvement Queue" 
        subtitle="Review, inspect code diffs, and approve changes safely into Git Pull Requests" 
      />

      <div className="p-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Toast Notification */}
        {notification && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center justify-between shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-2.5 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{notification}</span>
            </div>
            <button onClick={() => setNotification(null)} className="text-emerald-400 hover:text-white text-xs">
              Dismiss
            </button>
          </div>
        )}

        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Pending SEO Optimizations</h2>
              <p className="text-xs text-slate-400">
                {pendingCount} improvements awaiting review · {approvedCount} approved for PR
              </p>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Suggestions Cards List */}
        <div className="space-y-4">
          {filteredSuggestions.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-2 opacity-80" />
              <h3 className="text-sm font-bold text-white">No suggestions in this category</h3>
              <p className="text-xs text-slate-500 mt-1">
                All audits for this section are up to date.
              </p>
            </div>
          ) : (
            filteredSuggestions.map((item) => (
              <div 
                key={item.id}
                className={`p-5 rounded-2xl border transition-all ${
                  item.status === 'approved'
                    ? 'bg-emerald-950/20 border-emerald-900/40 opacity-75'
                    : item.status === 'rejected'
                    ? 'bg-slate-950 border-slate-800/40 opacity-50'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 shadow-md'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  {/* Left Column: Metadata & Details */}
                  <div className="space-y-2.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {item.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        item.impact === 'High'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      }`}>
                        {item.impact} Impact
                      </span>
                      <span className="text-[11px] text-slate-500">{item.createdAt}</span>

                      {item.status === 'approved' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <Check className="w-3 h-3" /> PR Created
                        </span>
                      )}
                      {item.status === 'rejected' && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                          Dismissed
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white">{item.title}</h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                        <code className="text-slate-300 font-mono">{item.fileAffected}</code>
                      </span>
                      <span className="text-slate-500">|</span>
                      <span>Target: <span className="text-slate-300 font-mono">{item.targetUrl}</span></span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      {item.reason}
                    </p>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Expected Ranking Impact:</span>
                      <span className="font-semibold text-emerald-400">{item.potentialGain}</span>
                    </div>
                  </div>

                  {/* Right Column: Action Buttons */}
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                    <button
                      onClick={() => setActiveDiffSuggestion(item)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all w-full"
                    >
                      <Eye className="w-3.5 h-3.5 text-indigo-400" />
                      <span>View Code Diff</span>
                    </button>

                    {item.status === 'pending' && (
                      <div className="flex items-center gap-2 w-full">
                        <button
                          onClick={() => handleReject(item.id)}
                          className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all"
                          title="Dismiss"
                        >
                          <X className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleApprove(item.id)}
                          className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all flex-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Approve</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Before / After Diff Viewer Modal */}
      <DiffModal
        suggestion={activeDiffSuggestion}
        onClose={() => setActiveDiffSuggestion(null)}
        onApprove={handleApprove}
        onReject={handleReject}
      />
    </div>
  );
}
