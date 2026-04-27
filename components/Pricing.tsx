'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, X, ArrowRight, Zap, Compass, Layers } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
  {
    badge: 'Starter',
    badgeAccent: false,
    name: 'Explore',
    tagline: 'For students just getting into AI.',
    duration: '3–6 months · self-paced',
    monthlyPrice: '\u20b90',
    annualPrice: '\u20b90',
    saveAmount: '\u20b90',
    monthlyCycle: '/ forever',
    annualCycle: '· one-time payment',
    priceNote: 'No credit card required',
    featured: false,
    icon: <Compass size={14} />,
    ctaLabel: 'Start learning',
    ctaHref: '/contact?plan=explore',
    ctaPrimary: false,
    features: [
      { label: 'Curated AI roadmap overview', included: true },
      { label: '2–3 guided project walkthroughs', included: true },
      { label: 'Access to public blogs & YouTube content', included: true },
      { label: 'Email support (best-effort basis)', included: true },
      { label: '1:1 mentorship sessions', included: false },
      { label: 'Portfolio & resume review', included: false },
    ],
  },
  {
    badge: 'Most Popular',
    badgeAccent: true,
    name: 'Career Focus',
    tagline: 'For freshers ready to build a real AI portfolio.',
    duration: '6-month structured track',
    monthlyPrice: '\u20b9499',
    annualPrice: '\u20b92,495',
    saveAmount: '\u20b9499',
    monthlyCycle: '/ month',
    annualCycle: '· one-time payment',
    priceNote: 'Billed monthly — cancel any time',
    featured: true,
    icon: <Zap size={14} />,
    ctaLabel: 'Apply for this plan',
    ctaHref: '/contact?plan=career-focus',
    ctaPrimary: true,
    features: [
      { label: 'Full step-by-step AI roadmap', included: true },
      { label: '2 portfolio-ready AI projects / month', included: true },
      { label: 'GitHub & resume review (monthly)', included: true },
      { label: 'Narrative & positioning feedback', included: true },
      { label: 'Priority email & async chat support', included: true },
      { label: '1:1 live mentorship sessions', included: false },
    ],
  },
  {
    badge: '1:1 Deep Dive',
    badgeAccent: false,
    name: 'Mentor Loop',
    tagline: 'For serious builders aiming at top AI roles.',
    duration: '3-month intensive loop',
    monthlyPrice: '\u20b91,999',
    annualPrice: '\u20b94,998',
    saveAmount: '\u20b9999',
    monthlyCycle: '/ month',
    annualCycle: '· one-time payment',
    priceNote: 'Billed monthly — cancel any time',
    featured: false,
    icon: <Layers size={14} />,
    ctaLabel: 'Book a call',
    ctaHref: '/contact?plan=mentor-loop',
    ctaPrimary: false,
    features: [
      { label: 'Everything in Career Focus', included: true },
      { label: '2\u00d7 60-min 1:1 sessions / month', included: true },
      { label: 'Code-level review on live AI projects', included: true },
      { label: 'Mock interviews & system design', included: true },
      { label: 'Targeted strategy for roles / companies', included: true },
      { label: 'Unlimited async chat support', included: true },
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.chip}>
            <Zap size={10} />
            Pricing & Plans
          </div>

          <h2 className={styles.heading}>
            Simple, <span>learner-first</span> pricing
          </h2>
          <p className={styles.subheading}>
            Start free. Upgrade only when you are serious about shipping
            portfolio-ready AI projects and landing real roles.
          </p>

          <div className={styles.toggleRow}>
            <span
              className={`${styles.toggleLabel} ${!isAnnual ? styles.active : ''}`}
            >
              Monthly
            </span>
            <button
              className={styles.toggleTrack}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle billing period"
            >
              <span
                className={`${styles.toggleThumb} ${
                  isAnnual ? styles.toggleThumbAnnual : ''
                }`}
              />
            </button>
            <span
              className={`${styles.toggleLabel} ${isAnnual ? styles.active : ''}`}
            >
             One-Time Access
            </span>
            {isAnnual && (
              <span className={styles.saveBadge}>Save up to ~25%</span>
            )}
          </div>

          <div className={styles.grid}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.card} ${
                  plan.featured ? styles.cardFeatured : ''
                }`}
              >
                <span
                  className={`${styles.planBadge} ${
                    plan.badgeAccent ? styles.planBadgeAccent : ''
                  }`}
                >
                  {plan.icon}
                  &nbsp;{plan.badge}
                </span>

                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>

                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={styles.priceCycle}>
                    {isAnnual ? plan.annualCycle : plan.monthlyCycle}
                  </span>
                </div>
                {/* <p className={styles.priceNote}>{plan.priceNote}</p> */}
                {/* REPLACE THE NOTE LINE WITH THIS CONDITIONAL: */}
{!isAnnual ? (
  <p className={styles.priceNote}>{plan.priceNote}</p>
) : (
  <p className={styles.priceNote}>&nbsp;</p> 
  /* Using &nbsp; (non-breaking space) keeps the card height consistent so it doesn't "jump" */
)}

                {isAnnual && plan.saveAmount !== '\u20b90' && (
                  <p className={styles.saveText}>
                    Save {plan.saveAmount} with one-time payment
                  </p>
                )}

                <div className={styles.divider} />

                <ul className={styles.featureList}>
                  {plan.features.map((f, index) => (
                    <li key={index} className={styles.featureItem} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      {f.included ? (
                        <Check
                          className={styles.featureIcon}
                          strokeWidth={2.5}
                          size={18}
                          color="#22d3ee"
                        />
                      ) : (
                        <X
                          className={`${styles.featureIcon} ${styles.featureIconMuted}`}
                          strokeWidth={2}
                          size={18}
                          color="#475569"
                        />
                      )}
                      <span
                        style={{
                          color: f.included ? '#f1f5f9' : '#475569',
                          fontSize: '0.875rem',
                          lineHeight: '1.25rem'
                        }}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`${styles.ctaBtn} ${
                    plan.ctaPrimary
                      ? styles.ctaBtnPrimary
                      : styles.ctaBtnSecondary
                  }`}
                >
                  {plan.ctaLabel}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.noteRow}>
            Not sure which plan fits you? Start with{' '}
            <strong style={{ color: '#f9fafb' }}>Explore</strong> — it is
            free forever.{' '}
            <Link href="/portfolio/contact">Reach out</Link> if you have questions.
          </p>
        </div>
      </div>
    </section>
  );
}
