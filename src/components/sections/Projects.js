import React from 'react';
import ScrollReveal from '../ScrollReveal';

const projects = [
  {
    title: 'WashHub — Multi-Vendor Car Wash Marketplace',
    image: '/images/washhub.png',
    featured: true,
    description:
      'Production-deployed full-stack marketplace with three user roles (customer, vendor, superadmin) covering end-to-end booking, real Razorpay payments (UPI & card), and AI features. Engineered a concurrency-safe booking engine using PostgreSQL row-locking, geo-based discovery via the Haversine formula, webhook-first payment verification, and a two-layer Redis + React Query cache. Integrated GPT-4o-mini for smart search, recommendations, and review sentiment tagging.',
    stack:
      'Next.js 14, TypeScript, Node.js, Express, Prisma, PostgreSQL, Redis, Zustand, React Query, Razorpay, OpenAI, Leaflet.js',
    href: 'https://wash-hub-frontend.vercel.app/',
    linkType: 'live',
  },
];

const linkIcon = {
  live: 'https://img.icons8.com/ios-filled/50/domain.png',
  github: 'https://img.icons8.com/ios-filled/50/github.png',
};

const ProjectCard = ({ project }) => (
  <div
    className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gold-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-gold-lg ${
      project.featured ? 'md:flex-row md:col-span-2' : ''
    }`}
  >
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`block overflow-hidden ${project.featured ? 'md:w-1/2' : ''}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          project.featured ? 'h-56 md:h-full' : 'h-48'
        }`}
      />
    </a>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-ink-900 md:text-2xl">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700 md:text-base">
        {project.description}
      </p>
      <p className="mt-4 text-sm text-ink-700">
        <span className="font-semibold italic text-gold-700">Stack:</span>{' '}
        {project.stack}
      </p>
      <div className="mt-5">
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gold-200 bg-cream-50 px-4 py-2 text-sm font-semibold text-gold-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-gold"
        >
          <img width="18" height="18" src={linkIcon[project.linkType]} alt="" />
          {project.linkType === 'live' ? 'Visit Live Site' : 'View on GitHub'}
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-cream-100 py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
            My work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink-900 md:text-4xl">
            Featured <span className="text-gold-gradient">Projects</span>
          </h2>
          <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-200" />
        </ScrollReveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={(i % 2) * 120}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
