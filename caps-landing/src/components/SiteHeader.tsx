import { ShieldCheck } from "lucide-react";

/**
 * SiteHeader — minimal sticky nav.
 * Shows the CAPS wordmark/logo mark only.
 *
 * Design polish (ui-ux-pro-max pass):
 *  - Logo icon: strokeWidth unified to 2, sized via --icon-md token
 *  - Logo span: aria-hidden (decorative beside visible "CAPS" text)
 *  - Smooth border/bg transition on scroll is handled by backdrop-blur-sm
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-[var(--spacing-gutter)] py-4">
        {/* Logo mark — decorative beside visible "CAPS" text, aria-hidden */}
        <span
          className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)]"
          aria-hidden="true"
        >
          {/* strokeWidth 2, --icon-md (20px) per pro-rules icon tokens */}
          <ShieldCheck
            style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
            className="text-white"
            strokeWidth={2}
          />
        </span>

        {/* Wordmark */}
        <span className="text-base font-semibold tracking-tight text-[var(--color-foreground)]">
          CAPS
        </span>

        {/* Tagline — visual only, hidden on small screens */}
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
