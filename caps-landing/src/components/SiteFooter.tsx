import { ShieldCheck } from "lucide-react";

/**
 * SiteFooter — minimal, institutional.
 * No social links, no marketing copy — just wordmark and a brief system note.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-[var(--spacing-gutter)] py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span
            className="flex h-6 w-6 items-center justify-center rounded bg-[var(--color-primary)]"
            aria-hidden="true"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold text-[var(--color-foreground)]">
            CAPS
          </span>
        </div>

        {/* Legal / system note */}
        <p className="text-xs text-[var(--color-muted-foreground)]">
          &copy; {year} Campus Automated Parking System. Access &amp; occupancy
          records only — no payment processing.
        </p>
      </div>
    </footer>
  );
}
