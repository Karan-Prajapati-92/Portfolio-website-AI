import SectionHeading from './SectionHeading.jsx';
import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="exp-title">
      <SectionHeading id="exp-title" eyebrow="Experience & learning" title="How I got here" />
      <ol className="relative mt-10 flex flex-col gap-6 border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((e) => (
          <li key={e.title} className="relative min-w-0">
            <span
              className={`absolute -left-[1.9rem] top-6 h-3 w-3 rounded-full ring-4 ring-[#0B0F19] sm:-left-[2.4rem] ${e.current ? 'grad-bg' : 'bg-white/30'}`}
              aria-hidden="true"
            />
            <div className="glass card-hover rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold">{e.title}</h3>
                <span className="badge">{e.badge}</span>
              </div>
              <p className="mt-1 text-sm text-emerald-400">{e.place}</p>
              <p className="mt-3 leading-relaxed text-[#9CA3AF]">{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
