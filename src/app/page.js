import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-gold-100 bg-cream-50 py-6 text-center text-sm text-ink-700">
        © {new Date().getFullYear()} Manoranjan D Salunke · Built with Next.js &amp; TailwindCSS
      </footer>
    </main>
  );
};

export default Home;
