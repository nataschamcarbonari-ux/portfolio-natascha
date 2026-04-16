import type { Step } from '../types';

/**
 * Helpers that operate on a project's steps array.
 * Steps are now stored per-project in src/data/projects.ts.
 */

export const getStepById = (steps: Step[], id: number): Step | undefined =>
  steps.find((s) => s.id === id);

export const getStepBySlug = (steps: Step[], slug: string): Step | undefined =>
  steps.find((s) => s.slug === slug);

export const getPrevStep = (steps: Step[], id: number): Step | undefined =>
  steps.find((s) => s.id === id - 1);

export const getNextStep = (steps: Step[], id: number): Step | undefined =>
  steps.find((s) => s.id === id + 1);
