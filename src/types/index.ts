/* ─── Step (used in data/projects.ts and throughout the app) ────────────────── */
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
  wide?: boolean;    // spans full width in the grid
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

/* ─── Outcome ──────────────────────────────────────────────────────────────── */
export interface Outcome {
  id: number;
  title: string;
  description: string;
}

/* ─── Project ──────────────────────────────────────────────────────────────── */
export interface Project {
  id: number;
  slug: string;         // e.g. 'futures'
  title: string;        // e.g. 'Futures — Personal Productivity'
  description: string;
  context: string;      // e.g. 'Dell Technologies'
  role: string;         // e.g. 'Design Strategy Intern'
  theme: string;        // e.g. 'Personal Productivity'
  featured?: boolean;   // displayed as featured card on home
  steps: Step[];
  outcomes: Outcome[];
  tags?: string[];
  coverImage?: string;
  layoutType?: 'case' | 'standard';
}
