'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  MapPin,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone') || 'Not provided';
    const details = data.get('details');

    const subject = encodeURIComponent(`Project Quote Request — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nProject Details:\n${details}`
    );

    window.location.href = `mailto:nobilelabs@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Let&rsquo;s build{' '}
            <span className="gradient-text">something great</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-muted-foreground sm:text-lg"
          >
            Tell us about your project and we&rsquo;ll get back to you with a
            plan within 24 hours.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-5"
        >
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-sm text-muted-foreground">
                    Kerala, India
                  </div>
                </div>
              </div>
            </div>

            <a
              href="mailto:nobilelabs@gmail.com"
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">
                    nobilelabs@gmail.com
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/company/nobile-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">
                    linkedin.com/company/nobile-labs
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/919037009185"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-emerald-500/20 bg-emerald-50 p-5 transition-colors hover:bg-emerald-100"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-100/60 text-emerald-600">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">
                    Chat with us directly
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Phone
              </label>
              <input
                name="phone"
                type="tel"
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                placeholder="Optional"
              />
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Project Details
              </label>
              <textarea
                required
                name="details"
                rows={4}
                className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                placeholder="Tell us about your project, timeline, and goals..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <a
                href="mailto:nobilelabs@gmail.com?subject=Schedule%20a%20Consultation"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
              >
                <CalendarClock className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                Schedule a Consultation
              </a>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
              >
                <CheckCircle2 className="h-4 w-4" />
                Your email client should now be open. We&rsquo;ll get back to you
                within 24 hours.
              </motion.div>
            )}

            <p className="mt-4 text-center text-xs text-muted-foreground">
              We typically respond within 24 hours.
            </p>
          </motion.form>
        </motion.div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href="https://wa.me/919037009185"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.5} />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/30" />
      </a>
    </section>
  );
}
