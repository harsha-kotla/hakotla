import { SpaceShell, spaceLink } from "./components/SpaceShell";

export default function Home() {
  return (
    <SpaceShell>
      <main className="mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="space-y-12">
          <header className="space-y-5">
            <p className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90">
              Portfolio
            </p>
            <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.25)] sm:text-6xl sm:leading-[1.05]">
              Harsha Kotla
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Incoming{" "}
              <span className="font-semibold text-white">
                Electrical Engineering & Computer Sciences
              </span>{" "}
              student at{" "}
              <span className="font-semibold text-amber-200/95">
                UC Berkeley
              </span>
              .
            </p>
          </header>

          {/* <section className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_0_1px_rgba(167,139,250,0.08),0_24px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-8">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/90">
                Education
              </h2>
              <ul className="list-disc space-y-2.5 pl-5 text-base leading-relaxed text-slate-300 sm:text-lg">
                <li>
                  Bellarmine College Preparatory — Aug 2022–June 2026. GPA: 4.48
                  (weighted) / 3.98 (unweighted).
                </li>
                <li>
                  Introduction to Statistics and Data Science, Wharton — Summer
                  2025, A+.
                </li>
                <li>
                  Data Abstraction and Structures; Intermediate and Beginning
                  Programming Methodologies in C++ — De Anza College — Summers
                  2023–2025, A+.
                </li>
                <li>
                  Introduction to C++ — Stanford Pre-Collegiate Institute,
                  Summer 2023.
                </li>
              </ul>
            </section> */}

          <section className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_24px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
              Work experience
            </h2>
            <ul className="list-disc space-y-3.5 pl-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              <li>
                <span className="font-medium text-slate-100">
                  Machine Learning Research Intern
                </span>
                , AlphaPro.ai — Aug 2025–present. Sentiment analysis research to
                support more informed financial decisions.
              </li>
              <li>
                <span className="font-medium text-slate-100">
                  Software Engineering Intern
                </span>
                , Link.Me — May–Aug 2025. Built and optimized web features for
                performance and UX.
              </li>
              <li>
                <span className="font-medium text-slate-100">
                  Web Development Intern
                </span>
                , Random Math — Jun–Aug 2024. Shipped Random Math Flash
                (Next.js, JavaScript, Python) for AMC/AIME prep.
              </li>
              {/* <li>
                  <span className="font-medium text-slate-100">
                    Teaching assistant
                  </span>{" "}
                  — AP Calculus BC (Aug 2025–present); Precalculus Honors
                  (Aug–Dec 2024). Grading, feedback, and student support.
                </li> */}
            </ul>
          </section>

          <section className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_0_1px_rgba(251,191,36,0.1),0_24px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">
              Research & projects
            </h2>
            <ul className="list-disc space-y-3.5 pl-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              <li>
                <a
                  href="https://wordmate.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium text-white ${spaceLink}`}
                >
                  WordMate
                </a>{" "}
                — AI vocabulary app (30k+ users)
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2510.14855"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium text-white ${spaceLink}`}
                >
                  A Multi-Task Deep Learning Framework for Skin Lesion Classification, ABCDE Feature Quantification and Evolution Simulation</a> (arXiv preprint),
                under mentorship of Dr. Hannah Rana.
              </li>
              <li>
                <a
                  href="https://www.curieuxacademicjournal.com/_files/ugd/99711c_b97b0f2ef3e74aceb8b0d6b3a12700cb.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-medium text-white ${spaceLink}`}
                >
                  Analyzing Twitter Sentiment and Its Impact on Tesla Stock Movements Through Time-Series Modeling
                </a>{" "}
                - published in Curieux Academic Journal (p. 180).
              </li>
              <li>
                <span className="font-medium text-slate-100">Metfyre</span> —
                AI study platform (Next.js): adaptive learning, flashcards,
                active recall, content segmentation.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </SpaceShell>
  );
}
