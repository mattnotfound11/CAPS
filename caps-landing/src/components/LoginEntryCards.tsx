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
      id="login"
      aria-labelledby="login-heading"
      className="relative bg-gray-50/50 border-t border-gray-100 py-[var(--spacing-section)]"
    >
      <div className="relative mx-auto max-w-6xl px-[var(--spacing-gutter)] z-10">
        {/* Section heading */}
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2
            id="login-heading"
            className="text-4xl font-extrabold tracking-tight text-[var(--color-foreground)]"
          >
            Access Portals
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            Select your authorization level to continue. Secure identity credentials are required.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:max-w-4xl mx-auto">
          {entries.map(
            ({
              id,
              role,
              title,
              description,
              href,
              accentVar,
              icon: Icon,
              cta,
            }) => (
              <article
                key={id}
                className="group relative flex flex-col rounded-[var(--radius-2xl)] bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                aria-label={`${title} login`}
              >
                <div className="flex flex-col p-10 h-full">
                  {/* Header */}
                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: `${accentVar}15`, color: accentVar }}
                      aria-hidden="true"
                    >
                      <Icon
                        style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                        strokeWidth={2}
                      />
                    </span>
                    <span
                      className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase"
                      style={{ color: accentVar, backgroundColor: `${accentVar}10` }}
                    >
                      {role}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                    {title}
                  </h3>
                  
                  <p className="mb-10 text-[15px] leading-relaxed text-[var(--color-muted-foreground)] flex-1">
                    {description}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={href}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                    style={{ backgroundColor: accentVar, boxShadow: `0 4px 14px ${accentVar}40` }}
                    aria-label={`Sign in to the ${title}`}
                  >
                    {cta}
                    <ArrowRight
                      style={{ width: "var(--icon-sm)", height: "var(--icon-sm)" }}
                      strokeWidth={2.5}
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
