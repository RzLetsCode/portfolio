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
