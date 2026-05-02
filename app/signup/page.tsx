"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, ShieldCheck, Clock, CheckCircle2, Globe } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState<"wholesaler" | "reseller">("wholesaler");
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column - Branding & Info */}
      <div className="hidden lg:flex flex-col bg-on-surface text-white p-16 justify-between relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 space-y-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Package size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight">SupplyMate</span>
          </Link>

          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              {isLogin ? "Welcome back to your business hub." : "Start your global B2B journey today."}
            </h1>
            <p className="text-xl text-white/60 max-w-lg leading-relaxed">
              Join 2,400+ trusted partners processing over $12M in weekly B2B transactions.
            </p>
          </div>

          <div className="space-y-8 pt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">24-Hour Verification</p>
                <p className="text-white/50 text-sm">Rigorous vetting to maintain a high-integrity ecosystem.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="text-success" size={24} />
              </div>
              <div>
                <p className="font-bold text-lg">Trading Approved</p>
                <p className="text-white/50 text-sm">Full access to marketplace once verified.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-white/40">
          <span className="flex items-center gap-1"><ShieldCheck size={14} /> SECURE-TLS 1.3</span>
          <span className="flex items-center gap-1"><ShieldCheck size={14} /> GDPR COMPLIANT</span>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="bg-background flex flex-col p-8 lg:p-24 justify-center items-center">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-on-surface">
              {isLogin ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-on-surface-variant">
              {isLogin ? "Access your SupplyMate partner account" : "Register your business with SupplyMate"}
            </p>
          </div>

          {/* Role Switcher */}
          <div className="grid grid-cols-2 gap-4 p-1 bg-surface-container rounded-lg border border-outline-variant">
            <button
              onClick={() => setRole("wholesaler")}
              className={`px-4 py-3 rounded-md text-sm font-bold transition-all ${
                role === "wholesaler" ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Wholesaler
              <span className="block text-[10px] font-medium opacity-60 uppercase tracking-tighter">Supplying at scale</span>
            </button>
            <button
              onClick={() => setRole("reseller")}
              className={`px-4 py-3 rounded-md text-sm font-bold transition-all ${
                role === "reseller" ? "bg-white shadow-sm text-secondary" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Reseller
              <span className="block text-[10px] font-medium opacity-60 uppercase tracking-tighter">Retail distribution</span>
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">First Name</label>
                  <input type="text" placeholder="John" className="input-field" required />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Last Name</label>
                  <input type="text" placeholder="Doe" className="input-field" required />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Business Email</label>
              <input type="email" placeholder="name@company.com" className="input-field" required />
            </div>

            {!isLogin && (
              <div className="space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Phone Number</label>
                <div className="flex gap-2">
                  <select className="input-field w-[100px] bg-surface-container/50">
                    <option>+1</option>
                    <option>+44</option>
                    <option>+880</option>
                  </select>
                  <input type="tel" placeholder="123 456 7890" className="input-field flex-1" required />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Password</label>
                {isLogin && (
                  <Link href="#" className="text-[10px] font-bold text-primary uppercase tracking-wider hover:underline">Forgot Password?</Link>
                )}
              </div>
              <input type="password" placeholder="••••••••" className="input-field" required />
            </div>

            <div className="flex items-start gap-3 py-2">
              <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary/20" required />
              <label htmlFor="terms" className="text-sm text-on-surface-variant leading-tight">
                I agree to the SupplyMate <Link href="#" className="text-primary font-medium hover:underline">Terms of Service</Link>.
              </label>
            </div>

            <Button 
              size="lg" 
              className="w-full h-12 text-md mt-2"
              onClick={() => {
                localStorage.setItem("userRole", role);
                window.location.href = role === "wholesaler" ? "/dashboard" : "/marketplace";
              }}
            >
              {isLogin ? `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}` : "Create Account"}
            </Button>
          </form>

          <div className="text-center space-y-4">
            <p className="text-sm text-on-surface-variant">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-bold hover:underline"
              >
                {isLogin ? "Register your business" : "Sign in to dashboard"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
