import type { StepContent } from '../types';

/*
 * stepContents maps each project slug → step ID → StepContent.
 * When you have real content, populate the fields below.
 * Each section can have:
 *   - label    : small uppercase label above the heading
 *   - heading  : section title
 *   - body     : paragraph text
 *   - cards?   : array of { label, text, wide? } — rendered in a 2-col grid
 *   - images?  : array of image URLs — empty string = placeholder
 */

const futuresStepTemplate = (stepId: number): StepContent => ({
  stepId,
  sections: [
    {
      label: 'Overview',
      heading: 'Add section title',
      body: 'Add your description for this step here. Explain what you did, why, and what you were trying to understand or achieve.',
      images: [],
    },
    {
      label: 'Process',
      heading: 'How I approached it',
      body: 'Describe your methodology, tools, and process in detail here.',
      cards: [
        { label: 'Add label', text: 'Add content for this card.' },
        { label: 'Add label', text: 'Add content for this card.' },
        {
          label: 'Add label',
          text: 'Add content for this wider card — good for key insights or takeaways.',
          wide: true,
        },
      ],
      images: [],
    },
    {
      label: 'Artifacts & Outputs',
      heading: 'What came out of it',
      body: '',
      images: ['', ''],
    },
  ],
});

export const stepContents: Record<string, Record<number, StepContent>> = {
  futures: {
    1: futuresStepTemplate(1),
    2: futuresStepTemplate(2),
    3: futuresStepTemplate(3),
    4: futuresStepTemplate(4),
    5: futuresStepTemplate(5),
    6: futuresStepTemplate(6),
    7: futuresStepTemplate(7),
  },
};
