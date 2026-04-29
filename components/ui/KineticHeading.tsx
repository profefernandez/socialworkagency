"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { useSimplifiedLayout } from "@/lib/simplified-layout";

interface KineticHeadingProps {
  children: ReactNode;
  className?: string;
  id: string;
}

const MIN_WEIGHT = 300;
const MAX_WEIGHT = 700;

export function KineticHeading({
  children,
  className,
  id,
}: KineticHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [weight, setWeight] = useState(MIN_WEIGHT);
  const { simplified } = useSimplifiedLayout();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (simplified) {
      setWeight(MAX_WEIGHT);
      return;
    }

    let frame = 0;

    const updateWeight = () => {
      frame = 0;

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const headingCenter = rect.top + rect.height / 2;
      const distance = Math.abs(viewportCenter - headingCenter);
      const activeRange = window.innerHeight * 0.6;
      const intensity = Math.max(0, 1 - distance / activeRange);

      setWeight(
        Math.round(MIN_WEIGHT + intensity * (MAX_WEIGHT - MIN_WEIGHT)),
      );
    };

    const scheduleUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateWeight);
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

  return (
    <h2
      ref={ref}
      id={id}
      className={className}
      style={{ fontWeight: weight }}
    >
      {children}
    </h2>
  );
}
