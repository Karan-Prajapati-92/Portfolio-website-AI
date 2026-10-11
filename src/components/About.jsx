import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { highlights } from '../data.js';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="about-title">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="glass relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 30% 20%, rgba(16,185,129,0.25), transparent 55%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.22), transparent 55%)',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div
              className="flex h-28 w-28 items-center justify-center rounded-full grad-bg font-display text-4xl font-extrabold"
              style={{ color: 'var(--on-accent)' }}
              aria-hidden="true"
            >
              KK
            </div>
          </div>
          <div className="glass absolute bottom-4 left-4 right-4 rounded-2xl px-4 py-3 font-mono text-xs text-[#9CA3AF]" style={{ background: 'var(--glass-strong)' }}>
            <span className="text-emerald-400">const</span> karan = {'{'} role: <span className="text-cyan-400">"Full-Stack"</span> {'}'};
          </div>
        </div>

        <div className="min-w-0">
          <SectionHeading id="about-title" eyebrow="About me" title="Clean code, fast pages, interfaces that make sense." />
          <p className="mt-5 leading-relaxed text-[#9CA3AF]">
            I'm a web developer with a strong base in HTML, CSS, JavaScript and Bootstrap, and I build full-stack apps with React, Node.js, Express and MongoDB, with MySQL for relational data. I build projects to learn, ship them on Vercel, and keep the code on GitHub. I care about clean code, performance and intuitive UI/UX design.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="glass card-hover rounded-2xl p-4">
                <dt className="flex items-center gap-2 text-emerald-400">
                  <Icon name={h.icon} />
                </dt>
                <dd className="mt-3 font-display font-bold leading-snug">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
