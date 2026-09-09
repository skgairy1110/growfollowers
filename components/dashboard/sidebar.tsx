import Link from "next/link";
import { BarChart3, LayoutDashboard, MessageCircle, PenLine, Rocket, Settings, Shield } from "lucide-react";

const items = [
  ["/dashboard", LayoutDashboard, "Dashboard"],
  ["/grow-followers", Rocket, "Grow Followers"],
  ["/grow-engagement", MessageCircle, "Engagement"],
  ["/content", PenLine, "Content Studio"],
  ["/growth-plan", BarChart3, "AI Growth Plan"],
  ["/results", BarChart3, "Results"],
] as const;

export function Sidebar({ admin = false }: { admin?: boolean }) {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-white/[0.08] bg-black/20 p-5 md:block">
      <Link href="/" className="flex items-center gap-2 px-3 py-3 text-xl font-semibold tracking-tight">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-black text-white">G</span>
        GrowAI
      </Link>

      <nav className="mt-8 space-y-1">
        {items.map(([href, Icon, label]) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
          >
            <Icon size={17} />
            {label}
          </Link>
        ))}

        {admin && (
          <Link href="/admin" className="mt-6 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/[0.05] hover:text-white">
            <Shield size={17} /> Admin
          </Link>
        )}

        <Link href="/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white">
          <Settings size={17} /> Settings
        </Link>
      </nav>
    </aside>
  );
}
