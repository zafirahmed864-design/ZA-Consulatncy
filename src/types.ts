export type ServiceType = 
  | 'Website Design' 
  | 'Virtual Assistance';

export interface ServiceItem {
  id: string;
  title: ServiceType;
  subtitle: string;
  description: string;
  benefitsParagraph: string;
  deliverables: string[];
  detailedDeliverables: {
    category: string;
    items: string[];
  }[];
  turnaroundTime: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  quote: string;
  projectScope: string;
  outcomeMetric: string;
  verified: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: string[];
  previewType: 'real-estate' | 'dental' | 'food-delivery';
}

export interface LinkCardItem {
  title: string;
  url: string;
  category: string;
  description: string;
  badge: string;
}

export interface FactItem {
  label: string;
  value: string;
  detail?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
