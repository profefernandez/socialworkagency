export interface Workshop {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url: string;
  price?: number;
  currency?: string;
  maxAttendees?: number;
  instructor?: string;
  image?: string;
  topics?: string[];
  format?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  url: string;
  price?: number;
  currency?: string;
  category?: string;
  image?: string;
  duration?: string;
  audience?: string;
  outcomes?: string[];
}

export interface Organization {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
}

export type SimplifiedLayoutContextType = {
  simplified: boolean;
  toggle: () => void;
};
