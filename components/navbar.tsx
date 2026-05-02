"use client";

import { Bell, Search, User } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-[260px] h-16 bg-white border-b border-outline-variant flex items-center justify-between px-8 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search for products, orders, or transactions..."
            className="w-full pl-10 pr-4 py-2 bg-surface-container/50 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-primary transition-all text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-on-surface">Alex Johnson</p>
            <p className="text-xs text-on-surface-variant">Wholesaler Account</p>
          </div>
          <div className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center text-on-surface-variant border border-outline-variant">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
