// Translation namespace types
export interface HeaderTranslations {
  logo: string;
  services: string;
  about: string;
  technologies: string;
  whyUs: string;
  contact: string;
  getStarted: string;
}

export interface HeroTranslations {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  cta: string;
}

export interface AboutTranslations {
  title: string;
  description1: string;
  description2: string;
  stats: {
    projects: string;
    countries: string;
    satisfaction: string;
  };
  cards: {
    globalReach: {
      title: string;
      description: string;
    };
    expertTeam: {
      title: string;
      description: string;
    };
    resultDriven: {
      title: string;
      description: string;
    };
    fastDeploy: {
      title: string;
      description: string;
    };
  };
}

export interface ServicesTranslations {
  title: string;
  subtitle: string;
  items: {
    automation: {
      title: string;
      description: string;
    };
    chatbots: {
      title: string;
      description: string;
    };
    integrations: {
      title: string;
      description: string;
    };
  };
}

export interface TechnologiesTranslations {
  title: string;
  subtitle: string;
  description: string;
}

export interface WhyUsTranslations {
  title: string;
  subtitle: string;
  reasons: {
    roi: {
      title: string;
      description: string;
    };
    global: {
      title: string;
      description: string;
    };
    service: {
      title: string;
      description: string;
    };
    consultation: {
      title: string;
      description: string;
    };
  };
  trust: {
    rating: string;
    leaders: string;
    security: string;
  };
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  info: {
    title: string;
    description: string;
    email: string;
    whatsapp: string;
    coverage: string;
    consultation: {
      title: string;
      description: string;
      button: string;
    };
  };
}

export interface FooterTranslations {
  description: string;
  quickLinks: string;
  contact: string;
  phone: string;
  coverage: string;
  copyright: string;
}

export interface Translations {
  header: HeaderTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  services: ServicesTranslations;
  technologies: TechnologiesTranslations;
  whyUs: WhyUsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}

// Type for translation keys to ensure type-safe translation access
export type TranslationKey = keyof Translations;

