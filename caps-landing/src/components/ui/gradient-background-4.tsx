"use client";

import { useEffect, useState } from "react";

/**
 * Dark-mode gradient background with animated red & gold mesh blobs
 * + subtle dot grid overlay for the "control room" feel.
 */
export function Component() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      {/* Base dark canvas */}
      <div className="absolute inset-0 bg-[var(--color-background)]" />

      {/* Animated gradient mesh — red & gold */}
      <div
        className="absolute top-[-30%] left-[-20%] w-[160%] h-[160%] opacity-80"
        style={{
          background: `
            radial-gradient(circle at 20% 40%, rgba(204, 27, 43, 0.12), transparent 45%),
            radial-gradient(circle at 80% 25%, rgba(212, 175, 55, 0.10), transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(204, 27, 43, 0.08), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.06), transparent 35%)
          `,
          animation: "mesh-drift 20s ease-in-out infinite alternate",
        }}
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 30%, transparent 90%)",
          maskImage:
            "linear-gradient(to bottom, black 30%, transparent 90%)",
        }}
      />

      {/* Top-right gold accent glow */}
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: "var(--color-secondary)" }}
      />

      {/* Bottom-left red accent glow */}
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-15 blur-[120px]"
        style={{ background: "var(--color-primary)" }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes mesh-drift {
            0% { transform: translate(0, 0) scale(1) rotate(0deg); }
            50% { transform: translate(-3%, 2%) scale(1.04) rotate(0.5deg); }
            100% { transform: translate(2%, -3%) scale(0.97) rotate(-0.5deg); }
          }
        `,
        }}
      />
    </div>
  );
}
