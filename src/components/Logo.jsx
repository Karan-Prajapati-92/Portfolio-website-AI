export default function Logo({ className = 'text-xl' }) {
  return (
    <span className={`flex items-center font-display font-extrabold tracking-tight ${className}`}>
      Karan.dev
      <span className="ml-0.5 inline-block h-2 w-2 rounded-full grad-bg" aria-hidden="true" />
    </span>
  );
}
