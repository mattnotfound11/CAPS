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
      className="border-t border-[var(--color-border)] bg-transparent animate-section animate-section-delay-1"
    >
      <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)]">
        {/* Section heading */}
        <div className="mb-10 max-w-xl">
          <h2
            id="login-heading"
            className="text-2xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-3xl"
          >
            Sign in to CAPS
          </h2>
          <p className="mt-3 text-[var(--color-muted-foreground)]">
            Select your role to access the appropriate console. Both interfaces
            are part of the same CAPS system.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
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
            }, i) => (
              <article
                key={id}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)]/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-primary)]/30"
                aria-label={`${title} login`}
              >
                {/* Minimalist gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                {/* Card header stripe */}
                <div
                  className="px-8 pt-8 pb-6 relative z-10"
                  style={{ backgroundColor: accentSubtleVar }}
                >
                  <div className="flex items-center justify-between mb-4">
                    {/* Icon badge */}
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-inner ring-1 ring-black/5"
                      style={{ backgroundColor: accentVar }}
                      aria-hidden="true"
                    >
                      <Icon
                        style={{
                          width: "var(--icon-lg)",
                          height: "var(--icon-lg)",
                          color: accentTextVar,
                        }}
                        strokeWidth={2}
                      />
                    </span>
                    
                    {/* Tiny "live" UI detail: Status indicator */}
                    <div className="flex items-center gap-1.5 rounded-full bg-white/50 px-2.5 py-1 shadow-sm border border-black/5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]">Online</span>
                    </div>
                  </div>

                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: accentVar }}
                  >
                    {role}
                  </p>
                  <h3
                    className="mt-1 text-xl font-bold text-[var(--color-foreground)]"
                  >
                    {title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-8 pb-8 pt-2 relative z-10">
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {description}
                  </p>

                  <Link
                    href={href}
                    className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold
                      transition-all duration-[var(--motion-duration-base)] hover:opacity-90 hover:shadow-sm
                      active:scale-[0.98] active:opacity-80
                      focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{
                      backgroundColor: accentVar,
                      color: accentTextVar,
                      transitionTimingFunction: "var(--motion-easing)",
                    }}
                    aria-label={`Sign in to the ${title}`}
                  >
                    {cta}
                    <ArrowRight
                      style={{ width: "var(--icon-sm)", height: "var(--icon-sm)" }}
                      strokeWidth={2}
                      aria-hidden="true"
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
