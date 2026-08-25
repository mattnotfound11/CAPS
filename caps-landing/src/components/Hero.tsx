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
      {/* Apple-style deep glowing background mesh */}
      <div 
        className="absolute left-1/2 top-[-200px] -z-10 h-[1000px] w-[1400px] -translate-x-1/2 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 102, 204, 0.08) 0%, rgba(94, 92, 230, 0.04) 40%, transparent 70%)"
        }}
      />
      
      {/* Centered Hero Content */}
      <div className="mx-auto flex flex-col items-center text-center max-w-4xl relative z-10">
        {/* Eyebrow */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/50 px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)] shadow-sm backdrop-blur-2xl">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_8px_var(--color-primary)]"></span>
          </span>
          Interface Simulation
        </div>

        {/* Headline - Massive Apple typography */}
        <h1
          id="hero-heading"
          className="text-6xl font-extrabold leading-[1.05] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-black/50 sm:text-7xl lg:text-[5.5rem]"
        >
          Secure access.
          <br />
          Precision control.
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-xl font-medium leading-relaxed text-[var(--color-secondary)] sm:text-2xl max-w-2xl">
          Transform existing campus IDs into a unified access and occupancy telemetry network with zero friction.
        </p>
        
        {/* Action Area */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="#login-heading"
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-foreground)] text-white px-10 py-4 text-lg font-bold shadow-lg transition-all duration-[var(--motion-duration-base)] hover:scale-105 hover:bg-[var(--color-primary)] hover:shadow-[0_0_40px_rgba(41,151,255,0.3)] active:scale-95"
          >
            Access Consoles
            <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </Link>
          <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)]">
            <Lock className="h-4 w-4" strokeWidth={2} />
            Institutional access only
          </div>
        </div>
      </div>

      {/* Bento Grid layout for capabilities */}
      <div className="mx-auto mt-32 grid max-w-5xl gap-6 md:grid-cols-3 lg:grid-cols-3 relative z-10">
        {capabilities.map(({ icon: Icon, label, desc, span, animation }, i) => (
          <div
            key={label}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-10 shadow-[var(--shadow-card)] backdrop-blur-3xl transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 ${span}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            {/* Minimalist neon gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            
            {/* Live Micro-animation injection */}
            {animation}
            
            <div className="relative z-10 pt-16 sm:pt-12">
              <span
                className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-black/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,1)] ring-1 ring-black/5 group-hover:bg-[var(--color-primary)]/10 group-hover:ring-[var(--color-primary)]/30 transition-all duration-500"
                aria-hidden="true"
              >
                <Icon
                  className="h-8 w-8 text-[var(--color-foreground)]"
                  strokeWidth={1.5}
                />
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
                {label}
              </h3>
              <p className="mt-4 text-base font-medium leading-relaxed text-[var(--color-secondary)] max-w-[85%]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
