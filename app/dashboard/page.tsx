"use client";

import { AppLayout } from "@/components/app-layout";
import { DASHBOARD_STATS, ORDERS } from "@/lib/dummy-data";
import { 
  TrendingUp, 
  TrendingDown, 
  MoreVertical, 
  Plus, 
  Download,
  Calendar,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WholesalerDashboard() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-on-surface">Wholesaler Dashboard</h1>
            <p className="text-on-surface-variant">Welcome back, Alex. Here&apos;s what&apos;s happening today.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <Calendar size={18} /> May 2024
            </Button>
            <Button className="gap-2">
              <Plus size={18} /> Add New Product
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DASHBOARD_STATS.map((stat) => (
            <div key={stat.label} className="card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-on-surface-variant">{stat.label}</span>
                <div className={`p-1.5 rounded-md ${stat.trend === "up" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`}>
                  {stat.trend === "up" ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-on-surface">{stat.value}</span>
                <span className={`text-xs font-bold ${stat.trend === "up" ? "text-success" : "text-danger"}`}>
                  {stat.change} <span className="text-on-surface-variant font-normal">vs last month</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Placeholder */}
          <div className="lg:col-span-2 card">
            <div className="p-6 border-b border-outline-variant flex items-center justify-between">
              <h3 className="font-bold text-lg">Inventory Trends</h3>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical size={18} />
              </Button>
            </div>
            <div className="p-6 h-[300px] flex items-center justify-center bg-surface-container/20">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center mx-auto text-on-surface-variant">
                  <BarChartIcon size={24} />
                </div>
                <p className="text-sm text-on-surface-variant">Inventory analytics chart visualization would be here.</p>
              </div>
            </div>
          </div>

          {/* Quick Actions / Activity */}
          <div className="card">
            <div className="p-6 border-b border-outline-variant">
              <h3 className="font-bold text-lg">Top Manufacturers</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                { name: "Global Tech Inc", sales: "$42,000", growth: "+12%" },
                { name: "Metro Logistics", sales: "$31,500", growth: "+8%" },
                { name: "Future Retail", sales: "$28,900", growth: "-3%" },
                { name: "Zenith Supplies", sales: "$22,100", growth: "+15%" },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant font-bold">
                      {m.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{m.name}</p>
                      <p className="text-xs text-on-surface-variant">{m.sales} in sales</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${m.growth.startsWith("+") ? "text-success" : "text-danger"}`}>
                    {m.growth}
                  </span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">View All Partners</Button>
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="card">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <h3 className="font-bold text-lg">Recent Orders</h3>
            <Button variant="secondary" size="sm" className="gap-2">
              <Download size={16} /> Export CSV
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/30">
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Order ID</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Customer</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Total</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {ORDERS.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-container/10 transition-colors">
                    <td className="p-4 text-sm font-bold text-primary">#{order.id}</td>
                    <td className="p-4 text-sm font-medium">{order.customer}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{order.date}</td>
                    <td className="p-4 text-sm font-bold">{order.total}</td>
                    <td className="p-4">
                      <span className={`badge ${
                        order.status === "Delivered" ? "badge-success" : 
                        order.status === "Processing" ? "badge-warning" : 
                        order.status === "Shipped" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs font-bold">Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-variant text-center">
            <Button variant="ghost" className="text-primary font-bold">View All Orders</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function BarChartIcon({ size }: { size: number }) {
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
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  );
}
