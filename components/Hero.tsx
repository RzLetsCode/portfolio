// components/Hero.tsx
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        {/* Left side: main copy */}
        <div className={styles.left}>
          <span className={styles.pill}>
            Built for students, freshers, and AI aspirants
          </span>

          <h1 className={styles.heroTitle}>
            Learn AI.
            <br />
            <span>Build real projects.</span>
            <br />
            Get career-ready.
          </h1>

          <p className={styles.heroSub}>
            A beginner-friendly platform for students, freshers, and career
            switchers who want clear AI roadmaps, portfolio-worthy projects, and
            structured direction toward internships and real AI roles.
          </p>

          <div className={styles.heroActions}>
            <Link
              href="#journey"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Start your AI journey
            </Link>
            <Link
              href="#projects"
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Explore project ecosystem
            </Link>
          </div>
        </div>

        {/* Right side: “what you get” card */}
        <aside className={styles.heroSide} aria-label="What learners get">
          <div className={styles.heroSideHead}>
            <h3>What learners actually get</h3>
            <span className={styles.heroSideChip}>LIVE PLATFORM</span>
          </div>
          <ul>
            <li>
              <strong>Roadmaps with real sequence</strong>
              <span>
                Move from “I&apos;m lost in AI” to a clear order of skills, topics,
                and milestones that fit your stage.
              </span>
            </li>
            <li>
              <strong>Projects that truly count</strong>
              <span>
                Build systems you can ship to GitHub, break down in interviews,
                and keep upgrading.
              </span>
            </li>
            <li>
              <strong>Career-focused mentorship</strong>
              <span>
                Get help with pivots, profile positioning, and production-minded
                reviews.
              </span>
            </li>
            <li>
              <strong>Connected learning ecosystem</strong>
              <span>
                Website, GitHub, blog, and YouTube aligned into one narrative.
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
