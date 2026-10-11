import ProjectCard from './ProjectCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import { projects } from '../data.js';

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="projects-title">
      <SectionHeading id="projects-title" eyebrow="My projects" title="Things I've built" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
