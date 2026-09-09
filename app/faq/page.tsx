import Link from 'next/link';

export default function FAQPage() {
  const faqs = [
    { q: "Is GrowAI safe for my Instagram account?", a: "Yes. GrowAI strictly adheres to Meta API guidelines and does not use bots, fake accounts, engagement pods, or automated login credential scraping." },
    { q: "Does GrowAI create fake followers?", a: "Never. All growth is driven by legitimate audience discovery, relevant engagement, and content strategy optimization." },
    { q: "Can I cancel my subscription anytime?", a: "Yes, you can cancel your subscription instantly from your settings dashboard with a single click." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-24 max-w-4xl mx-auto">
      <Link href="/" className="text-sm text-neutral-400 hover:text-white mb-8 inline-block">← Back to home</Link>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h1>
      <p className="text-neutral-400 mb-16">Everything you need to know about GrowAI and our growth methodology.</p>

      <div className="space-y-8">
        {faqs.map((f, i) => (
          <div key={i} className="bg-card border border-neutral-800 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">{f.q}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}