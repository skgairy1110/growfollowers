'use client';
import { mockCustomers } from '@/data/mockData';

export default function AdminCustomersPage() {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
      <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 space-y-4">
        {mockCustomers.map(c => (
          <div key={c.id} className="bg-neutral-900 border border-neutral-800 p-5 rounded-xl flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-white">{c.name} <span className="text-neutral-400 text-sm">({c.handle})</span></h4>
              <p className="text-xs text-neutral-500 mt-0.5">{c.email} • Followers: {c.followers.toLocaleString()} • Revenue: ${c.revenue}/mo</p>
            </div>
            <span className="text-xs bg-[#B7FF00]/10 text-[#B7FF00] px-3 py-1 rounded-full">{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}