export type Language = 'de' | 'en';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: StatItem[];
}

export interface PhilosophyPillar {
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlight: string;
  philosophyTitle: string;
  philosophySubtitle: string;
  philosophy: PhilosophyPillar[];
  strengthsTitle: string;
  strengths: string[];
  imageCaption: string;
  imageSubCaption: string;
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface ServiceSection {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  intro: string;
  outcome: string;
  image: string;
  categories: ServiceCategory[];
}

export interface ServicesIntroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  inquireLabel: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface GlobalReachContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  subDescription: string;
  headquartersLabel: string;
  regions: {
    name: string;
    description: string;
  }[];
}

export interface CertificationsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: string[];
  qualificationLabel: string;
}

export interface ReferencesContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  automotiveTitle: string;
  automotivePartners: string[];
  automotiveFooter: string;
  hospitalityTitle: string;
  hospitalityPartners: string[];
  hospitalityFooter: string;
  eventsTitle: string;
  majorEvents: string[];
  eventsFooter: string;
  vipTitle: string;
  vipIntro: string;
  vipGuests: string[];
  vipOutro: string;
}

export type MediaCategory = 'training' | 'events';

export interface MediaItem {
  id: string;
  title: string;
  category: MediaCategory;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  description: string;
}

export interface MediaContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  filters: {
    all: string;
    training: string;
    events: string;
  };
  categoryLabels: {
    training: string;
    events: string;
  };
  playLabel: string;
  viewLabel: string;
  items: MediaItem[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  companyName: string;
  addressLine1: string;
  addressLine2: string;
  addressCity: string;
  email: string;
  website: string;
  headquartersLabel: string;
  emailLabel: string;
  websiteLabel: string;
  formTitle: string;
  formSubtitle: string;
  successTitle: string;
  sendAnotherButton: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    serviceLabel: string;
    serviceOptions: {
      all: string;
      training: string;
      consulting: string;
      events: string;
      general: string;
    };
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

export interface FooterContent {
  tagline: string;
  description: string;
  navigationTitle: string;
  servicesTitle: string;
  serviceLinks: { label: string; href: string }[];
  contactTitle: string;
  allRightsReserved: string;
  privacy: string;
  imprint: string;
  backToTop: string;
  imprintTitle: string;
  imprintContent: {
    legalHeading: string;
    contactHeading: string;
    managementHeading: string;
    contentResponsibleHeading: string;
    managementName: string;
    contentResponsible: string;
  };
}

export interface SiteContent {
  navigation: {
    links: NavItem[];
    cta: string;
    switchLang: string;
  };
  hero: HeroContent;
  about: AboutContent;
  servicesIntro: ServicesIntroContent;
  services: ServiceSection[];
  process: ProcessContent;
  globalReach: GlobalReachContent;
  certifications: CertificationsContent;
  references: ReferencesContent;
  media: MediaContent;
  contact: ContactContent;
  footer: FooterContent;
}
