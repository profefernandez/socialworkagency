import type { Workshop, Service, Organization } from "@/types";

export function generateCourseJsonLd(workshop: Workshop): object {
  const provider = {
    "@type": "Organization",
    name: "60 Watts of Clarity",
    url: "https://60wattsofclarity.com",
  };

  const location = workshop.location
    ? workshop.location.toLowerCase().includes("online")
      ? {
          "@type": "VirtualLocation",
          name: workshop.location,
          url: workshop.url,
        }
      : {
          "@type": "Place",
          name: workshop.location,
        }
    : {
        "@type": "VirtualLocation",
        url: workshop.url,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: workshop.name,
    description: workshop.description,
    url: workshop.url,
    ...(workshop.image && { image: workshop.image }),
    ...(workshop.topics && {
      about: workshop.topics.map((topic) => ({
        "@type": "Thing",
        name: topic,
      })),
    }),
    provider,
    hasCourseInstance: {
      "@type": "CourseInstance",
      startDate: workshop.startDate,
      ...(workshop.endDate && { endDate: workshop.endDate }),
      location,
      ...(workshop.format && { courseMode: workshop.format }),
      ...(workshop.instructor && {
        instructor: {
          "@type": "Person",
          name: workshop.instructor,
        },
      }),
      ...(workshop.price !== undefined && {
        offers: {
          "@type": "Offer",
          price: workshop.price,
          priceCurrency: workshop.currency ?? "USD",
          availability: "https://schema.org/InStock",
          url: workshop.url,
        },
      }),
      ...(workshop.maxAttendees && {
        maximumAttendeeCapacity: workshop.maxAttendees,
      }),
    },
  };
}

export function generateProfessionalServiceJsonLd(service: Service): object {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image && { image: service.image }),
    ...(service.category && { serviceType: service.category }),
    ...(service.price !== undefined && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: service.currency ?? "USD",
        availability: "https://schema.org/InStock",
        url: service.url,
      },
    }),
    provider: {
      "@type": "Organization",
      name: "60 Watts of Clarity",
      url: "https://60wattsofclarity.com",
    },
  };
}

export function generateOrganizationJsonLd(org: Organization): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.description && { description: org.description }),
    ...(org.email && { email: org.email }),
    ...(org.telephone && { telephone: org.telephone }),
    ...(org.address && {
      address: {
        "@type": "PostalAddress",
        ...org.address,
      },
    }),
    ...(org.sameAs && { sameAs: org.sameAs }),
  };
}
