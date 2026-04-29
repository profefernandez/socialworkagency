import { DataNode } from "@/shared-components/DataNode";
import { SpineSection } from "@/shared-components/MainLayout";
import { services, workshops } from "@/services/site-data";

const overviewSignals = [
  "A single amber spine organizes the interface instead of nested cards.",
  "AAA-sized 20px body copy keeps the service logic easy to scan.",
  "Each section uses thin dividers and asymmetric spacing to preserve calm.",
];

export default function HomePage() {
  return (
    <>
      <SpineSection
        id="overview"
        index="00"
        title="60 Watts of Clarity"
        summary="Lead teams from curiosity to operational confidence with a spatial interface built for explanation, trust, and calm decision making."
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.9fr)] lg:items-end">
          <div>
            <p className="font-heading text-sm uppercase tracking-[0.42em] text-hud-amber">
              Ethical AI training / service architecture
            </p>
            <p className="mt-8 max-w-3xl text-[1.25rem] leading-[1.85] text-white/88 sm:text-[1.45rem]">
              Workshops, audits, and advisory services for organizations that need
              AI fluency without the noise. The interface trades cards for
              structure, leaving the 3D scene to carry atmosphere while the
              content spine carries meaning.
            </p>
          </div>
          <ul className="space-y-4 border-t border-hud-amber/25 pt-6 text-base leading-8 text-white/74 lg:pt-8">
            {overviewSignals.map((signal) => (
              <li key={signal} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-px w-8 bg-depth-blue" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </div>
      </SpineSection>

      <SpineSection
        id="services"
        index="01"
        title="Services"
        summary="Structured offers for leaders who need an actionable view of AI governance, service design, and team capability."
      >
        <div>
          {services.map((service) => (
            <DataNode key={service.id} item={service} kind="service" />
          ))}
        </div>
      </SpineSection>

      <SpineSection
        id="workshops"
        index="02"
        title="Workshops"
        summary="Live sessions with small cohorts, explicit guardrails, and practical takeaways designed for immediate use."
      >
        <div>
          {workshops.slice(0, 2).map((workshop) => (
            <DataNode key={workshop.id} item={workshop} kind="workshop" />
          ))}
        </div>
      </SpineSection>
    </>
  );
}
