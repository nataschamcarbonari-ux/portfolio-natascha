export const nodes = [
  // Categories
  { id: 'cat-access', data: { label: 'ACCESS TO INFORMATION' }, position: { x: 0, y: 50 }, style: { width: 200 } },
  { id: 'cat-ranking', data: { label: 'INTERNAL RANKING' }, position: { x: 0, y: 420 }, style: { width: 200 } },
  { id: 'cat-reservations', data: { label: 'RESERVATIONS' }, position: { x: 0, y: 820 }, style: { width: 200 } },

  // ACCESS TO INFORMATION - Opportunities
  { id: 'a-op-1', data: { label: 'Teachers and class schedules' }, position: { x: 260, y: 10 }, style: { width: 220 } },
  { id: 'a-op-2', data: { label: 'Non-federated tournaments' }, position: { x: 260, y: 110 }, style: { width: 220 } },
  { id: 'a-op-3', data: { label: 'Player profiles and match history' }, position: { x: 260, y: 210 }, style: { width: 220 } },

  // ACCESS TO INFORMATION - Solutions
  { id: 'a-sol-1', data: { label: "Create profile: height, weight, age, tennis history" }, position: { x: 520, y: 10 }, style: { width: 260 } },
  { id: 'a-sol-2', data: { label: 'Social network for players to promote matches (local & global)' }, position: { x: 520, y: 90 }, style: { width: 260 } },
  { id: 'a-sol-3', data: { label: "Profile media: photos from tournaments + short videos of best plays" }, position: { x: 520, y: 170 }, style: { width: 260 } },
  { id: 'a-sol-4', data: { label: 'View available days/times based on personal agenda' }, position: { x: 520, y: 250 }, style: { width: 260 } },
  { id: 'a-sol-5', data: { label: 'Compare wins/losses (head-to-head) between two players' }, position: { x: 520, y: 330 }, style: { width: 260 } },

  // INTERNAL RANKING - Opportunities (repositioned to avoid overlap)
  { id: 'r-op-1', data: { label: 'Manual draw' }, position: { x: 260, y: 460 }, style: { width: 220 } },
  { id: 'r-op-2', data: { label: 'Periodic updates of match results' }, position: { x: 260, y: 520 }, style: { width: 220 } },

  // INTERNAL RANKING - Solutions (repositioned)
  { id: 'r-sol-1', data: { label: 'Automatic draw of ranking matches at start of each month' }, position: { x: 520, y: 460 }, style: { width: 280 } },
  { id: 'r-sol-2', data: { label: 'Constant updates: players view matchups, add results, see final scores' }, position: { x: 520, y: 520 }, style: { width: 280 } },

  // RESERVATIONS - Opportunities (moved further down)
  { id: 's-op-1', data: { label: 'Limitation of scheduling hours' }, position: { x: 260, y: 760 }, style: { width: 220 } },
  { id: 's-op-2', data: { label: 'Idle courts (late cancellations / not informed)' }, position: { x: 260, y: 820 }, style: { width: 220 } },
  { id: 's-op-3', data: { label: 'Player availability & common time slot definition' }, position: { x: 260, y: 880 }, style: { width: 220 } },
  { id: 's-op-4', data: { label: 'Option to book for lesson, ranking match, or friendly' }, position: { x: 260, y: 940 }, style: { width: 220 } },

  // RESERVATIONS - Solutions (shifted down)
  { id: 's-sol-1', data: { label: 'Register interest in a booked time slot -> notify if available' }, position: { x: 520, y: 760 }, style: { width: 300 } },
  { id: 's-sol-2', data: { label: 'Register interest in friendlies when no opponent available' }, position: { x: 520, y: 820 }, style: { width: 300 } },
  { id: 's-sol-3', data: { label: 'Add availability to schedule for days you can/want to play' }, position: { x: 520, y: 880 }, style: { width: 300 } },
  { id: 's-sol-4', data: { label: 'Reminders to schedule ranking matches' }, position: { x: 520, y: 940 }, style: { width: 300 } },
  { id: 's-sol-5', data: { label: 'Filter day and choose an opponent' }, position: { x: 520, y: 1000 }, style: { width: 300 } },
  { id: 's-sol-6', data: { label: 'Schedule singles or doubles (2 slots, invite others)' }, position: { x: 520, y: 1060 }, style: { width: 300 } },
  { id: 's-sol-7', data: { label: 'Allow acceptance of opponents up to 2 hours before match' }, position: { x: 520, y: 1120 }, style: { width: 300 } },
  { id: 's-sol-8', data: { label: 'Shortcut in schedule to book pre-defined matches when court opens' }, position: { x: 520, y: 1180 }, style: { width: 300 } },
];

export const edges = [
  // ACCESS TO INFORMATION connections
  { id: 'e-cat-access-a1', source: 'cat-access', target: 'a-op-1', animated: true },
  { id: 'e-cat-access-a2', source: 'cat-access', target: 'a-op-2', animated: true },
  { id: 'e-cat-access-a3', source: 'cat-access', target: 'a-op-3', animated: true },
  { id: 'e-a1-s1', source: 'a-op-1', target: 'a-sol-1' },
  { id: 'e-a2-s2', source: 'a-op-2', target: 'a-sol-2' },
  { id: 'e-a3-s3', source: 'a-op-3', target: 'a-sol-3' },
  { id: 'e-a3-s4', source: 'a-op-3', target: 'a-sol-4' },
  { id: 'e-a3-s5', source: 'a-op-3', target: 'a-sol-5' },

  // INTERNAL RANKING connections
  { id: 'e-cat-ranking-r1', source: 'cat-ranking', target: 'r-op-1', animated: true },
  { id: 'e-cat-ranking-r2', source: 'cat-ranking', target: 'r-op-2', animated: true },
  { id: 'e-r1-sol1', source: 'r-op-1', target: 'r-sol-1' },
  { id: 'e-r2-sol2', source: 'r-op-2', target: 'r-sol-2' },

  // RESERVATIONS connections
  { id: 'e-cat-res-s1', source: 'cat-reservations', target: 's-op-1', animated: true },
  { id: 'e-cat-res-s2', source: 'cat-reservations', target: 's-op-2', animated: true },
  { id: 'e-cat-res-s3', source: 'cat-reservations', target: 's-op-3', animated: true },
  { id: 'e-cat-res-s4', source: 'cat-reservations', target: 's-op-4', animated: true },
  { id: 'e-s1-sol1', source: 's-op-1', target: 's-sol-1' },
  { id: 'e-s2-sol2', source: 's-op-2', target: 's-sol-2' },
  { id: 'e-s3-sol3', source: 's-op-3', target: 's-sol-3' },
  { id: 'e-s4-sol4', source: 's-op-4', target: 's-sol-4' },
  { id: 'e-s4-sol5', source: 's-op-4', target: 's-sol-5' },
  { id: 'e-s4-sol6', source: 's-op-4', target: 's-sol-6' },
  { id: 'e-s4-sol7', source: 's-op-4', target: 's-sol-7' },
  { id: 'e-s4-sol8', source: 's-op-4', target: 's-sol-8' },
];

export default { nodes, edges };
