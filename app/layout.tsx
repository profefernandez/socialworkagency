import type { Metadata } from "next";
import { SimplifiedLayoutProvider } from "@/lib/simplified-layout";
import { SimplifiedLayoutToggle } from "@/components/ui/SimplifiedLayoutToggle";
import { generateOrganizationJsonLd } from "@/schema/jsonld";
import "./globals.css";

/* -------------------------------------------------------------------------- */
/*  Page metadata                                                               */
/* -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "60 Watts of Clarity — Ethical AI Training",
    template: "%s | 60 Watts of Clarity",
  },
  description:
    "Workshops, courses, and consulting to help you understand, use, and audit AI systems with clarity and confidence.",
  metadataBase: new URL("https://60wattsofclarity.com"),
  openGraph: {
    siteName: "60 Watts of Clarity",
    locale: "en_US",
    type: "website",
  },
};

/* -------------------------------------------------------------------------- */
/*  Organization JSON-LD (site-wide)                                            */
/* -------------------------------------------------------------------------- */
const orgJsonLd = generateOrganizationJsonLd({
  name: "60 Watts of Clarity",
  url: "https://60wattsofclarity.com",
  description:
    "Ethical AI training firm offering workshops, courses, and consulting.",
  sameAs: [
    "https://linkedin.com/company/60wattsofclarity",
    "https://twitter.com/60wattsclarity",
  ],
});

/* -------------------------------------------------------------------------- */
/*  Root layout                                                                 */
/* -------------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Organisation structured data — helps AI engines discover the brand */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Skip to main content — WCAG 2.4.1 bypass block */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <SimplifiedLayoutProvider>
          {/* Persistent accessibility toolbar */}
          <div className="flex justify-end px-4 py-2 bg-clarity-dark/5 border-b border-clarity-gold/20">
            <SimplifiedLayoutToggle />
          </div>

          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>

          <footer className="border-t border-clarity-gold/20 py-8 text-center text-sm text-clarity-muted">
            <p>
              © {new Date().getFullYear()} 60 Watts of Clarity. Ethical AI
              Education.
            </p>
          </footer>
        </SimplifiedLayoutProvider>
      </body>
    </html>
  );
}
