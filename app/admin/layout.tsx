'use client';

import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Users, Target, BarChart3, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <aside className="hidden lg:flex flex-col w-64 bg-black/20 border-r border-neutral-800 p-6 justify-between fixed h-screen">
        <div>
          <Link href="/admin" className="flex items-center gap-2 text-xl font-bold tracking-tighter mb-10">
            <span className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-black font-black text-xs">A</span>
            GrowAI Admin
          </Link>
          <nav className="space-y-1 text-sm font-medium">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900 text-primary">
              <LayoutDashboard className="w-4 h-4" /> Overview
            </Link>
            <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Users className="w-4 h-4" /> Customers
            </Link>
            <Link href="/admin/campaigns" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Target className="w-4 h-4" /> Campaigns
            </Link>
            <Link href="/admin/analytics" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <BarChart3 className="w-4 h-4" /> Analytics
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900/50 transition">
              <Settings className="w-4 h-4" /> Settings
            </Link>
          </nav>
        </div>
        <div className="pt-6 border-t border-neutral-800">
          <Link href="/dashboard" className="text-xs text-neutral-400 hover:text-white flex items-center gap-2">
            ← Switch to Customer View
          </Link>
        </div>
      </aside>

      <main className="flex-1 lg:pl-64">
        {children}
      </main>
    </div>
  );
}