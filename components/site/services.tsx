'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Code2,
  BrainCircuit,
  Workflow,
  Hospital,
  LayoutDashboard,
  ArrowUpRight,
} from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Fast, responsive, SEO-optimized websites that make a strong first impression.',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Tailored web applications engineered to fit your exact workflows and scale with you.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Solutions',
    desc: 'Intelligent features powered by machine learning and large language models.',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    desc: 'Streamline repetitive tasks with automated pipelines and integrations.',
  },
  {
    icon: Hospital,
    title: 'Healthcare Solutions',
    desc: 'Bilingual management systems for doctors, departments, and daily operations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboards',
    desc: 'Powerful control panels with clean UX for managing your data and operations.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
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
            What We Do
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Services for{' '}
            <span className="gradient-text">every stage</span> of your growth
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-muted-foreground sm:text-lg"
          >
            From a single landing page to enterprise-grade automation, we cover
            the full spectrum of modern software.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/[0.06]"
            >
              {/* Soft animated border on hover */}
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              </div>

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50">
                  <service.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600" />
              </div>

              <h3 className="mt-5 font-display text-base font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
