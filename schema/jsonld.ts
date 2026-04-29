import type { Workshop, Service, Organization } from "@/types";

type JsonLdNode = Record<string, unknown>;

export function generateCourseJsonLd(course: Workshop): JsonLdNode {
  const provider = {
    "@type": "Organization",
    name: "60 Watts of Clarity",
    url: "https://60wattsofclarity.com",
  };

  const location = course.location
    ? course.location.toLowerCase().includes("online")
      ? {
          "@type": "VirtualLocation",
          name: course.location,
          url: course.url,
        }
      : {
          "@type": "Place",
          name: course.location,
        }
    : {
        "@type": "VirtualLocation",
        url: course.url,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: course.url,
    ...(course.image && { image: course.image }),
    ...(course.topics && {
      about: course.topics.map((topic) => ({
        "@type": "Thing",
        name: topic,
      })),
    }),
    provider,
    hasCourseInstance: {
      "@type": "CourseInstance",
      startDate: course.startDate,
      ...(course.endDate && { endDate: course.endDate }),
      location,
      ...(course.format && { courseMode: course.format }),
      ...(course.instructor && {
        instructor: {
          "@type": "Person",
          name: course.instructor,
        },
      }),
      ...(course.price !== undefined && {
        offers: {
          "@type": "Offer",
          price: course.price,
          priceCurrency: course.currency ?? "USD",
          availability: "https://schema.org/InStock",
          url: course.url,
        },
      }),
      ...(course.maxAttendees && {
        maximumAttendeeCapacity: course.maxAttendees,
      }),
    },
  };
}

export function generateProfessionalServiceJsonLd(
  service: Service,
): JsonLdNode {
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

export function generateOrganizationJsonLd(org: Organization): JsonLdNode {
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
