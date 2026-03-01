"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Ghost,
  Target,
  Timer,
  Calculator,
  History,
  Share2,
  Check,
  Dumbbell,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const APP_URL = "https://app.liftit.fit";

const features = [
  {
    icon: Ghost,
    title: "Beat your Best",
    description:
      "See your previous session as a translucent overlay. Beat your personal records every time.",
  },
  {
    icon: Target,
    title: "Weekly Volume Targets",
    description:
      "Set weekly volume budgets per muscle group and track your progress toward optimal training frequency.",
  },
  {
    icon: Timer,
    title: "Rest Timer",
    description:
      "Built-in configurable rest timer with haptic feedback so you stay on track between sets.",
  },
  {
    icon: Calculator,
    title: "Plate Calculator",
    description:
      "Instantly see which plates to load on each side of the bar. Supports all standard plate sizes.",
  },
  {
    icon: History,
    title: "Workout History",
    description:
      "Full session history with volume stats and delta tracking. See exactly how you're progressing over time.",
  },
  {
    icon: Share2,
    title: "Plan Sharing",
    description:
      "Share your workout plans with friends via a simple link. Public sharing is free — private sharing with Premium.",
  },
];

interface PricingTier {
  name: string;
  price: string;
  annualPrice?: string;
  annualPeriod?: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
  disabled?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start tracking your lifts.",
    features: [
      "Unlimited workout logging",
      "Workout history & stats",
      "Basic analytics",
      "Weekly volume targets",
      "Community workout plans",
      "Plate calculator & rest timer",
    ],
    cta: "Get Started",
    ctaHref: APP_URL,
  },
  {
    name: "Premium",
    price: "£2.99",
    annualPrice: "£29.99",
    annualPeriod: "/year",
    period: "/month",
    badge: "Popular",
    description: "For lifters who want more control and insights.",
    features: [
      "Everything in Free",
      "Private workout plan sharing",
      "Advanced analytics",
      "Priority support",
      "Early access to new features",
      "4-week free trial included",
    ],
    cta: "Start Free Trial",
    ctaHref: APP_URL,
    highlighted: true,
  },
  {
    name: "Elite",
    price: "£7.99",
    annualPrice: "£59.99",
    annualPeriod: "/year",
    period: "/month",
    badge: "AI-Powered",
    description: "Personalised AI coaching to maximise your gains.",
    features: [
      "Everything in Premium",
      "AI-driven workout recommendations",
      "Recovery meal suggestions",
      "Weekly target optimisation",
      "Auto session generation",
      "Goal-setting with personalised plans",
    ],
    cta: "Coming Soon",
    ctaHref: "#",
    disabled: true,
  },
];

function BrandName({ className = "" }: { className?: string }) {
  return (
    <span className={className}>
      Lift<span className="text-primary">It</span>
      <span className="text-primary/70 font-semibold text-[0.6em]">.fit</span>
    </span>
  );
}

export default function Home() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/hero-gym.webp"
          alt=""
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[oklch(0.09_0.01_270/0.78)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center max-w-3xl">
          {/* Logo */}
          <div className="animate-fade-in-up">
            <div className="w-24 h-24 rounded-2xl overflow-hidden animate-pulse-glow">
              <Image
                src="/logo-1024.png"
                alt="LiftIt logo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Brand name */}
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            <BrandName />
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up animate-delay-200 text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90">
            Track Your Lifts. Beat your best.
          </p>

          {/* Subtitle */}
          <p className="animate-fade-in-up animate-delay-300 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Beat your best — see your previous session as you lift, beat your
            personal records, and watch your progress compound over time.
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animate-delay-400 flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 hover:scale-105 active:scale-100"
            >
              <Dumbbell className="w-5 h-5" />
              Start Lifting — It&apos;s Free
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in-up animate-delay-600 mt-8">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-primary/60 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Gradient Divider ──────────────────────────────────── */}
      <div className="brand-gradient-line h-px" />

      {/* ── Features Section ──────────────────────────────────── */}
      <section className="relative py-24 sm:py-32">
        {/* Subtle background image */}
        <Image
          src="/images/features-gym.webp"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-background/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything you need to{" "}
              <span className="text-primary">level up</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for lifters who want to get stronger, not fiddle with
              spreadsheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl border border-border bg-card/60 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gradient Divider ──────────────────────────────────── */}
      <div className="brand-gradient-line h-px" />

      {/* ── Pricing Section ───────────────────────────────────── */}
      <section className="relative py-24 sm:py-32">
        <Image
          src="/images/pricing-gym.webp"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-background/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, honest <span className="text-primary">pricing</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start free. Upgrade when you&apos;re ready. No hidden fees.
            </p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span
                className={`text-sm font-medium transition-colors ${
                  !annual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Monthly
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={annual}
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  annual ? "bg-primary" : "bg-secondary"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5.5 w-5.5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                    annual ? "translate-x-5" : "translate-x-0.5"
                  } mt-[1px]`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${
                  annual ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                Annual
              </span>
              {annual && (
                <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                  Save ~17%
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col transition-all ${
                  tier.highlighted
                    ? "border-primary bg-card scale-[1.02] shadow-[0_0_40px_oklch(0.65_0.24_25/0.15)]"
                    : "border-border bg-card/60"
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-semibold ${
                        tier.badge === "AI-Powered"
                          ? "bg-secondary text-primary"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {tier.badge === "AI-Powered" && (
                        <Sparkles className="w-3 h-3" />
                      )}
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {annual && tier.annualPrice
                        ? tier.annualPrice
                        : tier.price}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {annual && tier.annualPeriod
                        ? tier.annualPeriod
                        : tier.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={tier.disabled ? undefined : tier.ctaHref}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:brightness-110 hover:scale-[1.02] active:scale-100"
                      : tier.disabled
                        ? "bg-secondary text-muted-foreground cursor-not-allowed"
                        : "bg-secondary text-foreground hover:bg-secondary/80 hover:scale-[1.02] active:scale-100"
                  }`}
                  {...(tier.disabled
                    ? { "aria-disabled": true }
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {tier.cta}
                  {!tier.disabled && <ArrowRight className="w-4 h-4" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gradient Divider ──────────────────────────────────── */}
      <div className="brand-gradient-line h-px" />

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-1024.png"
              alt="LiftIt logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">
              <BrandName />
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md">
            Track your lifts. Beat your best - every session.
          </p>
          <a
            href={APP_URL}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Open the app <ArrowRight className="w-4 h-4" />
          </a>
          <div className="brand-gradient-line h-px w-full max-w-xs mt-4" />
          <p className="text-muted-foreground/50 text-xs">
            &copy; {new Date().getFullYear()} LiftIt.fit. All rights reserved.
          </p>
          <details className="group text-muted-foreground/40 text-xs">
            <summary className="cursor-pointer hover:text-muted-foreground/60 transition-colors list-none text-center">
              Photo credits
            </summary>
            <div className="mt-2 space-y-1">
              <p>
                Photos by{" "}
                <a href="https://unsplash.com/@heidierickson" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">Heidi Erickson</a>,{" "}
                <a href="https://unsplash.com/@tfritos" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">Victor Freitas</a>, and{" "}
                <a href="https://unsplash.com/@tfritos" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">Luis Reyes</a>{" "}
                on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted-foreground">Unsplash</a>
              </p>
            </div>
          </details>
        </div>
      </footer>
    </div>
  );
}
