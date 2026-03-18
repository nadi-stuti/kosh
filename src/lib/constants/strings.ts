export const makeBadge = (text: string, color: string) => `
<span style="
  display: inline-block; 
  padding: 0.1rem 0.4rem; 
  margin: 0.1rem; 
  border-radius: 0.25rem; 
  font-size: 0.9rem; 
  font-weight: 600;
  background: var(--sl-color-${color}-low); 
  color: var(--sl-color-${color}-high); 
  border: 1px solid var(--sl-color-${color});
  line-height: 1;
">${text}</span>`;

export const CategoryBadge = {
  STUDENT: makeBadge("Students", "blue"),
  VOLUNTEER: makeBadge("Volunteers", "teal"),
  PRO: makeBadge("Professionals", "purple"),
  RESEARCHER: makeBadge("Researchers", "indigo"),
  NGO: makeBadge("NGOs", "white"),
  GROUND_WORKER: makeBadge("Ground Workers", "green"),
  COMMUNITY: makeBadge("Community Builders", "green"),
  DEVOTEE: makeBadge("Devotees", "pink"),
  THINKER: makeBadge("Thinkers", "purple"),
  CURIOUS: makeBadge("Curious", "white"),
  DATA_SCI: makeBadge("Data Scientists", "red"),
  PLANNER: makeBadge("Planners", "blue"),
  CULTURAL: makeBadge("Cultural Researchers", "teal"),
  HISTORIAN: makeBadge("Historians", "orange"),
} as const;

export const BEST_FOR = `<br/><br/><span style="font-size: 0.95rem; color: var(--sl-color-gray-3); font-weight: bold; text-transform: uppercase;">Best for:</span><br/>`;
