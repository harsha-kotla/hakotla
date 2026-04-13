import Link from "next/link";
import { SpaceShell, spaceLink } from "../components/SpaceShell";

export default function Blog() {
  return (
    <SpaceShell>
      <main className="mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-20">
        <div className="space-y-10">
          <header className="space-y-5">
            <p className="inline-flex rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-violet-300/90">
              Writing
            </p>
            <h1 className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent drop-shadow-[0_0_35px_rgba(167,139,250,0.22)] sm:text-5xl sm:leading-[1.08]">
              Blog
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              Notes and updates - mostly on AI, products, and things I am building.
            </p>
          </header>

          <section className="rounded-2xl border border-white/10 bg-slate-950/50 p-6 shadow-[0_0_0_1px_rgba(167,139,250,0.1),0_24px_60px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-8">
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              Longer posts will live here over time. For now, see{" "}
              <Link
                href="https://wordmate.app/blog"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium text-white ${spaceLink}`}
              >
                WordMate&apos;s blog
              </Link>{" "}
              for product writing and updates.
            </p>
          </section>
        </div>
      </main>
    </SpaceShell>
  );
}
