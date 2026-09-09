'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#121212] border border-neutral-800 rounded-2xl p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold tracking-tighter mb-2">
            <span className="w-6 h-6 rounded-full bg-[#B7FF00] flex items-center justify-center text-black font-black text-xs">G</span>
            GrowAI
          </Link>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-neutral-400 mt-1">Start your 14-day free trial</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-1.5">EMAIL ADDRESS</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B7FF00]"
              placeholder="alex@gairystudio.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-neutral-400 mb-1.5">PASSWORD</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B7FF00]"
              placeholder="••••••••••••"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#B7FF00] text-black font-semibold py-3.5 rounded-xl hover:bg-[#a3e600] transition flex items-center justify-center gap-2 mt-6">
            Create Account <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-sm text-neutral-400 mt-6">
          Already have an account? <Link href="/login" className="text-[#B7FF00] hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}