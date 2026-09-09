'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BarChart3, ArrowLeft, Sparkles } from 'lucide-react';
import { analytics } from '@/services';
import { AccountMetrics } from '@/types';

export default function ResultsPage() {
  const [metrics, setMetrics] = useState<AccountMetrics | null>(null);
  const [insights, setInsights] = useState<{ whatHappened: string; why: string; nextAction: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const m = await analytics.getOverview();
      const i = await analytics.getInsights();
      setMetrics(m);
      setInsights(i);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] p-6 sm:p-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-[#B7FF00]">ANALYTICS & INSIGHTS</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Results & Performance</h1>
      <p className="text-neutral-400 text-sm mb-8">Comprehensive audit of your follower growth, reach, and AI recommendations.</p>

      {loading ? (
        <div className="space-y-6">
          <div className="h-48 bg-[#121212] rounded-2xl animate-pulse" />
          <div className="h-64 bg-[#121212] rounded-2xl animate-pulse" />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-neutral-400 font-mono mb-2">TOTAL FOLLOWERS</div>
              <div className="text-3xl font-bold mb-1">{metrics?.followers.toLocaleString()}</div>
              <div className="text-xs text-[#B7FF00]">+{metrics?.followersChange}% growth</div>
            </div>
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-neutral-400 font-mono mb-2">TOTAL REACH</div>
              <div className="text-3xl font-bold mb-1">{(metrics?.reach! / 1000).toFixed(1)}K</div>
              <div className="text-xs text-[#B7FF00]">+{metrics?.reachChange}% growth</div>
            </div>
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-neutral-400 font-mono mb-2">ENGAGEMENT RATE</div>
              <div className="text-3xl font-bold mb-1">{metrics?.engagementRate}%</div>
              <div className="text-xs text-[#B7FF00]">+{metrics?.engagementChange}% growth</div>
            </div>
            <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
              <div className="text-xs text-neutral-400 font-mono mb-2">PROFILE VISITS</div>
              <div className="text-3xl font-bold mb-1">{metrics?.profileVisits.toLocaleString()}</div>
              <div className="text-xs text-[#B7FF00]">+{metrics?.profileVisitsChange}% growth</div>
            </div>
          </div>

          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-[#B7FF00]">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-lg font-bold text-white">AI Performance Audit</h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                <span className="text-xs font-mono text-[#B7FF00] block mb-1">WHAT HAPPENED?</span>
                <p className="text-neutral-300">{insights?.whatHappened}</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                <span className="text-xs font-mono text-[#B7FF00] block mb-1">WHY?</span>
                <p className="text-neutral-300">{insights?.why}</p>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl">
                <span className="text-xs font-mono text-[#B7FF00] block mb-1">WHAT SHOULD I DO NEXT?</span>
                <p className="text-neutral-300">{insights?.nextAction}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}