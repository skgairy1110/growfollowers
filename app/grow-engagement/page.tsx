'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageSquare, Sparkles, ArrowLeft, Check, RefreshCw } from 'lucide-react';
import { ai } from '@/services';
import { CommentSuggestion } from '@/types';

export default function GrowEngagementPage() {
  const [mode, setMode] = useState<'Likes' | 'Comments' | 'Reach' | 'Overall Engagement'>('Comments');
  const [suggestions, setSuggestions] = useState<CommentSuggestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const s = await ai.getCommentSuggestions();
      setSuggestions(s);
      setLoading(false);
    }
    load();
  }, []);

  const handleRegenerate = async () => {
    setLoading(true);
    const s = await ai.getCommentSuggestions();
    setSuggestions(s);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-primary">ENGAGEMENT OPTIMIZATION</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Grow Engagement</h1>
      <p className="text-neutral-400 text-sm mb-10">AI-powered comment suggestions, interaction tuning, and reach velocity.</p>

      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
        {(['Likes', 'Comments', 'Reach', 'Overall Engagement'] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              mode === m ? 'bg-primary text-white font-bold' : 'bg-card border border-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {mode === 'Comments' ? (
        <div className="space-y-6">
          <div className="bg-card border border-neutral-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold">AI Comment Suggestions</h3>
                <p className="text-xs text-neutral-400">Contextual, thoughtful responses for target posts</p>
              </div>
              <button onClick={handleRegenerate} className="bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-xs text-white font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" /> Regenerate
              </button>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map(i => <div key={i} className="h-20 bg-neutral-900 rounded-xl animate-pulse" />)}
              </div>
            ) : (
              <div className="space-y-4">
                {suggestions.map((s) => (
                  <div key={s.id} className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-full">{s.type}</span>
                      <p className="text-sm text-white mt-2">&ldquo;{s.text}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button onClick={() => alert('Copied to clipboard!')} className="w-full sm:w-auto bg-primary text-white font-semibold text-xs px-4 py-2 rounded-lg hover:bg-primary/90 transition">
                        Use
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-card border border-neutral-800 rounded-2xl p-12 text-center space-y-3">
          <Sparkles className="w-10 h-10 text-primary mx-auto" />
          <h3 className="text-xl font-bold">{mode} Engine Active</h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto">AI optimization algorithms are actively tuning your account metrics for maximum {mode.toLowerCase()}.</p>
        </div>
      )}
    </div>
  );
}