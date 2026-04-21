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
            <strong>Learn AI.</strong>
            <br />
            <strong>Build real projects.</strong>
            <br />
            <strong>Get career-ready.</strong>
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
            <div>
              <p className={styles.heroSideEyebrow}>What learners actually get</p>
              <h3 className={styles.heroSideTitle}>A real path, not just videos</h3>
            </div>
            <span className={styles.heroSideChip}>LIVE PLATFORM</span>
          </div>

          <ul className={styles.heroSideList}>
            <li>
              <h4>Roadmaps with real sequence</h4>
              <p>
                Move from “I&apos;m lost in AI” to a clear order of skills, topics, and
                milestones that fit your stage.
              </p>
            </li>
            <li>
              <h4>Projects that truly count</h4>
              <p>
                Build systems you can ship to GitHub, break down in interviews, and
                keep upgrading.
              </p>
            </li>
            <li>
              <h4>Career-focused mentorship</h4>
              <p>
                Get help with pivots, profile positioning, and production-minded
                reviews.
              </p>
            </li>
            <li>
              <h4>Connected learning ecosystem</h4>
              <p>
                Website, GitHub, blog, and YouTube aligned into one narrative.
              </p>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
