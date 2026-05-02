"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, HelpCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function WithdrawPage() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/wallet">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-on-surface">Withdraw Earnings</h1>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-4">
          <AlertCircle className="text-amber-600 shrink-0" size={24} />
          <div className="space-y-1">
            <p className="text-sm font-bold text-amber-800">Verification Pending</p>
            <p className="text-sm text-amber-700">Withdrawals over $5,000 may require additional identity verification according to our compliance standards.</p>
          </div>
        </div>

        <div className="card p-8 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Amount to Withdraw</label>
                <span className="text-xs font-bold text-primary">Available: $8,120.00</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-on-surface-variant">$</span>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full pl-10 pr-4 py-4 text-3xl font-bold border border-outline-variant rounded-xl focus:outline-none focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-outline-variant">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Select Payout Destination</label>
              <div className="p-4 rounded-xl border border-primary bg-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-outline-variant">
                    <Building size={24} className="text-on-surface-variant" />
                  </div>
                  <div>
                    <p className="font-bold">Chase Business Checking</p>
                    <p className="text-xs text-on-surface-variant">•••• 7829 | Institutional Transfer</p>
                  </div>
                </div>
                <div className="w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
              </div>
              
              <button className="w-full p-4 rounded-xl border border-dashed border-outline-variant flex items-center justify-center gap-2 text-sm font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                Add New Payout Method
              </button>
            </div>

            <div className="pt-6 space-y-4">
              <div className="bg-surface-container rounded-xl p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Withdrawal Amount</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Processing Fee (0.5%)</span>
                  <span className="font-bold">$0.00</span>
                </div>
                <div className="flex justify-between border-t border-outline-variant pt-3">
                  <span className="font-bold">Total Payout</span>
                  <span className="font-bold text-primary">$0.00</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-14 text-lg">Process Withdrawal</Button>
              
              <div className="flex items-center justify-center gap-1.5 text-on-surface-variant">
                <HelpCircle size={14} />
                <span className="text-xs">Funds typically arrive in 1-3 business days.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
