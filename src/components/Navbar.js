'use client';
import React, { useEffect, useState } from 'react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  // Shrink / add shadow once the user scrolls away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the link for the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(26,26,26,0.4)] border-b border-gold-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <button
          onClick={() => handleNav('home')}
          className="font-signature text-3xl md:text-5xl leading-none text-gold-gradient pr-2 hover:scale-105 transition-transform duration-300"
        >
          Manoranjan
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`relative rounded-lg px-4 py-2 text-base font-medium transition-all duration-300 ${
                  active === link.id
                    ? 'text-gold-700'
                    : 'text-ink-700 hover:text-gold-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gold-400 transition-all duration-300 ${
                    active === link.id ? 'w-6' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-lg border border-gold-200 p-2 text-gold-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            className={`h-5 w-5 fill-current transition-transform duration-300 ${
              open ? 'rotate-90' : ''
            }`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-gold-100 bg-cream-50/95 backdrop-blur-md transition-[max-height] duration-300 ${
          open ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-2">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className={`block w-full rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                  active === link.id
                    ? 'bg-gold-50 text-gold-700'
                    : 'text-ink-700 hover:bg-gold-50'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
