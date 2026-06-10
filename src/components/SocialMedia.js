import React from 'react';

const links = [
  {
    id: 1,
    label: 'LinkedIn',
    src: 'https://img.icons8.com/fluency/48/linkedin.png',
    href: 'https://www.linkedin.com/in/manoranjan-d-salunke-683180173/',
  },
  {
    id: 2,
    label: 'GitHub',
    src: 'https://img.icons8.com/ios-filled/50/github.png',
    href: 'https://github.com/Manoranjan710',
  },
  {
    id: 3,
    label: 'Gmail',
    src: 'https://img.icons8.com/color/48/gmail-new.png',
    href: 'mailto:manoranjan710@gmail.com',
  },
  {
    id: 4,
    label: 'Resume',
    src: 'https://img.icons8.com/fluency/48/resume.png',
    href: '/resume.pdf',
  },
];

const SocialMedia = () => {
  return (
    <ul className="flex flex-row gap-4">
      {links.map(({ id, label, src, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-200 bg-white p-2 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:shadow-gold"
          >
            <img width="28" height="28" src={src} alt={label} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
