import styles from './Projects.module.css';

const projects = [
  {
    label: 'Beginner-friendly',
    title: 'Personal Learning Agent',
    desc: 'Build your own AI study assistant around retrieval and contextual responses.',
    learn: 'RAG flow, prompt design, UI thinking',
    best: 'first serious AI project',
    value: 'strong portfolio talking point',
  },
  {
    label: 'Resume-focused',
    title: 'AI Resume Matcher',
    desc: 'Create a system that maps resumes to job needs so you think in terms of impact, not only models.',
    learn: 'text matching, scoring, practical ML thinking',
    best: 'resume and internship positioning',
    value: 'shows problem-solving on real hiring problems',
  },
  {
    label: 'Portfolio polish',
    title: 'Production Review Upgrade',
    desc: 'Take an existing project and upgrade structure, docs, and explanation until it feels production-minded.',
    learn: 'repo quality, documentation, architecture clarity',
    best: 'students with existing projects',
    value: 'improves how hiring managers read your work',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionEyebrow}>Project ecosystem</div>
        <h2 className={styles.sectionTitle}>Learn by building what actually helps your career.</h2>
        <p className={styles.sectionSub}>Each project is designed to teach real skills and give you something concrete to show on GitHub and in interviews.</p>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.projCard}>
            <div className={styles.projLabel}>{p.label}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.projMeta}>
              <div><span>Learn </span><strong>{p.learn}</strong></div>
              <div><span>Best for </span><strong>{p.best}</strong></div>
              <div><span>Career value </span><strong>{p.value}</strong></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}