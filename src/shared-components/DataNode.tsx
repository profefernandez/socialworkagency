import Link from "next/link";
import type { Service, Workshop } from "@/types";
import { JsonLd } from "@/shared-components/JsonLd";
import {
  generateCourseJsonLd,
  generateProfessionalServiceJsonLd,
} from "@/schema/jsonld";

interface DataNodeProps {
  item: Service | Workshop;
  kind: "service" | "workshop";
}

function isWorkshop(item: Service | Workshop): item is Workshop {
  return "startDate" in item;
}

function formatPrice(item: Service | Workshop): string | null {
  if (item.price === undefined) {
    return null;
  }

  if (item.price === 0) {
    return "Free";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: item.currency ?? "USD",
    maximumFractionDigits: 0,
  }).format(item.price);
}

function buildMeta(item: Service | Workshop): Array<{ label: string; value: string }> {
  if (isWorkshop(item)) {
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(item.startDate));

    return [
      { label: "DATE", value: date },
      ...(item.location ? [{ label: "LOCATION", value: item.location }] : []),
      ...(item.instructor ? [{ label: "INSTRUCTOR", value: item.instructor }] : []),
      ...(item.format ? [{ label: "FORMAT", value: item.format }] : []),
      ...(formatPrice(item) ? [{ label: "TUITION", value: formatPrice(item) as string }] : []),
    ];
  }

  return [
    ...(item.category ? [{ label: "MODE", value: item.category }] : []),
    ...(item.duration ? [{ label: "DURATION", value: item.duration }] : []),
    ...(item.audience ? [{ label: "AUDIENCE", value: item.audience }] : []),
    ...(formatPrice(item) ? [{ label: "PRICE", value: formatPrice(item) as string }] : []),
  ];
}

export function DataNode({ item, kind }: DataNodeProps) {
  const metadata = buildMeta(item);
  const jsonLd =
    kind === "service"
      ? generateProfessionalServiceJsonLd(item as Service)
      : generateCourseJsonLd(item as Workshop);
  const outcomes = isWorkshop(item) ? item.topics ?? [] : item.outcomes ?? [];

  return (
    <article className="border-t border-hud-amber/30 py-8 first:border-t-0 first:pt-0">
      <JsonLd data={jsonLd} />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.9fr)] lg:gap-10">
        <div>
          <p className="font-heading text-[0.72rem] uppercase tracking-[0.38em] text-hud-amber">
            {kind === "service" ? "SERVICE_NODE" : "WORKSHOP_NODE"}
          </p>
          <h3 className="mt-4 font-heading text-3xl tracking-[-0.03em] text-white sm:text-4xl">
            {item.name}
          </h3>
          <p className="mt-6 text-[1.25rem] leading-[1.8] text-white/88">{item.description}</p>
          {outcomes.length > 0 ? (
            <ul className="mt-8 space-y-3 border-t border-hud-amber/20 pt-6 text-base leading-8 text-white/74">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-px w-6 bg-hud-amber/70" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="border-t border-hud-amber/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <dl className="space-y-4">
            {metadata.map(({ label, value }) => (
              <div key={label} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                <dt className="font-heading text-[0.72rem] uppercase tracking-[0.34em] text-hud-amber">
                  {label}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white/78">{value}</dd>
              </div>
            ))}
          </dl>

          <Link href={item.url} className="mt-8 inline-flex items-center border-b border-depth-blue pb-1 font-mono text-sm uppercase tracking-[0.24em] text-depth-blue transition-colors hover:text-white">
            {kind === "service" ? "Inspect service logic" : "Reserve workshop"}
          </Link>
        </div>
      </div>
    </article>
  );
}
