import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] px-6 py-24 max-w-5xl mx-auto">
      <Link href="/" className="text-sm text-neutral-400 hover:text-white mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">How GrowAI Works</h1>
      <p className="text-lg text-neutral-400 mb-16 max-w-2xl">A transparent look at our organic, AI-driven growth methodology.</p>

      <div className="space-y-12 border-l border-neutral-800 pl-6 sm:pl-10 ml-2">
        <div>
          <span className="text-xs font-mono text-[#B7FF00]">STEP 01</span>
          <h3 className="text-2xl font-bold mt-1 mb-3">Audience & Niche Calibration</h3>
          <p className="text-neutral-400 leading-relaxed">GrowAI analyzes your profile, brand aesthetic, and past performance to map out high-value target demographics and relevant creators.</p>
        </div>
        <div>
          <span className="text-xs font-mono text-[#B7FF00]">STEP 02</span>
          <h3 className="text-2xl font-bold mt-1 mb-3">AI Content & Growth Blueprint</h3>
          <p className="text-neutral-400 leading-relaxed">Receive a customized weekly growth plan detailing daily content topics, Reel hooks, and strategic engagement opportunities.</p>
        </div>
        <div>
          <span className="text-xs font-mono text-[#B7FF00]">STEP 03</span>
          <h3 className="text-2xl font-bold mt-1 mb-3">Intelligent Execution & Conversion</h3>
          <p className="text-neutral-400 leading-relaxed">Approve contextual comments and connection opportunities with one click. Convert attention into loyal, organic followers.</p>
        </div>
      </div>

      <div className="mt-20 p-8 bg-[#121212] border border-neutral-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold mb-1">Ready to scale authentically?</h3>
          <p className="text-neutral-400 text-sm">Start your growth journey in under 2 minutes.</p>
        </div>
        <Link href="/dashboard" className="bg-[#B7FF00] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#a3e600] transition flex items-center gap-2">
          Open Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}