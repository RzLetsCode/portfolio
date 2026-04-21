import type { Metadata } from 'next';
import './globals.css';
import Chatbot from './components/Chatbot';

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
      <body>{children}</body>
              <Chatbot />
    </html>
  );
}
