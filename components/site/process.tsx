'use client';

import { motion } from 'framer-motion';
import {
  Search,
  PenTool,
  Code2,
  TestTube,
  Rocket,
  LifeBuoy,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const steps = [
  { icon: Search, title: 'Discover', desc: 'We dig into your goals, users, and constraints to define the right scope.' },
  { icon: PenTool, title: 'Design', desc: 'Wireframes and polished interfaces crafted for clarity and delight.' },
  { icon: Code2, title: 'Develop', desc: 'Clean, modular code built with a modern stack and regular reviews.' },
  { icon: TestTube, title: 'Test', desc: 'Rigorous QA across devices and edge cases before anything ships.' },
  { icon: Rocket, title: 'Deploy', desc: 'Smooth, containerized rollouts with monitoring from day one.' },
  { icon: LifeBuoy, title: 'Support', desc: 'Ongoing maintenance, updates, and improvements after launch.' },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
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
            How We Work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            A clear path from{' '}
            <span className="gradient-text">idea to launch</span>
          </motion.h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute left-0 right-0 top-7 h-px bg-slate-200" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute left-0 top-7 h-px origin-left bg-gradient-to-r from-blue-500/60 to-blue-500/10"
              style={{ width: '100%' }}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-6 gap-4"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative flex flex-col items-center"
                >
                  {/* Node */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-blue-600">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-sm font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative">
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-slate-200" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-8"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative flex items-start gap-6"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-xs font-semibold text-blue-600">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-1 font-display text-base font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
