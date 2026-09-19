export type Language = 'en' | 'hi';

export type PageId = 
  | 'home'
  | 'about'
  | 'vedas-institute'
  | 'kaushal-ai'
  | 'ai-workshops'
  | 'digital-marketing'
  | 'ai-agents'
  | 'institutional'
  | 'projects'
  | 'resources'
  | 'blog'
  | 'contact';

export interface ImpactStat {
  id: string;
  key: string;
  labelEn: string;
  labelHi: string;
  value: number;
  suffix: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface CaseStudy {
  id: string;
  titleEn: string;
  titleHi: string;
  clientCategoryEn: string;
  clientCategoryHi: string;
  taglineEn: string;
  taglineHi: string;
  problemEn: string;
  problemHi: string;
  solutionEn: string;
  solutionHi: string;
  technology: string[];
  implementationEn: string;
  implementationHi: string;
  impactMetricsEn: string[];
  impactMetricsHi: string[];
  testimonialQuoteEn: string;
  testimonialQuoteHi: string;
  testimonialAuthorEn: string;
  testimonialAuthorHi: string;
}

export interface Testimonial {
  id: string;
  category: 'Student' | 'Teacher' | 'Government Official' | 'Institutional Head' | 'Entrepreneur' | 'Workshop Participant';
  quoteEn: string;
  quoteHi: string;
  authorEn: string;
  authorHi: string;
  roleEn: string;
  roleHi: string;
  locationEn: string;
  locationHi: string;
}

export interface NavDropdownItem {
  id: string;
  labelEn: string;
  labelHi: string;
  pageId: PageId;
  anchor?: string;
  descriptionEn?: string;
  descriptionHi?: string;
}

export interface ContactFormData {
  name: string;
  organization: string;
  designation: string;
  phone: string;
  email: string;
  cityState: string;
  requirementType: string;
  message: string;
}

export type ContactInquiry = ContactFormData;

