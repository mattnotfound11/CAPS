import { Cpu, ShieldCheck, BarChart3 } from "lucide-react";

/**
 * Hero — the first thing a visitor sees.
 *
 * ⚠️  OPEN QUESTION (for PM / team review in PR):
 *     Is this landing page meant to be:
 *     (a) a public informational page that explains CAPS to any visitor,
 *         with login as a secondary action below the fold?
 *     (b) a branded login splash screen where login is the primary action
 *         and explanation is minimal or absent?
 *
 *     This component is built toward (a) — the superset.
 *     To collapse to (b), remove the <p> description and the three stat
 *     badges, and let <LoginEntryCards> move up as the first visible element.
 */

const highlights = [
  {
    icon: Cpu,
    label: "RFID-Based Verification",
    desc: "Campus ID tap → instant gate decision",
  },
  {
    icon: ShieldCheck,
    label: "Access Recording",
    desc: "Every entry and exit logged in real time",
  },
  {
    icon: BarChart3,
    label: "Slot Monitoring",
    desc: "Live available-space count, always accurate",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)] animate-section"
    >
      {/* Eyebrow — mono label, used once only */}
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-secondary)]">
        Campus Automated Parking System
      </p>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-6xl"
      >
        Verified access.
        <br />
        <span className="text-[var(--color-primary)]">Every vehicle. Every gate.</span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)]">
        CAPS is an RFID-based vehicle access and parking slot monitoring system
        deployed at campus gates. Students and faculty tap their existing campus
        ID — the system validates, logs, and updates the available slot count in
        under a second.
      </p>

      {/* Deployment context pills */}
      <ul
        aria-label="System components"
        className="mt-8 flex flex-wrap gap-3"
      >
        {highlights.map(({ icon: Icon, label, desc }, i) => (
          <li
            key={label}
            className="animate-section flex items-start gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 shadow-[var(--shadow-card)] sm:max-w-[220px]"
            style={{ animationDelay: `${(i + 1) * 80}ms` }}
          >
            {/* Decorative icon — aria-hidden per pro-rules (beside visible text) */}
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-muted)]"
              aria-hidden="true"
            >
              {/* strokeWidth unified to --icon-stroke (2) per pro-rules */}
              <Icon
                style={{ width: "var(--icon-sm)", height: "var(--icon-sm)" }}
                className="text-[var(--color-primary)]"
                strokeWidth={2}
              />
            </span>
            <span>
              <span className="block text-sm font-semibold text-[var(--color-foreground)]">
                {label}
              </span>
              <span className="mt-0.5 block text-xs text-[var(--color-muted-foreground)]">
                {desc}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
