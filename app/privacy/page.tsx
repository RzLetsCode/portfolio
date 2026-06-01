import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | code2career_ai',
  description: 'Privacy Policy for code2career_ai. Learn how we collect, use, and protect your personal information.',
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>&lt;&gt; code2career_ai</Link>
      </nav>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem 6rem', lineHeight: 1.8, color: '#cbd5e1' }}>
        <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f9fafb', marginBottom: '0.5rem' }}>Privacy Policy</h1>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '2.5rem' }}>Last updated: June 1, 2026</p>

        {[
          { heading: '1. Information We Collect', body: 'When you fill in the contact form on our website, we collect your name, email address, phone number (optional), and the message you provide. We use this information solely to respond to your inquiry and provide the services you request.' },
          { heading: '2. How We Use Your Information', body: 'We use the information you submit to: respond to your contact form submissions, provide mentorship and career guidance services you have requested, and send relevant updates about our platform (only if you opt in).' },
          { heading: '3. Cookies and Analytics', body: 'We use Google Analytics (GA4) to understand how visitors interact with our site. This data is anonymised and aggregated. We do not use tracking cookies for advertising. You can opt out of Google Analytics using the Google Analytics Opt-out Browser Add-on.' },
          { heading: '4. EmailJS', body: 'We use EmailJS to process contact form submissions. Your submission data is transmitted via EmailJS servers to deliver your message to us. EmailJS does not store your data permanently.' },
          { heading: '5. Third-Party Services', body: 'We link to third-party services including YouTube, LinkedIn, GitHub, and Hashnode. These services have their own privacy policies. We are not responsible for their data practices.' },
          { heading: '6. Data Retention', body: 'We retain contact form submissions only as long as necessary to respond to your inquiry and fulfil the services requested. We do not sell your personal data to third parties.' },
          { heading: '7. Your Rights', body: 'You have the right to access, correct, or request deletion of your personal data. To make a request, contact us at the email address provided on our contact page.' },
          { heading: '8. Contact', body: 'For privacy-related questions, please reach out via our contact page at code2careerai.com/contact.' },
        ].map((section) => (
          <div key={section.heading} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.5rem' }}>{section.heading}</h2>
            <p style={{ fontSize: '0.95rem' }}>{section.body}</p>
          </div>
        ))}

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
          <Link href="/terms" style={{ color: '#22d3ee', fontSize: '0.875rem', textDecoration: 'underline' }}>Terms of Service</Link>
          <Link href="/contact" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'underline' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
