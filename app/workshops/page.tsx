import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { WorkshopCard } from "@/components/workshop/WorkshopCard";
import type { Workshop } from "@/types";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Browse all AI ethics workshops and training sessions from 60 Watts of Clarity.",
};

const workshops: Workshop[] = [
  {
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
    topics: [
      "AI Bias",
      "Model Auditing",
      "Responsible AI",
      "Ethics Frameworks",
    ],
  },
  {
    id: "prompt-engineering-advanced",
    name: "Advanced Prompt Engineering",
    description:
      "Master the craft of communicating with large language models. This session covers chain-of-thought prompting, red-teaming, and building reliable pipelines.",
    startDate: "2026-07-10",
    location: "Online (Zoom)",
    url: "/workshops/advanced-prompt-engineering",
    price: 199,
    currency: "USD",
    maxAttendees: 20,
    instructor: "Dr. Elena Fernandez",
    topics: ["LLM Prompting", "Chain-of-Thought", "Red-Teaming", "Pipelines"],
  },
  {
    id: "ai-policy-literacy",
    name: "AI Policy Literacy for Educators",
    description:
      "Understand the global AI policy landscape. Designed for educators, community leaders, and advocates who need to navigate regulations like the EU AI Act.",
    startDate: "2026-08-05",
    location: "Online (Zoom)",
    url: "/workshops/ai-policy-literacy",
    price: 0,
    currency: "USD",
    maxAttendees: 50,
    instructor: "Dr. Elena Fernandez",
    topics: ["EU AI Act", "Algorithmic Accountability", "Digital Rights"],
  },
];

export default function WorkshopsPage() {
  return (
    <section aria-labelledby="workshops-heading" className="py-20 px-4">
      <Container>
        <header className="mb-12">
          <h1
            id="workshops-heading"
            className="text-4xl font-bold text-clarity-dark mb-4"
          >
            Workshops
          </h1>
          <p className="text-lg text-clarity-muted max-w-2xl">
            All workshops are live, interactive, and capped at a small number of
            participants to ensure a high-quality learning experience.
          </p>
        </header>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
          {workshops.map((workshop) => (
            <li key={workshop.id} className="reveal">
              <WorkshopCard workshop={workshop} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
