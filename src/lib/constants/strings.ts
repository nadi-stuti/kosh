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

export const STUDENT = makeBadge("Students", "blue");
export const VOLUNTEER = makeBadge("Volunteers", "teal");
export const PRO = makeBadge("Professionals", "purple");
export const RESEARCHER = makeBadge("Researchers", "indigo");

// Organization & Action
export const NGO = makeBadge("NGOs", "white");
export const GROUND_WORKER = makeBadge("Ground Workers", "green");
export const COMMUNITY = makeBadge("Community Builders", "green");

// Spiritual & Philosophical
export const DEVOTEE = makeBadge("Devotees", "pink");
export const THINKER = makeBadge("Thinkers", "purple");
export const CURIOUS = makeBadge("Curious", "white");

// Data & Planning
export const DATA_SCI = makeBadge("Data Scientists", "red");
export const PLANNER = makeBadge("Planners", "blue");

// Research & History
export const CULTURAL = makeBadge("Cultural Researchers", "teal");
export const HISTORIAN = makeBadge("Historians", "orange");

export const BEST_FOR = `<br/><br/><span style="font-size: 0.95rem; color: var(--sl-color-gray-3); font-weight: bold; text-transform: uppercase;">Best for:</span><br/>`;
