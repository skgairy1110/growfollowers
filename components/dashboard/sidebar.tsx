import Link from "next/link";
import { LayoutDashboard, Rocket, MessageCircle, PenLine, CalendarCheck2, BarChart3, Settings, Shield } from "lucide-react";

const items = [
  ["/dashboard", LayoutDashboard, "Dashboard"],
  ["/grow-followers", Rocket, "Grow Followers"],
  ["/grow-engagement", MessageCircle, "Engagement"],
  ["/content", PenLine, "Content Studio"],
  ["/growth-plan", CalendarCheck2, "AI Growth Plan"],
  ["/results", BarChart3, "Results"],
];

export function Sidebar({ admin = false }: { admin?: boolean }) {
  return <aside className="hidden min-h-screen w-64 shrink-0 border-r border-black/10 bg-white/70 p-5 md:block">
    <Link href="/" className="block px-3 py-3 text-xl font-semibold">GrowAI<span className="opacity-40">.</span></Link>
    <nav className="mt-8 space-y-1">
      {items.map(([href, Icon, label]) => <Link key={href as string} href={href as string} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-black/65 hover:bg-black/5 hover:text-black">
        {/* @ts-ignore */}
        <Icon size={17} /> {label as string}
      </Link>)}
      {admin && <Link href="/admin" className="mt-6 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium"><Shield size={17}/> Admin</Link>}
      <Link href="/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-black/65"><Settings size={17}/> Settings</Link>
    </nav>
  </aside>;
}
