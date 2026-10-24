export interface TimelineItem {
  id: string;
  year: string;
  dateRange: string;
  type: 'work' | 'education';
  title: string;
  organization: string;
  url?: string;
  displayUrl?: string;
  logo?: string;
  location?: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 'birtucan-technologies',
    year: '2024 — Present',
    dateRange: '2024 — Present',
    type: 'work',
    title: 'Co-Founder & Software Engineer',
    organization: 'BirtuCan Technologies PLC',
    url: 'https://birtucansoftware.com',
    displayUrl: 'birtucansoftware.com',
    logo: '/assets/images/timeline/birtucan-logo.png',
    location: 'Bethel, Addis Ababa, Ethiopia',
    description:
      'Co-founded a software firm for businesses that outgrew paper slips and stubborn spreadsheets. Spending most days designing system architecture, untangling restaurant floor operations, and shipping ERP & POS platforms that hold up during Friday dinner rushes.'
  },
  {
    id: 'aau-computer-science',
    year: '2022 — 2025',
    dateRange: '2022 — 2025',
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    organization: 'Addis Ababa University',
    logo: '/assets/images/timeline/aau-logo.png',
    location: '4 Kilo Campus, Addis Ababa, Ethiopia',
    description:
      'Three years at 4 Kilo studying computation from first principles. Learned how computers actually work under the hood, argued over algorithm efficiency, and built foundations that outlive JavaScript frameworks.'
  },
  {
    id: 'evangadi-mern-bootcamp',
    year: '2023 — 2024',
    dateRange: '2023 — 2024',
    type: 'education',
    title: 'MERN Stack Engineering Bootcamp',
    organization: 'Evangadi Networks',
    logo: '/assets/images/timeline/evangadi-logo.png',
    location: 'Bootcamp (Remote)',
    description:
      'Intensive software immersion focused on full-stack JavaScript. Built apps from database schemas up to UI state, quickly discovering that shipping working code beats endlessly admiring theory.'
  },
  {
    id: 'rdx-uiux-design',
    year: '2023',
    dateRange: '2023',
    type: 'work',
    title: 'UI/UX Design Intern',
    organization: 'RDX Startup',
    location: 'Addis Ababa, Ethiopia',
    description:
      'Design internship at an early-stage startup, turning raw product concepts into intuitive screens and responsive front-end layouts. Learned firsthand that if a button requires an instruction manual, the design already lost.'
  }
];
