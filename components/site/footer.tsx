import Image from 'next/image';
import { Linkedin, Mail, Github, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/1000468097_(1).jpg"
                  alt="Nobile Labs logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-base font-semibold tracking-tight">
                Nobile<span className="text-blue-600"> Labs</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Building modern software solutions from Kerala, India. AI,
              automation, and custom development for growing businesses.
            </p>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://nobilelabs.com"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  Website
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/nobile-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nobilelabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nobilelabs@gmail.com"
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-blue-600"
                >
                  <Mail className="h-4 w-4" />
                  nobilelabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Nobile Labs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Udyam-Registered Micro Enterprise
          </p>
        </div>
      </div>
    </footer>
  );
}
