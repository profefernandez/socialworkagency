import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { Workshop } from "@/types";
import { SplineHero } from "@/components/hero/SplineHero";

const featuredWorkshop: Workshop = {
  id: "ai-ethics-foundations-2026",
  name: "AI Ethics Foundations",
  description:
    "A practical, hands-on introduction to the ethical dimensions of modern AI systems. Learn to identify bias, audit model outputs, and advocate for responsible deployment.",
  startDate: "2026-06-15",
  endDate: "2026-06-15",
  location: "Online (Zoom)",
  url: "/workshops/ai-ethics-foundations",
  price: 149,
  currency: "USD",
  maxAttendees: 24,
  instructor: "Dr. Elena Fernandez",
  topics: ["AI Bias", "Model Auditing", "Responsible AI", "Ethics Frameworks"],
};

const spatialSignals = [
  "Massive typography lives in columns 1–6 while the scene breathes on the right.",
  "Amber 1px dividers replace heavy cards and preserve a calm HUD rhythm.",
  "Every foreground text tone stays above AAA contrast against the night field.",
];

const hudMetrics = [
  { label: "Format", value: "Live workshops + consulting" },
  { label: "Mode", value: "Pointer-safe fixed Spline background" },
  { label: "Fonts", value: "Space Grotesk + Inter" },
];

export default function HomePage() {
  return (
    <>
      <SplineHero />

      <section
        aria-labelledby="hero-heading"
        className="relative isolate overflow-hidden px-4 text-white sm:px-6 lg:px-8"
      >
        <Container className="flex min-h-[calc(100vh-8rem)] flex-col justify-between py-8 sm:py-10 lg:py-14">
          <div className="hud-panel border-y border-hud-amber/40 py-4">
            <div className="grid grid-cols-12 gap-4 px-1 text-[0.72rem] uppercase tracking-[0.34em] text-hud-amber">
              <p className="col-span-12 lg:col-span-6">Round 2 / 3D environment</p>
              <p className="col-span-12 text-white/64 lg:col-span-6 lg:text-right">
                Fixed background, no click interception, asymmetric composition
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-6 gap-y-12 py-16 lg:py-24">
            <div className="col-span-12 lg:col-span-6 lg:pr-8">
              <p className="font-heading text-sm uppercase tracking-[0.42em] text-hud-amber">
                Ethical AI training
              </p>
              <h1
                id="hero-heading"
                className="relative z-20 mt-6 font-heading text-7xl leading-[0.88] tracking-tighter sm:text-8xl xl:text-9xl"
              >
                60 Watts of Clarity
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/88">
                Workshops, courses, and consulting to help you understand, use,
                and audit AI systems with a cinematic, no-card interface that
                leaves space for a live 3D scene to breathe on the right.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 border-t border-hud-amber/35 pt-6">
                <Link
                  href="/workshops"
                  className="inline-flex items-center rounded-full border border-hud-amber bg-hud-amber px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#ffca4d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-amber focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  Browse Workshops
                </Link>
                <Link
                  href="#spatial-rules"
                  className="inline-flex items-center rounded-full border border-hud-amber/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hud-amber/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-amber focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View Spatial Rules
                </Link>
              </div>
            </div>

            <div className="col-span-12 flex items-end justify-end lg:col-span-6 lg:pt-24">
              <div className="w-full max-w-md border-t border-hud-amber/35 pt-5 text-sm leading-7 text-white/78">
                <p className="font-heading text-[0.72rem] uppercase tracking-[0.34em] text-hud-amber">
                  Spatial design rules
                </p>
                <ul className="mt-5 space-y-4">
                  {spatialSignals.map((signal) => (
                    <li key={signal} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 rounded-full bg-depth-blue"
                      />
                      <span>{signal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 border-t border-hud-amber/40 pt-6 text-sm text-white/72">
            {hudMetrics.map(({ label, value }) => (
              <div key={label} className="col-span-12 sm:col-span-4">
                <p className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                  {label}
                </p>
                <p className="mt-2">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="spatial-rules"
        className="relative z-20 border-t border-hud-amber/30 px-4 sm:px-6 lg:px-8"
      >
        <Container className="py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-heading text-sm uppercase tracking-[0.38em] text-hud-amber">
                Why this approach
              </p>
              <h2 className="mt-4 font-heading text-4xl tracking-tighter text-white sm:text-5xl">
                High signal. Zero clutter.
              </h2>
            </div>
            <div className="col-span-12 space-y-6 text-base leading-8 text-white/82 lg:col-span-6">
              <p>
                The Round 2 system swaps stacked cards for structure, rhythm,
                and restraint. Thin amber rules carry hierarchy while the fixed
                3D environment handles atmosphere.
              </p>
              <p>
                Space Grotesk gives headlines a confident editorial tone, while
                Inter keeps long-form body copy clear and highly legible against
                the dark scene.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 border-t border-hud-amber/30 px-4 sm:px-6 lg:px-8">
        <Container className="py-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="font-heading text-sm uppercase tracking-[0.38em] text-hud-amber">
                Featured workshop
              </p>
              <h2 className="mt-4 font-heading text-4xl tracking-tighter text-white sm:text-5xl">
                {featuredWorkshop.name}
              </h2>
            </div>
            <div className="col-span-12 border-t border-hud-amber/30 pt-6 lg:col-span-6">
              <p className="text-base leading-8 text-white/82">
                {featuredWorkshop.description}
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-6 text-sm sm:grid-cols-2">
                <div>
                  <dt className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                    Date
                  </dt>
                  <dd className="mt-2 text-white/72">{featuredWorkshop.startDate}</dd>
                </div>
                <div>
                  <dt className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                    Location
                  </dt>
                  <dd className="mt-2 text-white/72">{featuredWorkshop.location}</dd>
                </div>
                <div>
                  <dt className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                    Instructor
                  </dt>
                  <dd className="mt-2 text-white/72">{featuredWorkshop.instructor}</dd>
                </div>
                <div>
                  <dt className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                    Price
                  </dt>
                  <dd className="mt-2 text-white/72">${featuredWorkshop.price}</dd>
                </div>
              </dl>
              <Link
                href={featuredWorkshop.url}
                className="mt-10 inline-flex items-center rounded-full border border-hud-amber px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-hud-amber/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hud-amber focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Reserve a seat
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
