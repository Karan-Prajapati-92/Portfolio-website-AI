import Icon from './Icon.jsx';
import { profile } from '../data.js';

const base =
  'btn glass flex h-11 w-11 items-center justify-center rounded-full text-[#9CA3AF] hover:text-emerald-400';

export default function SocialLinks({ label, withEmail = false, className = '' }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`} aria-label={label}>
      <li>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={base}>
          <Icon name="github" />
        </a>
      </li>
      <li>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={base}>
          <Icon name="linkedin" />
        </a>
      </li>
      {withEmail && (
        <li>
          <a href="#contact" aria-label="Email" className={base}>
            <Icon name="mail" />
          </a>
        </li>
      )}
    </ul>
  );
}
