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
            {/* Connector line — uses border token, hidden on last item */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(1.75rem+1px)] top-7 hidden h-px w-[calc(100%+2rem)] bg-[var(--color-border)] lg:block"
                aria-hidden="true"
              />
            )}

            {/* Step icon badge — decorative (beside visible step title), aria-hidden */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-[var(--color-card)]
                  transition-colors duration-[var(--motion-duration-base)] hover:border-[var(--color-primary)] hover:bg-[var(--color-muted)]"
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
                className="font-mono text-xs font-semibold text-[var(--color-muted-foreground)]"
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
        className="mt-12 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4 text-sm text-[var(--color-muted-foreground)]"
        role="note"
        aria-label="Scope note"
      >
        <strong className="text-[var(--color-foreground)]">Note:</strong>{" "}
        CAPS is an access and occupancy record system only. It does not handle
        fees, tolls, or any form of payment or billing.
      </aside>
    </section>
  );
}
