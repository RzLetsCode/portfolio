// components/Mentorship.tsx
'use client';

import { useState } from 'react';
import styles from './Mentorship.module.css';
import { ChevronRight } from 'lucide-react';

const mentorshipSteps = [
  {
    num: 'A',
    title: 'Career Pivot Audit',
    desc: 'A 30-minute high-impact session to map your background to a 3-month actionable AI plan.',
    tools: ['Personalized Roadmap'],
    bullets: ['Kill the tutorial hell confusion.', 'Focus only on what the market needs.'],
  },
  {
    num: 'B',
    title: 'AI-Optimized Narrative',
    desc: 'Transforming your LinkedIn and Resume to pass the specific filters of modern AI firms.',
    tools: ['ATS Mastery', 'Storytelling'],
    bullets: ['Highlight RAG & Agentic expertise.', 'Fix mistakes that block shortlisting.'],
  },
  {
    num: 'C',
    title: 'Production Code Review',
    desc: 'Code-level scrutiny of your GitHub repos. We ensure your projects look like professional work.',
    tools: ['Code Quality', 'Architecture'],
    bullets: ['Make your projects recruiter-ready.', 'Validate scalability and security.'],
  },
];

export default function MentorshipSection() {
  const [open, setOpen] = useState(true);

  return (
    <section id="mentorship" className={styles.section}>
      <div className={styles.shell}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={styles.header}
        >
          <div>
            <div className={styles.chip}>Direct Results</div>
            <h3 className={styles.title}>Career Strategy Mentorship</h3>
            <p className={styles.subtitle}>
              Designed for students, freshers, and builders who want a clear,
              honest view of where they stand and what to do next.
            </p>
          </div>
          <div
            className={`${styles.iconWrap} ${open ? styles.iconOpen : ''}`}
          >
            <ChevronRight className={styles.icon} />
          </div>
        </button>

        <div className={`${styles.body} ${open ? styles.bodyOpen : ''}`}>
          <div className={styles.grid}>
            {mentorshipSteps.map((step) => (
              <article key={step.num} className={styles.card}>
                <div className={styles.cardNumber}>{step.num}</div>
                <h4 className={styles.cardTitle}>{step.title}</h4>
                <p className={styles.cardDesc}>{step.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.toolRow}>
                    {step.tools.map((t) => (
                      <span key={t} className={styles.toolChip}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <ul className={styles.bulletList}>
                    {step.bullets.map((b) => (
                      <li key={b} className={styles.bulletItem}>
                        <span className={styles.bulletDot} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
