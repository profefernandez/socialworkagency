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
      <body className="min-h-full bg-background text-foreground">
        {/* Skip to main content — WCAG 2.4.1 bypass block */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <SimplifiedLayoutProvider>
          <div className="relative flex min-h-full flex-col">
            <header className="hud-panel relative z-30 border-b border-hud-amber/40">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
                <div>
                  <p className="font-heading text-[0.72rem] uppercase tracking-[0.38em] text-hud-amber">
                    60 Watts of Clarity
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                    Ethical AI / No-Card Interface
                  </p>
                </div>
                <SimplifiedLayoutToggle />
              </div>
            </header>

            <main
              id="main-content"
              tabIndex={-1}
              className="relative z-20 flex-1 outline-none"
            >
              {children}
            </main>

            <footer className="hud-panel relative z-30 border-t border-hud-amber/40">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-white/72 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>
                  © {new Date().getFullYear()} 60 Watts of Clarity. Ethical AI
                  Education.
                </p>
                <p className="font-heading text-[0.72rem] uppercase tracking-[0.32em] text-hud-amber">
                  AAA contrast / ambient 3D background
                </p>
              </div>
            </footer>
          </div>
        </SimplifiedLayoutProvider>
      </body>
    </html>
  );
}
