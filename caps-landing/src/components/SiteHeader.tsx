import { ShieldCheck } from "lucide-react";

/**
 * SiteHeader — minimal sticky nav.
 * Shows the SPARC wordmark/logo mark only.
 *
 * Design polish (ui-ux-pro-max pass):
 *  - Logo icon: strokeWidth unified to 2, sized via --icon-md token
 *  - Logo span: aria-hidden (decorative beside visible "SPARC" text)
 *  - Smooth border/bg transition on scroll is handled by backdrop-blur-sm
 */
export function SiteHeader() {
  return (
    <header className="relative z-40 border-b border-gray-100 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-[var(--spacing-gutter)] py-4">
        {/* Logo mark */}
        <span
          className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
          aria-hidden="true"
        >
          <ShieldCheck
            style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
            strokeWidth={2}
          />
        </span>

        {/* Wordmark */}
        <span className="text-xl font-extrabold tracking-tight text-[var(--color-foreground)]">
          SPARC
        </span>

        {/* Tagline */}
        <span
          className="hidden text-sm font-medium text-[var(--color-muted-foreground)] sm:inline-block ml-2 border-l border-gray-200 pl-4"
          aria-hidden="true"
        >
          Smart Parking Access and Real-Time Count
        </span>

        {/* Login Button */}
        <div className="ml-auto flex items-center">
          <a 
            href="#login" 
            className="inline-flex h-8 items-center justify-center rounded-md bg-[var(--color-primary)] px-3 text-xs font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[var(--color-primary)]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]"
          >
            Log In
          </a>
        </div>
      </div>
    </header>
  );
}
