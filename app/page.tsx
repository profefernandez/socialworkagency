import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { TrustCard } from "@/components/ui/TrustCard";
import { WorkshopCard } from "@/components/workshop/WorkshopCard";
import type { Workshop } from "@/types";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="bg-clarity-dark text-clarity-light py-24 px-4"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-clarity-gold font-semibold tracking-widest uppercase text-sm mb-4">
              Ethical AI Training
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl font-bold leading-tight mb-6"
            >
              60 Watts of Clarity
            </h1>
            <p className="text-xl text-clarity-light/80 mb-8 leading-relaxed max-w-2xl">
              Workshops, courses, and consulting to help you understand, use,
              and audit AI systems — with clarity and confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/workshops"
                className="inline-flex items-center rounded-full bg-clarity-gold text-clarity-dark font-semibold px-8 py-3 hover:bg-clarity-gold/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clarity-gold focus-visible:ring-offset-2 focus-visible:ring-offset-clarity-dark"
              >
                Browse Workshops
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center rounded-full border-2 border-clarity-gold/60 text-clarity-light font-semibold px-8 py-3 hover:border-clarity-gold hover:bg-clarity-gold/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clarity-gold focus-visible:ring-offset-2 focus-visible:ring-offset-clarity-dark"
              >
                About Us
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section
        id="about"
        aria-labelledby="values-heading"
        className="py-20 px-4"
      >
        <Container>
          <h2
            id="values-heading"
            className="text-3xl font-bold text-clarity-dark mb-12 text-center"
          >
            Why Ethical AI Education Matters
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Transparency",
                body: "We explain how AI models work in plain language, without hiding behind jargon.",
              },
              {
                title: "Accountability",
                body: "Our curriculum teaches you to ask hard questions and hold AI systems — and their makers — to account.",
              },
              {
                title: "Empowerment",
                body: "Walk away with concrete skills: prompting, auditing, policy advocacy, and responsible deployment.",
              },
            ].map(({ title, body }) => (
              <TrustCard key={title} title={title} className="reveal">
                <p className="text-clarity-muted leading-relaxed">{body}</p>
              </TrustCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Workshop */}
      <section
        aria-labelledby="featured-heading"
        className="py-20 px-4 bg-clarity-dark/5"
      >
        <Container>
          <h2
            id="featured-heading"
            className="text-3xl font-bold text-clarity-dark mb-10"
          >
            Featured Workshop
          </h2>
          <div className="max-w-2xl reveal">
            <WorkshopCard workshop={featuredWorkshop} />
          </div>
        </Container>
      </section>
    </>
  );
}
