'use client';

import { X, Check, GitPullRequest, AlertCircle, FileCode } from 'lucide-react';
import { Suggestion } from '../lib/types';

interface DiffModalProps {
  suggestion: Suggestion | null;
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export function DiffModal({ suggestion, onClose, onApprove, onReject }: DiffModalProps) {
  if (!suggestion) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {suggestion.category}
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                suggestion.impact === 'High' 
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {suggestion.impact} Impact
              </span>
            </div>
            <h3 className="text-base font-bold text-white leading-snug">
              {suggestion.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Target File & SEO Gain */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
            <div>
              <span className="text-xs text-slate-500 block">File Target</span>
              <span className="font-mono text-xs text-indigo-400 flex items-center gap-1.5 mt-0.5">
                <FileCode className="w-3.5 h-3.5" />
                {suggestion.fileAffected}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Estimated Gain</span>
              <span className="text-xs font-semibold text-emerald-400 mt-0.5 block">
                {suggestion.potentialGain}
              </span>
            </div>
          </div>

          {/* Rationale */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              SEO Agent Analysis & Rationale
            </h4>
            <p className="text-slate-300 text-xs leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
              {suggestion.reason}
            </p>
          </div>

          {/* Diff Viewer */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GitPullRequest className="w-3.5 h-3.5 text-indigo-400" />
              Proposed Code Modifications (Diff Preview)
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {/* Before */}
              <div className="border border-rose-900/40 rounded-xl overflow-hidden bg-rose-950/10">
                <div className="px-3 py-1.5 bg-rose-950/40 border-b border-rose-900/40 text-[11px] font-semibold text-rose-300 flex items-center justify-between">
                  <span>Current / Old Code (To be removed)</span>
                  <span className="font-mono text-rose-400">- DELETE / REPLACE</span>
                </div>
                <pre className="p-3.5 text-xs font-mono text-rose-200/90 whitespace-pre-wrap overflow-x-auto">
                  {suggestion.diffBefore}
                </pre>
              </div>

              {/* After */}
              <div className="border border-emerald-900/40 rounded-xl overflow-hidden bg-emerald-950/10">
                <div className="px-3 py-1.5 bg-emerald-950/40 border-b border-emerald-900/40 text-[11px] font-semibold text-emerald-300 flex items-center justify-between">
                  <span>Optimized / New Code (To be added)</span>
                  <span className="font-mono text-emerald-400">+ ADD / OPTIMIZE</span>
                </div>
                <pre className="p-3.5 text-xs font-mono text-emerald-200 whitespace-pre-wrap overflow-x-auto">
                  {suggestion.diffAfter}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <button
            onClick={() => onReject(suggestion.id)}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-all"
          >
            Reject Suggestion
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
            >
              Close
            </button>
            <button
              onClick={() => onApprove(suggestion.id)}
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-lg shadow-lg shadow-emerald-600/20 transition-all"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Approve & Create Git PR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
