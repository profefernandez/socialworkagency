"use client";

import { useEffect } from "react";
import { logger } from "@/lib/logger";
import "../src/styles/globals.css";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    logger.error("Global render failure", {
      message: error.message,
      name: error.name,
      digest: error.digest,
    });
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-8 px-6 py-16">
          <p className="font-heading text-[0.72rem] uppercase tracking-[0.42em] text-hud-amber">
            Global Error Boundary
          </p>
          <h1 className="font-heading text-4xl tracking-[-0.04em] text-white sm:text-5xl">
            A rendering fault interrupted the site spine.
          </h1>
          <p className="max-w-2xl text-[1.25rem] leading-[1.8] text-white/82">
            The issue has been logged for review. You can retry the current view or return after the scene and data layers settle.
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="inline-flex w-fit items-center border border-hud-amber px-5 py-3 font-heading text-sm uppercase tracking-[0.28em] text-hud-amber transition-colors hover:bg-hud-amber/10"
          >
            Retry render
          </button>
        </main>
      </body>
    </html>
  );
}
