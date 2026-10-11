// Ambient background glow. Uses radial gradients instead of CSS blur filters,
// which keeps scrolling cheap.
export default function Glow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
      <div className="glow glow-e absolute -top-40 -left-40 h-[32rem] w-[32rem]" />
      <div className="glow glow-c absolute top-1/3 -right-48 h-[34rem] w-[34rem]" />
      <div className="glow glow-e absolute -bottom-48 left-1/4 h-[30rem] w-[30rem]" />
    </div>
  );
}
