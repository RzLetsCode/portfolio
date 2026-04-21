import styles from './Journey.module.css';

const steps = [
  { num: '01', tag: 'From "Where do I even start?"', title: 'See the path end-to-end', desc: 'Get a zoomed-out view of the AI roadmap so you know what comes first, what can wait, and how concepts connect.', outcome: 'Outcome: calm clarity and a realistic starting point' },
  { num: '02', tag: 'From "I watched tutorials"', title: 'Learn from real-ish systems', desc: 'Study simplified versions of production-style systems: agents, RAG, workflows so you think in terms of data flow.', outcome: 'Outcome: confidence that you understand how things work in context' },
  { num: '03', tag: 'From "I built toy apps"', title: 'Ship projects that actually count', desc: 'Build projects you can push to GitHub, break down in an interview, and keep iterating on.', outcome: 'Outcome: visible proof of work on your GitHub and resume' },
  { num: '04', tag: 'Chasing every new tool', title: 'Choose tools with intent', desc: 'Pick a focused set of tools based on your current level and real job descriptions.', outcome: 'Outcome: a practical, believable tech stack for junior roles' },
  { num: '05', tag: 'From "I can not explain my work"', title: 'Tell a sharper career story', desc: 'Turn your background, choices, and projects into a narrative that recruiters can actually follow.', outcome: 'Outcome: a story that makes your AI transition feel intentional' },
  { num: '06', tag: 'From "I am learning alone"', title: 'Improve with honest feedback', desc: 'Use targeted feedback on your projects and profile to fix what is holding you back.', outcome: 'Outcome: faster progress with fewer blind spots and dead ends' },
];

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.sectionEyebrow}>Your AI journey</div>
        <h2 className={styles.sectionTitle}>Turn "I am lost in AI" into "I know what to do next."</h2>
        <p className={styles.sectionSub}>This is not a playlist of random videos. It is a guided path from confusion to a clear roadmap, solid projects, and a story that works in interviews.</p>
      </div>
      <div className={styles.journeyWrap}>
        <aside className={styles.journeyIntro}>
          <h3>What changes for you</h3>
          <p>Most learners start with too many tools, no sequence, half-finished projects, and no idea how to explain any of it to a recruiter.</p>
          <p>Inside code2career.ai, you move step by step - first you understand the path, then you learn with real systems, then you ship projects, refine your stack, fix your story, and keep improving with feedback.</p>
          <p>The result: less guessing, more building, and a portfolio that finally feels aligned with the AI roles you want.</p>
        </aside>
        <div className={styles.journeySteps}>
          {steps.map((s, i) => (
            <article key={s.num} className={styles.step} style={{ animationDelay: `${0.05 + i * 0.07}s` }}>
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <div className={styles.stepTag}>{s.tag}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                <span className={styles.outcome}>{s.outcome}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}