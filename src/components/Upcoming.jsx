import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { upcoming } from '../data.js';

function Preview() {
  return (
    <div
      className="relative min-h-[16rem] overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 25% 20%, rgba(6,182,212,0.3), transparent 55%), radial-gradient(circle at 80% 85%, rgba(16,185,129,0.25), transparent 55%), var(--bg-deep)',
      }}
    >
      <div className="absolute inset-6 flex flex-col gap-3 rounded-2xl border border-white/10 p-4 transition-transform duration-500 group-hover:scale-[1.02]" style={{ background: 'rgba(3,7,18,0.6)' }}>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
            <Icon name="bot" />
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[11px] text-cyan-300">AI Interviewer</p>
            <p className="font-mono text-[10px] text-[#9CA3AF]">Question 3 of 10 · Frontend</p>
          </div>
        </div>
        <div className="rounded-lg bg-white/[0.07] px-3 py-2 font-mono text-[11px] leading-5 text-[#9CA3AF]">
          Explain the difference between props and state in React.
        </div>
        <div className="ml-auto w-5/6 rounded-lg bg-emerald-500/15 px-3 py-2 font-mono text-[11px] leading-5 text-emerald-300">
          Props are passed in from a parent. State is owned by the component...
        </div>
        <div className="mt-auto flex items-center gap-3">
          <div className="bar flex-1">
            <span style={{ width: '10%' }} />
          </div>
          <span className="font-mono text-[11px] text-[#9CA3AF]">Score 10%</span>
        </div>
      </div>
    </div>
  );
}

export default function Upcoming() {
  return (
    <section id="upcoming" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="upcoming-title">
      <SectionHeading id="upcoming-title" eyebrow="In the pipeline" title="Upcoming Projects" />

      <article
        className="glass upcoming-card group mt-10 grid min-w-0 overflow-hidden rounded-3xl lg:grid-cols-[1fr_1.1fr]"
        style={{ borderStyle: 'dashed', borderColor: 'rgba(6,182,212,0.35)' }}
      >
        <Preview />
        <div className="flex min-w-0 flex-col p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-[0.14em] text-cyan-300">
              <span className="relative flex h-2 w-2">
                <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              {upcoming.status}
            </span>
          </div>
          <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{upcoming.title}</h3>
          <p className="mt-3 leading-relaxed text-[#9CA3AF]">{upcoming.description}</p>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[#9CA3AF]">Planned technologies</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {upcoming.technologies.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[#9CA3AF]">Planned features</p>
          <ol className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
            {upcoming.features.map((f, i) => (
              <li key={f} className="flex gap-3">
                <span className="mt-0.5 font-mono text-xs text-cyan-300">{i + 1}</span>
                <span>{f}</span>
              </li>
            ))}
          </ol>
        </div>
      </article>
    </section>
  );
}
