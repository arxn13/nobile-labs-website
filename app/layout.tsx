import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nobilelabs.com'),
  title: {
    default: 'Nobile Labs — Software that works. AI that scales.',
    template: '%s | Nobile Labs',
  },
  description:
    'Nobile Labs builds custom software, AI-powered applications, business websites, and automation solutions for healthcare, startups, and growing businesses. Udyam-registered, based in Kerala, India.',
  keywords: [
    'Nobile Labs',
    'software development Kerala',
    'AI solutions India',
    'hospital software',
    'business automation',
    'custom web applications',
    'Next.js development',
    'FastAPI',
    'Udyam registered',
    'admin dashboards',
  ],
  authors: [{ name: 'Nobile Labs' }],
  creator: 'Nobile Labs',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nobilelabs.com',
    siteName: 'Nobile Labs',
    title: 'Nobile Labs — Building Modern Software Solutions',
    description:
      'We build websites, AI-powered applications, business automation solutions, and custom software for startups, healthcare institutions, and enterprises.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
        width: 1200,
        height: 630,
        alt: 'Nobile Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nobile Labs — Building Modern Software Solutions',
    description:
      'We build websites, AI-powered applications, business automation solutions, and custom software.',
    images: ['https://bolt.new/static/og_default.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
