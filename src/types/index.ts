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
  embedUrl?: string;   // ← iframe embed URL (Canva, Figma, etc.)
  embedCaption?: string; // ← optional link text below the embed
  embedHref?: string;  // ← optional href for the caption link
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
  steps: Step[];
  outcomes: Outcome[];
  tags?: string[];
  coverImage?: string;
  layoutType?: 'case' | 'standard';
}