import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] px-6 py-24 max-w-6xl mx-auto">
      <Link href="/" className="text-sm text-neutral-400 hover:text-white mb-8 inline-block">← Back to home</Link>
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-neutral-400">Choose the plan that fits your growth goals. No hidden fees. Cancel anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-neutral-400 text-sm mb-6">For emerging creators beginning their growth journey.</p>
            <div className="text-4xl font-bold mb-6">$49<span className="text-sm font-normal text-neutral-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-neutral-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Audience Discovery</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> AI Comment Suggestions</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Weekly Growth Plan</li>
            </ul>
          </div>
          <Link href="/dashboard" className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-semibold py-3 rounded-full text-center transition">Get Started</Link>
        </div>

        <div className="bg-[#121212] border-2 border-[#B7FF00] rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B7FF00] text-black font-bold text-xs uppercase px-3 py-1 rounded-full">Most Popular</div>
          <div>
            <h3 className="text-xl font-bold mb-2">Growth Pro</h3>
            <p className="text-neutral-400 text-sm mb-6">For professional creators and scaling brands.</p>
            <div className="text-4xl font-bold mb-6">$89<span className="text-sm font-normal text-neutral-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-neutral-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Advanced Audience Discovery</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Unlimited AI Content Ideas</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Deep Analytics & Conversion Tracking</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Priority Support</li>
            </ul>
          </div>
          <Link href="/dashboard" className="w-full bg-[#B7FF00] text-black font-bold py-3 rounded-full text-center transition hover:bg-[#a3e600]">Start Free Trial</Link>
        </div>

        <div className="bg-[#121212] border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-neutral-400 text-sm mb-6">For agencies and high-volume brand portfolios.</p>
            <div className="text-4xl font-bold mb-6">$199<span className="text-sm font-normal text-neutral-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-neutral-300 mb-8">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Multi-Account Management</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Custom AI Model Training</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-[#B7FF00]" /> Dedicated Account Strategist</li>
            </ul>
          </div>
          <Link href="/dashboard" className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-semibold py-3 rounded-full text-center transition">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
}