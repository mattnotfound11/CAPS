/**
 * SPARC Landing Page — root route ( / )
 *
 * Full public informational page explaining SPARC to any visitor.
 * Login portals are below the fold as a secondary action.
 *
 * Page flow:
 *   1. Hero — cinematic intro with live telemetry widget
 *   2. SubNav — sticky section navigation
 *   3. Overview — the challenge & solution
 *   4. Features — bento grid
 *   5. How It Works — 4-step flow
 *   6. Login Cards — Guard Console | Admin Dashboard
 *   7. Tech Stack — what it's built with
 *   8. Team — proponents & university credit
 */

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { SubNav } from "@/components/SubNav";
import { OverviewSection } from "@/components/OverviewSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LoginEntryCards } from "@/components/LoginEntryCards";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TechStackSection } from "@/components/TechStackSection";
import { TeamSection } from "@/components/TeamSection";
import { SiteFooter } from "@/components/SiteFooter";
import { Component as GradientBackground } from "@/components/ui/gradient-background-4";
import { FloatingTelemetry } from "@/components/FloatingTelemetry";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="flex-1 relative z-10">
        {/* 1. Hero with ambient gradient background */}
        <div className="relative w-full overflow-hidden">
          <GradientBackground />
          <Hero />
        </div>

        {/* 2. Secondary Navigation */}
        <SubNav />

        {/* 3. Overview */}
        <OverviewSection />

        {/* Section divider */}
        <div className="section-divider mx-auto max-w-6xl" />

        {/* 4. Features */}
        <FeaturesSection />

        {/* Section divider */}
        <div className="section-divider mx-auto max-w-6xl" />

        {/* 5. How it works */}
        <HowItWorksSection />

        {/* 6. Access Portals */}
        <LoginEntryCards />

        {/* 7. Tech Stack */}
        <TechStackSection />

        {/* 8. Team */}
        <TeamSection />
      </main>

      <SiteFooter />
      <FloatingTelemetry />
    </>
  );
}
