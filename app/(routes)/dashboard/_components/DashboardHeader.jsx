"use client";
import { UserButton } from '@clerk/nextjs';
import { Search, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

function DashboardHeader() {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    // For now, just show an alert - you can implement a proper notification dropdown later
    alert('Notifications feature coming soon!');
  };
  return (
    <header className="bg-background border-b border-border px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>

        {/* Search bar */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search transactions, budgets..."
              className="pl-10 bg-muted/60 border-border focus:bg-card transition-colors"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative hover:bg-muted transition-colors"
            onClick={handleNotificationClick}
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
          </Button>

          {/* User profile */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-sm opacity-75"></div>
            <div className="relative">
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 rounded-full border-2 border-card shadow-lg"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
