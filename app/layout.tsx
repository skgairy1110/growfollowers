import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowAI — Grow Your Instagram. Let AI Do The Work.",
  description: "AI-powered Instagram growth platform for audience discovery, content strategy, and intelligent engagement.",
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body 
        className="bg-background text-foreground antialiased selection:bg-primary selection:text-white"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}