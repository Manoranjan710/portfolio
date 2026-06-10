import React from 'react';
import ScrollReveal from '../ScrollReveal';

const tech = [
  { name: 'HTML', src: 'https://img.icons8.com/color/480/html-5--v1.png' },
  { name: 'CSS', src: 'https://img.icons8.com/color/480/css3.png' },
  { name: 'JavaScript', src: 'https://img.icons8.com/fluency/48/javascript.png' },
  { name: 'ReactJS', src: 'https://img.icons8.com/color/480/react-native.png' },
  {
    name: 'Next.js',
    src: 'https://img.icons8.com/fluency-systems-filled/240/nextjs.png',
  },
  { name: 'TypeScript', src: 'https://img.icons8.com/color/480/typescript.png' },
  { name: 'Node.js', src: 'https://img.icons8.com/color/480/nodejs.png' },
  { name: 'TailwindCSS', src: 'https://img.icons8.com/color/480/tailwindcss.png' },
  { name: 'Bootstrap', src: 'https://img.icons8.com/color/480/bootstrap.png' },
  { name: 'Python', src: 'https://img.icons8.com/fluency/240/python.png' },
  {
    name: 'Express',
    src: 'https://img.icons8.com/?size=100&id=sFWl80NH39SW&format=png&color=000000',
  },
  { name: 'PostgreSQL', src: 'https://img.icons8.com/color/480/postgreesql.png' },
  { name: 'MongoDB', src: 'https://img.icons8.com/color/480/mongodb.png' },
  { name: 'Material UI', src: 'https://img.icons8.com/color/480/material-ui.png' },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
            Get to know me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink-900 md:text-4xl">
            About <span className="text-gold-gradient">Me</span>
          </h2>
          <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-200" />
        </ScrollReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <ScrollReveal direction="right" className="md:col-span-2 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-200 bg-cream-100 px-4 py-2 text-sm font-medium text-gold-700">
              🎓 Bachelor&apos;s in Civil Engineering
            </div>
            <p className="text-base leading-relaxed text-ink-700 md:text-lg">
              Frontend-focused Full Stack Developer with 3.6 years of experience
              delivering enterprise-scale cloud dashboards and AI-powered platforms.
              I specialize in Next.js, React, TypeScript, and Node.js, with a strong
              emphasis on performance — achieving 40–60% reductions in load times
              across high-traffic dashboards through code splitting, lazy loading,
              memoization, and virtual scrolling.
            </p>
            <p className="text-base leading-relaxed text-ink-700 md:text-lg">
              Most recently, I contributed to production-grade cloud infrastructure
              UI at OLA Krutrim — architecting dashboards for managing virtual
              machines, storage, and load balancers used by thousands of users — and
              engineered RAG-based AI analytics systems using OpenAI APIs and the
              Qdrant vector database. I enjoy owning the full delivery lifecycle:
              system design, development, performance tuning, and cloud deployment.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120} className="space-y-4">
            {[
              { value: '3.6+', label: 'Years of experience' },
              { value: '40–60%', label: 'Load-time reductions' },
              { value: '14+', label: 'Technologies mastered' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gold-100 bg-cream-50 p-5 shadow-card"
              >
                <p className="text-3xl font-bold text-gold-gradient">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-ink-700">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-ink-900 md:text-3xl">
              Technologies I work with
            </h3>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7 md:gap-6">
            {tech.map((item, i) => (
              <ScrollReveal
                key={item.name}
                delay={(i % 7) * 60}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-gold-100 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-gold"
              >
                <img
                  width="48"
                  height="48"
                  src={item.src}
                  alt={item.name}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-center text-sm font-medium text-ink-700">
                  {item.name}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
