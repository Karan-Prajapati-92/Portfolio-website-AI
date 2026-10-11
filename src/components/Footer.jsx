import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { navLinks, profile } from '../data.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div className="min-w-0">
          <a href="#top">
            <Logo className="text-lg" />
          </a>
          <p className="mt-2 text-sm text-[#9CA3AF]">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#9CA3AF]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="transition-colors duration-300 hover:text-white" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#top" className="btn glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium hover:text-emerald-400">
          Back to top <Icon name="arrow-up" small />
        </a>
      </div>
    </footer>
  );
}
