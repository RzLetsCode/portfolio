// components/Projects.tsx
import styles from './Projects.module.css';

const projects = [
  {
    label: 'Beginner-friendly',
    title: 'Personal Learning Agent',
    desc: 'Build your own AI study assistant around retrieval and contextual responses.',
    learn: 'RAG flow, prompt design, UI thinking',
    best: 'first serious AI project',
    value: 'strong portfolio talking point',
    badge: 'RAG + UX',
  },
  {
    label: 'Resume-focused',
    title: 'AI Resume Matcher',
    desc: 'Create a system that maps resumes to job needs so you think in terms of impact, not only models.',
    learn: 'text matching, scoring, practical ML thinking',
    best: 'resume and internship positioning',
    value: 'shows problem-solving on real hiring problems',
    badge: 'Hiring Insight',
  },
  {
    label: 'Portfolio polish',
    title: 'Production Review Upgrade',
    desc: 'Take an existing project and upgrade structure, docs, and explanation until it feels production-minded.',
    learn: 'repo quality, documentation, architecture clarity',
    best: 'students with existing projects',
    value: 'improves how hiring managers read your work',
    badge: 'Production Mindset',
  },
];

export default function Projects() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Project ecosystem</p>
        <h2 className={styles.title}>
          Learn by building what actually helps your career.
        </h2>
        <p className={styles.subtitle}>
          Each project is designed to teach real skills and give you something concrete
          to show on GitHub and in interviews.
        </p>
      </header>

      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.card}>
            <div className={styles.glow} aria-hidden="true" />
            <div className={styles.cardInner}>
              <div className={styles.cardHeader}>
                <span className={styles.label}>{p.label}</span>
                <span className={styles.badge}>{p.badge}</span>
              </div>

              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>

              <div className={styles.meta}>
                <div>
                  <p className={styles.metaLabel}>You&apos;ll learn</p>
                  <p className={styles.metaValue}>{p.learn}</p>
                </div>
                <div>
                  <p className={styles.metaLabel}>Best for</p>
                  <p className={styles.metaValue}>{p.best}</p>
                </div>
                <div>
                  <p className={styles.metaLabel}>Career value</p>
                  <p className={styles.metaValue}>{p.value}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
