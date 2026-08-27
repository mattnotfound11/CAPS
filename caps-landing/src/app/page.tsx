/**
 * CAPS Landing Page — root route ( / )
 *
 * ─── OPEN QUESTION FOR TEAM / PM REVIEW ───────────────────────────────────
 * It is not yet confirmed whether this page should be:
 *   (a) A PUBLIC INFORMATIONAL PAGE — explains CAPS to any visitor;
 *       login is a secondary action below the fold (current build).
 *   (b) A BRANDED LOGIN SPLASH SCREEN — login is the primary action;
 *       the explainer content is minimal or removed entirely.
 *
 * This page is built toward (a) as the safer superset.
 * To collapse to (b): remove <Hero /> and <HowItWorksSection />,
 * and move <LoginEntryCards /> to the top of <main>.
 *
 * Flag this for confirmation in PR review before merging to main.
 * ──────────────────────────────────────────────────────────────────────────
 */

import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { LoginEntryCards } from "@/components/LoginEntryCards";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { SiteFooter } from "@/components/SiteFooter";
import { Component as GradientBackground } from "@/components/ui/gradient-background-4";

export default function LandingPage() {
  return (
    <>
      <GradientBackground />
      <SiteHeader />

      <main id="main-content" className="flex-1 relative z-10">
        {/* 1. Hero: what CAPS is and what it does */}
        <Hero />

        {/* 2. Features: split blocks */}
        <FeaturesSection />

        {/* 3. Login entry points: Guard Console | Admin Dashboard */}
        <LoginEntryCards />

        {/* 3. How it works: tap-to-verify flow explainer */}
        <HowItWorksSection />
      </main>

      <SiteFooter />
    </>
  );
}
