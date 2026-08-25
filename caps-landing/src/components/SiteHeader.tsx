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
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/50 bg-[var(--color-background)]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-[var(--spacing-gutter)] py-4">
        {/* Logo mark */}
        <span
          className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          aria-hidden="true"
        >
          <ShieldCheck
            style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
            className="text-[var(--color-primary)]"
            strokeWidth={1.5}
          />
        </span>

        {/* Wordmark */}
        <span className="text-xl font-bold font-mono tracking-widest text-[var(--color-foreground)]">
          CAPS
        </span>

        {/* Tagline */}
        <span
          className="hidden text-xs font-mono text-[var(--color-primary)]/70 sm:inline-block ml-2 border-l border-[var(--color-border)] pl-4"
          aria-hidden="true"
        >
          [ TELEMETRY NETWORK ]
        </span>
      </div>
    </header>
  );
}
