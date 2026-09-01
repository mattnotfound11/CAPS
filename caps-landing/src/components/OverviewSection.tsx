"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wifi, CreditCard, Server, Monitor } from "lucide-react";

const archSteps = [
  { icon: CreditCard, label: "RFID / QR Reader", sub: "Gate hardware" },
  { icon: Server, label: "SPARC Engine", sub: "Validation & logging" },
  { icon: Wifi, label: "IoT Sensors", sub: "Ultrasonic per-slot" },
  { icon: Monitor, label: "Live Dashboard", sub: "Guard & Admin UI" },
];

export function OverviewSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="overview" className="relative w-full py-[var(--spacing-section)]">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-[var(--spacing-gutter)]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]">
              The Challenge
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[var(--color-foreground)] md:text-4xl lg:text-[2.5rem] leading-tight tracking-tight">
              Elevate Campus Parking.{" "}
              <span className="text-gradient-red-gold">Streamline Access.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-muted-foreground)] md:text-[15px]">
              <p>
                With the rapid growth of vehicle ownership, managing campus parking and vehicle flow has become a persistent operational challenge at the{" "}
                <strong className="text-[var(--color-foreground)] font-semibold">University of San Agustin</strong>.
              </p>
              <p>
                SPARC tackles this by offering an integrated,{" "}
                <span className="text-[var(--color-secondary)] font-medium">IoT-based smart parking solution</span>{" "}
                that combines per-slot occupancy sensors with automated RFID and QR-code vehicle identification.
              </p>
              <p>
                Our aim is to significantly reduce the time spent searching for parking, decrease vehicular congestion at campus entrances, and improve overall security through automated, real-time access control.
              </p>
            </div>
          </div>

          {/* System Architecture Diagram */}
          <div className="relative">
            <div className="glass-card-elevated p-8 lg:p-10">
              <div className="mb-8">
                <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-muted-foreground)]">
                  System Architecture
                </span>
              </div>

              {/* Architecture flow — vertical steps with connectors */}
              <div className="flex flex-col gap-1">
                {archSteps.map(({ icon: Icon, label, sub }, i) => (
                  <div key={label}>
                    {/* Step row */}
                    <div className="flex items-center gap-4 group">
                      {/* Step number */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold text-[var(--color-muted-foreground)] border border-[var(--color-border)] bg-white/[0.02]">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Icon badge */}
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300"
                        style={{
                          backgroundColor: i % 2 === 0
                            ? "var(--color-primary-subtle)"
                            : "var(--color-secondary-subtle)",
                          color: i % 2 === 0
                            ? "var(--color-primary)"
                            : "var(--color-secondary)",
                        }}
                      >
                        <Icon style={{ width: "var(--icon-md)", height: "var(--icon-md)" }} strokeWidth={1.5} />
                      </span>

                      {/* Label */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-[var(--color-foreground)]">{label}</div>
                        <div className="text-xs text-[var(--color-muted-foreground)]">{sub}</div>
                      </div>

                      {/* Status dot */}
                      <span className="h-2 w-2 rounded-full bg-[var(--color-success)] opacity-60" />
                    </div>

                    {/* Connector line */}
                    {i < archSteps.length - 1 && (
                      <div className="ml-[15px] my-1 h-5 w-[1px] bg-gradient-to-b from-[var(--color-border)] to-transparent" />
                    )}
                  </div>
                ))}
              </div>

              {/* University badge */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] text-[10px] font-bold">
                  USA
                </div>
                <div>
                  <div className="text-xs font-semibold text-[var(--color-foreground)]">
                    University of San Agustin
                  </div>
                  <div className="text-[10px] text-[var(--color-muted-foreground)]">
                    Iloilo City, Philippines
                  </div>
                </div>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[var(--color-primary)]/5 blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
