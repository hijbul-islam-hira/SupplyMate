"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  Package, 
  Truck, 
  CheckCircle, 
  MoreHorizontal,
  MapPin,
  Clock,
  Phone,
  CreditCard
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function OrderDetailsPage() {
  const params = useParams();
  const orderId = params.id as string;

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/orders">
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full">
                <ArrowLeft size={20} />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold text-on-surface">Order #{orderId}</h1>
                <span className="badge bg-blue-100 text-blue-700">Shipped</span>
              </div>
              <p className="text-on-surface-variant">Placed on May 1, 2024 at 10:45 AM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <Printer size={18} /> Print Invoice
            </Button>
            <Button className="gap-2">
              <Download size={18} /> Download Labels
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tracking Progress */}
            <div className="card p-8">
              <h3 className="font-bold text-lg mb-8">Tracking Progress</h3>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-outline-variant"></div>
                <div className="space-y-10 relative">
                  {[
                    { status: "Delivered", date: "May 4, 2024", time: "2:30 PM", desc: "Package delivered to destination", icon: CheckCircle, active: false },
                    { status: "Out for Delivery", date: "May 4, 2024", time: "8:15 AM", desc: "Package is with local courier", icon: Truck, active: true },
                    { status: "In Transit", date: "May 2, 2024", time: "11:00 PM", desc: "Arrived at sorting facility in Chicago", icon: Package, active: false },
                    { status: "Order Processed", date: "May 1, 2024", time: "3:45 PM", desc: "Order has been packed and labeled", icon: Clock, active: false },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-10">
                      <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-4 border-white ${
                        step.active ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-surface-container text-on-surface-variant"
                      }`}>
                        <step.icon size={20} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <p className={`font-bold ${step.active ? "text-primary" : "text-on-surface"}`}>{step.status}</p>
                          <span className="text-xs text-on-surface-variant">{step.date} • {step.time}</span>
                        </div>
                        <p className="text-sm text-on-surface-variant">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="card">
              <div className="p-6 border-b border-outline-variant">
                <h3 className="font-bold text-lg">Order Items</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container/30">
                    <tr>
                      <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Product</th>
                      <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">SKU</th>
                      <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Price</th>
                      <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Qty</th>
                      <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    {[
                      { name: "Aura-Sound Elite G2", sku: "AS-G2-BLK", price: "$145.00", qty: 2, total: "$290.00" },
                      { name: "Nomad Tech Backpack", sku: "NM-BK-GRY", price: "$65.00", qty: 1, total: "$65.00" },
                    ].map((item, i) => (
                      <tr key={i}>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-surface-container rounded-md"></div>
                            <span className="text-sm font-bold">{item.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-sm text-on-surface-variant">{item.sku}</td>
                        <td className="p-4 text-sm">{item.price}</td>
                        <td className="p-4 text-sm">{item.qty}</td>
                        <td className="p-4 text-sm font-bold text-right">{item.total}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-container/10">
                      <td colSpan={4} className="p-4 text-sm font-medium text-right text-on-surface-variant">Subtotal</td>
                      <td className="p-4 text-sm font-bold text-right">$355.00</td>
                    </tr>
                    <tr className="bg-surface-container/10">
                      <td colSpan={4} className="p-4 text-sm font-medium text-right text-on-surface-variant">Shipping Fee</td>
                      <td className="p-4 text-sm font-bold text-right">$15.00</td>
                    </tr>
                    <tr className="bg-surface-container/10 border-t border-outline-variant">
                      <td colSpan={4} className="p-4 text-lg font-bold text-right">Total Amount</td>
                      <td className="p-4 text-lg font-bold text-right text-primary">$370.00</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="card p-6 space-y-6">
              <h3 className="font-bold text-lg">Customer Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-surface-container rounded-md text-on-surface-variant"><MapPin size={18} /></div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Shipping Address</p>
                    <p className="text-sm font-medium mt-1">123 Business Way, Suite 400<br />San Francisco, CA 94107<br />United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-surface-container rounded-md text-on-surface-variant"><Phone size={18} /></div>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Contact Details</p>
                    <p className="text-sm font-medium mt-1">alex.johnson@globaltech.com<br />+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">Edit Information</Button>
            </div>

            <div className="card p-6 space-y-4">
              <h3 className="font-bold text-lg">Payment Details</h3>
              <div className="p-4 rounded-xl border border-outline-variant bg-surface-container/10 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Method</span>
                  <span className="font-bold flex items-center gap-2">
                    <CreditCard size={14} /> Visa •••• 4242
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-on-surface-variant">Status</span>
                  <span className="badge badge-success">Paid</span>
                </div>
              </div>
            </div>

            <div className="card p-6 space-y-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <Package size={18} />
                <h3 className="font-bold text-lg">Shipping Method</h3>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold">Standard Ground Shipping</p>
                <p className="text-xs text-on-surface-variant">Estimated delivery: May 5 - May 7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
