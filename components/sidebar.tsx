"use client";
import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ClipboardList, 
  Wallet, 
  ShieldCheck, 
  Settings,
  LogOut,
  Package2
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { label: "Orders", href: "/orders", icon: ClipboardList },
  { label: "Wallet", href: "/wallet", icon: Wallet },
  { label: "Admin", href: "/admin", icon: ShieldCheck },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const [role, setRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    setRole(localStorage.getItem("userRole") || "wholesaler");
  }, []);

  const filteredItems = NAV_ITEMS.filter((item) => {
    if (role === "reseller") {
      return item.href !== "/dashboard" && item.href !== "/admin";
    }
    if (role === "wholesaler") {
      return item.href !== "/marketplace";
    }
    return true;
  });

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}

      <aside className={cn(
        "fixed left-0 top-0 bottom-0 w-[260px] bg-white border-r border-outline-variant flex flex-col z-50 transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <Package2 size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight">SupplyMate</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all",
                isActive 
                  ? "bg-primary/10 text-primary" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-outline-variant space-y-1">
        <Link href="/settings">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all">
            <Settings size={20} />
            Settings
          </button>
        </Link>
        <button 
          onClick={() => {
            localStorage.clear();
            window.location.href = "/signup";
          }}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-danger hover:bg-danger/5 transition-all"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
    </>
  );
}
