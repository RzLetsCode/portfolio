// components/Audience.tsx
import styles from './Audience.module.css';

const audiences = [
  {
    label: 'Students',
    tag: 'Starting from zero',
    title: 'Start AI from scratch with a clear sequence.',
    desc: 'Learn foundations, tools, and projects in an order that feels manageable instead of chaotic.',
  },
  {
    label: 'Freshers',
    tag: 'Early projects',
    title: 'Turn your first projects into real portfolio assets.',
    desc: 'Focus on practical work that improves GitHub and resume strength for internships and entry-level roles.',
  },
  {
    label: 'Career switchers',
    tag: 'Changing tracks',
    title: 'Move into AI with a realistic transition plan.',
    desc: 'Understand your gaps, pick the right starting point, and reposition your background for AI roles.',
  },
  {
    label: 'Builders',
    tag: 'Leveling up',
    title: 'Refine projects to feel production-minded.',
    desc: 'Improve architecture clarity, documentation, and explanations so projects look recruiter-ready.',
  },
];

export default function Audience() {
  return (
    <section className={styles.section}>
      <div className={styles.backGlow} aria-hidden="true" />

      <header className={styles.sectionHead}>
        <p className={styles.sectionEyebrow}>Who this is for</p>
        <h2 className={styles.sectionTitle}>
          Built for people who want direction, not just information.
        </h2>
        <p className={styles.sectionSub}>
          If you are tired of random AI videos and want a clear path from basics to
          resume-ready projects and interviews, this is for you.
        </p>
      </header>

      <div className={styles.audienceGrid}>
        {audiences.map((a, idx) => (
          <article
            key={a.label}
            className={`${styles.audCard} ${
              idx % 2 === 0 ? styles.audCardRaised : ''
            }`}
          >
            <div className={styles.accent} aria-hidden="true" />

            <div className={styles.audHeader}>
              <span className={styles.audLabel}>{a.label}</span>
              <span className={styles.audTag}>{a.tag}</span>
            </div>

            <h3 className={styles.audTitle}>{a.title}</h3>
            <p className={styles.audDesc}>{a.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
