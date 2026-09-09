'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, ArrowLeft, Check, Sparkles } from 'lucide-react';
import { ai } from '@/services';
import { GrowthPlanDay } from '@/types';

export default function GrowthPlanPage() {
  const [plan, setPlan] = useState<GrowthPlanDay[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await ai.getGrowthPlan();
      setPlan(data);
      setLoading(false);
    }
    load();
  }, []);

  const toggleComplete = (index: number) => {
    setPlan(prev => prev.map((p, i) => i === index ? { ...p, completed: !p.completed } : p));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-primary">WEEKLY BLUEPRINT</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">AI Growth Plan</h1>
      <p className="text-neutral-400 text-sm mb-8">Your structured weekly roadmap for organic Instagram scaling.</p>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} className="h-20 bg-card rounded-2xl animate-pulse" />)}
        </div>
      ) : (
        <div className="space-y-4">
          {plan.map((item, index) => (
            <div key={index} className="bg-card border border-neutral-800 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => toggleComplete(index)}
                  className={`w-6 h-6 rounded-lg border flex items-center justify-center transition ${
                    item.completed ? 'bg-primary border-primary text-white font-bold' : 'border-neutral-700 bg-neutral-900'
                  }`}
                >
                  {item.completed && <Check className="w-3.5 h-3.5" />}
                </button>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-primary">{item.day}</span>
                    <span className="text-[10px] font-mono text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">{item.category}</span>
                  </div>
                  <p className={`text-sm ${item.completed ? 'line-through text-neutral-500' : 'text-white'}`}>{item.task}</p>
                </div>
              </div>
              <button onClick={() => alert(`Skipped task for ${item.day}`)} className="text-xs text-neutral-500 hover:text-white">Skip</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}