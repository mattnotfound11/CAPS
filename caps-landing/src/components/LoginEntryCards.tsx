import Link from "next/link";
import { Monitor, LayoutDashboard, ArrowRight } from "lucide-react";

/**
 * LoginEntryCards
 *
 * Two clearly-distinguished login entry points:
 *  - Guard Console: blue accent — for security personnel at the gate.
 *  - Admin Dashboard: navy — for campus admin staff.
 *
 * NOTE: The `href` values below are placeholders pointing to the sibling apps.
 * Update them to the actual Guard Console and Admin Dashboard URLs once known.
 */

const entries = [
  {
    id: "guard-console",
    role: "Gate Personnel",
    title: "Guard Console",
    description:
      "For security staff stationed at campus gates. View live access results, monitor the current vehicle queue, and manually log visitor entries.",
    href: "/guard/login", // TODO: update to actual Guard Console URL
    accent: "var(--color-accent)",       // #0369A1 — trust blue
    accentText: "var(--color-on-accent)",
    accentMuted: "#EFF6FF",
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
    accent: "var(--color-admin)",        // #1E3A5F — institutional navy
    accentText: "var(--color-on-admin)",
    accentMuted: "#EEF2F8",
    icon: LayoutDashboard,
    cta: "Open Admin Dashboard",
  },
];

export function LoginEntryCards() {
  return (
    <section
      aria-labelledby="login-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-muted)]/40"
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
              accent,
              accentText,
              accentMuted,
              icon: Icon,
              cta,
            }) => (
              <article
                key={id}
                className="group flex flex-col rounded-[var(--radius-2xl)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-card)] transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]"
                aria-label={`${title} login`}
              >
                {/* Card header stripe */}
                <div
                  className="rounded-t-[var(--radius-2xl)] px-6 py-5"
                  style={{ backgroundColor: accentMuted }}
                >
                  <span
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)]"
                    style={{ backgroundColor: accent }}
                    aria-hidden="true"
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: accentText }}
                      strokeWidth={2}
                    />
                  </span>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: accent }}
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

                  {/* CTA link styled as a button */}
                  <Link
                    href={href}
                    className="mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-lg)] px-5 py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{
                      backgroundColor: accent,
                      color: accentText,
                    }}
                    aria-label={`Sign in to the ${title}`}
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
