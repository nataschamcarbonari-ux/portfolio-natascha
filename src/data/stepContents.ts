import type { StepContent } from '../types';

/*
 * stepContents maps each step ID to its sections.
 * When you have real content, populate the fields below.
 * Each section can have:
 *   - label    : small uppercase label above the heading
 *   - heading  : section title
 *   - body     : paragraph text
 *   - cards?   : array of { label, text, wide? } — rendered in a 2-col grid
 *   - images?  : array of image URLs — empty string = placeholder
 */

export const stepContents: Record<number, StepContent> = {
  1: {
    stepId: 1,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  2: {
    stepId: 2,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  3: {
    stepId: 3,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  4: {
    stepId: 4,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  5: {
    stepId: 5,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  6: {
    stepId: 6,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },

  7: {
    stepId: 7,
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
          { label: 'Add label', text: 'Add content for this wider card — good for key insights or takeaways.', wide: true },
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
  },
};