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
      className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-32 animate-section animate-section-delay-2 relative z-10"
    >
      {/* Heading */}
      <div className="mb-16 max-w-xl">
        <h2
          id="how-it-works-heading"
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          How it works
        </h2>
        <p className="mt-4 text-lg text-[var(--color-secondary)]">
          From card tap to logged record — the full CAPS flow in four steps.
        </p>
      </div>

      {/* Steps */}
      <ol
        className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="CAPS tap-to-verify flow"
      >
        {steps.map(({ step, icon: Icon, title, description }, index) => (
          <li
            key={step}
            className="group relative flex flex-col"
          >
            {/* Connector line — glowing Apple Blue */}
            {index < steps.length - 1 && (
              <span
                className="absolute left-[calc(2rem+1px)] top-8 hidden h-[2px] w-[calc(100%+3rem)] bg-gradient-to-r from-[var(--color-primary)]/50 to-[var(--color-admin)]/10 lg:block"
                aria-hidden="true"
              />
            )}

            {/* Step icon badge — matches bento grid style */}
            <div className="mb-6 flex items-center gap-4 relative z-10">
              <span
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ring-1 ring-white/10
                  transition-all duration-500 group-hover:bg-[var(--color-primary)]/20 group-hover:ring-[var(--color-primary)]/50 group-hover:shadow-[0_0_30px_rgba(41,151,255,0.2)]"
                aria-hidden="true"
              >
                {/* --icon-lg for feature anchors; strokeWidth 1.5 for Apple crispness */}
                <Icon
                  style={{ width: "var(--icon-lg)", height: "var(--icon-lg)" }}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </span>
              <span
                className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]"
                aria-label={`Step ${step}`}
              >
                {step}
              </span>
            </div>

            {/* Text */}
            <h3 className="mb-3 text-xl font-bold text-white">
              {title}
            </h3>
            <p className="text-base leading-relaxed text-[var(--color-secondary)]">
              {description}
            </p>
          </li>
        ))}
      </ol>

      {/* No-payment clarification note */}
      <aside
        className="mt-24 relative overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-base text-[var(--color-secondary)] shadow-[var(--shadow-card)] backdrop-blur-3xl transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 hover:border-white/20"
        role="note"
        aria-label="Scope note"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-admin)]/5 pointer-events-none" />
        <div className="relative z-10 flex items-start sm:items-center gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary)] ring-1 ring-[var(--color-primary)]/50 shadow-[0_0_20px_rgba(41,151,255,0.2)]">
            <ClipboardList className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <p className="leading-relaxed">
            <strong className="text-white font-bold">Note:</strong>{" "}
            CAPS is an access and occupancy record system only. It does not handle
            fees, tolls, or any form of payment or billing.
          </p>
        </div>
      </aside>
    </section>
  );
}
