// components/Hero.tsx
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        {/* Left side: main enterprise copy */}
        <div className={styles.left}>
          <span className={styles.pill}>
            Built for Students, Freshers, and AI Engineering Aspirants
          </span>

          <h1 className={styles.heroTitle}>
            <strong>Learn AI.</strong>
            <br />
            <span className={styles.heroAccent}>Build Production AI Projects for Your Portfolio.</span>
            <br />
            <strong>Get Career-Ready for AI Roles.</strong>
          </h1>

          <p className={styles.heroSub}>
            A comprehensive, beginner-friendly ecosystem for students, freshers, and tech
            professionals aiming to transition. Gain actionable AI roadmaps, build enterprise-ready 
            repositories, and receive production-minded mentorship to secure your next role.
          </p>

          <div className={styles.heroActions}>
            <Link
              href="#career-path"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Start your AI journey
            </Link>
            </div>        </div>

        {/* Right side: High-Converting Value Card */}
        <div className={styles.heroSide}>
          <div className={styles.heroSideHead}>
            <div>
              <p className={styles.heroSideEyebrow}>What Learners Actually Get</p>
              <h2 className={styles.heroSideTitle}>A Clear Execution Path—Not Just Video Playlists</h2>
            </div>
            <span className={styles.heroSideChip}>LIVE PLATFORM</span>
          </div>

          <ul className={styles.heroSideList}>
            <li>
              <h4>Structured AI Skill Sequences</h4>
              <p>
                Move confidently from <em className="text-cyan-400 not-italic font-medium">"I'm lost in AI"</em> to a clear, tactical order of technologies, frameworks, and engineering milestones tailored to your background.
              </p>
            </li>
            <li>
              <h4>Production-Grade Portfolios</h4>
              <p>
                Build complex, scalable architectures you can proudly ship to GitHub, deep-dive into during technical interviews, and continuously scale over time.
              </p>
            </li>
            <li>
              <h4>Enterprise-Minded Mentorship</h4>
              <p>
                Accelerate your career pivot with targeted profile optimization, resume keyword alignment, and deep-dive technical code reviews.
              </p>
            </li>
            <li>
              <h4>Unified Learning Ecosystem</h4>
              <p>
                Experience seamless integration across channels—our website, GitHub repos, dedicated tech blog, and YouTube channel form a singular narrative.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
