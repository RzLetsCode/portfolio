import type { Metadata } from 'next';
import './globals.css';
import Chatbot from '../components/Chatbot';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'code2career_ai | Where boundaries break, breakthroughs happen .....',
  description: 'Enterprise AI Architect specializing in Snowflake, generative AI, and production-grade data platforms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CXR5JD8BF9"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CXR5JD8BF9');
          `}
        </Script>
      </head>
      <body>{children}</body>
            <Chatbot />
    </html>
  );
}
