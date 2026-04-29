"use client";

import Spline from "@splinetool/react-spline";

const SPLINE_SCENE_URL =
  process.env.NEXT_PUBLIC_SPLINE_SCENE_URL ?? "[PASTE YOUR URL HERE]";

const hasValidSceneUrl = /^https?:\/\//.test(SPLINE_SCENE_URL);

export function SplineHero() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,179,0,0.16),transparent_28%)]" />
      {hasValidSceneUrl ? (
        <Spline scene={SPLINE_SCENE_URL} className="h-full w-full opacity-90" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_36%,rgba(96,165,250,0.24),transparent_0%,transparent_24%),radial-gradient(circle_at_78%_62%,rgba(255,179,0,0.22),transparent_0%,transparent_18%)]" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.92)_0%,rgba(5,8,22,0.72)_42%,rgba(5,8,22,0.28)_72%,rgba(5,8,22,0.5)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.16)_0%,rgba(5,8,22,0.04)_44%,rgba(5,8,22,0.82)_100%)]" />
    </div>
  );
}
