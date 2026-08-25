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
          className="text-2xl font-bold font-mono tracking-tight text-[var(--color-foreground)] sm:text-3xl uppercase"
        >
          // Sequence Protocol
        </h2>
        <p className="mt-3 font-mono text-sm text-[var(--color-muted-foreground)]">
          &gt; Execution flow for physical access request via RFID hardware.
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
            className="relative flex flex-col group"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(1.75rem+1px)] top-7 hidden h-[2px] w-[calc(100%+2rem)] bg-gradient-to-r from-[var(--color-primary)]/40 to-transparent lg:block"
                aria-hidden="true"
              />
            )}

            {/* Step icon badge */}
            <div className="mb-6 flex items-center gap-3 relative z-10">
              <span
                className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] backdrop-blur-md
                  transition-all duration-300 group-hover:border-[var(--color-primary)]/60 group-hover:bg-[var(--color-primary)]/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                aria-hidden="true"
              >
                <Icon
                  style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                  className="text-[var(--color-primary)]"
                  strokeWidth={1.5}
                />
              </span>
              <span
                className="font-mono text-sm font-bold text-[var(--color-primary)] tracking-widest bg-[var(--color-primary)]/10 px-2 py-0.5 rounded border border-[var(--color-primary)]/20"
                aria-label={`Step ${step}`}
              >
                {step}
              </span>
            </div>

            {/* Text */}
            <h3 className="mb-2 text-lg font-bold font-mono uppercase text-[var(--color-foreground)]">
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
        className="mt-16 relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] backdrop-blur-xl px-6 py-5 text-sm text-[var(--color-muted-foreground)] shadow-[var(--shadow-card)]"
        role="note"
        aria-label="Scope note"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-flare pointer-events-none" />
        <strong className="text-[var(--color-primary)] font-mono uppercase tracking-widest">System Warning:</strong>{" "}
        CAPS is an access and occupancy telemetry system only. It does not interface with payment gateways or billing modules.
      </aside>
    </section>
  );
}
