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
      className="border-t border-[var(--color-border)] bg-[var(--color-muted)]/40 animate-section animate-section-delay-1"
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
            }) => (
              <article
                key={id}
                /* card-interactive: shared hover lift utility (motion token, no bounce) */
                className="card-interactive group flex flex-col rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)]"
                aria-label={`${title} login`}
              >
                {/* Card header stripe — color from token, not hardcoded hex */}
                <div
                  className="rounded-t-[var(--radius-2xl)] px-6 py-5"
                  style={{ backgroundColor: accentSubtleVar }}
                >
                  {/* Icon badge — decorative (beside visible heading text), aria-hidden */}
                  <span
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)]"
                    style={{ backgroundColor: accentVar }}
                    aria-hidden="true"
                  >
                    {/* strokeWidth 2 — unified per pro-rules stroke consistency */}
                    <Icon
                      style={{
                        width: "var(--icon-md)",
                        height: "var(--icon-md)",
                        color: accentTextVar,
                      }}
                      strokeWidth={2}
                    />
                  </span>
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
                <div className="flex flex-1 flex-col px-6 py-5">
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {description}
                  </p>

                  {/*
                   * CTA button — min 44px touch target (py-3 gives ~44px total height).
                   * :active scale via CSS to avoid layout shift (pro-rules).
                   * hover:opacity-90 + transition use motion token durations.
                   * aria-label gives descriptive accessible name (pro-rules).
                   */}
                  <Link
                    href={href}
                    className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-lg)] px-5 py-3 text-sm font-semibold
                      transition-opacity duration-[var(--motion-duration-base)] hover:opacity-90
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
                    {/* ArrowRight — decorative beside CTA text, aria-hidden */}
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
