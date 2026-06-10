'use client';
import React from 'react';
import SocialMedia from '../SocialMedia';
import ScrollReveal from '../ScrollReveal';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-cream-50 via-white to-cream-100 pt-24"
    >
      {/* Soft gold ambient blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-gold-50 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-5 md:flex-row md:justify-between md:px-8">
        <ScrollReveal direction="right" className="flex-1">
          <span className="mb-4 inline-block rounded-full border border-gold-200 bg-white/70 px-4 py-1 text-sm font-medium tracking-wide text-gold-700 shadow-card">
            Available for opportunities
          </span>
          <h2 className="text-lg font-medium text-ink-700 md:text-xl">
            Hi, I&apos;m Manoranjan 👋
          </h2>
          <h1 className="mt-2 text-4xl font-bold leading-tight text-ink-900 md:text-6xl">
            Full Stack <span className="text-gold-gradient">Developer</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
            Frontend-focused Full Stack Developer with 3.6 years of experience
            building enterprise-scale cloud dashboards and AI-powered platforms.
            Specialized in Next.js, React, TypeScript, and Node.js — with a proven
            track record of 40–60% load-time reductions across high-traffic
            dashboards.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3 font-semibold text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-lg"
            >
              View Projects
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="rounded-xl border border-gold-300 bg-white px-6 py-3 font-semibold text-gold-700 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-50"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8">
            <SocialMedia />
          </div>

          <div className="mt-6 flex flex-col gap-1 text-sm text-ink-700 md:flex-row md:gap-8">
            <span>
              <span className="font-semibold text-gold-700">Phone:</span> +91 9482207429
            </span>
            <span>
              <span className="font-semibold text-gold-700">Email:</span>{' '}
              manoranjan710@gmail.com
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={150} className="flex-shrink-0">
          <div className="relative animate-float">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-gold-300 to-gold-100 opacity-70 blur-md" />
            <img
              src="/images/profile.jpg"
              alt="Manoranjan D Salunke"
              className="relative h-[16rem] w-[14rem] rounded-[2rem] border-4 border-white object-cover shadow-gold-lg md:h-[24rem] md:w-[21rem]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
