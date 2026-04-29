import type { Workshop, Service, Organization } from "@/types";

export function generateWorkshopJsonLd(workshop: Workshop): object {
  const organizer = workshop.instructor
    ? [
        {
          "@type": "Person",
          name: workshop.instructor,
        },
        {
          "@type": "Organization",
          name: "60 Watts of Clarity",
          url: "https://60wattsofclarity.com",
        },
      ]
    : {
        "@type": "Organization",
        name: "60 Watts of Clarity",
        url: "https://60wattsofclarity.com",
      };

  return {
    "@context": "https://schema.org",
    "@type": "EducationEvent",
    name: workshop.name,
    description: workshop.description,
    startDate: workshop.startDate,
    ...(workshop.endDate && { endDate: workshop.endDate }),
    url: workshop.url,
    ...(workshop.image && { image: workshop.image }),
    ...(workshop.location
      ? {
          location: {
            "@type": "Place",
            name: workshop.location,
          },
        }
      : {
          location: {
            "@type": "VirtualLocation",
            url: workshop.url,
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
    ...(workshop.topics && {
      about: workshop.topics.map((topic) => ({
        "@type": "Thing",
        name: topic,
      })),
    }),
    organizer,
  };
}

export function generateServiceJsonLd(service: Service): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
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
