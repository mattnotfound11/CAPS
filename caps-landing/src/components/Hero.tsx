import { Cpu, ShieldCheck, BarChart3, ArrowRight, Zap, Database, Lock } from "lucide-react";
import Link from "next/link";

/**
 * Hero — the first thing a visitor sees.
 * Redesigned to a typography-driven, institutional Bento-box layout.
 * No images, pure layout and CSS-based premium aesthetics.
 */

const capabilities = [
  {
    icon: Cpu,
    label: "Instant RFID Verification",
    desc: "Sub-second validation directly at the gate reader using existing campus credentials.",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Database,
    label: "Live Sync",
    desc: "Centralized database syncing across all campus entry points.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: ShieldCheck,
    label: "Immutable Access Log",
    desc: "Every entry, exit, and denied attempt is cryptographically recorded.",
    span: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: BarChart3,
    label: "Occupancy Telemetry",
    desc: "Real-time lot capacity tracking with automatic decrement/increment logic.",
    span: "md:col-span-2 lg:col-span-2",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-20 lg:py-32 animate-section overflow-hidden"
    >
      {/* Subtle background flares to maintain a premium feel without an image */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[var(--color-secondary)]/10 blur-[100px]" />
      
      {/* Centered Hero Content */}
      <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/50 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] shadow-sm backdrop-blur-md">
          <Zap className="h-3 w-3 text-[var(--color-secondary)]" strokeWidth={2.5} />
          Campus Automated Parking System
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-5xl font-extrabold leading-[1.15] tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl"
        >
          Secure access.
          <br />
          <span className="text-[var(--color-primary)]">
            Precision control.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
          CAPS transforms existing campus IDs into a unified access and occupancy telemetry network. Validate vehicles, log events, and monitor capacity with zero friction.
        </p>
        
        {/* Action Area */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#login-heading"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--color-primary)]/20 transition-all duration-[var(--motion-duration-base)] hover:bg-[var(--color-primary-hover)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            Access Consoles
            <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </Link>
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-muted-foreground)]">
            <Lock className="h-4 w-4" strokeWidth={2} />
            Institutional access only
          </div>
        </div>
      </div>

      {/* Bento Grid layout for capabilities (UI Pro Max recommended) */}
      <div className="mx-auto mt-24 grid max-w-5xl gap-4 md:grid-cols-3 lg:grid-cols-3">
        {capabilities.map(({ icon: Icon, label, desc, span }, i) => (
          <div
            key={label}
            className={`group animate-section relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)]/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${span}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Minimalist gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="relative z-10">
              <span
                className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-background)] shadow-inner ring-1 ring-[var(--color-border)]"
                aria-hidden="true"
              >
                <Icon
                  className="h-6 w-6 text-[var(--color-primary)]"
                  strokeWidth={2}
                />
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--color-foreground)]">
                {label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
