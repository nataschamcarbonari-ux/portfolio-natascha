import type { StepContent } from '../types';

const futuresStepTemplate = (stepId: number): StepContent => ({
  stepId,
  sections: [
    {
      label: 'Overview',
      heading: 'Add section title',
      body: 'Add your description for this step here.',
      images: [],
    },
    {
      label: 'Process',
      heading: 'How I approached it',
      body: 'Describe your methodology, tools, and process in detail here.',
      cards: [
        { label: 'Add label', text: 'Add content for this card.' },
        { label: 'Add label', text: 'Add content for this card.' },
        { label: 'Add label', text: 'Add content for this wider card.', wide: true },
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

  tennisconnect: {

    // ── Step 1: Research ────────────────────────────────────────────────────
    1: {
      stepId: 1,
      sections: [
        {
          label: 'Origin',
          heading: 'A personal problem, a real project',
          body: "TennisConnect started from a personal observation. My partner and his family play tennis at Clube Paladino in Gravataí, RS — and as I got into the sport myself, I noticed that almost every piece of information players needed (ranking draws, match results, standings) was scattered across WhatsApp messages and a manually updated Excel spreadsheet. I decided to use this as a real design challenge: learn UX in practice, with a real problem and real users.",
          images: ['/paladino_2.png'],
        },
        {
          label: 'Existing system',
          heading: 'How the club was running things',
          body: "The club already had a platform — AgendaClube — for booking courts. But ranking management lived entirely outside it: a spreadsheet maintained by two administrators, results collected via a Google Form, and updates shared manually in a WhatsApp group every few days.",
          images: ['/How_the_club_was_running_things_1.png', '/How_the_club_was_running_things_2.png'],
        },
        {
          label: 'In-depth interview',
          heading: 'Listening to someone who lives this every week',
          body: "I conducted an in-depth interview with Gabriel, a club member for over 10 years, to understand the process from the inside. The goal wasn't just to list problems — it was to understand the real friction behind each workaround players had already normalized.",
          cards: [
            {
              label: 'On finding opponents',
              text: '"When I need to play against someone I don\'t know, I have to find them among hundreds of people in the WhatsApp group." — Gabriel',
            },
            {
              label: 'On court booking',
              text: '"I start work at 7:30am and can\'t book the best time slots at 8am. I have to rely on my opponent booking it, or I\'m stuck with whatever\'s left."',
            },
            {
              label: 'On ranking updates',
              text: '"The standings spreadsheet gets shared 3–4 times a month. Between updates, no one knows the current standings." — Gabriel',
              wide: true,
            },
          ],
          images: [],
        },
      ],
    },

    // ── Step 2: Problem Definition ──────────────────────────────────────────
    2: {
      stepId: 2,
      sections: [
        {
          label: 'User profile',
          heading: 'Who we were designing for',
          body: "Gabriel Valadares, 24, engineer. Always busy, passionate about tennis. Plays through the club ranking and occasional friendlies. His core need: to manage his tennis life efficiently — bookings, results, standings — without depending on WhatsApp or someone else's availability.",
          images: ['/WhoWeWereDesigningFor.png'],
        },
        {
          label: 'User journey',
          heading: 'Mapping where the friction lives',
          body: "I mapped Gabriel's journey from deciding to play to seeing his match result reflected in the standings. The journey revealed how many steps required waiting on someone else, opening a group chat, or simply not having information at all.",
          images: ['/MappingWhereTheFrictionLives.png'],
        },
        {
          label: 'Pain points',
          heading: 'Six areas of friction',
          body: '',
          cards: [
            { label: '01 · Ranking management', text: 'Manual draws and delayed result updates — entirely dependent on two people with no backup.' },
            { label: '02 · Player availability', text: 'No way to see when opponents are free. Players had to message individually across a large WhatsApp group.' },
            { label: '03 · Player information', text: 'No profiles, no performance history, no head-to-head data. Context about opponents was passed informally or not at all.' },
            { label: '04 · Court booking', text: 'Popular slots only open at 8am on match day. Cancellations weren\'t controlled, leaving courts idle.' },
            { label: '05 · Teacher & lesson info', text: 'Only WhatsApp members knew which coaches were available. Pricing and schedules required separate conversations.' },
            { label: '06 · Tournament discovery', text: 'Non-federated events were shared informally. Anyone outside the right group simply missed them.' },
          ],
          images: [],
        },
        {
          label: 'Problem statement',
          heading: 'Defining the design challenge',
          body: 'With the research synthesized, I defined the problem statement that would guide the entire project:',
          cards: [
            {
              label: 'Problem statement',
              text: 'Tennis players at Clube Paladino lack a centralized, real-time platform to manage ranking matches, access standings, and connect with other players — forcing them to rely on fragmented WhatsApp communication and a manually updated spreadsheet that only two people know how to maintain.',
              wide: true,
            },
          ],
          images: [],
        },
      ],
    },

    // ── Step 3: Ideation ────────────────────────────────────────────────────
    3: {
      stepId: 3,
      sections: [
        {
          label: 'Opportunity mapping',
          heading: 'From problems to possibilities',
          body: "Before jumping to screens, I used an Opportunity Solution Tree to structure how each pain point could be addressed. Starting from the desired outcome — a platform where players manage their tennis life independently — I mapped opportunities derived from the research, and potential solutions for each. This helped me and my dev partner distinguish between what needed to be built first and what could wait for future phases, keeping every decision anchored to a real user need.",
          images: ['', ''],
        },
        {
          label: 'User flow & information architecture',
          heading: 'Understanding what goes where before designing anything',
          body: "Once the opportunities were mapped, I built a user flow to trace how a player would move through the platform — from login to core actions like checking the ranking, submitting a result, or viewing the games table. This exercise also defined the information architecture: which pages existed, what content lived on each, and how navigation would connect them. Having this structure agreed on early prevented scope creep and gave the developer a clear picture of what needed to be built before any screen was designed.",
          images: ['', ''],
        },
        {
          label: 'Inspired research',
          heading: 'Learning from what already exists',
          body: "I researched apps across four categories relevant to the project: networking platforms, sports apps, booking systems, and player profile interfaces. The goal wasn't to copy — it was to understand patterns users already know, and to identify where existing solutions fall short for a club-scale context.",
          cards: [
            { label: 'Networking', text: 'How apps like LinkedIn structure player discovery and connection flows.' },
            { label: 'Sports platforms', text: 'How ranking tables, match results, and standings are displayed in competitive sports apps.' },
            { label: 'Booking systems', text: 'How calendar availability, slot selection, and confirmations work in scheduling interfaces.' },
            { label: 'Player profiles', text: 'What information matters most on an athlete\'s profile — stats, history, contact.' },
          ],
          images: ['', ''],
        },
        {
          label: 'MVP scope',
          heading: 'Deciding what to build first',
          body: "Working with the developer, I mapped the full solution space against feasibility and impact. We agreed on a focused MVP — not cut features, just sequenced ones.",
          cards: [
            {
              label: 'In MVP',
              text: '· Authentication (login, register, password recovery)\n· Games table with draws per month\n· Ranking tables (consolidated, preview, champions race)\n· Player profile basics',
            },
            {
              label: 'Future scope',
              text: '· Head-to-head stats\n· Historical ranking data (14 years)\n· Match reminders\n· Photo/video feed\n· In-app chat\n· Coach availability',
            },
          ],
          images: ['/sequencer_1.png'],
        },
      ],
    },

    // ── Step 4: Design System ───────────────────────────────────────────────
    4: {
      stepId: 4,
      sections: [
        {
          label: 'Foundation first',
          heading: 'Building before designing',
          body: "Before creating a single screen, I built the design system in Figma. This was a deliberate choice: defining colors, typography, spacing, and components upfront meant every screen would be consistent, and the developer would have a single source of truth from day one.",
          images: [''],
        },
        {
          label: 'Components',
          heading: 'What went into the system',
          body: '',
          cards: [
            { label: 'Buttons', text: 'Primary, secondary, ghost, and disabled states — covering all interaction contexts across the platform.' },
            { label: 'Tables', text: 'Ranking and games table components built for dense data display, with sorting and filter affordances.' },
            { label: 'Cards', text: 'Player and match result cards with consistent hierarchy for name, score, and status.' },
            { label: 'Forms', text: 'Input fields, validation states, and error messages designed to match the authentication flows.' },
            { label: 'Navigation', text: 'Tab bar and header components adapted for both authenticated and public-facing screens.', wide: true },
          ],
          images: ['', ''],
        },
      ],
    },

    // ── Step 5: Prototyping ─────────────────────────────────────────────────
    5: {
      stepId: 5,
      sections: [
        {
          label: 'Lo-fi first',
          heading: 'Sketching the structure before styling',
          body: "Every major flow started with lo-fi sketches on paper and rough wireframes. This phase was about testing information architecture and interaction logic — not aesthetics. It was also where I caught structural issues before they became expensive to fix.",
          images: ['', ''],
        },
        {
          label: 'Wireframes',
          heading: 'Translating structure into layout',
          body: "Mid-fidelity wireframes gave the developer enough to start working on architecture while I continued refining the visual design. We used these as the basis for our first round of scope alignment.",
          images: [''],
        },
        {
          label: 'High fidelity',
          heading: 'The screens as they were built',
          body: "High-fidelity prototypes were delivered in four phases aligned to the project roadmap: Login & Auth, Games Table, Rankings, and Player Profile. Each delivery included interactive prototypes in Figma for developer reference.",
          images: ['', '', '', ''],
        },
        {
          label: 'Key screens',
          heading: 'Screens built across the four deliveries',
          body: '',
          cards: [
            { label: 'Delivery 1 · Auth', text: '· Login screen\n· Register with secretary approval flow\n· Password recovery\n· Password reset' },
            { label: 'Delivery 2 · Login live', text: '· Front-end and back-end of authentication deployed\n· First live version of the platform' },
            { label: 'Delivery 3 · Games table', text: '· Monthly draw display\n· Previous round filters\n· Player name search\n· Automated draw logic' },
            { label: 'Delivery 4 · Rankings', text: '· Consolidated ranking (last 10 rounds)\n· Current-round preview\n· Champions race table', wide: true },
          ],
          images: [],
        },
      ],
    },

    // ── Step 6: Dev Collaboration & Delivery ───────────────────────────────
    6: {
      stepId: 6,
      sections: [
        {
          label: 'Collaboration model',
          heading: 'Design and development in parallel',
          body: "This was a two-person project: I handled all design, the developer handled all engineering. We worked in a structured 4-delivery cadence over 10 weeks, with design staying one phase ahead of development at all times. Each delivery included Figma specs, component notes, and a live walkthrough to align before coding began.",
          cards: [
            { label: 'Tech stack', text: 'React + TypeScript (front-end), .NET 10 (back-end), SQL Server (database), Git/GitHub (version control).' },
            { label: 'Design tools', text: 'Figma for all design, prototyping, and handoff. Procreate for early sketches and visual exploration.' },
            { label: 'My role', text: 'Full product design ownership: research, problem definition, ideation, design system, all lo-fi and hi-fi screens, and delivery coordination.', wide: true },
          ],
          images: [],
        },
        {
          label: 'Current status',
          heading: 'Live and in testing',
          body: "The platform is currently deployed and being tested by club members at Clube Paladino. The MVP covers authentication, monthly game draws, and three ranking table views. The club's administrators can now manage the entire ranking process independently — no Excel required.",
          images: [''],
        },
        {
          label: 'What comes next',
          heading: 'Future scope',
          body: "The project defined a clear backlog of future modules — each scoped as a standalone addition to the existing platform.",
          cards: [
            { label: 'Next module', text: 'Player profile page with individual stats, ranking history graph, and match record.' },
            { label: 'Data milestone', text: 'Importing 14 years of historical ranking data into the new system.' },
            { label: 'Long-term vision', text: 'A full club management platform — from court booking to tournament discovery — built on the foundation already live.', wide: true },
          ],
          images: [],
        },
      ],
    },
  },
};