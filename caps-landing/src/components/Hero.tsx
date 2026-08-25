import { Cpu, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Hero — the first thing a visitor sees.
 * Redesigned for premium SaaS aesthetic with a 3D visual and modern typography.
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
      className="relative mx-auto w-full max-w-7xl overflow-hidden px-[var(--spacing-gutter)] py-16 lg:py-24 animate-section"
    >
      {/* Background glow effects for premium feel */}
      <div className="absolute top-0 left-1/2 -z-10 -ml-24 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl lg:left-0 lg:translate-x-0" />
      <div className="absolute right-0 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[var(--color-secondary)] opacity-[0.08] blur-[100px]" />

      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Column: Copy */}
        <div className="max-w-2xl lg:w-1/2">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-widest text-[var(--color-secondary)] backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-secondary)] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-secondary)]"></span>
            </span>
            Campus Automated Parking System
          </div>

          {/* Headline with text gradient */}
          <h1
            id="hero-heading"
            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl"
          >
            Verified access.
            <br />
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Every vehicle.
              <br />
              Every gate.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted-foreground)] sm:text-xl">
            CAPS is an RFID-based vehicle access and parking slot monitoring system.
            Tap your campus ID — validate, log, and update availability in under a second.
          </p>
          
          {/* Action Area */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#login-heading"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-lg)] bg-[var(--color-primary)] px-8 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-[var(--motion-duration-base)] hover:bg-[var(--color-primary-hover)] hover:shadow-lg active:scale-[0.98]"
            >
              Sign in to CAPS
              <ArrowRight className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>

          {/* Deployment context pills */}
          <ul
            aria-label="System capabilities"
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <li
                key={label}
                className="animate-section flex items-start gap-3 rounded-[var(--radius-xl)] border border-[var(--color-border)]/50 bg-[var(--color-card)]/80 px-4 py-3 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
                style={{ animationDelay: `${(i + 1) * 120}ms` }}
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10"
                  aria-hidden="true"
                >
                  <Icon
                    style={{ width: "var(--icon-md)", height: "var(--icon-md)" }}
                    className="text-[var(--color-primary)]"
                    strokeWidth={2}
                  />
                </span>
                <span>
                  <span className="block text-sm font-bold text-[var(--color-foreground)]">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-xs font-medium text-[var(--color-muted-foreground)]">
                    {desc}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Visual */}
        <div className="relative mt-12 w-full max-w-xl lg:mt-0 lg:w-1/2 xl:pl-12">
          {/* Glassmorphic card container for the image */}
          <div className="relative animate-section-delay-2 overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-white/50 p-2 shadow-2xl shadow-[var(--color-primary)]/10 backdrop-blur-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[var(--color-muted)]">
              <Image
                src="/images/hero-visual.png"
                alt="3D render of CAPS RFID card tapping on a gate reader"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
                priority
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/40 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-6 py-4 shadow-xl backdrop-blur-xl">
               <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">Response Time</p>
                  <p className="mt-1 flex items-baseline gap-1 font-mono text-2xl font-bold text-[var(--color-foreground)]">
                    {"<"}1.0<span className="text-sm font-semibold text-[var(--color-muted-foreground)]">sec</span>
                  </p>
               </div>
               <div className="h-10 w-px bg-gray-200"></div>
               <div className="text-right">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)]">System Status</p>
                  <div className="mt-1 flex items-center justify-end gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                    </span>
                    <p className="font-mono text-sm font-bold text-green-700">Online</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
