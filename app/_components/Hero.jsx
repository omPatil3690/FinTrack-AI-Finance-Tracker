import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Manage your Money with{" "}
                <span className="text-primary">AI-Driven</span> Personal Finance
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Get smart financial advice powered by AI, track your budgets,
                and achieve your financial goals with ease.
              </p>
              <div className="flex gap-4">
                <Link href="/sign-up">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/learn-more">
                  <Button variant="outline" className="px-6 py-2 rounded-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center">
              <Image
                src="/dashboard.png"
                alt="FinnyTrack Dashboard"
                height={500}
                width={600}
                className="rounded-2xl shadow-lg object-contain w-full"
                draggable={false}
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm">
              <div className="text-3xl text-primary mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Smart Budgeting</h3>
              <p className="text-sm text-muted-foreground">
                Create and manage budgets with AI-powered insights to optimize
                your spending.
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm">
              <div className="text-3xl text-primary mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">
                Financial Analytics
              </h3>
              <p className="text-sm text-muted-foreground">
                Track expenses and income with detailed charts and comprehensive
                financial reports.
              </p>
            </div>

            <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm">
              <div className="text-3xl text-primary mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-2">
                AI Financial Advisor
              </h3>
              <p className="text-sm text-muted-foreground">
                Get personalized financial advice and recommendations based on
                your spending patterns.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of users who are already managing their finances
              smarter.
            </p>
            <Link href="/sign-up">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-2 rounded-lg">
                Start for Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
