export interface CaseStudyData {
  title: string;
  subtitle: string;
  category: string;
  client?: string;
  role?: string;
  timeline?: string;
  impactMetric?: string;
  problem: string;
  approach: string;
  designDecisions: string[];
  technicalArchitecture: string[];
  aiAutomation?: string[];
  challenges?: string[];
  results: { metric: string; description: string }[];
  keyLearnings: string[];
  techStack: string[];
  links?: { label: string; url: string; icon?: string }[];
  visuals?: { title: string; url: string; caption?: string }[];
}

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  impactBadge: string;
  thumbnail: string;
  isVideo?: boolean;
  tags: string[];
  link?: string;
  caseStudy: CaseStudyData;
}

export interface CapabilityBlock {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface TechGroup {
  category: string;
  tools: { name: string; icon?: string; badge?: string }[];
}

export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  isVideo?: boolean;
  aspect?: 'square' | 'video' | 'portrait';
}

export interface ImpactStat {
  number: string;
  label: string;
  sublabel: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  position: string;
  company: string;
  initials: string;
  avatar?: string;
}