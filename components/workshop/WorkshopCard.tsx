import Link from "next/link";
import type { Workshop } from "@/types";
import { generateWorkshopJsonLd } from "@/schema/jsonld";
import { TrustCard } from "@/components/ui/TrustCard";

interface WorkshopCardProps {
  workshop: Workshop;
}

/**
 * WorkshopCard — renders a workshop summary with embedded JSON-LD
 * structured data for AEO/GEO (Answer Engine / Generative Engine Optimization).
 * AI crawlers read the JSON-LD script tag to surface this workshop directly
 * in AI-generated answers.
 */
export function WorkshopCard({ workshop }: WorkshopCardProps) {
  const jsonLd = generateWorkshopJsonLd(workshop);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(workshop.startDate));

  return (
    <>
      {/* JSON-LD structured data — read by search engines and AI agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TrustCard
        title={workshop.name}
        privacyNote="No personal data is collected when browsing workshop details."
        aria-label={`Workshop: ${workshop.name}`}
      >
        <p className="text-clarity-muted mb-4 leading-relaxed">
          {workshop.description}
        </p>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-6">
          <div>
            <dt className="font-medium text-clarity-dark">Date</dt>
            <dd className="text-clarity-muted">{formattedDate}</dd>
          </div>

          {workshop.location && (
            <div>
              <dt className="font-medium text-clarity-dark">Location</dt>
              <dd className="text-clarity-muted">{workshop.location}</dd>
            </div>
          )}

          {workshop.instructor && (
            <div>
              <dt className="font-medium text-clarity-dark">Instructor</dt>
              <dd className="text-clarity-muted">{workshop.instructor}</dd>
            </div>
          )}

          {workshop.price !== undefined && (
            <div>
              <dt className="font-medium text-clarity-dark">Price</dt>
              <dd className="text-clarity-muted">
                {workshop.price === 0
                  ? "Free"
                  : new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: workshop.currency ?? "USD",
                    }).format(workshop.price)}
              </dd>
            </div>
          )}

          {workshop.maxAttendees && (
            <div>
              <dt className="font-medium text-clarity-dark">Capacity</dt>
              <dd className="text-clarity-muted">
                {workshop.maxAttendees} attendees max
              </dd>
            </div>
          )}
        </dl>

        {workshop.topics && workshop.topics.length > 0 && (
          <ul
            aria-label="Topics covered"
            className="flex flex-wrap gap-2 mb-6"
          >
            {workshop.topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-clarity-gold/20 px-3 py-1 text-xs font-medium text-clarity-dark"
              >
                {topic}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={workshop.url}
          className={[
            "inline-flex items-center justify-center rounded-full px-6 py-2.5",
            "bg-clarity-gold text-clarity-dark font-semibold text-sm",
            "transition-colors hover:bg-clarity-gold/80",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clarity-gold focus-visible:ring-offset-2",
          ].join(" ")}
        >
          Register for Workshop
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </Link>
      </TrustCard>
    </>
  );
}
