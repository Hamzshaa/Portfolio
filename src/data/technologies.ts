export interface Technology {
  name: string;
  tag: string;
}

export interface TechSection {
  roman: string;
  title: string;
  items: Technology[];
}

export const techSections: TechSection[] = [
  {
    roman: 'I',
    title: 'Languages',
    items: [
      { name: 'TypeScript', tag: 'Primary Full-Stack' },
      { name: 'Python', tag: 'APIs & Automation' },
      { name: 'C++', tag: 'Systems & Performance' },
      { name: 'Java', tag: 'Enterprise & Systems' },
    ],
  },
  {
    roman: 'II',
    title: 'Frontend',
    items: [
      { name: 'React', tag: 'Interactive Interfaces' },
      { name: 'Next.js', tag: 'Production SSR & Meta' },
      { name: 'Astro', tag: 'Editorial & Content-First' },
      { name: 'Tailwind CSS', tag: 'Design Systems & Utility' },
    ],
  },
  {
    roman: 'III',
    title: 'Backend',
    items: [
      { name: 'Node.js', tag: 'Asynchronous Runtime' },
      { name: 'Nest.js', tag: 'Modular TypeScript APIs' },
      { name: 'Django', tag: 'Enterprise Web Framework' },
      { name: 'FastAPI', tag: 'High-Speed Python APIs' },
      { name: 'PostgreSQL', tag: 'Relational Workhorse' },
      { name: 'Redis', tag: 'In-Memory Caching & Queues' },
    ],
  },
  {
    roman: 'IV',
    title: 'Platform',
    items: [
      { name: 'Docker', tag: 'Containers & Isolation' },
      { name: 'Linux', tag: 'Server Administration' },
    ],
  },
];

// Flat export for compatibility
export const technologies = techSections.flatMap((s) => s.items);
