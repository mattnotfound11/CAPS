"use client"
import React, { useEffect, useState, memo } from 'react';
import { Database, QrCode, Radio, Waves, Shield, Cpu, Code2 } from 'lucide-react';

// --- Type Definitions ---
export type IconType = 'nextjs' | 'react' | 'node' | 'rfid' | 'qrcode' | 'ultrasonic' | 'typescript' | 'postgres';
type GlowColor = 'cyan' | 'purple' | 'gold' | 'red';

export interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
  desc?: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.87-6.071l6.758-9.01H15.01l-4.52 6.027-3.031-4.045H5.512l4.618 6.163z" />
      </svg>
    ),
    color: '#ffffff'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247zm2.717-6.993c-3.849 0-4.654-1.766-4.654-3.246 0-.14.114-.253.256-.253h1.136c.127 0 .232.091.252.215.173 1.164.686 1.752 3.01 1.752 1.852 0 2.639-.419 2.639-1.401 0-.566-.224-1.03-3.099-1.249-2.404-.184-3.89-.768-3.89-2.689 0-1.771 1.491-2.825 3.991-2.825 2.808 0 4.199.975 4.377 3.068.007.072-.019.141-.065.193-.047.049-.111.077-.178.077h-1.14c-.119 0-.225-.083-.248-.196-.276-1.224-.944-1.616-2.746-1.616-2.023 0-2.259.705-2.259 1.234 0 .641.278.827 3.006 1.19 2.7.359 3.982.866 3.982 2.771 0 1.922-1.603 3.024-4.399 3.024z" fill="#339933"/>
      </svg>
    ),
    color: '#339933'
  },
  rfid: {
    component: () => <Radio className="w-full h-full text-[#F87171]" strokeWidth={1.5} />,
    color: '#F87171'
  },
  qrcode: {
    component: () => <QrCode className="w-full h-full text-[#60A5FA]" strokeWidth={1.5} />,
    color: '#60A5FA'
  },
  ultrasonic: {
    component: () => <Waves className="w-full h-full text-[#34D399]" strokeWidth={1.5} />,
    color: '#34D399'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#3178C6]">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm12.392 11.23h1.839v2.247h2.246v1.839h-2.246v5.617c0 .604.492 1.096 1.095 1.096h1.151v1.839h-1.151c-1.619 0-2.934-1.315-2.934-2.935v-5.617h-1.285v-1.839h1.285V11.23zM7.272 13.069c1.619 0 2.934 1.315 2.934 2.934 0 1.62-1.315 2.935-2.934 2.935-1.619 0-2.934-1.315-2.934-2.935a.92.92 0 1 1 1.839 0c0 .604.492 1.096 1.095 1.096.604 0 1.096-.492 1.096-1.096 0-.604-.492-1.096-1.096-1.096a.92.92 0 1 1 0-1.838c.604 0 1.096-.492 1.096-1.096 0-.604-.492-1.096-1.096-1.096-.603 0-1.095.492-1.095 1.096a.92.92 0 1 1-1.839 0c0-1.619 1.315-2.934 2.934-2.934z" />
      </svg>
    ),
    color: '#3178C6'
  },
  postgres: {
    component: () => <Database className="w-full h-full text-[#FBBF24]" strokeWidth={1.5} />,
    color: '#FBBF24'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: { type: IconType }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label, desc } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-[10px] bg-black/60 backdrop-blur-md
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer border border-white/5
          ${isHovered ? 'scale-125 shadow-2xl border-white/20' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-3 py-2 bg-black/90 border border-white/10 backdrop-blur-sm rounded-lg text-xs text-white whitespace-nowrap pointer-events-none flex flex-col items-center gap-0.5">
            <span className="font-bold">{label}</span>
            {desc && <span className="text-[10px] text-gray-400">{desc}</span>}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.1)',
      border: 'rgba(6, 182, 212, 0.2)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.1)',
      border: 'rgba(147, 51, 234, 0.2)'
    },
    gold: {
      primary: 'rgba(234, 179, 8, 0.4)',
      secondary: 'rgba(234, 179, 8, 0.1)',
      border: 'rgba(234, 179, 8, 0.2)'
    },
    red: {
      primary: 'rgba(239, 68, 68, 0.4)',
      secondary: 'rgba(239, 68, 68, 0.1)',
      border: 'rgba(239, 68, 68, 0.2)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 40%, ${colors.secondary} 80%, ${colors.primary} 100%)`,
          boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px dashed ${colors.border}`,
          opacity: 0.6
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export function OrbitingTechStack({ skills }: { skills: SkillConfig[] }) {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Determine unique radii to draw paths
  const radii = Array.from(new Set(skills.map(s => s.orbitRadius))).sort((a, b) => a - b);
  
  const orbitConfigs = radii.map((radius, idx) => ({
    radius,
    glowColor: (idx % 2 === 0 ? 'red' : 'gold') as GlowColor, // SPARC theme colors
    delay: idx * 1.5
  }));

  return (
    <div className="w-full flex items-center justify-center overflow-visible relative">
      <div 
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central SPARC / Core node */}
        <div className="w-20 h-20 bg-gradient-to-br from-[#111111] to-[#222222] rounded-full flex items-center justify-center z-10 relative shadow-2xl border border-white/10">
          <div className="absolute inset-0 rounded-full bg-[var(--color-primary)]/20 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-[var(--color-secondary)]/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10">
            <Cpu className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1} />
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skills.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </div>
  );
}
