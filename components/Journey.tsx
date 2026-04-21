// components/Journey.tsx
import styles from './Journey.module.css';

const steps = [
  {
    num: '01',
    tag: 'From "Where do I even start?"',
    title: 'See the path end-to-end',
    desc: 'Get a zoomed-out view of the AI roadmap so you know what comes first, what can wait, and how concepts connect.',
    outcome: 'Outcome: calm clarity and a realistic starting point',
  },
  {
    num: '02',
    tag: 'From "I watched tutorials"',
    title: 'Learn from real-ish systems',
    desc: 'Study simplified versions of production-style systems: agents, RAG, workflows so you think in terms of data flow.',
    outcome: 'Outcome: confidence that you understand how things work in context',
  },
  {
    num: '03',
    tag: 'From "I built toy apps"',
    title: 'Ship projects that actually count',
    desc: 'Build projects you can push to GitHub, break down in an interview, and keep iterating on.',
    outcome: 'Outcome: visible proof of work on your GitHub and resume',
  },
  {
    num: '04',
    tag: 'Chasing every new tool',
    title: 'Choose tools with intent',
    desc: 'Pick a focused set of tools based on your current level and real job descriptions.',
    outcome: 'Outcome: a practical, believable tech stack for junior roles',
  },
  {
    num: '05',
    tag: 'From "I can not explain my work"',
    title: 'Tell a sharper career story',
    desc: 'Turn your background, choices, and projects into a narrative that recruiters can actually follow.',
    outcome: 'Outcome: a story that makes your AI transition feel intentional',
  },
  {
    num: '06',
    tag: 'From "I am learning alone"',
    title: 'Improve with honest feedback',
    desc: 'Use targeted feedback on your projects and profile to fix what is holding you back.',
    outcome: 'Outcome: faster progress with fewer blind spots and dead ends',
  },
];

export default function Journey() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your AI journey</p>
        <h2 className={styles.title}>
          Turn “I am lost in AI” into “I know what to do next.”
        </h2>
        <p className={styles.subtitle}>
          This is not a playlist of random videos. It is a guided path from
          confusion to a clear roadmap, solid projects, and a story that works
          in interviews.
        </p>
      </header>

      <div className={styles.timeline}>
        {steps.map((s) => (
          <article key={s.num} className={styles.step}>
            <div className={styles.stepNumber}>{s.num}</div>
            <div className={styles.stepBody}>
              <p className={styles.stepTag}>{s.tag}</p>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
              <p className={styles.stepOutcome}>{s.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
