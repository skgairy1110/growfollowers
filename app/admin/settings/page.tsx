'use client';
export default function AdminSettingsPage() {
  return (
    <div className="p-6 sm:p-10 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Admin Settings</h1>
      <div className="bg-card border border-neutral-800 rounded-2xl p-8 space-y-4 max-w-xl">
        <div>
          <label className="block text-xs font-mono text-neutral-400 mb-1.5">SYSTEM WEBHOOK ENDPOINT</label>
          <input type="text" value="https://growai.app/api/webhooks/meta" readOnly className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-400" />
        </div>
      </div>
    </div>
  );
}