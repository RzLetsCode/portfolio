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
            <span className={styles.heroAccent}>Build Real AI Projects for Your Portfolio.</span>
            <br />
            <strong>Get Career-Ready for AI Roles.</strong>
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

        {/* Right side: "what you get" card */}
        <div className={styles.right}>
          <p className={styles.cardEyebrow}>What learners actually get</p>

          <h2 className={styles.cardTitle}>A real path, not just videos</h2>

          <span className={styles.liveBadge}>LIVE PLATFORM</span>

          <ul className={styles.cardList}>
            <li>
              <h3 className={styles.cardFeatureTitle}>Roadmaps with real sequence</h3>
              <p>Move from "I'm lost in AI" to a clear order of skills, topics, and milestones that fit your stage.</p>
            </li>
            <li>
              <h3 className={styles.cardFeatureTitle}>Projects that truly count</h3>
              <p>Build systems you can ship to GitHub, break down in interviews, and keep upgrading.</p>
            </li>
            <li>
              <h3 className={styles.cardFeatureTitle}>Career-focused mentorship</h3>
              <p>Get help with pivots, profile positioning, and production-minded reviews.</p>
            </li>
            <li>
              <h3 className={styles.cardFeatureTitle}>Connected learning ecosystem</h3>
              <p>Website, GitHub, blog, and YouTube aligned into one narrative.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
