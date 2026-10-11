export default function SectionHeading({ id, eyebrow, title, children }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ textWrap: 'balance' }}>
        {title}
      </h2>
      {children}
    </>
  );
}
