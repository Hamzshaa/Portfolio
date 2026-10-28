import type { APIRoute } from 'astro';
import { projects } from '../../data/projects';
import { techSections } from '../../data/technologies';
import { timeline } from '../../data/timeline';

export const prerender = true;

export const GET: APIRoute = async () => {
  const payload = {
    meta: {
      specification: 'https://hamzajhad.com/llms.txt',
      fullContext: 'https://hamzajhad.com/llms-full.txt',
      schemaOrg: 'https://schema.org',
    },
    person: {
      name: 'Hamza Jhad',
      title: 'Full-Stack Software Engineer & ERP Architect',
      roles: ['Co-Founder', 'Software Engineer', 'Systems Architect'],
      organization: {
        name: 'BirtuCan Technologies PLC',
        url: 'https://birtucansoftware.com',
        location: 'Addis Ababa, Ethiopia',
      },
      website: 'https://hamzajhad.com',
      email: 'trident32000@gmail.com',
      socials: {
        github: 'https://github.com/hamzshaa',
        linkedin: 'https://www.linkedin.com/in/hamza-jhad-ba5b36291',
        telegram: 'https://t.me/hamZZsha',
        whatsapp: 'https://wa.me/251929248080',
      },
      bio: 'Full-stack software engineer and co-founder at BirtuCan Technologies PLC, building mission-critical hospitality ERPs, factory production tracking, and offline-resilient POS architectures across Ethiopia.',
      philosophy:
        'Usability comes first. A system can be scalable, secure, and elegant, but if people find it painful to use in fast-paced real-world environments, it is a failure.',
    },
    technologies: techSections,
    timeline,
    projects: projects.map((p) => ({
      slug: p.slug,
      title: p.title,
      category: p.category,
      summary: p.summary,
      url: p.url || (p.deployments && p.deployments.length > 0 ? p.deployments[0].url : undefined),
      deployments: p.deployments || [],
    })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
