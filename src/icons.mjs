// Icon library. Every icon is a 24×24 stroke drawing, emitted once per page as an
// SVG sprite and referenced with <use>. Add an icon here, then map it below.

const P = {
  // ui
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  out: '<path d="M7 17L17 7M9 7h8v8"/>',
  down: '<path d="M12 4v16M6 14l6 6 6-6"/>',
  up: '<path d="M12 20V4M6 10l6-6 6 6"/>',
  dl: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  in: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  zoom: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M11 8v6M8 11h6"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  // concepts
  spark: '<circle cx="12" cy="12" r="2.2"/><path d="M12 2.5v4.5M12 17v4.5M2.5 12H7M17 12h4.5M5.3 5.3l3 3M15.7 15.7l3 3M18.7 5.3l-3 3M8.3 15.7l-3 3"/>',
  chat: '<path d="M4 5h16v11H10l-6 4V5z"/><path d="M8 9.5h8M8 12.5h5"/>',
  text: '<path d="M4 6h16M4 10h11M4 14h16M4 18h8"/>',
  bot: '<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4.5V8M9 13h.01M15 13h.01M9.5 16h5M2.5 12.5v2M21.5 12.5v2"/><circle cx="12" cy="3.5" r="1"/>',
  agents: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M10.8 7.2l-4.6 8.6M13.2 7.2l4.6 8.6M7.5 18h9"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4M10.5 10.5h3v3h-3z"/>',
  sliders: '<path d="M5 3v5M5 12v9M12 3v9M12 16v5M19 3v2M19 9v12"/><circle cx="5" cy="10" r="2"/><circle cx="12" cy="14" r="2"/><circle cx="19" cy="7" r="2"/>',
  gauge: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-5"/><circle cx="12" cy="17" r="1.3"/><path d="M7 20h10"/>',
  prompt: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 10l3 2-3 2M12.5 15H17"/>',
  augment: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 3.5-2M19 14v7M15.5 17.5h7"/>',
  cube: '<path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z"/><path d="M3.5 7.25L12 12l8.5-4.75M12 12v9.5"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14a4 4 0 0 0 8 0M9 9.5h.01M15 9.5h.01"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 12l9 5 9-5M3 16l9 5 9-5"/>',
  tree: '<rect x="9" y="3" width="6" height="4.5" rx="1"/><rect x="3" y="16.5" width="6" height="4.5" rx="1"/><rect x="15" y="16.5" width="6" height="4.5" rx="1"/><path d="M12 7.5V12M6 16.5V12h12v4.5"/>',
  graph: '<circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="8" cy="18" r="2.5"/><circle cx="17.5" cy="17" r="2"/><path d="M8.4 6.6l7.2 1M6.4 8.5l1.2 7M10.5 17.8l5-.6M17.8 10.5l-.2 4.5"/>',
  folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M8 12.5h8M8 15.5h5"/>',
  cycle: '<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3"/><path d="M18 3v4h-4M6 21v-4h4"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20.5 20.5l-4.8-4.8"/>',
  checklist: '<path d="M10 6h10M10 12h10M10 18h10"/><path d="M3.5 6l1.5 1.5L7.5 5M3.5 12l1.5 1.5 2.5-2.5M3.5 18l1.5 1.5 2.5-2.5"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M3 9h18M9 21V9"/>',
  uml: '<rect x="3" y="3" width="8" height="6" rx="1"/><rect x="13" y="15" width="8" height="6" rx="1"/><path d="M7 9v9h6M17 15V6h-6"/>',
  usecase: '<circle cx="6.5" cy="5.5" r="2.3"/><path d="M6.5 8v6M3.5 10.5h6M4.5 20l2-6 2 6"/><ellipse cx="17" cy="12" rx="4.5" ry="2.8"/>',
  diagram: '<rect x="3" y="3.5" width="7" height="5" rx="1"/><rect x="14" y="15.5" width="7" height="5" rx="1"/><rect x="14" y="3.5" width="7" height="5" rx="1"/><path d="M6.5 8.5v6a2 2 0 0 0 2 2H14M10 6h4"/>',
  services: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.8"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.8"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.8"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.8"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"/>',
  braces: '<path d="M8 4H7a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h1M16 4h1a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-1"/>',
  gateway: '<path d="M2.5 12H8M16 12h5.5M8 5h8v14H8z"/><path d="M18.5 9l3 3-3 3M11 9.5h2M11 14.5h2"/>',
  queue: '<rect x="3" y="8" width="4" height="8" rx="1"/><rect x="10" y="8" width="4" height="8" rx="1"/><rect x="17" y="8" width="4" height="8" rx="1"/><path d="M3 4.5h18M3 19.5h18"/>',
  async: '<path d="M4 8h14l-3.5-3.5M20 16H6l3.5 3.5"/>',
  balance: '<path d="M12 3v17M6 20h12M5 7h14"/><path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  flask: '<path d="M9 3h6M10 3v6l-5.2 9.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9V3"/><path d="M7.4 15h9.2"/>',
  bars: '<path d="M4 20V4M4 20h16"/><path d="M8.5 16v-4M13 16V8M17.5 16v-6"/>',
  compare: '<path d="M12 3v18"/><rect x="3" y="8" width="6" height="9" rx="1"/><rect x="15" y="5" width="6" height="12" rx="1"/>',
  database: '<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  notebook: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M12.5 8H16M12.5 12H16"/>',
  send: '<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
  book: '<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20M8 7h8"/>'
};

// Language names have no fair generic glyph, so they get a monogram instead.
const MONO = { Python: 'Py', 'C#': 'C#', 'C++': 'C++', Java: 'Jv', '.NET': '.NET', JSON: '{ }', 'Python Development': 'Py' };

export const SKILL_ICON = {
  'Large Language Models (LLMs)': 'chat', 'Natural Language Processing (NLP)': 'text', 'Agentic AI': 'bot', 'Multi-Agent Systems': 'agents',
  'AI Model Training': 'chip', 'Fine-Tuning': 'sliders', 'Model Evaluation & Optimization': 'gauge', 'Prompt Engineering': 'prompt',
  'Data Augmentation': 'augment', 'Qwen Models': 'cube', 'Hugging Face': 'smile', Transformers: 'layers',
  'Ontology Development': 'tree', 'Ontology-Based Knowledge Representation': 'graph', 'Semantic Knowledge Organization': 'folder',
  'Software Development Life Cycle (SDLC)': 'cycle', 'Requirements Analysis': 'search', 'Functional Requirements': 'checklist',
  'System Analysis & Design': 'layout', 'UML Modeling': 'uml', 'Use Case Modeling': 'usecase', 'Analytical & Design Diagrams': 'diagram',
  'Microservices Architecture': 'services', 'ASP.NET Core Web API': 'server', 'RESTful APIs': 'braces', 'Ocelot API Gateway': 'gateway',
  RabbitMQ: 'queue', 'Asynchronous Communication': 'async', 'Load Balancing': 'balance', 'Authentication & Authorization': 'lock', HTTP: 'globe',
  'Experimental Design': 'flask', 'Model Performance Evaluation': 'bars', 'Comparative Analysis': 'compare', 'Research Data Preparation': 'database',
  ROUGE: 'target', METEOR: 'target', BERTScore: 'target',
  'Visual Studio Code': 'code', 'Google Colab': 'notebook', Postman: 'send', 'Thunder Client': 'bolt',
  // competencies
  'Artificial Intelligence': 'spark', 'AI Model Training & Fine-Tuning': 'sliders', 'Software Engineering': 'cycle',
  'Systems Analysis & Design': 'layout', 'Distributed Systems': 'services', 'Compiler Design': 'code', 'Academic Research': 'flask',
  'University Teaching': 'cap', 'Graduation & Academic Project Supervision': 'users'
};
export const CATEGORY_ICON = { ai: 'spark', kr: 'graph', lang: 'code', se: 'uml', backend: 'server', research: 'flask', tools: 'wrench' };

export const icon = (name, cls = 'i') => `<svg class="${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;

// icon for a skill / competency label (falls back to a monogram, then to a spark)
export const skillIcon = (label) => {
  if (MONO[label]) return `<span class="mono" aria-hidden="true">${MONO[label]}</span>`;
  return icon(SKILL_ICON[label] || 'spark');
};

export const sprite = () => `<svg class="sprite" aria-hidden="true" focusable="false"><defs>${Object.entries(P)
  .map(([k, v]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${v}</symbol>`).join('')}</defs></svg>`;
