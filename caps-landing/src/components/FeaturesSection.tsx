"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CreditCard, Activity, Gauge, BarChart3 } from "lucide-react";

const features = [
  {
    id: "rfid-verification",
    title: "RFID & QR Verification",
    description:
      "Campus ID tap or QR scan at the gate reader — instant verification in under one second.",
    icon: CreditCard,
    span: "col-span-2 row-span-2",   // Large card
    accentColor: "var(--color-primary)",
  },
  {
    id: "access-recording",
    title: "Access Recording",
    description: "Every entry and exit timestamped and logged in real time.",
    icon: Activity,
    span: "col-span-1 row-span-1",
    accentColor: "var(--color-secondary)",
  },
  {
    id: "slot-monitoring",
    title: "Slot Monitoring",
    description: "Per-slot ultrasonic sensors for live, accurate occupancy data.",
    icon: Gauge,
    span: "col-span-1 row-span-1",
    accentColor: "var(--color-primary)",
  },
  {
    id: "analytics",
    title: "Dashboard & Reports",
    description:
      "Historical trends, peak-hour analysis, and exportable occupancy reports for campus admin.",
    icon: BarChart3,
    span: "col-span-2 row-span-1",
    accentColor: "var(--color-secondary)",
  },
];

export function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="features"
      className="relative mx-auto w-full max-w-[1400px] px-8 lg:px-12 py-[var(--spacing-section)]"
    >
      {/* Section heading */}
      <div
        ref={ref}
        className="mb-16 max-w-2xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
          Capabilities
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
          Everything you need.{" "}
          <span className="text-[var(--color-muted-foreground)]">Nothing you don&apos;t.</span>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[240px] lg:auto-rows-[280px]">
        {features.map(({ id, title, description, icon: Icon, span, accentColor }, i) => (
          <div
            key={id}
            className={`${span} group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] p-8 lg:p-10 flex flex-col justify-end transition-all duration-500 hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${(i + 1) * 100}ms`,
            }}
          >
            {/* Absolute background gradient that activates on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top: Icon */}
              <div
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 shadow-inner border border-white/5 transition-colors duration-300 group-hover:bg-black/60"
                style={{ color: accentColor }}
              >
                <Icon
                  style={{ width: "28px", height: "28px" }}
                  strokeWidth={1.5}
                />
              </div>

              {/* Bottom: Text */}
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  {title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8B8B8B] group-hover:text-[#A0A0A0] transition-colors duration-300">
                  {description}
                </p>
              </div>
            </div>

            {/* Hover glow */}
            <div
              className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full opacity-0 blur-[100px] transition-all duration-700 group-hover:opacity-40 -z-0"
              style={{ background: accentColor }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
