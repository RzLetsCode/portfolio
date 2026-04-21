// app/Hero.tsx
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>
          Built for students, freshers, and AI aspirants
        </p>

        <h1 className={styles.title}>
          <span>Learn AI.</span>
          <span>Build real projects.</span>
          <span>Get career-ready.</span>
        </h1>

        <p className={styles.subtitle}>
          A beginner-friendly platform for students, freshers, and career
          switchers who want clear AI roadmaps, portfolio-worthy projects, and
          structured direction toward internships and real AI roles.
        </p>

        <div className={styles.actions}>
          <Link href="#journey" className={styles.primaryCta}>
            Start your AI journey
          </Link>
          <Link href="#projects" className={styles.secondaryCta}>
            Explore project ecosystem
          </Link>
        </div>
      </div>
    </section>
  );
}