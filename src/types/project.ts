export interface ImageType {
  url: string;
  alt: string;
  caption?: string;
  title?: string;
  location?: string;
  keyFeature?: string;
}

export interface FeatureType {
  title: string;
  description: string;
  imageUrl?: string;
  icon?: string;
}

export interface TechItemType {
  name: string;
  icon?: string;
}

export interface LinkIconType {
  type: 'library' | 'image';
  libraryIcon?: string;
  customImage?: string;
}

export interface LinkType {
  type: string;
  url: string;
  icon: LinkIconType | null;
}

export interface ArtifactType {
  type: string;
  url: string;
}

export interface ProcessPhaseType {
  phase: string;
  description: string;
  artifacts?: ArtifactType[];
}

export interface ResultType {
  metric: string;
  value: string;
  description: string;
}

export interface CasestudyType {
  title: string;
  subtitle?: string;
  category: string;
  timeline?: string;
  role?: string;
  projectType?: string;
  thumbnail?: string;
  heroImage?: string;
  techStack?: TechItemType[];
  summary?: string[];
  contribution?: string;
  problem?: string[];
  solution?: string[];
  features?: FeatureType[];
  processPhases?: ProcessPhaseType[];
  results?: ResultType[];
  links?: LinkType[];
  visualShowcase?: ImageType[];
  mobileShowcase?: ImageType[];
  mobileFeatures?: FeatureType[];
  slug?: { current: string } | string;
}

export interface Project {
  _id: string;
  title: string;
  slug: string;
  projectType: string;
  position: number;
  thumbnail?: string;
  casestudy?: CasestudyType;
}