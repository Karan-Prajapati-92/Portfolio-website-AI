import Icon from './Icon.jsx';

export default function ProjectCard({ project }) {
  const { title, type, tags, description, image, alt, demo, code } = project;
  return (
    <article className="glass card-hover group flex min-w-0 flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-[2/1] max-w-full overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        <img
          src={image}
          alt={alt}
          width="1200"
          height="600"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#9CA3AF]">{type}</p>
        <h3 className="mt-2 font-display text-xl font-bold">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 flex-1 leading-relaxed text-[#9CA3AF]">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary grad-bg inline-flex items-center gap-2 rounded-full px-5 py-2.5">
            View Project <Icon name="external" small />
          </a>
          <a href={code} target="_blank" rel="noopener noreferrer" className="btn glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 hover:text-emerald-400">
            <Icon name="github" small /> View Code
          </a>
        </div>
      </div>
    </article>
  );
}
