'use client';
import { mockCampaigns } from '@/data/mockData';

export default function AdminCampaignsPage() {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Active Campaigns</h1>
      <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
        {mockCampaigns.map(cmp => (
          <div key={cmp.id} className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-white">{cmp.name}</h4>
              <p className="text-xs text-neutral-500 mt-0.5">Customer: {cmp.customerHandle} • Target: {cmp.targetAudience} • ROI: {cmp.roi}</p>
            </div>
            <span className="text-xs bg-[#B7FF00]/10 text-[#B7FF00] px-3 py-1 rounded-full">{cmp.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}