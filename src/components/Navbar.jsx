import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { navLinks } from '../data.js';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="sticky z-40" style={{ top: 'env(safe-area-inset-top, 0px)' }}>
        <nav className="glass border-x-0 border-t-0" aria-label="Primary" style={{ background: 'rgba(11,15,25,0.7)' }}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <a href="#top">
              <Logo />
            </a>
            <ul className="hidden items-center gap-8 text-sm font-medium text-[#9CA3AF] md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a className="transition-colors duration-300 hover:text-white" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <a href="#contact" className="btn btn-primary grad-bg hidden rounded-full px-5 py-2 text-sm font-semibold sm:inline-flex">
                Hire Me
              </a>
              <button
                type="button"
                className="rounded-lg p-2 text-[#9CA3AF] hover:text-white md:hidden"
                aria-label="Open menu"
                aria-controls="drawer"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <Icon name="menu" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        id="drawer"
        className={`drawer fixed inset-0 z-50 md:hidden ${open ? 'open' : ''}`}
        aria-hidden={!open}
        style={{ background: 'var(--bg-deep)' }}
      >
        <div
          className="flex h-full flex-col px-4 sm:px-6"
          style={{
            paddingTop: 'calc(env(safe-area-inset-top, 0px) + 0.75rem)',
            paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1.5rem)',
          }}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button type="button" className="rounded-lg p-2 text-[#9CA3AF] hover:text-white" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="x" />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-2 font-display text-3xl font-bold tracking-tight">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a className="block rounded-xl px-2 py-3 hover:text-emerald-400" href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="btn btn-primary grad-bg mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
