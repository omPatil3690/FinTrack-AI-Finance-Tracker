"use client";
import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  Receipt,
  ShieldCheck,
  CircleDollarSign,
  LogOut,
  Settings,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import { UserButton, useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Income",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Expenses",
      icon: Receipt,
      path: "/dashboard/expenses",
    },
    {
      id: 5,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  
  const path = usePathname();
  const { signOut } = useClerk();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (resolvedTheme || theme) === "dark";

  const handleSettingsClick = () => {
    // For now, just show an alert - you can implement a proper settings page later
    alert("Settings page coming soon! This will redirect to user settings.");
  };

  return (
    <div
      className="h-screen p-6 bg-background border-r border-border shadow-sm flex flex-col"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3 mb-8 group">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur opacity-60 group-hover:opacity-90 transition duration-300"></div>
          <div className="relative bg-card p-2 rounded-xl border border-border">
            <Image src="/chart-donut.svg" alt="FinTrack Logo" width={32} height={32} />
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-foreground">FinTrack</span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
      </Link>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
          Menu
        </div>
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group hover:translate-x-1 ${
                path === menu.path
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <menu.icon 
                className={`w-5 h-5 ${
                  path === menu.path ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`} 
              />
              <span className="font-medium">{menu.name}</span>
              {path === menu.path && (
                <div
                  className="ml-auto w-2 h-2 bg-primary-foreground/80 rounded-full"
                />
              )}
            </div>
          </Link>
        ))}
      </nav>

      {/* Settings Section */}
      <div className="border-t border-border pt-4 space-y-2">
        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
          Account
        </div>

        <Button
          variant="ghost"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="w-full justify-start space-x-3 px-4 py-3 h-auto text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          {isDark ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-primary" />}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          <span className="ml-auto text-xs text-muted-foreground">
            {isDark ? "Dark" : "Light"}
          </span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={handleSettingsClick}
          className="w-full justify-start space-x-3 px-4 py-3 h-auto text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Button>
        
        <Button
          variant="ghost"
          onClick={() => signOut()}
          className="w-full justify-start space-x-3 px-4 py-3 h-auto text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </Button>
      </div>

      {/* User Profile */}
      <div className="border-t border-border pt-4">
        <div className="flex items-center space-x-3 px-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-75"></div>
            <div className="relative">
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 rounded-full border-2 border-card shadow-lg"
                  }
                }}
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Profile</p>
            <p className="text-xs text-muted-foreground truncate">Manage account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
