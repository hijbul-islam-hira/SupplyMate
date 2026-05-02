import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Package, Shield, BarChart3, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-outline-variant">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Package size={18} />
            </div>
            <span className="text-xl font-bold tracking-tight text-on-surface">SupplyMate</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-on-surface hover:text-primary transition-colors">Home</Link>
            <Link href="/marketplace" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Marketplace</Link>
            <Link href="/dashboard" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Wholesale</Link>
            <Link href="#" className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">Success Stories</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/signup">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                  <Globe size={14} />
                  Institutional-Grade B2B Commerce
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight">
                  Empowering <span className="text-primary">B2B Commerce</span> at Scale
                </h1>
                <p className="text-xl text-on-surface-variant max-w-2xl">
                  SupplyMate bridges the gap between global manufacturers and local resellers. 
                  Streamline your operations with institutional-grade inventory management and automated order fulfillment.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                  <Link href="/signup">
                    <Button size="lg" className="h-14 px-8 text-lg gap-2">
                      Start Growing Now <ArrowRight size={20} />
                    </Button>
                  </Link>
                  <div className="flex items-center gap-4 px-6 h-14 rounded-md border border-outline-variant bg-white">
                    <div className="text-right">
                      <p className="text-xs text-on-surface-variant font-medium">Revenue Growth</p>
                      <p className="text-lg font-bold text-success">+124% YoY</p>
                    </div>
                    <BarChart3 className="text-success" size={24} />
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Join 5,000+ businesses scaling with SupplyMate infrastructure.
                </p>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 rounded-2xl border border-outline-variant shadow-2xl overflow-hidden bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80" 
                    alt="Dashboard Preview" 
                    className="w-full"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-surface-container/30">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-on-surface">Designed for Growth</h2>
              <p className="text-lg text-on-surface-variant">
                Whether you manage massive inventory or high-velocity retail, 
                SupplyMate provides the tools to scale without the overhead.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card p-8 lg:p-10 space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <Package size={28} />
                </div>
                <h3 className="text-2xl font-bold">Inventory Mastery for Wholesalers</h3>
                <p className="text-on-surface-variant">
                  Real-time tracking, predictive restocking, and multi-warehouse management tools 
                  designed to keep your operations lean and your fulfillment rates at 100%.
                </p>
                <ul className="space-y-4">
                  {["Automated SKU Sync", "Bulk Order Processing", "Logistics Partner Integration"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium">
                      <CheckCircle className="text-success" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-8 lg:p-10 space-y-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                  <Shield size={28} />
                </div>
                <h3 className="text-2xl font-bold">Profit Made Simple for Resellers</h3>
                <p className="text-on-surface-variant">
                  Access thousands of vetted products at wholesale prices. 
                  No minimums, instant shipping, and dedicated margin calculators.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="font-bold mb-1">Automated Financials</h4>
                    <p className="text-sm text-on-surface-variant">Consolidated invoicing and net-30 terms available for verified partners.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Verified Ecosystem</h4>
                    <p className="text-sm text-on-surface-variant">Every wholesaler and manufacturer is rigorously vetted for quality.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Market Intelligence</h4>
                    <p className="text-sm text-on-surface-variant">Real-time demand signals to help you stock what actually sells.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="card bg-on-surface p-10 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-2xl">★</span>
                  ))}
                  <span className="ml-2 text-white/80 font-medium">4.9/5 from Verified Users</span>
                </div>
                <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed italic">
                  &quot;SupplyMate transformed how we handle our wholesale operations. We reduced manual data entry by 80% and increased our reseller base by 3x in just six months. It&apos;s the infrastructure we didn&apos;t know we were missing.&quot;
                </blockquote>
                <div>
                  <p className="text-xl font-bold">Marcus Wright</p>
                  <p className="text-white/60">Director of Operations, Global Tech Supplies</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center space-y-8 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold">Ready to Scale Your B2B Operations?</h2>
            <p className="text-xl text-on-surface-variant">
              Join thousands of businesses already growing with SupplyMate. No hidden fees, just pure scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" className="h-14 px-10 text-lg">Create Free Account</Button>
              </Link>
              <Link href="#">
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg">Schedule Demo</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container py-20 border-t border-outline-variant">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Package size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight text-on-surface">SupplyMate</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                The institutional-grade marketplace for modern B2B supply chain management and reselling.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface-variant">Platform</h5>
              <ul className="space-y-4 text-sm">
                <li><Link href="/dashboard" className="text-on-surface-variant hover:text-primary transition-colors">Wholesale Center</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Reseller Portal</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Inventory Tools</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">API Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface-variant">Company</h5>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Success Stories</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface-variant">Legal</h5>
              <ul className="space-y-4 text-sm">
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Merchant Agreement</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant">
            <p>© 2024 SupplyMate Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
