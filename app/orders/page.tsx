"use client";

import { AppLayout } from "@/components/app-layout";
import { ORDERS } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronRight, 
  MoreVertical, 
  Package, 
  Truck, 
  CheckCircle,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function OrdersPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-on-surface">Order Management</h1>
            <p className="text-on-surface-variant">Track, manage, and fulfill your B2B transactions.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <Filter size={18} /> Filter By Status
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "All Orders", count: "156", icon: Package, color: "text-primary bg-primary/5" },
            { label: "Processing", count: "12", icon: Clock, color: "text-amber-600 bg-amber-50" },
            { label: "Shipped", count: "24", icon: Truck, color: "text-blue-600 bg-blue-50" },
            { label: "Delivered", count: "120", icon: CheckCircle, color: "text-success bg-success/5" },
          ].map((item) => (
            <button key={item.label} className="card p-4 flex items-center gap-4 hover:border-primary transition-all text-left">
              <div className={`p-3 rounded-lg ${item.color}`}>
                <item.icon size={20} />
              </div>
              <div>
                <p className="text-sm font-bold">{item.count}</p>
                <p className="text-xs text-on-surface-variant">{item.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID, customer name, or SKU..." 
              className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:outline-none focus:border-primary transition-all text-sm"
            />
          </div>
          <select className="px-4 py-3 bg-white border border-outline-variant rounded-lg text-sm font-medium focus:outline-none focus:border-primary">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Year 2024</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/30">
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Order</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Customer</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Amount</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[...ORDERS, ...ORDERS].map((order, i) => (
                  <tr key={`${order.id}-${i}`} className="hover:bg-surface-container/10 transition-colors group">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-on-surface">#{order.id}</span>
                        <span className="text-[10px] text-on-surface-variant font-medium">4 Items</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">{order.customer}</span>
                        <span className="text-[10px] text-on-surface-variant">Verified Partner</span>
                      </div>
                    </td>
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
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/orders/${order.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                            View <ChevronRight size={14} />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreVertical size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-6 border-t border-outline-variant flex items-center justify-between">
            <p className="text-sm text-on-surface-variant">Showing 8 of 156 orders</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
