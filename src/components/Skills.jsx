import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import { skillGroups, levelWidth } from '../data.js';

function SkillCard({ group }) {
  return (
    <article className="glass card-hover min-w-0 rounded-3xl p-6">
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${group.tone}`}>
        <Icon name={group.icon} />
      </div>
      <h3 className="mt-5 font-display text-xl font-bold">{group.title}</h3>
      <ul className="mt-5 flex flex-col gap-4">
        {group.items.map(([name, level]) => (
          <li key={name}>
            <div className="flex justify-between text-sm">
              <span>{name}</span>
              <span className="font-mono text-xs text-[#9CA3AF]">{level}</span>
            </div>
            <div className="bar mt-2">
              <span style={{ width: `${levelWidth[level]}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.badges.map((b) => (
          <span key={b} className="badge">
            {b}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" eyebrow="Skills & competencies" title="The stack I work in">
        <p className="mt-3 max-w-2xl leading-relaxed text-[#9CA3AF]">
          Levels show where I am today: <span className="text-emerald-400">Strong</span> for what I use with confidence,{' '}
          <span className="text-cyan-400">Intermediate</span> for what I use regularly and am still deepening.
        </p>
      </SectionHeading>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((g) => (
          <SkillCard key={g.title} group={g} />
        ))}
      </div>
    </section>
  );
}
