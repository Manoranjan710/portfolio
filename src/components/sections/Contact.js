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
            Have a project in mind or just want to say hello? Drop me a message and
            I&apos;ll get back to you soon.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-5">
          <ScrollReveal direction="right" className="md:col-span-2 space-y-5">
            <div className="rounded-2xl border border-gold-100 bg-white p-6 shadow-card">
              <h3 className="text-lg font-bold text-ink-900">Contact details</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-700">
                <p>
                  <span className="font-semibold text-gold-700">Email</span>
                  <br />
                  manoranjan710@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-gold-700">Phone</span>
                  <br />
                  +91 9482207429
                </p>
              </div>
              <div className="mt-6">
                <SocialMedia />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={120} className="md:col-span-3">
            <form
              action="https://getform.io/f/754f2d1d-4dc1-425d-b186-c6a1fa49011d"
              method="POST"
              className="rounded-2xl border border-gold-100 bg-white p-6 shadow-card md:p-8"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-ink-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gold-200 bg-cream-50 px-4 py-2.5 text-ink-900 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-ink-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gold-200 bg-cream-50 px-4 py-2.5 text-ink-900 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-ink-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-lg border border-gold-200 bg-cream-50 px-4 py-2.5 text-ink-900 outline-none transition-colors focus:border-gold-400 focus:ring-2 focus:ring-gold-200"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-gold-500 to-gold-300 px-6 py-3 font-semibold text-white shadow-gold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold-lg"
              >
                Let&apos;s talk
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
