import { Cpu, ShieldCheck, BarChart3, ArrowRight, Zap, Database, Lock } from "lucide-react";
import Link from "next/link";

/**
 * Hero — the first thing a visitor sees.
 * Redesigned to a typography-driven, institutional Bento-box layout.
 * Features live telemetry micro-animations to feel active without using heavy imagery.
 */

// Custom components for the micro-animations inside the bento grid
const RfidScannerAnimation = () => (
  <div className="absolute right-6 top-6 h-12 w-16 overflow-hidden rounded-lg border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5">
    <div className="absolute inset-x-0 h-0.5 bg-[var(--color-primary)] animate-scan shadow-[0_0_8px_var(--color-primary)]" />
    <div className="flex h-full items-center justify-center">
      <div className="h-6 w-10 rounded bg-[var(--color-primary)]/10" />
    </div>
  </div>
);

const SyncAnimation = () => (
  <div className="absolute right-6 top-6 flex items-center justify-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
    <div className="h-px w-6 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] opacity-50" />
    <div className="h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse" style={{ animationDelay: '500ms' }} />
  </div>
);

const LogAnimation = () => (
  <div className="absolute right-6 top-6 h-12 w-24 overflow-hidden [mask-image:linear-gradient(to_bottom,white_50%,transparent)]">
    <div className="flex flex-col gap-1.5 animate-log">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
          <div className="h-1.5 flex-1 rounded bg-[var(--color-foreground)]/10" />
        </div>
      ))}
    </div>
  </div>
);

const OccupancyAnimation = () => (
  <div className="absolute right-6 top-6 flex flex-col items-end gap-1.5">
    <div className="flex items-end gap-1">
      <span className="font-mono text-sm font-bold text-[var(--color-primary)]">84%</span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--color-muted-foreground)]">Full</span>
    </div>
    <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[var(--color-primary)]/10">
      <div className="h-full w-[84%] bg-[var(--color-primary)] transition-all duration-1000 ease-in-out" />
    </div>
  </div>
);

const capabilities = [
  {
    icon: Cpu,
    label: "Instant RFID Verification",
    desc: "Sub-second validation directly at the gate reader using existing campus credentials.",
    span: "md:col-span-2 lg:col-span-2",
    animation: <RfidScannerAnimation />,
  },
  {
    icon: Database,
    label: "Live Sync",
    desc: "Centralized database syncing across all campus entry points.",
    span: "md:col-span-1 lg:col-span-1",
    animation: <SyncAnimation />,
  },
  {
    icon: ShieldCheck,
    label: "Immutable Access Log",
    desc: "Every entry, exit, and denied attempt is cryptographically recorded.",
    span: "md:col-span-1 lg:col-span-1",
    animation: <LogAnimation />,
  },
  {
    icon: BarChart3,
    label: "Occupancy Telemetry",
    desc: "Real-time lot capacity tracking with automatic decrement/increment logic.",
    span: "md:col-span-2 lg:col-span-2",
    animation: <OccupancyAnimation />,
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-20 lg:py-32 animate-section overflow-hidden"
    >
      {/* Centered Hero Content */}
      <div className="mx-auto flex flex-col items-center text-center max-w-3xl">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-[var(--color-secondary)] shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-primary)] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]"></span>
          </span>
          Live Environment Active
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-5xl font-extrabold leading-[1.15] tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl"
        >
          Secure access.
          <br />
          <span className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
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

      {/* Bento Grid layout for capabilities with live telemetry micro-animations */}
      <div className="mx-auto mt-24 grid max-w-5xl gap-4 md:grid-cols-3 lg:grid-cols-3 relative">
        {capabilities.map(({ icon: Icon, label, desc, span, animation }, i) => (
          <div
            key={label}
            className={`group animate-section relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)]/80 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:shadow-md hover:border-[var(--color-primary)]/30 ${span}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Minimalist gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            
            {/* Live Micro-animation injection */}
            {animation}
            
            <div className="relative z-10 pt-8 sm:pt-0">
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
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)] max-w-[80%]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
