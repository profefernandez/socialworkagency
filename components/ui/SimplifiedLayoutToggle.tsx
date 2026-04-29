"use client";

import { useSimplifiedLayout } from "@/lib/simplified-layout";

/**
 * SimplifiedLayoutToggle — lets users with cognitive or visual impairments
 * switch to a zero-distraction mode (AAA progressive-enhancement pattern).
 */
export function SimplifiedLayoutToggle() {
  const { simplified, toggle } = useSimplifiedLayout();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={simplified}
      className={[
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        "border border-hud-amber/70 transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-amber focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
        simplified
          ? "bg-hud-amber text-slate-950"
          : "bg-transparent text-white hover:bg-hud-amber/10",
      ].join(" ")}
    >
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" fill="currentColor" />
      </svg>
      {simplified ? "Standard View" : "Simplified View"}
    </button>
  );
}
