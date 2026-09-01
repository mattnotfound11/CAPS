"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingTelemetry = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const percentage = 78;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 pointer-events-auto"
        >
          <div 
            className="flex flex-col gap-6 p-5 rounded-2xl glass-card-elevated"
            style={{ 
              backgroundColor: "rgba(20, 18, 18, 0.85)", 
              backdropFilter: "blur(12px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-8">
              <span className="text-xs font-bold tracking-widest text-[#888] uppercase">
                Live Telemetry
              </span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-green-500 tracking-wider">LIVE</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex items-center gap-6">
              {/* Circular Progress */}
              <div className="relative flex items-center justify-center">
                <svg width="84" height="84" className="transform -rotate-90">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ef4444" /> {/* Red */}
                      <stop offset="100%" stopColor="#f59e0b" /> {/* Amber */}
                    </linearGradient>
                  </defs>
                  
                  {/* Background Track */}
                  <circle
                    cx="42"
                    cy="42"
                    r={radius}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  
                  {/* Animated Progress */}
                  <motion.circle
                    cx="42"
                    cy="42"
                    r={radius}
                    stroke="url(#progressGradient)"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  />
                </svg>
                
                {/* Inner Text */}
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-white tracking-tight leading-none">
                    78%
                  </span>
                  <span className="text-[9px] font-semibold text-[#888] tracking-widest mt-1">
                    FULL
                  </span>
                </div>
              </div>

              {/* Data Text */}
              <div className="flex flex-col justify-center">
                <span className="text-4xl font-extrabold text-white tracking-tight leading-none mb-1 shadow-sm">
                  390
                </span>
                <span className="text-sm font-medium text-[#888] leading-tight">
                  of 500 slots
                </span>
                <span className="text-sm font-medium text-[#888] leading-tight">
                  occupied
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
