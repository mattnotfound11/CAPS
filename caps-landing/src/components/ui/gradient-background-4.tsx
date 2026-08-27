"use client";

import { useEffect, useState } from "react";

/**
 * Animated Gradient Background Component
 * Provides a dynamic, smooth gradient mesh that drifts in the background.
 */
export function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-x-0 top-0 h-[800px] -z-20 overflow-hidden bg-[var(--color-background)]">
      {/* 
        We use a combination of radial gradients and CSS animation 
        to create a slow-moving, premium blur effect.
      */}
      <div 
        className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] opacity-90 blur-[80px]"
        style={{
          background: `
            radial-gradient(circle at 15% 50%, rgba(217, 4, 41, 0.15), transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(212, 175, 55, 0.15), transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(153, 0, 0, 0.12), transparent 50%)
          `,
          animation: "mesh-drift 15s ease-in-out infinite alternate"
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes mesh-drift {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-2%, 3%) scale(1.05); }
            100% { transform: translate(2%, -2%) scale(0.95); }
          }
        `
      }} />

      {/* Top Fade Grid Background from User */}
      <div
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
