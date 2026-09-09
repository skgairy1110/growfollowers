'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, MessageSquare, Sparkles, Calendar, BarChart3, Settings, LogOut, ArrowUpRight, Plus, Menu, X } from 'lucide-react';
import { instagram, ai } from '@/services';
import { AccountMetrics, Opportunity } from '@/types';

export default function DashboardPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [metrics, setMetrics] = useState<AccountMetrics | null>(null);
  const [recommendation, setRecommendation] = useState<string>('');
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const m = await instagram.getMetrics();
      const rec = await ai.getRecommendation();
      const opps = await instagram.getOpportunities();
      setMetrics(m);
      setRecommendation(rec);
      setOpportunities(opps);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-black/20 border-r border-neutral-800 p-6 justify-between fixed h-screen">
        <div>
          <Link href="/dashboard" className="flex items-center gap-2 text-xl font-bold tracking-tighter mb-10">
            <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-black text-xs">G</span>
            GrowAI
          </Link>
          <nav className="space-y-1 text-sm font-medium">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 text-primary">
              <LayoutDashboard className="w-4 h-4" /> Overview
            </Link>
            <Link href="/grow-followers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Users className="w-4 h-4" /> Grow Followers
            </Link>
            <Link href="/grow-engagement" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <MessageSquare className="w-4 h-4" /> Grow Engagement
            </Link>
            <Link href="/content" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Sparkles className="w-4 h-4" /> Content Studio
            </Link>
            <Link href="/growth-plan" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Calendar className="w-4 h-4" /> AI Growth Plan
            </Link>
            <Link href="/results" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <BarChart3 className="w-4 h-4" /> Results
            </Link>
            <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </nav>
        </div>
        <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-neutral-800 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" alt="Avatar" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Alex Rivers</div>
              <div className="text-[10px] text-neutral-500">@alexrivers</div>
            </div>
          </div>
          <Link href="/login" className="text-neutral-500 hover:text-white"><LogOut className="w-4 h-4" /></Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:pl-64">
        <header className="h-20 border-b border-neutral-800 px-6 sm:px-10 flex items-center justify-between bg-background/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-neutral-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-lg font-bold">Dashboard Overview</h1>
          </div>
          <Link href="/content" className="bg-primary text-white font-semibold text-xs px-4 py-2 rounded-full hover:bg-primary/90 transition flex items-center gap-1.5">
            <Plus className="w-3.5 h-3.5" /> Create Reel
          </Link>
        </header>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-b border-neutral-800 p-6 flex flex-col gap-2">
            <Link href="/dashboard" className="px-4 py-2.5 rounded-xl bg-neutral-900 text-primary font-medium">Overview</Link>
            <Link href="/grow-followers" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">Grow Followers</Link>
            <Link href="/grow-engagement" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">Grow Engagement</Link>
            <Link href="/content" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">Content Studio</Link>
            <Link href="/growth-plan" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">AI Growth Plan</Link>
            <Link href="/results" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">Results</Link>
            <Link href="/settings" className="px-4 py-2.5 rounded-xl text-neutral-400 font-medium">Settings</Link>
          </div>
        )}

        <div className="p-6 sm:p-10 max-w-6xl mx-auto space-y-8">
          {/* Greeting Banner */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">Good morning, Alex.</h2>
            <p className="text-sm text-neutral-400 italic">&ldquo;{recommendation}&rdquo;</p>
          </div>

          {/* Metrics Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card border border-neutral-800 rounded-2xl p-6 h-32 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card border border-neutral-800 rounded-2xl p-6">
                <div className="text-xs text-neutral-400 font-mono mb-2">FOLLOWERS</div>
                <div className="text-3xl font-bold mb-1">{metrics?.followers.toLocaleString()}</div>
                <div className="text-xs text-primary flex items-center gap-1">+{metrics?.followersChange}% this week</div>
              </div>
              <div className="bg-card border border-neutral-800 rounded-2xl p-6">
                <div className="text-xs text-neutral-400 font-mono mb-2">REACH</div>
                <div className="text-3xl font-bold mb-1">{(metrics?.reach! / 1000).toFixed(1)}K</div>
                <div className="text-xs text-primary flex items-center gap-1">+{metrics?.reachChange}% this week</div>
              </div>
              <div className="bg-card border border-neutral-800 rounded-2xl p-6">
                <div className="text-xs text-neutral-400 font-mono mb-2">ENGAGEMENT RATE</div>
                <div className="text-3xl font-bold mb-1">{metrics?.engagementRate}%</div>
                <div className="text-xs text-primary flex items-center gap-1">+{metrics?.engagementChange}% this week</div>
              </div>
              <div className="bg-card border border-neutral-800 rounded-2xl p-6">
                <div className="text-xs text-neutral-400 font-mono mb-2">PROFILE VISITS</div>
                <div className="text-3xl font-bold mb-1">{metrics?.profileVisits.toLocaleString()}</div>
                <div className="text-xs text-primary flex items-center gap-1">+{metrics?.profileVisitsChange}% this week</div>
              </div>
            </div>
          )}

          {/* Today's Growth Opportunities */}
          <div className="bg-card border border-neutral-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold">Today&apos;s Growth Opportunities</h3>
                <p className="text-xs text-neutral-400">AI-discovered relevant profiles matching your niche</p>
              </div>
              <Link href="/grow-followers" className="text-xs text-primary hover:underline flex items-center gap-1">
                View all <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {opportunities.slice(0, 4).map((opp) => (
                <div key={opp.id} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={opp.avatar} alt={opp.handle} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="text-sm font-bold text-white">{opp.handle}</div>
                      <div className="text-xs text-neutral-400">{opp.category} • <span className="text-primary">{opp.relevanceScore}% match</span></div>
                    </div>
                  </div>
                  <Link href="/grow-followers" className="bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition">
                    Review
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}