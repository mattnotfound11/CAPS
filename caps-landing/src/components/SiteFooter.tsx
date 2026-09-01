import { ShieldCheck } from "lucide-react";

/**
 * SiteFooter — dark, institutional.
 * Expanded with nav links, university credit, and a gradient top border.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#overview", label: "Overview" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#login", label: "Access" },
  ];

  return (
    <footer className="relative mt-auto">
      {/* Gradient top border */}
      <div className="section-divider" />

      <div className="bg-white/[0.01] border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-12 lg:py-16">
          <div className="grid gap-10 sm:grid-cols-3">
            {/* Column 1 — Branding */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--color-primary)]"
                  aria-hidden="true"
                >
                  <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2} />
                </span>
                <span className="text-base font-bold text-[var(--color-foreground)]">
                  SPARC
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[var(--color-muted-foreground)] max-w-[240px]">
                Smart Parking Access and Real-Time Count — an IoT-based parking management system.
              </p>
            </div>

            {/* Column 2 — Quick links */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-muted-foreground)] mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3 — Institutional credit */}
            <div>
              <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-muted-foreground)] mb-4">
                Institutional
              </h4>
              <div className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                <p>University of San Agustin</p>
                <p>BS Information Technology</p>
                <p>Iloilo City, Philippines</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <p className="text-[11px] text-[var(--color-muted-foreground)]">
              &copy; {year} SPARC — Smart Parking Access and Real-Time Count
            </p>
            <p className="text-[11px] text-[var(--color-muted-foreground)]">
              Access &amp; occupancy records only — no payment processing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
