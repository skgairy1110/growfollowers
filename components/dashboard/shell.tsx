import { Sidebar } from "./sidebar";

export function AppShell({ children, admin = false }: { children: React.ReactNode; admin?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <Sidebar admin={admin} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
