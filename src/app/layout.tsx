import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'ODAC24 AI SEO Command Center',
  description: 'AI-Powered SEO Management & Multi-Agent Command Center for ODAC24.in',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 bg-slate-950/40 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
