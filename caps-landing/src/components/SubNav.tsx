"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function SubNav() {
  return (
    <div className="sticky top-0 z-40 w-full border-y border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl shadow-lg shadow-black/10">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-center px-8 lg:px-12 py-4 gap-4">
        {/* Top Row: Title & Breadcrumbs */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-xl font-medium text-[var(--color-foreground)] tracking-tight">
            SPARC Parking Management
          </h2>
          
          {/* Breadcrumbs */}
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[var(--color-muted-foreground)] font-medium">
            <Home className="h-3.5 w-3.5 hover:text-[var(--color-foreground)] cursor-pointer transition-colors" />
            <ChevronRight className="h-3 w-3" />
            <span className="hover:text-[var(--color-foreground)] cursor-pointer transition-colors">Systems</span>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[var(--color-foreground)]">SPARC</span>
          </div>
        </div>

        {/* Bottom Row: Section nav links */}
        <nav className="flex items-center gap-12 text-sm font-medium text-[var(--color-muted-foreground)] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="#overview" className="hover:text-[var(--color-primary)] transition-colors">
            Overview
          </Link>
          <Link href="#features" className="hover:text-[var(--color-primary)] transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-[var(--color-primary)] transition-colors">
            How it Works
          </Link>
          <Link href="#login" className="hover:text-[var(--color-primary)] transition-colors">
            Access Portals
          </Link>
        </nav>
      </div>
    </div>
  );
}
