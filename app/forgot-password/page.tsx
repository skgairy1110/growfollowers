'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-card border border-neutral-800 rounded-2xl p-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tighter mb-6">
          <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black font-black text-xs">G</span>
          GrowAI
        </Link>
        <h1 className="text-2xl font-bold mb-2">Reset your password</h1>
        <p className="text-sm text-neutral-400 mb-6">Enter your email and we&apos;ll send you recovery instructions.</p>

        {submitted ? (
          <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl text-sm text-primary">
            Recovery instructions sent to your email.
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-mono text-neutral-400 mb-1.5">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary" required />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition flex items-center justify-center gap-2">
              Send Instructions <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-6">
          <Link href="/login" className="text-xs text-neutral-400 hover:text-white">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}