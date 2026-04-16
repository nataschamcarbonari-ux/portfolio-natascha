import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'futures',
    title: 'Futures — Personal Productivity',
    description:
      'A design strategy internship project at Dell Technologies exploring the future of personal productivity for hybrid and remote workers.',
    context: 'Dell Technologies',
    role: 'Design Strategy Intern',
    theme: 'Personal Productivity',
    featured: true,
    tags: ['Design Strategy', 'HCD Process', 'Research'],
    coverImage: 'https://picsum.photos/seed/futures/1200/800',
    steps: [
      {
        id: 1,
        slug: 'step-01',
        title: 'Theme Definition',
        subtitle:
          'Mapping macro trends and scoping the design space within personal productivity.',
        tags: ['Desk Research', 'Trend Analysis', 'Scoping'],
      },
      {
        id: 2,
        slug: 'step-02',
        title: 'Initial Research',
        subtitle:
          'Qualitative research combining desk research with primary data from hybrid and remote workers.',
        tags: ['Interviews', 'Workshop', 'Desk Research'],
      },
      {
        id: 3,
        slug: 'step-03',
        title: 'Problem Identification',
        subtitle:
          'Synthesizing research findings to surface core pain points shared across user profiles.',
        tags: ['Synthesis', 'Insights'],
      },
      {
        id: 4,
        slug: 'step-04',
        title: 'User Mapping',
        subtitle:
          "Building personas and scenarios grounded in Dell's established user archetypes.",
        tags: ['Personas', 'Scenarios', 'Archetypes'],
      },
      {
        id: 5,
        slug: 'step-05',
        title: 'Prioritization',
        subtitle:
          'Applying the Harris Profile Matrix to evaluate and compare pain points for a structured decision.',
        tags: ['Harris Profile Matrix', 'Decision Making'],
      },
      {
        id: 6,
        slug: 'step-06',
        title: 'Generation of Alternatives',
        subtitle:
          'Structured ideation around the complete focus cycle — Before, During, and After.',
        tags: ['Ideation', 'Focus Cycle'],
      },
      {
        id: 7,
        slug: 'step-07',
        title: 'Concept Development',
        subtitle:
          "Refining and developing the final product concept within Dell's hardware ecosystem.",
        tags: ['Prototyping', 'UX Design'],
      },
    ],
    outcomes: [
      {
        id: 1,
        title: 'Strategic Clarity',
        description:
          'Defined a precise problem space within a broad theme using structured research methods and prioritization frameworks.',
      },
      {
        id: 2,
        title: 'User Insight',
        description:
          "Deep understanding of hybrid and remote worker behaviors, mapped against Dell's established user archetypes.",
      },
      {
        id: 3,
        title: 'Concept Design',
        description:
          'Generated and refined product concepts across the full focus cycle — Before, During, and After sessions.',
      },
      {
        id: 4,
        title: 'Ecosystem Fit',
        description:
          "Aligned solutions with Dell's product strategy and hardware ecosystem, ensuring viability within the company's design language.",
      },
    ],
  },
  {
    id: 2,
    slug: 'brand-system',
    title: 'Brand System',
    description: 'A comprehensive brand identity and design system for a consumer product launch.',
    context: 'Featured Products',
    role: 'Brand Designer',
    theme: 'Visual Identity',
    tags: ['Branding', 'Design System', 'Visual Identity'],
    coverImage: 'https://picsum.photos/seed/brand/1200/800',
    steps: [],
    outcomes: [],
  },
  {
    id: 3,
    slug: 'ux-research',
    title: 'Enterprise UX Research',
    description: 'End-to-end user research initiative to improve task completion across a B2B platform.',
    context: 'Enterprise Software',
    role: 'UX Researcher',
    theme: 'Research & Insights',
    tags: ['UX Research', 'Interviews', 'Usability Testing'],
    coverImage: 'https://picsum.photos/seed/uxresearch/1200/800',
    steps: [],
    outcomes: [],
  },
  {
    id: 4,
    slug: 'service-design',
    title: 'Public Service Redesign',
    description: 'Service design project mapping citizen journeys and redesigning touchpoints for a public agency.',
    context: 'Public Sector',
    role: 'Service Designer',
    theme: 'Service Design',
    tags: ['Service Design', 'Journey Mapping', 'Co-design'],
    coverImage: 'https://picsum.photos/seed/service/1200/800',
    steps: [],
    outcomes: [],
  },
  {
    id: 5,
    slug: 'motion-ui',
    title: 'Motion & Interaction',
    description: 'Designing micro-interactions and motion principles for a consumer mobile application.',
    context: 'Consumer App',
    role: 'Interaction Designer',
    theme: 'Motion Design',
    tags: ['Motion', 'Interaction Design', 'Prototyping'],
    coverImage: 'https://picsum.photos/seed/motion/1200/800',
    steps: [],
    outcomes: [],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProject = (): Project | undefined =>
  projects.find((p) => p.featured) ?? projects[0];
