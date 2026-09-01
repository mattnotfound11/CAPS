"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CreditCard, CheckCircle2, ClipboardList, ParkingSquare } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: CreditCard,
    title: "Tap Campus ID",
    description:
      "The driver holds their existing campus RFID card or scans a registered QR code at the gate reader.",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "Instant Validation",
    description:
      "SPARC checks the card against the registered vehicle database and returns a decision in under one second.",
  },
  {
    step: "03",
    icon: ClipboardList,
    title: "Guard Sees Result",
    description:
      'The Guard Console displays "Allow" or "Deny" clearly. Gate personnel operate the barrier based on that result.',
  },
  {
    step: "04",
    icon: ParkingSquare,
    title: "Entry Logged",
    description:
      "The access event is recorded and the slot count adjusts immediately — one fewer on entry, one restored on exit.",
  },
];

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="mx-auto max-w-[1400px] px-8 lg:px-12 py-[var(--spacing-section)] relative"
    >
      {/* Heading */}
      <div
        ref={ref}
        className="mb-16 max-w-2xl"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
          Process
        </span>
        <h2
          id="how-it-works-heading"
          className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
        >
          How it works
        </h2>
        <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
          From card tap to logged record — four simple steps.
        </p>
      </div>

      {/* Steps */}
      <ol
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="SPARC tap-to-verify flow"
      >
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <li
            key={step}
            className="relative flex flex-col group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${(index + 1) * 120}ms`,
            }}
          >
            {/* Connector line — desktop only */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(2rem+1px)] top-10 hidden h-[1px] w-[calc(100%+1.5rem)] lg:block z-0"
                style={{
                  background: `linear-gradient(90deg, ${
                    index % 2 === 0 ? "var(--color-primary)" : "var(--color-secondary)"
                  }40, transparent)`,
                }}
                aria-hidden="true"
              />
            )}

            {/* Step card */}
            <div className="p-8 h-full rounded-[2rem] flex flex-col bg-black/40 border border-white/[0.02] transition-colors duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.02] z-10 relative">
              
              {/* Step badge + icon */}
              <div className="mb-6 flex items-center justify-between">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-black/50 transition-colors duration-500 group-hover:border-white/30 group-hover:bg-white/10"
                  aria-hidden="true"
                >
                  <Icon
                    style={{ width: "24px", height: "24px" }}
                    className="text-[var(--color-primary)] transition-colors duration-500 group-hover:text-white"
                    strokeWidth={1.5}
                  />
                </span>
                <span className="text-xs font-bold text-[var(--color-muted-foreground)] tracking-[0.15em] transition-colors duration-500 group-hover:text-white/80">
                  {step}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold text-[var(--color-foreground)] tracking-tight">
                {title}
              </h3>
              
              <p className="text-[15px] leading-relaxed text-[#8B8B8B] transition-colors duration-500 group-hover:text-white/90">
                {description}
              </p>
              
            </div>
          </li>
        ))}
      </ol>

      {/* No-payment scope note */}
      <div
        className="mt-16 glass-card px-8 py-5 text-sm text-[var(--color-muted-foreground)]"
        role="note"
        aria-label="Scope note"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease 0.8s",
        }}
      >
        <strong className="text-[var(--color-foreground)] font-semibold">Note:</strong>{" "}
        SPARC is an access and occupancy telemetry system only. It does not handle
        fees, tolls, or any form of payment or billing.
      </div>
    </section>
  );
}
