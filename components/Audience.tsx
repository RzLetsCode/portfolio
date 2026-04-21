// components/Audience.tsx
import styles from './Audience.module.css';

const audiences = [
  {
    label: 'Students',
    title: 'Start AI from scratch with a clear sequence.',
    desc: 'Learn foundations, tools, and projects in an order that feels manageable instead of chaotic.',
  },
  {
    label: 'Freshers',
    title: 'Turn your first projects into real portfolio assets.',
    desc: 'Focus on practical work that improves GitHub and resume strength for internships and entry-level roles.',
  },
  {
    label: 'Career switchers',
    title: 'Move into AI with a realistic transition plan.',
    desc: 'Understand your gaps, pick the right starting point, and reposition your background for AI roles.',
  },
  {
    label: 'Builders',
    title: 'Refine projects to feel production-minded.',
    desc: 'Improve architecture clarity, documentation, and explanations so projects look recruiter-ready.',
  },
];

export default function Audience() {
  return (
    <section className={styles.section}>
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
        {audiences.map((a) => (
          <article key={a.label} className={styles.audCard}>
            <p className={styles.audLabel}>{a.label}</p>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
