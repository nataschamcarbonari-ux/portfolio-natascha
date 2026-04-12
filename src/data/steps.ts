import type { Step } from '../types';

export const steps: Step[] = [
  {
    id: 1,
    slug: 'step-01',
    title: 'Theme Definition',
    subtitle: 'Mapping macro trends and scoping the design space within personal productivity.',
    tags: ['Desk Research', 'Trend Analysis', 'Scoping'],
  },
  {
    id: 2,
    slug: 'step-02',
    title: 'Initial Research',
    subtitle: 'Qualitative research combining desk research with primary data from hybrid and remote workers.',
    tags: ['Interviews', 'Workshop', 'Desk Research'],
  },
  {
    id: 3,
    slug: 'step-03',
    title: 'Problem Identification',
    subtitle: 'Synthesizing research findings to surface core pain points shared across user profiles.',
    tags: ['Synthesis', 'Insights'],
  },
  {
    id: 4,
    slug: 'step-04',
    title: 'User Mapping',
    subtitle: "Building personas and scenarios grounded in Dell's established user archetypes.",
    tags: ['Personas', 'Scenarios', 'Archetypes'],
  },
  {
    id: 5,
    slug: 'step-05',
    title: 'Prioritization',
    subtitle: 'Applying the Harris Profile Matrix to evaluate and compare pain points for a structured decision.',
    tags: ['Harris Profile Matrix', 'Decision Making'],
  },
  {
    id: 6,
    slug: 'step-06',
    title: 'Generation of Alternatives',
    subtitle: 'Structured ideation around the complete focus cycle — Before, During, and After.',
    tags: ['Ideation', 'Focus Cycle'],
  },
  {
    id: 7,
    slug: 'step-07',
    title: 'Concept Development',
    subtitle: "Refining and developing the final product concept within Dell's hardware ecosystem.",
    tags: ['Prototyping', 'UX Design'],
  },
];

export const totalSteps = steps.length;

export const getStepById = (id: number): Step | undefined =>
  steps.find((s) => s.id === id);

export const getStepBySlug = (slug: string): Step | undefined =>
  steps.find((s) => s.slug === slug);

export const getPrevStep = (id: number): Step | undefined =>
  steps.find((s) => s.id === id - 1);

export const getNextStep = (id: number): Step | undefined =>
  steps.find((s) => s.id === id + 1);