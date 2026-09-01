"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { OrbitingTechStack, SkillConfig } from "./ui/orbiting-skills";

const skillsConfig: SkillConfig[] = [
  // Inner Orbit (Core Software)
  { 
    id: 'next',
    orbitRadius: 90, 
    size: 36, 
    speed: 0.8, 
    iconType: 'nextjs', 
    phaseShift: 0, 
    glowColor: 'red',
    label: 'Next.js',
    desc: 'React framework'
  },
  { 
    id: 'react',
    orbitRadius: 90, 
    size: 36, 
    speed: 0.8, 
    iconType: 'react', 
    phaseShift: Math.PI / 2, 
    glowColor: 'red',
    label: 'React',
    desc: 'UI library'
  },
  { 
    id: 'node',
    orbitRadius: 90, 
    size: 36, 
    speed: 0.8, 
    iconType: 'node', 
    phaseShift: Math.PI, 
    glowColor: 'red',
    label: 'Node.js',
    desc: 'Backend runtime'
  },
  { 
    id: 'typescript',
    orbitRadius: 90, 
    size: 36, 
    speed: 0.8, 
    iconType: 'typescript', 
    phaseShift: (3 * Math.PI) / 2, 
    glowColor: 'red',
    label: 'TypeScript',
    desc: 'Type safety'
  },

  // Outer Orbit (Hardware & Data)
  { 
    id: 'rfid',
    orbitRadius: 160, 
    size: 44, 
    speed: -0.5, 
    iconType: 'rfid', 
    phaseShift: 0, 
    glowColor: 'gold',
    label: 'RFID / NFC',
    desc: 'Card readers'
  },
  { 
    id: 'qrcode',
    orbitRadius: 160, 
    size: 44, 
    speed: -0.5, 
    iconType: 'qrcode', 
    phaseShift: Math.PI / 2, 
    glowColor: 'gold',
    label: 'QR Code',
    desc: 'Mobile scanning'
  },
  { 
    id: 'ultrasonic',
    orbitRadius: 160, 
    size: 44, 
    speed: -0.5, 
    iconType: 'ultrasonic', 
    phaseShift: Math.PI, 
    glowColor: 'gold',
    label: 'Ultrasonic',
    desc: 'Slot sensors'
  },
  { 
    id: 'postgres',
    orbitRadius: 160, 
    size: 44, 
    speed: -0.5, 
    iconType: 'postgres', 
    phaseShift: (3 * Math.PI) / 2, 
    glowColor: 'gold',
    label: 'PostgreSQL',
    desc: 'Data storage'
  },
];

export function TechStackSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative border-y border-[var(--color-border)] py-16 lg:py-20 overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl px-[var(--spacing-gutter)]">
        <div
          className="mb-2 text-center z-20 relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-muted-foreground)]">
            Built With
          </span>
        </div>

        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          <OrbitingTechStack skills={skillsConfig} />
        </div>
      </div>
    </section>
  );
}
