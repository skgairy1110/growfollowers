import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowAI — Grow Your Instagram. Let AI Do The Work.",
  description: "AI-powered Instagram growth platform for legitimate audience discovery, content strategy, and engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0A0A0A] text-[#FAFAFA] antialiased selection:bg-[#B7FF00] selection:text-black">
        {children}
      </body>
    </html>
  );
}