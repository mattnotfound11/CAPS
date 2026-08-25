import { ShieldCheck } from "lucide-react";

/**
 * SiteHeader — minimal top nav.
 * Shows the CAPS wordmark/logo only. No nav links on the landing page;
 * the login entry points are in the LoginEntryCards section below the fold.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-[var(--spacing-gutter)] py-4">
        {/* Logo mark */}
        <span
          className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)]"
          aria-hidden="true"
        >
          <ShieldCheck className="h-5 w-5 text-white" strokeWidth={2} />
        </span>

        {/* Wordmark */}
        <span className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
          CAPS
        </span>

        {/* Tagline — hidden on small screens */}
        <span
          className="hidden text-xs text-[var(--color-muted-foreground)] sm:inline-block"
          aria-hidden="true"
        >
          Campus Automated Parking System
        </span>
      </div>
    </header>
  );
}
