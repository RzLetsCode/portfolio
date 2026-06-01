import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | code2career_ai',
  description: 'Terms of Service for code2career_ai. Please read these terms carefully before using our platform.',
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: '#f9fafb' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(51,65,85,0.5)', padding: '0 2rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '1rem', textDecoration: 'none' }}>&lt;&gt; code2career_ai</Link>
      </nav>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 1.5rem 6rem', lineHeight: 1.8, color: '#cbd5e1' }}>
        <h1 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: '#f9fafb', marginBottom: '0.5rem' }}>Terms of Service</h1>
        <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '2.5rem' }}>Last updated: June 1, 2026</p>

        {[
          { heading: '1. Acceptance of Terms', body: 'By accessing or using code2career_ai (code2careerai.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.' },
          { heading: '2. Services', body: 'code2career_ai provides AI career mentorship, learning roadmaps, project guidance, and portfolio review services. Services are provided as described at the time of purchase or registration.' },
          { heading: '3. Subscriptions and Payments', body: 'Paid plans are billed monthly. You may cancel your subscription at any time. Cancellations take effect at the end of the current billing period. We do not offer refunds for partial months.' },
          { heading: '4. User Conduct', body: 'You agree not to misuse the platform, share access credentials, copy or redistribute proprietary content, or engage in any behaviour that disrupts our services or community.' },
          { heading: '5. Intellectual Property', body: 'All content on code2career_ai including roadmaps, blog posts, project templates, and course materials is owned by code2career_ai. You may not reproduce or distribute this content without written permission.' },
          { heading: '6. Disclaimer', body: 'Our mentorship and guidance is provided in good faith. We do not guarantee specific career outcomes such as job placement or salary. Individual results depend on effort, skill, and market conditions.' },
          { heading: '7. Limitation of Liability', body: 'code2career_ai is not liable for any indirect, incidental, or consequential damages arising from use of our platform or services.' },
          { heading: '8. Changes to Terms', body: 'We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance of the updated Terms.' },
          { heading: '9. Contact', body: 'For questions about these Terms, please contact us via the contact page at code2careerai.com/contact.' },
        ].map((section) => (
          <div key={section.heading} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f9fafb', marginBottom: '0.5rem' }}>{section.heading}</h2>
            <p style={{ fontSize: '0.95rem' }}>{section.body}</p>
          </div>
        ))}

        <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
          <Link href="/privacy" style={{ color: '#22d3ee', fontSize: '0.875rem', textDecoration: 'underline' }}>Privacy Policy</Link>
          <Link href="/contact" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'underline' }}>Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
