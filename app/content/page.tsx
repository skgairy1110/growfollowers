'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Plus, Calendar, Film, Layout, MessageSquare } from 'lucide-react';
import { ai } from '@/services';
import { ContentIdea } from '@/types';

export default function ContentStudioPage() {
  const [tab, setTab] = useState<'Ideas' | 'Reels' | 'Carousels' | 'Captions' | 'Stories' | 'Calendar'>('Ideas');
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await ai.getContentIdeas();
      setIdeas(data);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 sm:p-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-primary">CONTENT STUDIO</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Content Studio</h1>
      <p className="text-neutral-400 text-sm mb-8">AI-generated content blueprints, hooks, captions, and publishing calendar.</p>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
        {(['Ideas', 'Reels', 'Carousels', 'Captions', 'Stories', 'Calendar'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
              tab === t ? 'bg-primary text-white font-bold' : 'bg-card border border-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'Ideas' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">AI Content Ideas</h3>
            <button onClick={() => alert('New AI idea generated!')} className="bg-primary text-white font-semibold text-xs px-4 py-2 rounded-xl hover:bg-primary/90 transition flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" /> Generate Idea
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ideas.map((idea) => (
              <div key={idea.id} className="bg-card border border-neutral-800 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-full">{idea.type}</span>
                    <span className="text-xs text-neutral-500 font-mono">{idea.status}</span>
                  </div>
                  <h4 className="text-base font-bold mb-2 text-white">{idea.title}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">&ldquo;{idea.hook}&rdquo;</p>
                </div>
                <button onClick={() => alert(`Scheduled "${idea.title}"`)} className="w-full bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-xs text-white font-semibold py-2.5 rounded-xl transition">
                  Schedule Post
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab !== 'Ideas' && (
        <div className="bg-card border border-neutral-800 rounded-2xl p-16 text-center space-y-3">
          <Sparkles className="w-10 h-10 text-primary mx-auto" />
          <h3 className="text-xl font-bold">{tab} Generator Active</h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto">AI models are ready to draft high-converting {tab.toLowerCase()} for your Instagram profile.</p>
        </div>
      )}
    </div>
  );
}