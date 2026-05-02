"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Store, 
  AlertTriangle, 
  TrendingUp, 
  MoreVertical,
  ShieldCheck,
  Search,
  Filter,
  ArrowUpRight
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-on-surface">Admin Console</h1>
            <p className="text-on-surface-variant">System-wide monitoring and partner management.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <ShieldCheck size={18} /> System Status: Operational
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Partners", value: "2,482", change: "+124", icon: Users, color: "text-primary bg-primary/10" },
            { label: "Marketplace Volume", value: "$4.2M", change: "+8.2%", icon: TrendingUp, color: "text-success bg-success/10" },
            { label: "Pending Verifications", value: "18", change: "-5", icon: ClockIcon, color: "text-amber-600 bg-amber-50" },
            { label: "System Alerts", value: "2", change: "Stable", icon: AlertTriangle, color: "text-danger bg-danger/10" },
          ].map((stat) => (
            <div key={stat.label} className="card p-6 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-on-surface-variant">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className={`text-[10px] font-bold ${stat.change.startsWith("+") ? "text-success" : stat.change.startsWith("-") ? "text-danger" : "text-on-surface-variant"}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Management */}
        <div className="card">
          <div className="p-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-bold text-lg">Partner Management</h3>
            <div className="flex items-center gap-3">
              <div className="relative group flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
                <input type="text" placeholder="Search partners..." className="w-full pl-9 pr-4 py-1.5 bg-surface-container/50 border border-transparent rounded-md text-sm focus:bg-white focus:border-primary focus:outline-none transition-all" />
              </div>
              <Button variant="secondary" size="sm" className="gap-2">
                <Filter size={16} /> Filter
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/30">
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Partner</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Type</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Region</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Volume</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  { name: "Global Tech Inc", type: "Wholesaler", region: "North America", volume: "$1.2M", status: "Verified" },
                  { name: "Metro Retailers", type: "Reseller", region: "Europe", volume: "$450K", status: "Verified" },
                  { name: "Pacific Imports", type: "Wholesaler", region: "Asia Pacific", volume: "$890K", status: "Pending" },
                  { name: "Future Systems", type: "Reseller", region: "North America", volume: "$210K", status: "Verified" },
                ].map((partner, i) => (
                  <tr key={i} className="hover:bg-surface-container/10 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-surface-container rounded-md flex items-center justify-center text-xs font-bold">
                          {partner.name[0]}
                        </div>
                        <span className="text-sm font-bold">{partner.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-md ${partner.type === "Wholesaler" ? "bg-blue-50 text-blue-700" : "bg-purple-50 text-purple-700"}`}>
                        {partner.type}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">{partner.region}</td>
                    <td className="p-4 text-sm font-bold">{partner.volume}</td>
                    <td className="p-4">
                      <span className={`badge ${partner.status === "Verified" ? "badge-success" : "badge-warning"}`}>
                        {partner.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function ClockIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
