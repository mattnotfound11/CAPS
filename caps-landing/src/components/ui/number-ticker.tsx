"use client";

import { useEffect, useState, useRef } from "react";

export function NumberTicker({
  value,
  decimalPlaces = 0,
}: {
  value: number;
  decimalPlaces?: number;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 2500; // 2.5 seconds to count up/down

    const startValue = countRef.current;
    const endValue = value;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo for a premium slow-down effect at the end
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = startValue + (endValue - startValue) * easeOut;
      setCount(current);
      countRef.current = current;

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(endValue); // ensure it ends exactly on value
        countRef.current = endValue;
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  return <span>{count.toFixed(decimalPlaces)}</span>;
}
