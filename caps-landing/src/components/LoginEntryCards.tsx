import Link from "next/link";
import { Monitor, LayoutDashboard, ArrowRight } from "lucide-react";

/**
 * LoginEntryCards
 *
 * Two clearly-distinguished login entry points:
 *  - Guard Console: access-control blue (--color-accent)
 *  - Admin Dashboard: institutional navy (--color-admin)
 *
 * NOTE: href values are placeholders — update to actual app URLs once known.
 *
 * Design polish (ui-ux-pro-max pass):
 *  - Hardcoded accentMuted hex values moved to CSS custom properties
 *    (--color-accent-subtle, --color-admin-subtle) in globals.css
 *  - Hover lift via shared .card-interactive utility (motion token, no bounce)
 *  - CTA buttons meet min 44px touch target (py-3 + text = ~44px)
 *  - Icon stroke unified to 2; sized via --icon-md token
 *  - Active state on CTA via :active scale (no layout shift per pro-rules)
 */

const entries = [
  {
    id: "guard-console",
    role: "Gate Personnel",
    title: "Guard Console",
    description:
      "For security staff stationed at campus gates. View live access results, monitor the current vehicle queue, and manually log visitor entries.",
    href: "/guard/login", // TODO: update to actual Guard Console URL
    accentVar: "var(--color-accent)",
    accentTextVar: "var(--color-on-accent)",
    accentSubtleVar: "var(--color-accent-subtle)",
    icon: Monitor,
    cta: "Open Guard Console",
  },
  {
    id: "admin-dashboard",
    role: "Administrative Staff",
    title: "Admin Dashboard",
    description:
      "For campus administrators. Review historical access logs, manage registered vehicles, configure gate rules, and export occupancy reports.",
    href: "/admin/login", // TODO: update to actual Admin Dashboard URL
    accentVar: "var(--color-admin)",
    accentTextVar: "var(--color-on-admin)",
    accentSubtleVar: "var(--color-admin-subtle)",
    icon: LayoutDashboard,
    cta: "Open Admin Dashboard",
  },
];

export function LoginEntryCards() {
  return (
    <section
      aria-labelledby="login-heading"
      className="relative border-t border-[var(--color-border)]/50 bg-[var(--color-muted)]/20 animate-section animate-section-delay-1 overflow-hidden"
    >
      {/* Cyber grid accent overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]"
      />

      <div className="relative mx-auto max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)] z-10">
        {/* Section heading */}
        <div className="mb-12 max-w-xl">
          <h2
            id="login-heading"
            className="text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
          >
            Access Terminals
          </h2>
          <p className="mt-4 font-mono text-sm text-[var(--color-muted-foreground)]">
            &gt; Select authorization level. <br />
            &gt; Identity credentials required for all entry points.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {entries.map(
            ({
              id,
              role,
              title,
              description,
              href,
              accentVar,
              accentTextVar,
              accentSubtleVar,
              icon: Icon,
              cta,
            }) => (
              <article
                key={id}
                className="group relative flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] backdrop-blur-xl shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 overflow-hidden"
                aria-label={`${title} login`}
              >
                {/* Glowing neon top edge */}
                <div 
                  className="absolute top-0 left-0 h-1 w-full opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: accentVar, boxShadow: `0 0 10px ${accentVar}` }}
                />

                <div className="flex flex-col p-8 h-full">
                  {/* Header */}
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-black/20 border"
                      style={{ borderColor: accentVar, color: accentVar, boxShadow: `0 0 15px ${accentSubtleVar}` }}
                      aria-hidden="true"
                    >
                      <Icon
                        style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                        strokeWidth={1.5}
                      />
                    </span>
                    <p
                      className="text-xs font-mono font-semibold uppercase tracking-widest px-2 py-1 rounded bg-black/20 border"
                      style={{ color: accentVar, borderColor: `${accentVar}33` }}
                    >
                      {role}
                    </p>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold font-mono tracking-tight text-[var(--color-foreground)] uppercase">
                    {title}
                  </h3>
                  
                  <p className="mb-8 text-sm leading-relaxed text-[var(--color-muted-foreground)] flex-1">
                    {description}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-[var(--radius-lg)] px-5 py-3 text-sm font-mono font-bold uppercase tracking-wider
                      transition-all duration-300
                      hover:brightness-110 active:scale-95"
                    style={{
                      backgroundColor: `${accentVar}22`,
                      color: accentVar,
                      border: `1px solid ${accentVar}55`,
                    }}
                    aria-label={`Sign in to the ${title}`}
                  >
                    {cta}
                    <ArrowRight
                      style={{ width: "var(--icon-sm)", height: "var(--icon-sm)" }}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
