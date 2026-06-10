import React from 'react';
import ScrollReveal from '../ScrollReveal';
import SocialMedia from '../SocialMedia';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 py-24"
    >
      <div className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-gold-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
            Let&apos;s connect
          </p>
          <h2 className="mt-2 text-3xl font-bold text-ink-900 md:text-4xl">
            Get In <span className="text-gold-gradient">Touch</span>
          </h2>
          <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-200" />
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-700">
            Have a project in mind or just want to say hello? Reach out through any
            of the channels below.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="mx-auto mt-12 max-w-md">
          <div className="rounded-2xl border border-gold-100 bg-white p-6 text-center shadow-card md:p-8">
            <h3 className="text-lg font-bold text-ink-900">Contact details</h3>
            <div className="mt-5 space-y-4 text-sm text-ink-700">
              <p>
                <span className="font-semibold text-gold-700">Email</span>
                <br />
                <a
                  href="mailto:manoranjan710@gmail.com"
                  className="transition-colors hover:text-gold-600"
                >
                  manoranjan710@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-gold-700">Phone</span>
                <br />
                <a
                  href="tel:+919482207429"
                  className="transition-colors hover:text-gold-600"
                >
                  +91 9482207429
                </a>
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <SocialMedia />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
