import type { Metadata } from 'next';
import './globals.css';
import Chatbot from '../components/Chatbot';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'code2career_ai | Learn AI, Build Real Projects & Get Career-Ready',
  description:
    'A beginner-friendly AI learning platform for students, freshers, and career switchers. Get structured AI roadmaps, portfolio-ready projects, and mentorship for real AI internships and roles.',
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
    title: 'code2career_ai | Learn AI, Build Real Projects & Get Career-Ready',
    description:
      'Structured AI roadmaps, portfolio-ready projects, and mentorship for students, freshers, and career switchers targeting real AI roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'code2career_ai - AI learning platform for students and freshers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'code2career_ai | Learn AI, Build Real Projects & Get Career-Ready',
    description:
      'AI roadmaps, portfolio projects, and mentorship for students and freshers entering AI careers.',
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D3YRC6F4MZ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D3YRC6F4MZ');
          `}
        </Script>
      </head>
      <body>{children}</body>
      <Chatbot />
    </html>
  );
}
