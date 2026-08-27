"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { useState, useEffect } from "react";

export function Hero() {
  const [parkedCount, setParkedCount] = useState(342);

  useEffect(() => {
    const interval = setInterval(() => {
      setParkedCount((prev) => {
        // Randomly pick a change: +1, +2, +5, -1, -3
        const changes = [1, 2, 5, -1, -3];
        const randomChange = changes[Math.floor(Math.random() * changes.length)];
        
        let nextValue = prev + randomChange;
        
        // Keep it realistic between 300 and 450
        if (nextValue < 300) nextValue = 300;
        if (nextValue > 450) nextValue = 450;
        
        return nextValue;
      });
    }, 4500); // update every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto w-full max-w-6xl px-[var(--spacing-gutter)] py-[var(--spacing-section)] animate-section overflow-hidden"
    >
      {/* Premium subtle background glow */}
      <div 
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-full max-w-4xl -translate-x-1/2 pointer-events-none opacity-50"
        style={{
          background: "radial-gradient(50% 50% at 50% 50%, rgba(217, 4, 41, 0.05) 0%, rgba(212, 175, 55, 0.03) 50%, transparent 100%)"
        }}
      />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        {/* Left Column: Text */}
        <div className="flex-1 max-w-3xl">
          {/* Eyebrow */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/60 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-[var(--color-primary)] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-primary)]"></span>
            </span>
            System Online
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-5xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            Verified access.
            <br />
            <span className="bg-gradient-to-br from-[var(--color-primary)] to-[#FF4D4D] bg-clip-text text-transparent">
              Total visibility.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[var(--color-muted-foreground)]">
            The definitive RFID vehicle access and occupancy monitoring system.
            Instant validation, real-time logging, and absolute control over campus entry points.
          </p>
        </div>

        {/* Right Column: Live Telemetry Widget */}
        <div className="flex-none lg:w-[380px] w-full animate-section" style={{ animationDelay: '100ms' }}>
          <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-gray-100 bg-white/80 backdrop-blur-xl p-8 shadow-[var(--shadow-card)]">
            {/* Live Indicator */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold tracking-wider text-gray-500 uppercase">Live Telemetry</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 animate-blink-status"></span>
                </span>
                <span className="text-xs font-semibold text-green-700 uppercase">Live</span>
              </div>
            </div>

            {/* Vehicle Count */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-black text-[var(--color-foreground)] tabular-nums tracking-tight">
                <NumberTicker value={parkedCount} />
              </span>
              <span className="text-xl font-semibold text-gray-400">/ 500</span>
            </div>
            
            <p className="text-sm font-medium text-[var(--color-muted-foreground)]">
              Vehicles currently parked on campus
            </p>

            {/* Progress Bar */}
            <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-gray-100">
              <div 
                className="h-full rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_rgba(153,0,0,0.4)] transition-all duration-1000 ease-out" 
                style={{ width: `${(parkedCount / 500) * 100}%` }}
              />
            </div>

            {/* Subtle mesh background for widget */}
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[var(--color-secondary)]/10 blur-[30px]" />
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-[var(--color-primary)]/5 blur-[30px]" />
          </div>
        </div>
      </div>


    </section>
  );
}
