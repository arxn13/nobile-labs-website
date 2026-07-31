'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[120px]" />
      </div>

      {/* Animated grid background */}
      <div
        className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 50% at 50% 40%, black 40%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 50% at 50% 40%, black 40%, transparent 75%)',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 backdrop-blur-sm shadow-sm"
          >
            <Sparkles className="h-3 w-3 text-blue-600" />
            Udyam-Registered Micro Enterprise · Kerala, India
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Software that works.{' '}
            <span className="gradient-text">AI that scales.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg"
          >
            Nobile Labs builds custom software, AI-powered applications, business
            websites, and automation solutions for healthcare, startups, and
            growing businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
            >
              Explore Services
            </a>
          </motion.div>

          {/* Browser mockup */}
          <motion.div
            variants={fadeUp}
            className="mt-16 w-full max-w-4xl"
          >
            <BrowserMockup />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BrowserMockup() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    el.style.setProperty('--px', `${dx * 6}px`);
    el.style.setProperty('--py', `${dy * 6}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.setProperty('--px', '0px');
          ref.current.style.setProperty('--py', '0px');
        }
      }}
      className="group relative"
      style={{ perspective: '1000px' }}
    >
      {/* Browser frame */}
      <div
        className="glass-strong relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/[0.12] border border-slate-200/60"
        style={{
          transform:
            'translate3d(var(--px, 0px), var(--py, 0px), 0)',
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="ml-3 flex-1">
            <div className="mx-auto flex max-w-xs items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-muted-foreground">
              nobilelabs.com
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="relative h-[280px] bg-slate-50 sm:h-[340px]">
          {/* Sidebar */}
          <div className="absolute left-0 top-0 flex h-full w-14 flex-col items-center gap-4 border-r border-slate-200/70 py-4 sm:w-16">
            <div className="h-8 w-8 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20" />
            <div className="h-6 w-6 rounded-md bg-slate-200" />
            <div className="h-6 w-6 rounded-md bg-slate-200" />
            <div className="h-6 w-6 rounded-md bg-slate-200" />
            <div className="mt-auto h-6 w-6 rounded-md bg-slate-200" />
          </div>

          {/* Main content */}
          <div className="absolute left-14 top-0 right-0 h-full p-4 sm:left-16 sm:p-6">
            {/* Top bar */}
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <div className="h-2.5 w-24 rounded bg-slate-200" />
                <div className="h-2 w-16 rounded bg-slate-200" />
              </div>
              <div className="h-7 w-20 rounded-lg bg-blue-500/15 ring-1 ring-blue-500/20" />
            </div>

            {/* Cards grid */}
            <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { w: 'w-full', h: 'h-16 sm:h-20', accent: true },
                { w: 'w-full', h: 'h-16 sm:h-20', accent: false },
                { w: 'w-full', h: 'h-16 sm:h-20', accent: false },
              ].map((c, i) => (
                <div
                  key={i}
                  className={`rounded-xl border border-slate-200/70 ${c.h} ${
                    c.accent ? 'bg-blue-500/[0.06]' : 'bg-white'
                  }`}
                >
                  <div className="flex h-full flex-col justify-end p-2.5">
                    <div className="h-1.5 w-10 rounded bg-slate-300" />
                    <div className="mt-1.5 h-2.5 w-14 rounded bg-slate-200" />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart placeholder */}
            <div className="mt-3 rounded-xl border border-slate-200/70 bg-white p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 rounded bg-slate-200" />
                <div className="h-2 w-8 rounded bg-blue-500/30" />
              </div>
              <div className="mt-3 flex h-16 items-end gap-1.5 sm:h-20">
                {[40, 65, 45, 80, 55, 90, 60, 75, 50, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={viewportOnce}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                    className={`flex-1 rounded-sm ${
                      i === 5
                        ? 'bg-blue-500/50'
                        : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating UI elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-1/4 hidden rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-medium text-slate-600">
            Build passed
          </span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-4 bottom-1/4 hidden rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md sm:block"
      >
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500" />
          <span className="text-xs font-medium text-slate-600">
            API · 200ms
          </span>
        </div>
      </motion.div>
    </div>
  );
}
