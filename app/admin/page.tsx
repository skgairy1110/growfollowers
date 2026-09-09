'use client';

import React from 'react';
import { mockCustomers, mockCampaigns } from '@/data/mockData';

export default function AdminDashboardPage() {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto space-y-8">
      <div>
        <span className="text-xs font-mono text-red-400">ADMIN CONTROL PANEL</span>
        <h1 className="text-3xl font-bold tracking-tight mt-1">Platform Overview</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
          <div className="text-xs text-neutral-400 font-mono mb-2">TOTAL CUSTOMERS</div>
          <div className="text-3xl font-bold mb-1">{mockCustomers.length}</div>
          <div className="text-xs text-[#B7FF00]">+12% this month</div>
        </div>
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
          <div className="text-xs text-neutral-400 font-mono mb-2">ACTIVE CAMPAIGNS</div>
          <div className="text-3xl font-bold mb-1">{mockCampaigns.length}</div>
          <div className="text-xs text-[#B7FF00]">100% operational</div>
        </div>
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
          <div className="text-xs text-neutral-400 font-mono mb-2">MONTHLY REVENUE</div>
          <div className="text-3xl font-bold mb-1">$2,480</div>
          <div className="text-xs text-[#B7FF00]">+18.4% MRR</div>
        </div>
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6">
          <div className="text-xs text-neutral-400 font-mono mb-2">SYSTEM HEALTH</div>
          <div className="text-3xl font-bold mb-1 text-[#B7FF00]">99.9%</div>
          <div className="text-xs text-neutral-400">All APIs online</div>
        </div>
      </div>

      <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8">
        <h3 className="text-lg font-bold mb-6">Recent Customers</h3>
        <div className="space-y-4">
          {mockCustomers.map(c => (
            <div key={c.id} className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white">{c.name} <span className="text-neutral-400 font-normal">({c.handle})</span></div>
                <div className="text-xs text-neutral-500">{c.email} • Plan: {c.plan}</div>
              </div>
              <span className="text-xs bg-[#B7FF00]/10 text-[#B7FF00] px-3 py-1 rounded-full">{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}