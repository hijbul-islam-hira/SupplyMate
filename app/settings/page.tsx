"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun,
  Languages,
  Check
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "bn">("en");

  return (
    <AppLayout>
      <div className="max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-on-surface">Settings</h1>
          <p className="text-on-surface-variant">Manage your account preferences and application settings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar Nav */}
          <div className="space-y-1">
            {[
              { label: "Profile Information", icon: User, active: true },
              { label: "Notifications", icon: Bell, active: false },
              { label: "Security", icon: Shield, active: false },
              { label: "Regional Settings", icon: Globe, active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all ${
                  item.active 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Appearance Section */}
            <div className="card p-6 space-y-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Moon size={20} className="text-primary" /> Appearance
              </h3>
              <div className="flex items-center justify-between p-4 rounded-xl bg-surface-container/30 border border-outline-variant">
                <div>
                  <p className="font-bold">Dark Mode</p>
                  <p className="text-xs text-on-surface-variant">Switch between light and dark themes</p>
                </div>
                <button 
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`w-12 h-6 rounded-full transition-all relative ${
                    isDarkMode ? "bg-primary" : "bg-outline-variant"
                  }`}
                >
                  <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                    isDarkMode ? "left-7" : "left-1"
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Language Section */}
            <div className="card p-6 space-y-6">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Languages size={20} className="text-primary" /> Language & Region
              </h3>
              <div className="space-y-3">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Preferred Language</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setLanguage("en")}
                    className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                      language === "en" ? "border-primary bg-primary/5" : "border-outline-variant hover:border-outline"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-bold">English</span>
                      <span className="text-xs text-on-surface-variant italic">Default System Language</span>
                    </div>
                    {language === "en" && <Check className="text-primary" size={20} />}
                  </button>
                  <button 
                    onClick={() => setLanguage("bn")}
                    className={`p-4 rounded-xl border-2 flex items-center justify-between transition-all ${
                      language === "bn" ? "border-primary bg-primary/5" : "border-outline-variant hover:border-outline"
                    }`}
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-bold">বাংলা (Bangla)</span>
                      <span className="text-xs text-on-surface-variant">Bengali Translation</span>
                    </div>
                    {language === "bn" && <Check className="text-primary" size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Account Info */}
            <div className="card p-6 space-y-6">
              <h3 className="font-bold text-lg">Personal Information</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                  <input type="text" defaultValue="Alex Johnson" className="input-field" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                  <input type="email" defaultValue="alex.j@globaltech.com" className="input-field" />
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
