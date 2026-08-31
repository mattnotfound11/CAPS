import { CreditCard, CheckCircle2, ClipboardList, ParkingSquare } from "lucide-react";

/**
 * HowItWorksSection
 *
 * Visual step-by-step explainer of the RFID/QR tap-to-verify flow.
 * Kept intentionally concise — icons + short labels, not technical prose.
 *
 * Design polish (ui-ux-pro-max pass):
 *  - Icon strokeWidth unified to 2 across all step icons
 *  - Icon sized via --icon-lg token (feature-anchor size per style config)
 *  - Connector line color uses --color-border token (not hardcoded)
 *  - Section has animate-section fade-slide-in (restrained motion)
 *  - Step badges use card-interactive hover state
 *
 * SPARC flow:
 *   1. Driver taps campus ID or scans QR on the reader at the gate.
 *   2. System validates the card identity in under a second.
 *   3. Guard Console displays the result (allow / deny).
 *   4. Entry or exit is logged; available slot count updates.
 */

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
    title: "Guard Sees the Result",
    description:
      "The Guard Console displays \"Allow\" or \"Deny\" clearly. Gate personnel operate the barrier based on that result.",
  },
  {
    step: "04",
    icon: ParkingSquare,
    title: "Entry / Exit Logged",
    description:
      "The access event is recorded and the available slot count adjusts immediately — one fewer slot on entry, one restored on exit.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)] animate-section animate-section-delay-2"
    >
      {/* Heading */}
      <div className="mb-16 max-w-2xl">
        <h2
          id="how-it-works-heading"
          className="text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl"
        >
          How it works
        </h2>
        <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
          From card tap to logged record — the full SPARC flow in four simple steps.
        </p>
      </div>

      {/* Steps */}
      <ol
        className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="SPARC tap-to-verify flow"
      >
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <li
            key={step}
            className="relative flex flex-col group"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(2rem+1px)] top-8 hidden h-[2px] w-[calc(100%+2.5rem)] bg-gradient-to-r from-gray-200 to-transparent lg:block"
                aria-hidden="true"
              />
            )}

            {/* Step icon badge */}
            <div className="mb-6 flex flex-col items-start gap-4 relative z-10">
              <span
                className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-100
                  transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-gray-200"
                aria-hidden="true"
              >
                <Icon
                  style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                  className="text-[var(--color-primary)]"
                  strokeWidth={2}
                />
              </span>
              <span
                className="text-sm font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-full"
                aria-label={`Step ${step}`}
              >
                Step {step}
              </span>
            </div>

            {/* Text */}
            <h3 className="mb-2.5 text-xl font-bold text-[var(--color-foreground)] tracking-tight">
              {title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[var(--color-muted-foreground)]">
              {description}
            </p>
          </li>
        ))}
      </ol>

      {/* No-payment clarification note */}
      <aside
        className="mt-20 relative overflow-hidden rounded-[var(--radius-2xl)] bg-gray-50/80 px-8 py-6 text-[15px] text-[var(--color-muted-foreground)] border border-gray-100"
        role="note"
        aria-label="Scope note"
      >
        <strong className="text-[var(--color-foreground)] font-semibold">Note:</strong>{" "}
        SPARC is an access and occupancy telemetry system only. It does not handle
        fees, tolls, or any form of payment or billing.
      </aside>
    </section>
  );
}
