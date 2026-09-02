"use client";

import Link from "next/link";
import { Monitor, LayoutDashboard, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimationButton } from "./ui/animation-button";

const entries = [
  {
    id: "guard-console",
    role: "Gate Personnel",
    title: "Guard Console",
    description:
      "For security staff stationed at campus gates. View live access results, monitor the current vehicle queue, and manually log visitor entries.",
    href: "/guard/login",
    accentColor: "var(--color-primary)",
    glowShadow: "var(--shadow-glow-red)",
    icon: Monitor,
    cta: "Open Guard Console",
  },
  {
    id: "admin-dashboard",
    role: "Administrative Staff",
    title: "Admin Dashboard",
    description:
      "For campus administrators. Review historical access logs, manage registered vehicles, configure gate rules, and export occupancy reports.",
    href: "/admin/login",
    accentColor: "var(--color-secondary)",
    glowShadow: "var(--shadow-glow-gold)",
    icon: LayoutDashboard,
    cta: "Open Admin Dashboard",
  },
];

export function LoginEntryCards() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      id="login"
      aria-labelledby="login-heading"
      className="relative py-[var(--spacing-section)] overflow-hidden"
    >
      {/* Background treatment */}
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div ref={ref} className="relative mx-auto max-w-6xl px-[var(--spacing-gutter)] z-10">
        {/* Section heading */}
        <div
          className="mb-16 max-w-2xl text-center mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
            Authentication
          </span>
          <h2
            id="login-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
          >
            Access Portals
          </h2>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            Select your authorization level to continue.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl mx-auto">
          {entries.map(
            ({ id, role, title, description, href, accentColor, glowShadow, icon: Icon, cta }, i) => (
              <article
                key={id}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass-card-elevated transition-all duration-500 hover:border-white/[0.12]"
                aria-label={`${title} login`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 150}ms`,
                }}
              >
                <div className="flex flex-col p-8 lg:p-10 h-full">
                  {/* Header */}
                  <div className="mb-8 flex items-center justify-between">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
                        color: accentColor,
                      }}
                      aria-hidden="true"
                    >
                      <Icon
                        style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span
                      className="text-[10px] font-bold tracking-[0.15em] px-3 py-1.5 rounded-full uppercase border"
                      style={{
                        color: accentColor,
                        borderColor: `color-mix(in srgb, ${accentColor} 20%, transparent)`,
                        backgroundColor: `color-mix(in srgb, ${accentColor} 6%, transparent)`,
                      }}
                    >
                      {role}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                    {title}
                  </h3>

                  <p className="mb-10 text-sm leading-relaxed text-[var(--color-muted-foreground)] flex-1">
                    {description}
                  </p>

                  {/* CTA button */}
                  <Link
                    href={href}
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                    style={{
                      backgroundColor: accentColor,
                      color: id === "admin-dashboard" ? "var(--color-on-admin)" : "var(--color-on-accent)",
                      boxShadow: `0 4px 20px color-mix(in srgb, ${accentColor} 30%, transparent)`,
                    }}
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

                {/* Hover glow */}
                <div
                  className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-700 -z-10"
                  style={{ background: accentColor }}
                />
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
