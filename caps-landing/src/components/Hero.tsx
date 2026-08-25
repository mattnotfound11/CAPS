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
      {/* Cyber grid background */}
      <div 
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
      </div>

      {/* Glowing background flares */}
      <div 
        className="absolute left-1/2 top-[-200px] -z-10 h-[800px] w-[1200px] -translate-x-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.15) 0%, rgba(138, 43, 226, 0.05) 40%, transparent 70%)"
        }}
      />

      {/* Eyebrow — mono label with typing indicator vibe */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-primary)] shadow-[0_0_10px_rgba(0,240,255,0.2)]">
        <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
        sys.caps.telemetry.active
      </div>

      {/* Headline */}
      <h1
        id="hero-heading"
        className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-foreground)] sm:text-5xl lg:text-7xl"
      >
        Absolute access.
        <br />
        <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
          Total visibility.
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted-foreground)] font-mono text-sm">
        &gt; Initializing RFID grid... <br />
        &gt; CAPS telemetry network online. Validating physical credentials, 
        logging endpoints, and synchronizing slot vectors in real-time.
      </p>

      {/* Deployment context pills */}
      <ul
        aria-label="System components"
        className="mt-12 flex flex-wrap gap-4"
      >
        {highlights.map(({ icon: Icon, label, desc }, i) => (
          <li
            key={label}
            className="animate-section flex flex-1 items-start gap-4 rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-card)] backdrop-blur-xl px-5 py-4 shadow-[var(--shadow-card)] min-w-[240px] hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--color-primary)]/50 transition-all duration-300"
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Decorative icon */}
            <span
              className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              aria-hidden="true"
            >
              <Icon
                style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
                className="text-[var(--color-primary)]"
                strokeWidth={1.5}
              />
            </span>
            <span>
              <span className="block font-mono text-sm font-bold text-[var(--color-foreground)] tracking-wide uppercase">
                {label}
              </span>
              <span className="mt-1 block text-sm text-[var(--color-muted-foreground)]">
                {desc}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
