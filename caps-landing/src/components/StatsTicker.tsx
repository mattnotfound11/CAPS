"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { NumberTicker } from "@/components/ui/number-ticker";
import { ParkingSquare, MapPin, Zap, Shield } from "lucide-react";

const stats = [
  { icon: ParkingSquare, value: 500, suffix: "+", label: "Parking Slots" },
  { icon: MapPin, value: 12, suffix: "", label: "Entry Points" },
  { icon: Zap, value: 1, suffix: "s", prefix: "<", label: "Verify Speed" },
  { icon: Shield, value: 99.9, suffix: "%", label: "Uptime Target", decimal: 1 },
];

export function StatsTicker() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="relative w-full border-y border-[var(--color-border)] bg-white/[0.01]">
      <div className="mx-auto max-w-6xl px-[var(--spacing-gutter)] py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, suffix, prefix, label, decimal }, i) => (
            <div
              key={label}
              className="flex items-center gap-4 group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary-subtle)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                <Icon style={{ width: "var(--icon-md)", height: "var(--icon-md)" }} strokeWidth={2} />
              </span>
              <div>
                <div className="text-2xl font-black text-[var(--color-foreground)] tabular-nums tracking-tight">
                  {prefix}
                  {isVisible ? <NumberTicker value={value} decimalPlaces={decimal || 0} /> : "0"}
                  {suffix}
                </div>
                <div className="text-xs font-medium text-[var(--color-muted-foreground)] tracking-wide uppercase">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
