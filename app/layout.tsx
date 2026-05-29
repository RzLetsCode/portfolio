import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Chatbot from '../components/Chatbot';
import Script from 'next/script';

// Locally hosted font via next/font — eliminates render-blocking and CLS
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'code2career_ai | Defining Careers of the Future.',
  description:
    'Master AI engineering, RAG pipelines, and next-gen tech skills. Get structured roadmaps, portfolio-ready projects, and direct career guidance.',
  keywords: [
    'AI roadmap for students',
    'AI portfolio projects for freshers',
    'learn AI for beginners',
    'AI mentorship for career switchers',
    'code2career ai',
    'AI career guidance India',
    'AI learning platform',
    'machine learning for freshers',
    'AI internship preparation',
    'generative AI projects',
  ],
  authors: [{ name: 'code2career_ai', url: 'https://code2careerai.com' }],
  creator: 'code2career_ai',
  metadataBase: new URL('https://code2careerai.com'),
  alternates: {
    canonical: 'https://code2careerai.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://code2careerai.com/',
    siteName: 'code2career_ai',
    title: 'code2career_ai | Defining Careers of the Future.',
    description:
      'Structured AI roadmaps, portfolio-ready projects, and mentorship targeting real enterprise AI roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'code2career_ai - Defining Careers of the Future.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'code2career_ai | Defining Careers of the Future.',
    description:
      'AI roadmaps, portfolio projects, and mentorship for entering next-gen technology careers.',
    images: ['/og-image.png'],
    creator: '@code2careerai',
  },
  verification: {
    google: '',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D3YRC6F4MZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D3YRC6F4MZ');
          `}
        </Script>
        <Chatbot />
        {children}
      </body>
    </html>
  );
}
