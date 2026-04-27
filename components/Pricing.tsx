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
    monthlyPrice: '\u20b90',
    annualPrice: '\u20b90',
    cycle: '/ forever',
    priceNote: 'No credit card required',
    featured: false,
    icon: <Compass size={14} />,
    ctaLabel: 'Start learning',
    ctaHref: '/contact?plan=explore',
    ctaPrimary: false,
    features: [
      { label: 'Curated AI roadmap overview', included: true },
      { label: '2–3 guided project walkthroughs where you can follow along and understand how to build and deploy a simple AI project.', included: true },
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
    monthlyPrice: '\u20b9499',
    annualPrice: '\u20b9299',
    cycle: '/ month',
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
    monthlyPrice: '\u20b91,999',
    annualPrice: '\u20b9999',
    cycle: '/ month',
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
          {/* Eyebrow */}
          <div className={styles.chip}>
            <Zap size={10} />
            Pricing & Plans
          </div>

          {/* Headline */}
          <h2 className={styles.heading}>
            Simple, <span>learner-first</span> pricing
          </h2>
          <p className={styles.subheading}>
            Start free. Upgrade only when you are serious about shipping
            portfolio-ready AI projects and landing real roles.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className={styles.toggleRow}>
            <span
              className={`${styles.toggleLabel} ${
                !isAnnual ? styles.active : ''
              }`}
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
              className={`${styles.toggleLabel} ${
                isAnnual ? styles.active : ''
              }`}
            >
              Complete Course
            </span>
            {isAnnual && (
              <span className={styles.saveBadge}>Save Up to ~50%</span>
            )}
          </div>

          {/* Cards */}
          <div className={styles.grid}>
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`${styles.card} ${
                  plan.featured ? styles.cardFeatured : ''
                }`}
              >
                {/* Badge */}
                <span
                  className={`${styles.planBadge} ${
                    plan.badgeAccent ? styles.planBadgeAccent : ''
                  }`}
                >
                  {plan.icon}
                  &nbsp;{plan.badge}
                </span>

                {/* Name */}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planTagline}>{plan.tagline}</p>

                {/* Price */}
                <div className={styles.priceRow}>
                  <span className={styles.priceAmount}>
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={styles.priceCycle}>{plan.cycle}</span>
                </div>
                <p className={styles.priceNote}>{plan.priceNote}</p>

                <div className={styles.divider} />

                {/* Features */}
                <ul className={styles.featureList}>
                  {plan.features.map((f) => (
                    <li key={f.label} className={styles.featureItem}>
                      {f.included ? (
                        <Check
                          className={styles.featureIcon}
                          strokeWidth={2.5}
                        />
                      ) : (
                        <X
                          className={`${styles.featureIcon} ${styles.featureIconMuted}`}
                          strokeWidth={2}
                        />
                      )}
                      <span
                        style={{
                          color: f.included ? undefined : '#475569',
                        }}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
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

          {/* Footer note */}
          <p className={styles.noteRow}>
            Not sure which plan fits you? Start with{' '}
            <strong style={{ color: '#f9fafb' }}>Explore</strong> — it is
            free forever.{' '}
            <a href="/portfolio/contact">Reach out</a> if you have questions.
          </p>
        </div>
      </div>
    </section>
  );
}
