"use client";

import { NumberTicker } from "@/components/ui/number-ticker";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [parkedCount, setParkedCount] = useState(342);

  useEffect(() => {
    const interval = setInterval(() => {
      setParkedCount((prev) => {
        const changes = [1, 2, 5, -1, -3];
        const randomChange = changes[Math.floor(Math.random() * changes.length)];
        let nextValue = prev + randomChange;
        if (nextValue < 300) nextValue = 300;
        if (nextValue > 450) nextValue = 450;
        return nextValue;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const occupancyPercent = Math.round((parkedCount / 500) * 100);

  // SVG ring math
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - occupancyPercent / 100);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative mx-auto w-full max-w-[1400px] px-8 lg:px-12 pt-32 pb-20 lg:pt-32 lg:pb-24 flex flex-col justify-center min-h-[75vh] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-24">
        {/* Left Column: Text */}
        <div className="flex-1 max-w-2xl">
          {/* System tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-[var(--color-border)] text-[var(--color-muted-foreground)] bg-white/[0.03] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-blink-status" />
              IoT Smart Parking System
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            className="mt-8 text-5xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-7xl leading-[1.08]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Verified access.
            <br />
            <span className="text-gradient-red-gold">
              Total visibility.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted-foreground)]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            RFID-powered access control meets live parking occupancy monitoring.
            Built for the University of San Agustin.
          </motion.p>

        </div>

        {/* Right Column: Live Telemetry Widget */}
        <motion.div
          className="flex-none lg:w-[340px] w-full"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden rounded-2xl glass-card-elevated p-8">
            {/* Live Indicator */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-bold tracking-[0.15em] text-[var(--color-muted-foreground)] uppercase">
                Live Telemetry
              </span>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-[var(--color-success)]/20 bg-[var(--color-success-bg)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-success)] animate-blink-status" />
                </span>
                <span className="text-[10px] font-bold text-[var(--color-success)] uppercase tracking-widest">
                  Live
                </span>
              </div>
            </div>

            {/* Circular Progress Ring + Count */}
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90">
                  {/* Background ring */}
                  <circle
                    cx="64" cy="64" r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="8"
                  />
                  {/* Progress ring */}
                  <circle
                    cx="64" cy="64" r={radius}
                    fill="none"
                    stroke="url(#ring-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-primary)" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-[var(--color-foreground)] tabular-nums">
                    {occupancyPercent}%
                  </span>
                  <span className="text-[10px] font-medium text-[var(--color-muted-foreground)] uppercase tracking-wider">
                    Full
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[var(--color-foreground)] tabular-nums tracking-tight">
                  <NumberTicker value={parkedCount} />
                </span>
                <span className="text-sm font-medium text-[var(--color-muted-foreground)] mt-1">
                  of 500 slots occupied
                </span>
              </div>
            </div>

            {/* Subtle inner glow accents */}
            <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[var(--color-secondary)]/8 blur-[60px]" />
            <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-[var(--color-primary)]/8 blur-[60px]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-muted-foreground)]">
          Scroll
        </span>
        <ChevronDown
          className="h-4 w-4 text-[var(--color-muted-foreground)] animate-bounce"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}
