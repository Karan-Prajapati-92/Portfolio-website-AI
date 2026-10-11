import Icon from './Icon.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data.js';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24" aria-labelledby="hero-title">
      <div className="glass inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-[#9CA3AF]">
        <span className="relative flex h-2.5 w-2.5">
          <span className="ping-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        Available for new projects
      </div>

      <h1
        id="hero-title"
        className="mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        style={{ textWrap: 'balance' }}
      >
        Hi, I'm {profile.name}.
        <br />
        <span className="grad-text">Full-Stack Web Developer.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#9CA3AF]">
        Crafting high-performance, scalable web applications and interactive digital experiences, from the React interface to the Node API behind it.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#projects" className="btn btn-primary grad-bg inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold">
          View Projects <Icon name="arrow-right" small />
        </a>
        <a href="#contact" className="btn glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold hover:border-white/20">
          Contact Me
        </a>
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold hover:text-emerald-400"
        >
          Resume <Icon name="external" small />
        </a>
      </div>

      <SocialLinks label="Social links" withEmail className="mt-12" />
    </section>
  );
}
