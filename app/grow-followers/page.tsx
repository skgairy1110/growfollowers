'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Sparkles, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { instagram } from '@/services';
import { Opportunity } from '@/types';

export default function GrowFollowersPage() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('Grow Followers');
  const [country, setCountry] = useState('United States');
  const [city, setCity] = useState('New York');
  const [ageRange, setAgeRange] = useState('21-35');
  const [interests, setInterests] = useState('UI/UX Design, Tech Startups');
  const [processing, setProcessing] = useState(false);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  const handleRunAI = async () => {
    setProcessing(true);
    setTimeout(async () => {
      const opps = await instagram.getOpportunities();
      setOpportunities(opps);
      setProcessing(false);
      setStep(4);
    }, 2000);
  };

  const handleAction = (id: string, action: 'approved' | 'skipped') => {
    setOpportunities(prev => prev.filter(o => o.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-[#B7FF00]">GUIDED GROWTH FLOW</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Grow Followers</h1>
      <p className="text-neutral-400 text-sm mb-10">AI-guided audience discovery and targeted reach expansion.</p>

      {/* Step 1: Goal */}
      {step === 1 && (
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold">What do you want to grow?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => setGoal('Grow Followers')} className={`p-5 rounded-xl border text-left font-semibold transition ${goal === 'Grow Followers' ? 'border-[#B7FF00] bg-neutral-900 text-[#B7FF00]' : 'border-neutral-800 bg-neutral-900/50 text-white'}`}>
              Grow Followers
            </button>
            <button onClick={() => setGoal('Increase Reach')} className={`p-5 rounded-xl border text-left font-semibold transition ${goal === 'Increase Reach' ? 'border-[#B7FF00] bg-neutral-900 text-[#B7FF00]' : 'border-neutral-800 bg-neutral-900/50 text-white'}`}>
              Increase Content Reach
            </button>
          </div>
          <button onClick={() => setStep(2)} className="bg-[#B7FF00] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a3e600] transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Step 2: Audience */}
      {step === 2 && (
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 space-y-6">
          <h2 className="text-xl font-bold">Who do you want to reach?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">COUNTRY</label>
              <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">CITY</label>
              <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">AGE RANGE</label>
              <input type="text" value={ageRange} onChange={(e) => setAgeRange(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">INTERESTS</label>
              <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-4">
            <button onClick={() => setStep(1)} className="text-sm text-neutral-400 hover:text-white">Back</button>
            <button onClick={() => { setStep(3); handleRunAI(); }} className="bg-[#B7FF00] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a3e600] transition flex items-center gap-2">
              Let AI Analyze <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: AI Processing State */}
      {step === 3 && processing && (
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-16 text-center space-y-4">
          <div className="w-10 h-10 border-2 border-[#B7FF00] border-t-transparent rounded-full animate-spin mx-auto" />
          <h3 className="text-xl font-bold">AI Processing Audience Graph...</h3>
          <p className="text-sm text-neutral-400">Scanning millions of active profiles to locate high-relevance connections.</p>
        </div>
      )}

      {/* Step 4: Opportunities */}
      {step === 4 && (
        <div className="space-y-6">
          <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold">Discovered Opportunities</h3>
              <p className="text-xs text-neutral-400">Review and approve suggested connection targets</p>
            </div>
            <button onClick={() => setStep(1)} className="text-xs text-[#B7FF00] hover:underline">Reconfigure Criteria</button>
          </div>

          <div className="space-y-4">
            {opportunities.map((opp) => (
              <div key={opp.id} className="bg-[#121212] border border-neutral-800 p-6 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={opp.avatar} alt={opp.handle} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-base font-bold text-white">{opp.handle}</div>
                    <div className="text-xs text-neutral-400">{opp.category} • <span className="text-[#B7FF00] font-semibold">{opp.relevanceScore}% relevance</span></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleAction(opp.id, 'skipped')} className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs text-neutral-300 font-semibold transition">Skip</button>
                  <button onClick={() => handleAction(opp.id, 'approved')} className="px-4 py-2 rounded-xl bg-[#B7FF00] hover:bg-[#a3e600] text-xs text-black font-semibold transition">Approve</button>
                </div>
              </div>
            ))}
            {opportunities.length === 0 && (
              <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-12 text-center text-neutral-400">
                All opportunities reviewed. Great job!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}