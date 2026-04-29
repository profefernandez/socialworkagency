import Link from "next/link";
import type { ReactNode } from "react";
import { SplineHero } from "@/components/hero/SplineHero";
import { KineticHeading } from "@/components/ui/KineticHeading";
import { SpatialBackground } from "@/components/ui/SpatialBackground";
import { SimplifiedLayoutToggle } from "@/components/ui/SimplifiedLayoutToggle";
import { terminalReadout } from "@/stores/system-store";

interface MainLayoutProps {
  children: ReactNode;
}

interface SpineSectionProps {
  id: string;
  index: string;
  title: string;
  summary?: string;
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <SplineHero />
      <SpatialBackground />
      <div aria-hidden="true" className="site-spine fixed inset-y-0 z-10 hidden w-px bg-hud-amber/70 md:block" />

      <div className="relative z-20 flex min-h-screen flex-col">
        <header className="hud-panel border-b border-hud-amber/35">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-6 px-4 py-6 sm:px-6 lg:px-8">
            <div className="col-span-12 lg:col-span-5">
              <p className="font-heading text-[0.72rem] uppercase tracking-[0.42em] text-hud-amber">
                60 Watts of Clarity
              </p>
              <p className="mt-3 max-w-xl text-sm uppercase tracking-[0.18em] text-white/64">
                Site spine / service logic / no-card interface
              </p>
            </div>
            <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 lg:col-span-7 lg:justify-end">
              <nav aria-label="Primary" className="flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.24em] text-white/78">
                <Link href="/#services" className="transition-colors hover:text-hud-amber">
                  Services
                </Link>
                <Link href="/workshops" className="transition-colors hover:text-hud-amber">
                  Workshops
                </Link>
              </nav>
              <SimplifiedLayoutToggle />
            </div>
          </div>
        </header>

        <main id="main-content" tabIndex={-1} className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-4 py-10 outline-none sm:px-6 lg:gap-28 lg:px-8 lg:py-16">
          {children}
        </main>

        <footer className="hud-panel border-t border-hud-amber/35">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 py-6 font-mono text-sm text-depth-blue sm:px-6 lg:grid-cols-[1.4fr_2fr] lg:px-8">
            <p className="terminal-readout">RUNSTATE // ETHICAL_AI_INTERFACE // ONLINE</p>
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-4">
              {terminalReadout.map(({ label, value }) => (
                <p key={label} className="terminal-readout">
                  <span className="text-white/48">{label}:</span> {value}
                </p>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export function SpineSection({
  id,
  index,
  title,
  summary,
  children,
}: SpineSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="border-t border-hud-amber/20 pt-8 first:border-t-0 first:pt-0 lg:pt-12">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8 lg:gap-x-8">
        <div className="col-span-12 md:col-span-4 lg:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="font-heading text-sm uppercase tracking-[0.42em] text-hud-amber md:hidden">
              {index} / {title}
            </p>
            <div className="relative hidden min-h-40 md:block">
              <p className="spine-label absolute right-0 top-0 font-heading text-[0.72rem] uppercase tracking-[0.42em] text-hud-amber">
                {index} / {title}
              </p>
            </div>
            {summary ? (
              <p className="mt-4 max-w-xs text-base leading-8 text-white/70 md:mt-0">
                {summary}
              </p>
            ) : null}
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-8 lg:pl-10">
          <div className="space-y-8">
            <KineticHeading
              id={`${id}-heading`}
              className="kinetic-heading font-heading text-4xl tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              {title}
            </KineticHeading>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
