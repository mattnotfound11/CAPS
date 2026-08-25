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
      className="border-t border-black/5 bg-transparent animate-section animate-section-delay-1 relative z-10"
    >
      <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-32">
        {/* Section heading */}
        <div className="mb-16 max-w-xl">
          <h2
            id="login-heading"
            className="text-4xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-5xl"
          >
            Sign in to CAPS
          </h2>
          <p className="mt-4 text-lg text-[var(--color-secondary)]">
            Select your role to access the appropriate console. Both interfaces
            are part of the same highly secure network.
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
            }, i) => (
              <article
                key={id}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)] backdrop-blur-3xl transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 hover:border-[var(--color-primary)]/30"
                aria-label={`${title} login`}
              >
                {/* Minimalist gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                {/* Card header stripe */}
                <div
                  className="px-10 pt-10 pb-6 relative z-10"
                  style={{ backgroundColor: accentSubtleVar }}
                >
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon badge */}
                    <span
                      className="inline-flex h-16 w-16 items-center justify-center rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-black/5"
                      style={{ backgroundColor: accentVar }}
                      aria-hidden="true"
                    >
                      <Icon
                        style={{
                          width: "var(--icon-lg)",
                          height: "var(--icon-lg)",
                          color: accentTextVar,
                        }}
                        strokeWidth={1.5}
                      />
                    </span>
                    
                    {/* Tiny "live" UI detail: Status indicator */}
                    <div className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,1)] border border-black/5 backdrop-blur-md">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34C759] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34C759] shadow-[0_0_8px_rgba(52,199,89,0.5)]"></span>
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-foreground)]">Online</span>
                    </div>
                  </div>

                  <p
                    className="text-[11px] font-semibold uppercase tracking-widest"
                    style={{ color: accentVar }}
                  >
                    {role}
                  </p>
                  <h3
                    className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-foreground)]"
                  >
                    {title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col px-10 pb-10 pt-2 relative z-10">
                  <p className="flex-1 text-base leading-relaxed text-[var(--color-secondary)]">
                    {description}
                  </p>

                  <Link
                    href={href}
                    className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]
                      transition-all duration-300 hover:opacity-90 hover:shadow-md hover:scale-[1.02]
                      active:scale-95 active:opacity-80
                      focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    style={{
                      backgroundColor: accentVar,
                      color: accentTextVar,
                    }}
                    aria-label={`Sign in to the ${title}`}
                  >
                    {cta}
                    <ArrowRight
                      style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
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
