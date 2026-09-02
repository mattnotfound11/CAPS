"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const team = [
  {
    id: 1,
    name: "Matthew Tabat",
    designation: "Lead Developer",
    image: "https://ui-avatars.com/api/?name=Matthew+Tabat&background=23c55e&color=fff&size=128",
  },
  {
    id: 2,
    name: "Alexander Michael Tolosa",
    designation: "Back end",
    image: "https://ui-avatars.com/api/?name=Alexander+Michael+Tolosa&background=ef4444&color=fff&size=128",
  },
  {
    id: 3,
    name: "Deghne Gabriel Agana",
    designation: "Front end",
    image: "https://ui-avatars.com/api/?name=Deghne+Gabriel+Agana&background=3b82f6&color=fff&size=128",
  },
  {
    id: 4,
    name: "Aziel Misola",
    designation: "Hardware",
    image: "https://ui-avatars.com/api/?name=Aziel+Misola&background=eab308&color=fff&size=128",
  },
];

export function TeamSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-[var(--spacing-section)] overflow-visible">
      <div ref={ref} className="mx-auto max-w-6xl px-[var(--spacing-gutter)]">
        <div
          className="mb-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)]">
            Proponents
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
            The Team
          </h2>
        </div>

        {/* Team Tooltip Container */}
        <div 
          className="flex flex-row items-center justify-center mb-16 w-full"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <AnimatedTooltip items={team} />
        </div>

        {/* Adviser & University credit */}
        <div
          className="mt-12 text-center space-y-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <p className="text-xs text-[var(--color-muted-foreground)]">
            <span className="font-semibold text-[var(--color-foreground)]">University of San Agustin</span>
            {" · "}BS Information Technology · 2026
          </p>
        </div>
      </div>
    </section>
  );
}
