'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Settings, ArrowLeft, Check } from 'lucide-react';

export default function SettingsPage() {
  const [handle, setHandle] = useState('@alexrivers');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] p-6 sm:p-10 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Link href="/dashboard" className="text-sm text-neutral-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className="text-xs font-mono text-[#B7FF00]">ACCOUNT SETTINGS</span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight mb-2">Settings</h1>
      <p className="text-neutral-400 text-sm mb-8">Manage your connected Instagram account and subscription preferences.</p>

      <form onSubmit={handleSave} className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 space-y-6">
        <div>
          <label className="block text-xs font-mono text-neutral-400 mb-1.5">INSTAGRAM HANDLE</label>
          <input
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B7FF00]"
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-neutral-400 mb-1.5">SUBSCRIPTION PLAN</label>
          <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-4 rounded-xl">
            <div>
              <div className="text-sm font-bold text-white">Enterprise Growth Plan</div>
              <div className="text-xs text-neutral-400">Renews October 1, 2026</div>
            </div>
            <Link href="/pricing" className="text-xs font-semibold text-[#B7FF00] hover:underline">Manage Plan</Link>
          </div>
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button type="submit" className="bg-[#B7FF00] text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#a3e600] transition">
            Save Changes
          </button>
          {saved && <span className="text-xs text-[#B7FF00] flex items-center gap-1"><Check className="w-4 h-4" /> Saved successfully</span>}
        </div>
      </form>
    </div>
  );
}