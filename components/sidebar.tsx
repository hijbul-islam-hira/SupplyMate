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

export function Sidebar() {
  const pathname = usePathname();
  const [role, setRole] = React.useState<string | null>(null);

  React.useEffect(() => {
    setRole(localStorage.getItem("userRole") || "wholesaler");
  }, []);

  const filteredItems = NAV_ITEMS.filter((item) => {
    if (role === "reseller") {
      // Resellers don't see Dashboard (redirected to Marketplace) or Admin
      return item.href !== "/dashboard" && item.href !== "/admin";
    }
    if (role === "wholesaler") {
      // Wholesalers see everything except maybe they shouldn't see Marketplace as their primary
      // But for this demo, we'll let them see all.
      return item.href !== "/marketplace";
    }
    return true;
  });

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-white border-r border-outline-variant flex flex-col z-50">
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
  );
}
