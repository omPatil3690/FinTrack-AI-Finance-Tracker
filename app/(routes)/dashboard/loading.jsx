import React from "react";
import { Loader2, Sparkles } from "lucide-react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Logo Animation */}
        <div className="relative w-16 h-16 mx-auto animate-spin">
          <div className="absolute inset-0 bg-primary/20 rounded-2xl blur opacity-70"></div>
          <div className="relative w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Loading FinTrack
          </h2>
          <p className="text-muted-foreground">Preparing your financial dashboard...</p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-muted rounded-full h-2">
            <div className="h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="flex justify-center animate-spin">
          <Loader2 className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
