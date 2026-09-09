'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Zap, BarChart3, Users, MessageSquare, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStage((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stages = ['Audience', 'Discovery', 'Relevance', 'Engagement', 'Growth'];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <span className="w-6 h-6 rounded-full bg-[#B7FF00] flex items-center justify-center text-black font-black text-xs">G</span>
            GrowAI
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link href="/how-it-works" className="hover:text-white transition">How It Works</Link>
            <Link href="/pricing" className="hover:text-white transition">Pricing</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-neutral-300 hover:text-white px-4 py-2">Sign In</Link>
            <Link href="/dashboard" className="bg-[#B7FF00] text-black font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#a3e600] transition flex items-center gap-2">
              Start Growing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <button className="md:hidden text-neutral-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-neutral-800 px-6 py-6 flex flex-col gap-4">
            <Link href="/how-it-works" className="text-neutral-300 font-medium">How It Works</Link>
            <Link href="/pricing" className="text-neutral-300 font-medium">Pricing</Link>
            <Link href="/faq" className="text-neutral-300 font-medium">FAQ</Link>
            <Link href="/login" className="text-neutral-300 font-medium">Sign In</Link>
            <Link href="/dashboard" className="bg-[#B7FF00] text-black font-semibold text-center py-3 rounded-full">Start Growing</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#B7FF00]/30 to-transparent rounded-full blur-[120px]" />
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#B7FF00] font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5" /> Zero Fake Followers. 100% Organic AI Growth.
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight max-w-4xl uppercase leading-[1.05] mb-6">
          Grow Your Instagram.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-[#B7FF00]">
            Let AI Do The Work.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mb-10">
          Find the right audience. Create better content. Engage intelligently. Turn attention into real followers.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
          <Link href="/dashboard" className="w-full sm:w-auto bg-[#B7FF00] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#a3e600] transition flex items-center justify-center gap-2 text-base">
            Start Growing <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/how-it-works" className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 font-semibold px-8 py-4 rounded-full transition text-base">
            See How It Works
          </Link>
        </div>

        {/* Interactive Visual State Representation */}
        <div className="w-full max-w-4xl bg-[#121212] border border-neutral-800 rounded-2xl p-8 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/85" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-neutral-500 ml-2 font-mono">grow-ai-engine://v2.4</span>
            </div>
            <div className="flex items-center gap-2">
              {stages.map((s, idx) => (
                <button
                  key={s}
                  onClick={() => setStage(idx)}
                  className={`text-xs px-3 py-1 rounded-full transition font-mono ${
                    stage === idx ? 'bg-[#B7FF00] text-black font-bold' : 'text-neutral-500 hover:text-white bg-neutral-900'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[260px] flex flex-col items-center justify-center text-center">
            {stage === 0 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <Users className="w-12 h-12 text-[#B7FF00] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">Audience Discovery</h3>
                <p className="text-neutral-400 max-w-md text-sm">Mapping active, high-intent user profiles across niche interest graphs with 92% minimum relevancy.</p>
              </motion.div>
            )}
            {stage === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <BarChart3 className="w-12 h-12 text-[#B7FF00] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">Deep Behavioral Analysis</h3>
                <p className="text-neutral-400 max-w-md text-sm">Evaluating engagement velocity, peak activity hours, and content resonance parameters.</p>
              </motion.div>
            )}
            {stage === 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <Zap className="w-12 h-12 text-[#B7FF00] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">Relevance Filtering</h3>
                <p className="text-neutral-400 max-w-md text-sm">Eliminating noise and bots to isolate authentic creators and target customers.</p>
              </motion.div>
            )}
            {stage === 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <MessageSquare className="w-12 h-12 text-[#B7FF00] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">Intelligent Engagement</h3>
                <p className="text-neutral-400 max-w-md text-sm">Drafting thoughtful, contextual responses and collaboration touchpoints approved by you.</p>
              </motion.div>
            )}
            {stage === 4 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
                <ShieldCheck className="w-12 h-12 text-[#B7FF00] mx-auto mb-2" />
                <h3 className="text-2xl font-bold">Sustainable Growth</h3>
                <p className="text-neutral-400 max-w-md text-sm">Converting attention into real, loyal followers and compounding brand authority.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-800">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Engineered for Creators & Brands</h2>
          <p className="text-neutral-400">Everything you need to scale your Instagram presence without compromising authenticity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl">
            <Users className="w-10 h-10 text-[#B7FF00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Follower Growth</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Discover qualified audience segments matched precisely to your niche and aesthetic.</p>
          </div>
          <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl">
            <MessageSquare className="w-10 h-10 text-[#B7FF00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Contextual Engagement</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Generate thoughtful, human-like comment suggestions and conversation hooks instantly.</p>
          </div>
          <div className="bg-[#121212] border border-neutral-800 p-8 rounded-2xl">
            <BarChart3 className="w-10 h-10 text-[#B7FF00] mb-4" />
            <h3 className="text-xl font-bold mb-2">Predictive Content Studio</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">Plan Reels, Carousels, and Stories backed by AI performance data and conversion metrics.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-6 text-center text-sm text-neutral-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p>© 2026 GrowAI Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/faq" className="hover:text-white transition">FAQ</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}