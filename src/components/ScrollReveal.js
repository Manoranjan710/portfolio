'use client';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Reveals its children with a fade + slide animation when scrolled into view.
 *
 * Props:
 *  - direction: 'up' | 'down' | 'left' | 'right' (default 'up')
 *  - delay: ms before the animation starts once in view (for stagger effects)
 *  - className: extra classes for the wrapper
 *  - as: element tag to render (default 'div')
 */
const hiddenTransform = {
  up: 'translateY(48px)',
  down: 'translateY(-48px)',
  left: 'translateX(48px)',
  right: 'translateX(-48px)',
};

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  ...rest
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate(0, 0)' : hiddenTransform[direction],
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
