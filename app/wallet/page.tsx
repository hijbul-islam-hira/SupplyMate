"use client";

import { AppLayout } from "@/components/app-layout";
import { TRANSACTIONS } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet as WalletIcon, 
  CreditCard, 
  TrendingUp,
  History,
  Download,
  Search
} from "lucide-react";
import Link from "next/link";

export default function WalletPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-on-surface">Wallet & Earnings</h1>
            <p className="text-on-surface-variant">Manage your funds, track earnings, and handle withdrawals.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/wallet/deposit">
              <Button className="gap-2">
                <ArrowDownLeft size={18} /> Deposit Funds
              </Button>
            </Link>
            <Link href="/wallet/withdraw">
              <Button variant="outline" className="gap-2">
                <ArrowUpRight size={18} /> Withdraw Earnings
              </Button>
            </Link>
          </div>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="card bg-on-surface text-white p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <WalletIcon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-white/60">Total Balance</span>
              </div>
              <div>
                <p className="text-4xl font-bold">$12,450.50</p>
                <p className="text-sm text-success font-bold mt-1 flex items-center gap-1">
                  <TrendingUp size={14} /> +$1,240.00 <span className="text-white/40 font-normal">this month</span>
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <ArrowUpRight size={20} className="text-success" />
              </div>
              <span className="text-sm font-medium text-on-surface-variant">Available for Withdrawal</span>
            </div>
            <div className="mt-6">
              <p className="text-3xl font-bold text-on-surface">$8,120.00</p>
              <p className="text-xs text-on-surface-variant mt-1">Ready for transfer to your linked bank account.</p>
            </div>
          </div>

          <div className="card p-8 flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <CreditCard size={20} className="text-amber-600" />
              </div>
              <span className="text-sm font-medium text-on-surface-variant">Pending Settlements</span>
            </div>
            <div className="mt-6">
              <p className="text-3xl font-bold text-on-surface">$4,330.50</p>
              <p className="text-xs text-on-surface-variant mt-1">Funds currently being processed from recent orders.</p>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="card">
          <div className="p-6 border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-2">
              <History size={20} className="text-on-surface-variant" />
              <h3 className="font-bold text-lg">Transaction History</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative group hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
                <input type="text" placeholder="Search transactions..." className="pl-9 pr-4 py-1.5 bg-surface-container/50 border border-transparent rounded-md text-sm focus:bg-white focus:border-primary focus:outline-none transition-all" />
              </div>
              <Button variant="secondary" size="sm" className="gap-2">
                <Download size={16} /> Export
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container/30">
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Transaction ID</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Type</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Amount</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Date</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
                  <th className="p-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {TRANSACTIONS.map((txn) => (
                  <tr key={txn.id} className="hover:bg-surface-container/10 transition-colors">
                    <td className="p-4 text-sm font-bold">{txn.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {txn.type === "Deposit" || txn.type === "Refund" ? (
                          <div className="p-1 rounded-full bg-success/10 text-success"><ArrowDownLeft size={14} /></div>
                        ) : (
                          <div className="p-1 rounded-full bg-danger/10 text-danger"><ArrowUpRight size={14} /></div>
                        )}
                        <span className="text-sm font-medium">{txn.type}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-sm font-bold ${txn.amount.startsWith("+") ? "text-success" : "text-on-surface"}`}>
                      {txn.amount}
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">{txn.date}</td>
                    <td className="p-4">
                      <span className={`badge ${
                        txn.status === "Completed" ? "badge-success" : "badge-warning"
                      }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs font-bold">Receipt</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-variant text-center">
            <Button variant="ghost" className="text-primary font-bold">Load More History</Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
