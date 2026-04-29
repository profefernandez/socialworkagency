"use client";

import { useEffect, useRef } from "react";
import { useSimplifiedLayout } from "@/lib/simplified-layout";

export function SpatialBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { simplified } = useSimplifiedLayout();

  useEffect(() => {
    const element = ref.current;

    if (!element || simplified) {
      return;
    }

    let frame = 0;

    const updatePosition = () => {
      frame = 0;

      const viewportHeight = window.innerHeight || 1;
      const scrollTop = window.scrollY;
      const scrollRange = Math.max(
        document.documentElement.scrollHeight - viewportHeight,
        1,
      );
      const progress = scrollTop / scrollRange;

      element.style.setProperty("--amber-x", `${22 + progress * 6}%`);
      element.style.setProperty("--amber-y", `${16 + progress * 52}%`);
      element.style.setProperty("--blue-x", `${78 - progress * 8}%`);
      element.style.setProperty("--blue-y", `${14 + progress * 50}%`);
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updatePosition);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [simplified]);

  if (simplified) {
    return null;
  }

  return <div ref={ref} aria-hidden="true" className="spatial-background fixed inset-0 z-0 pointer-events-none" />;
}
