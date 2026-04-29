import type { Service, Workshop } from "@/types";

export const services: Service[] = [
  {
    id: "ai-readiness-audit",
    name: "AI Readiness Audit",
    description:
      "A focused systems review that maps your current AI workflows, risk posture, and adoption barriers into a clear operating brief.",
    url: "/#services",
    category: "Audit",
    duration: "2 week sprint",
    audience: "Executive teams and program leads",
    outcomes: [
      "Risk map with governance gaps",
      "Priority actions for safe rollout",
      "Decision brief for leadership",
    ],
  },
  {
    id: "responsible-ai-workshops",
    name: "Responsible AI Workshops",
    description:
      "Live facilitation for teams that need shared language, practical guardrails, and a realistic plan for using generative AI in daily work.",
    url: "/workshops",
    category: "Training",
    duration: "90–180 minute sessions",
    audience: "Cross-functional teams",
    outcomes: [
      "Common operating vocabulary",
      "Prompt and policy templates",
      "AAA-accessible learning materials",
    ],
  },
  {
    id: "service-design-advisory",
    name: "Service Logic Advisory",
    description:
      "Ongoing architectural guidance for leaders designing public-facing AI services that must balance trust, compliance, and delivery speed.",
    url: "/#services",
    category: "Advisory",
    duration: "Monthly advisory retainers",
    audience: "Founders, agencies, and civic orgs",
    outcomes: [
      "Delivery roadmap with checkpoints",
      "Content hierarchy for service pages",
      "Review cadence for high-risk features",
    ],
  },
];

export const workshops: Workshop[] = [
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
    topics: ["AI Bias", "Model Auditing", "Responsible AI", "Ethics Frameworks"],
    format: "Live cohort",
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
    format: "Advanced lab",
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
    format: "Policy briefing",
  },
];
