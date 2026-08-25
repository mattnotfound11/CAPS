import { CreditCard, CheckCircle2, ClipboardList, ParkingSquare } from "lucide-react";

/**
 * HowItWorksSection
 *
 * Visual step-by-step explainer of the RFID tap-to-verify flow.
 * Kept intentionally concise — icons + short labels, not technical prose.
 *
 * Design polish (ui-ux-pro-max pass):
 *  - Icon strokeWidth unified to 2 across all step icons
 *  - Icon sized via --icon-lg token (feature-anchor size per style config)
 *  - Connector line color uses --color-border token (not hardcoded)
 *  - Section has animate-section fade-slide-in (restrained motion)
 *  - Step badges use card-interactive hover state
 *
 * CAPS flow:
 *   1. Driver taps campus ID on the RFID reader at the gate.
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
      "The driver holds their existing campus RFID card to the gate reader — no app, no PIN, no new credential.",
  },
  {
    step: "02",
    icon: CheckCircle2,
    title: "Instant Validation",
    description:
      "CAPS checks the card against the registered vehicle database and returns a decision in under one second.",
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
      aria-labelledby="how-it-works-heading"
      className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)] animate-section animate-section-delay-2"
    >
      {/* Heading */}
      <div className="mb-12 max-w-xl">
        <h2
          id="how-it-works-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-3xl"
        >
          How it works
        </h2>
        <p className="mt-3 text-[var(--color-muted-foreground)]">
          From card tap to logged record — the full CAPS flow in four steps.
        </p>
      </div>

      {/* Steps */}
      <ol
        className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="CAPS tap-to-verify flow"
      >
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <li
            key={step}
            className="relative flex flex-col"
          >
            {/* Connector line — colored with accent to feel like an active flow */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(1.5rem+1px)] top-6 hidden h-[2px] w-[calc(100%+2rem)] bg-gradient-to-r from-[var(--color-secondary)]/30 to-[var(--color-primary)]/10 lg:block"
                aria-hidden="true"
              />
            )}

            {/* Step icon badge — matches bento grid style */}
            <div className="mb-4 flex items-center gap-4 relative z-10">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-background)] shadow-inner ring-1 ring-[var(--color-border)]
                  transition-all duration-300 hover:shadow-md hover:ring-[var(--color-primary)]/50"
                aria-hidden="true"
              >
                {/* --icon-lg for feature anchors; strokeWidth 2 unified per pro-rules */}
                <Icon
                  style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                  className="text-[var(--color-primary)]"
                  strokeWidth={2}
                />
              </span>
              <span
                className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-secondary)]"
                aria-label={`Step ${step}`}
              >
                {step}
              </span>
            </div>

            {/* Text */}
            <h3 className="mb-2 text-base font-semibold text-[var(--color-foreground)]">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">
              {description}
            </p>
          </li>
        ))}
      </ol>

      {/* No-payment clarification note */}
      <aside
        className="mt-16 relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)]/80 p-8 text-sm text-[var(--color-muted-foreground)] shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md"
        role="note"
        aria-label="Scope note"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent pointer-events-none" />
        <div className="relative z-10 flex items-start sm:items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
            <ClipboardList className="h-5 w-5" strokeWidth={2} />
          </div>
          <p className="leading-relaxed">
            <strong className="text-[var(--color-foreground)] font-semibold">Note:</strong>{" "}
            CAPS is an access and occupancy record system only. It does not handle
            fees, tolls, or any form of payment or billing.
          </p>
        </div>
      </aside>
    </section>
  );
}
