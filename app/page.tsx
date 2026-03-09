"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  Target,
  Users,
  Calculator,
  History,
  Share2,
  Check,
  Dumbbell,
  Gauge,
  Sparkles,
  ArrowRight,
  UtensilsCrossed,
  CircleSlash2
} from "lucide-react";

const APP_URL = "https://app.liftit.fit";

const features = [
  {
    icon: Gauge,
    title: "Beat your Best",
    description:
      "Benchmark against your previous session as you work out. See your progress in real-time.",
  },
  {
    icon: Target,
    title: "Weekly Volume Targets",
    description:
      "Life can get in the way - set weekly targets and track your progress toward optimal training frequency.",
  },
  {
    icon: Users,
    title: "Community Workout Plans",
    description:
      "Connect with other lifters and share your workout plans to stay motivated.",
  },  
  {
    icon: UtensilsCrossed,
    title: "Meal Suggestions",
    description:
      "Get personalized meal suggestions to support your training and recovery.",
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
    icon: Dumbbell,
    title: "Personalised Workout Recommendations",
    description:
      "Get workout recommendations tailored to your goals, progress, and recovery.",
  },
  {
    icon: Share2,
    title: "Plan Sharing",
    description:
      "Share your workout plans with friends with a private link.",
  },
  {
    icon: CircleSlash2,
    title: "Ad-free, forever",
    description:
      "We'll never show you ads or sell your data.",
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
      "Form guides for 1000+ exercises",
      "Community workout plans",
      "Plate calculator & rest timer",
      "1 rep max calculator",
      "Ad-free, forever"
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
      "Personalised workout recommendations",
      "4-week free trial included",
      "Recovery meal suggestions",
      "Garmin/Fitbit integration"
    ],
    cta: "Start Free Trial - Full Elite Access for 28 days",
    ctaHref: APP_URL,
    highlighted: true,
  },
  {
    name: "Elite",
    price: "£8.99",
    annualPrice: "£79.99",
    annualPeriod: "/year",
    period: "/month",
    badge: "Scientifically Driven Programming",
    description: "Tailored for your lifestyle, goals, and recovery",
    features: [
      "Everything in Premium",
      "Long-term personalised workout plans",
      "Recovery meal suggestions",
      "Weekly target optimisation",
      "Auto session generation",
      "Unlimited private plan sharing"
    ],
    cta: "Start Free Trial - Full Elite Access for 28 days",
    ctaHref: APP_URL,
    disabled: false,
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

function PricingCard({
  tier,
  annual,
}: {
  tier: PricingTier;
  annual: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col transition-all h-full ${
        tier.highlighted
          ? "border-primary bg-card scale-[1.02] shadow-[0_0_40px_oklch(0.65_0.24_25/0.15)]"
          : "border-border bg-card/60"
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span
            className={`inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-semibold whitespace-nowrap ${
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
            {annual && tier.annualPrice ? tier.annualPrice : tier.price}
          </span>
          <span className="text-muted-foreground text-sm">
            {annual && tier.annualPeriod ? tier.annualPeriod : tier.period}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mt-2">
          {tier.description}
        </p>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
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
  );
}

export default function Home() {
  const [annual, setAnnual] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    startIndex: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(1);

  // Subscribe to select events
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

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

          {/* Mobile carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 pt-4">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex-[0_0_85%] min-w-0"
                  >
                    <PricingCard tier={tier} annual={annual} />
                  </div>
                ))}
              </div>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {pricingTiers.map((tier, index) => (
                <button
                  key={tier.name}
                  type="button"
                  aria-label={`Go to ${tier.name} plan`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} annual={annual} />
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
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:support@liftit.fit"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              support@liftit.fit
            </a>
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
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
