"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Sparkles, TrendingUp } from "lucide-react";

function Header() {
  const { user, isSignedIn } = useUser();
  
  return (
    <header 
      className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border shadow-sm animate-slide-down"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-card p-2 rounded-xl border border-border">
                <Image src="/chart-donut.svg" alt="FinTrack Logo" width={32} height={32} />
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-foreground">FinTrack</span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button 
                    variant="ghost" 
                    className="flex items-center space-x-2 hover:bg-muted transition-colors"
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
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
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/sign-in">
                  <Button 
                    variant="outline" 
                    className="rounded-full border-2 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    Dashboard
                  </Button>
                </Link>
                <Link href="/sign-in">
                  <Button className="rounded-full shadow-[0_0_18px_rgba(0,245,212,0.25)]">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
