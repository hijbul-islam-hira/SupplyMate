"use client";

import { AppLayout } from "@/components/app-layout";
import { PRODUCTS } from "@/lib/dummy-data";
import { Button } from "@/components/ui/button";
import { Filter, Search, ShoppingCart, SlidersHorizontal } from "lucide-react";

export default function MarketplacePage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-on-surface">Reseller Marketplace</h1>
            <p className="text-on-surface-variant">Browse high-margin products from verified wholesalers.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="gap-2">
              <SlidersHorizontal size={18} /> Filters
            </Button>
            <Button className="gap-2">
              <ShoppingCart size={18} /> Bulk Order
            </Button>
          </div>
        </div>

        {/* Categories / Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
          {["All Products", "Electronics", "Fashion", "Sports", "Home & Garden", "Photography"].map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                i === 0 
                  ? "bg-on-surface text-white border-on-surface" 
                  : "bg-white text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="card group flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-surface-container/30">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`badge ${
                    product.status === "In Stock" ? "badge-success" : 
                    product.status === "Low Stock" ? "badge-warning" : "badge-danger"
                  }`}>
                    {product.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="h-8 w-8 p-0 rounded-full shadow-lg">
                    <PlusIcon size={16} />
                  </Button>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col space-y-3">
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                    {product.category} • {product.subCategory}
                  </p>
                  <h3 className="font-bold text-on-surface line-clamp-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>
                
                <div className="flex items-end justify-between pt-2">
                  <div className="space-y-1">
                    <p className="text-xs text-on-surface-variant font-medium">Wholesale Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-on-surface">${product.wholesalePrice.toFixed(2)}</span>
                      <span className="text-xs text-on-surface-variant line-through">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-success uppercase tracking-tighter">Est. Profit</p>
                    <p className="text-sm font-bold text-success">+${(product.price - product.wholesalePrice).toFixed(2)}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant="outline" className="w-full text-xs font-bold uppercase tracking-wider group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="py-12 flex justify-center">
          <Button variant="secondary" size="lg" className="px-12 font-bold">Load More Products</Button>
        </div>
      </div>
    </AppLayout>
  );
}

function PlusIcon({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
