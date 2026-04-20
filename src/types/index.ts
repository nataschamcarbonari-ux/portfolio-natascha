/* ─── Step ──────────────────────────────────────────────────────────────────── */
export interface Step {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
}

/* ─── StepContent ──────────────────────────────────────────────────────────── */
export interface StepCard {
  label: string;
  text: string;
  wide?: boolean;
}

export interface StepSectionData {
  label: string;
  heading: string;
  body: string;
  cards?: StepCard[];
  images?: string[];
  embedUrl?: string;
  embedCaption?: string;
  embedHref?: string;
  linkText?: string;
  linkHref?: string;
}

export interface StepContent {
  stepId: number;
  sections: StepSectionData[];
}

/* ─── Outcome ──────────────────────────────────────────────────────────────── */
export interface Outcome {
  id: number;
  title: string;
  description: string;
}

/* ─── Project ──────────────────────────────────────────────────────────────── */
export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  context: string;
  role: string;
  theme: string;
  featured?: boolean;
  comingSoon?: boolean;
  steps: Step[];
  outcomes: Outcome[];
  tags?: string[];
  coverImage?: string;
  layoutType?: 'case' | 'standard';
}