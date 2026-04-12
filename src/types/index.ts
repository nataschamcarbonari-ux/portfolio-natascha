/* ─── Step (used in data/steps.ts and throughout the app) ─────────────────── */
export interface Step {
  id: number;
  slug: string;       // e.g. 'step-01'
  title: string;
  subtitle: string;
  tags: string[];
}

/* ─── StepContent (richer data added later per step) ──────────────────────── */
export interface StepCard {
  label: string;
  text: string;
  wide?: boolean;     // spans full width in the grid
}

export interface StepSectionData {
  label: string;
  heading: string;
  body: string;
  cards?: StepCard[];
  images?: string[];  // image paths / URLs
}

export interface StepContent {
  stepId: number;
  sections: StepSectionData[];
}