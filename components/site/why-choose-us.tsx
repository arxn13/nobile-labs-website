'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Boxes, Layers, GitBranch, LifeBuoy } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const stats = [
  {
    icon: Boxes,
    value: 'Custom',
    label: 'Custom Solutions',
    desc: 'Every project is built from scratch to fit your exact needs.',
  },
  {
    icon: Layers,
    value: 'Modern',
    label: 'Modern Technologies',
    desc: 'A current, battle-tested stack chosen for performance and longevity.',
  },
  {
    icon: GitBranch,
    value: 'End-to-End',
    label: 'End-to-End Development',
    desc: 'From discovery to deployment — one team, one coherent process.',
  },
  {
    icon: LifeBuoy,
    value: 'Ongoing',
    label: 'Ongoing Support',
    desc: 'We stay engaged after launch with maintenance and improvements.',
  },
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            What You Get
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Built right,{' '}
            <span className="gradient-text">built to last</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600">
                <stat.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div className="mt-5 font-display text-2xl font-semibold tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
