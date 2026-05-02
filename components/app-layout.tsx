"use client";

import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Navbar />
      <main className="pl-[260px] pt-16 min-h-screen">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
