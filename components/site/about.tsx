'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, MapPin, Cpu, Users } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

const highlights = [
  {
    icon: BadgeCheck,
    title: 'Udyam Registered',
    desc: 'Officially recognized Micro Enterprise under MSME, Government of India.',
  },
  {
    icon: MapPin,
    title: 'Kerala, India',
    desc: 'Proudly based in Kerala, serving clients across the globe.',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Modern development with AI, automation, and the latest web technologies.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    desc: 'Solutions built around your goals, with an ongoing partnership.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — Logo + story */}
          <div>
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            >
              A focused team building{' '}
              <span className="gradient-text">software that lasts</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Nobile Labs is a software company focused on building modern,
              reliable, and intelligent products. We combine clean engineering
              with thoughtful design to deliver software that drives real
              business outcomes — from AI-powered applications to hospital
              management systems and end-to-end business automation.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-muted-foreground"
            >
              As a Udyam-registered Micro Enterprise based in Kerala, India, we
              bring a global standard of development with a client-focused
              approach, ensuring every solution is secure, scalable, and built
              to last.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex items-center gap-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <Image
                  src="/1000468097_(1).jpg"
                  alt="Nobile Labs logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-display text-sm font-semibold">
                  Nobile Labs
                </div>
                <div className="text-sm text-muted-foreground">
                  Udyam-Registered Micro Enterprise
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — Highlight cards */}
          <motion.div
            variants={staggerContainer}
            className="grid gap-3 sm:grid-cols-2"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-blue-200 hover:shadow-md hover:shadow-blue-600/[0.06]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-600 transition-colors group-hover:border-blue-200 group-hover:bg-blue-50">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
