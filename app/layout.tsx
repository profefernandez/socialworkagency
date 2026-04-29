import type { Metadata } from "next";
import { SimplifiedLayoutProvider } from "@/lib/simplified-layout";
import { MainLayout } from "@/shared-components/MainLayout";
import { generateOrganizationJsonLd } from "@/schema/jsonld";
import "../src/styles/globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to Content
        </a>
        <SimplifiedLayoutProvider>
          <MainLayout>{children}</MainLayout>
        </SimplifiedLayoutProvider>
      </body>
    </html>
  );
}
