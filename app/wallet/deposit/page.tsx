"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard, Building, Wallet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DepositPage() {
  const [method, setMethod] = useState<"card" | "bank" | "wallet">("card");

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/wallet">
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-full">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-on-surface">Deposit Funds</h1>
        </div>

        <div className="card p-8 space-y-8">
          <div className="space-y-4">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Select Payment Method</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={() => setMethod("card")}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${
                  method === "card" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant hover:border-outline text-on-surface-variant"
                }`}
              >
                <CreditCard size={24} />
                <span className="text-sm font-bold">Credit Card</span>
              </button>
              <button 
                onClick={() => setMethod("bank")}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${
                  method === "bank" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant hover:border-outline text-on-surface-variant"
                }`}
              >
                <Building size={24} />
                <span className="text-sm font-bold">Bank Transfer</span>
              </button>
              <button 
                onClick={() => setMethod("wallet")}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${
                  method === "wallet" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant hover:border-outline text-on-surface-variant"
                }`}
              >
                <Wallet size={24} />
                <span className="text-sm font-bold">Digital Wallet</span>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Amount to Deposit</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-on-surface-variant">$</span>
                <input 
                  type="number" 
                  placeholder="0.00" 
                  className="w-full pl-10 pr-4 py-4 text-3xl font-bold border border-outline-variant rounded-xl focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div className="flex gap-2 pt-2">
                {["100", "500", "1000", "5000"].map((amt) => (
                  <button key={amt} className="px-3 py-1 bg-surface-container rounded-md text-xs font-bold hover:bg-outline-variant transition-colors">
                    +${amt}
                  </button>
                ))}
              </div>
            </div>

            {method === "card" && (
              <div className="space-y-4 pt-4 border-t border-outline-variant">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Card Details</label>
                  <input type="text" placeholder="Card Number" className="input-field h-12" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM/YY" className="input-field h-12" />
                  <input type="text" placeholder="CVC" className="input-field h-12" />
                </div>
              </div>
            )}

            <div className="pt-6">
              <Button size="lg" className="w-full h-14 text-lg">Confirm Deposit</Button>
              <p className="text-center text-xs text-on-surface-variant mt-4">
                Institutional-grade security. Your transaction is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
