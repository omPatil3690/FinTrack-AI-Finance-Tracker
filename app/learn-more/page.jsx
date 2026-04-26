import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Brain,
} from "lucide-react";

export default function LearnMore() {
  return (
    <div className="bg-background text-foreground">
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About <span className="text-primary">FinnyTrack</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive AI-powered personal finance management platform
            designed to help you achieve your financial goals
          </p>
        </div>

        {/* What is FinnyTrack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is FinnyTrack?
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            FinnyTrack is an AI-driven personal finance management platform that
            combines cutting-edge technology with intuitive design to help you
            take control of your money. Whether you're looking to save, invest,
            or optimize your spending, FinnyTrack provides the tools and
            insights you need to make smarter financial decisions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With intelligent budgeting, comprehensive analytics, and
            personalized AI-powered financial advice, FinnyTrack empowers you to
            build a healthier financial future.
          </p>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Smart Budget Management
                  </h3>
                  <p className="text-muted-foreground">
                    Create, track, and optimize budgets with AI-powered
                    insights. Set spending limits and get real-time alerts when
                    you're approaching your budget thresholds.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Comprehensive Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Visualize your financial data with beautiful, interactive
                    charts. Track income, expenses, and savings with detailed
                    breakdowns by category.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    AI Financial Advisor
                  </h3>
                  <p className="text-muted-foreground">
                    Get personalized financial recommendations powered by
                    advanced AI. Receive actionable insights based on your
                    spending patterns and financial goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Multi-Account Management
                  </h3>
                  <p className="text-muted-foreground">
                    Manage multiple income streams, budgets, and expenses in one
                    unified dashboard. Perfect for freelancers and
                    entrepreneurs.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Bank-Level Security
                  </h3>
                  <p className="text-muted-foreground">
                    Your data is encrypted with enterprise-grade security. We
                    use OAuth 2.0 and follow GDPR compliance standards to
                    protect your privacy.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="bg-card text-card-foreground p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Goal Tracking
                  </h3>
                  <p className="text-muted-foreground">
                    Set financial goals and track your progress. Get
                    motivational insights and celebrate milestones on your
                    journey to financial freedom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose FinnyTrack */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Why Choose FinnyTrack?
          </h2>
          <div className="bg-card text-card-foreground p-8 rounded-lg border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    AI-Powered Insights
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Get intelligent recommendations tailored to your unique
                    financial situation
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Easy to Use
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Intuitive interface that makes managing your finances simple
                    and enjoyable
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Comprehensive View
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    See all your financial data in one unified dashboard with
                    real-time updates
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Privacy First
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Your data is yours. We never sell your information to third
                    parties
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Always Improving
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Regular updates and new features based on user feedback
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Affordable
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Flexible pricing plans that fit any budget, starting
                    completely free
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Create Your Account
                </h4>
                <p className="text-muted-foreground">
                  Sign up with your email in minutes. Secure authentication with
                  Clerk ensures your account is protected.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Set Up Your Budgets
                </h4>
                <p className="text-muted-foreground">
                  Create budgets for different categories like groceries,
                  entertainment, utilities, and more. Customize spending limits
                  based on your goals.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Log Your Transactions
                </h4>
                <p className="text-muted-foreground">
                  Track income and expenses as they happen. Add transactions
                  quickly with our streamlined interface.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Get AI Insights
                </h4>
                <p className="text-muted-foreground">
                  Receive personalized recommendations and financial advice
                  powered by our AI. Learn how to optimize your spending and
                  achieve your goals faster.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Achieve Your Goals
                </h4>
                <p className="text-muted-foreground">
                  Monitor your progress with detailed analytics and reports.
                  Celebrate your milestones and keep improving your financial
                  health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-card text-card-foreground p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Is my data secure?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Yes, absolutely. We use enterprise-grade encryption and follow
                industry best practices. Your data is protected with SSL/TLS
                encryption and stored securely on our servers.
              </p>
            </details>

            <details className="bg-card text-card-foreground p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Do you offer a free trial?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Yes! FinnyTrack offers a completely free plan with all core
                features. You can start managing your finances without any
                credit card required.
              </p>
            </details>

            <details className="bg-card text-card-foreground p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Can I upgrade or downgrade my plan?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Absolutely! You can change your plan at any time. Upgrades take
                effect immediately, and downgrades will be reflected in your
                next billing cycle.
              </p>
            </details>

            <details className="bg-card text-card-foreground p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                How does the AI advisor work?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Our AI analyzes your spending patterns, income, and goals to
                provide personalized recommendations. It learns from your
                behavior and improves its suggestions over time.
              </p>
            </details>

            <details className="bg-card text-card-foreground p-6 rounded-lg border border-border cursor-pointer group">
              <summary className="font-semibold text-foreground flex items-center justify-between">
                Can I export my data?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-muted-foreground mt-4">
                Yes! You can export all your financial data in CSV format
                anytime. We believe your data is yours, and you should have full
                control over it.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of users who are already managing their finances
            smarter with FinnyTrack.
          </p>
          <Link href="/sign-up">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-2 rounded-lg">
              Start for Free
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
