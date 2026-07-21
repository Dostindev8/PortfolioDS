"use client";

/**
 * FooterDoves — siluetas en azul de marca.
 * Animación 100% transform (GPU). Visibles en móvil (sin hidden breakpoints).
 */
const DOVES = [
  { top: "16%", duration: 22, delay: 0, size: 0.85 },
  { top: "42%", duration: 28, delay: 5, size: 1 },
  { top: "68%", duration: 34, delay: 11, size: 0.72 },
];

function DoveSVG({ className = "", style }) {
  return (
    <svg
      className={className}
      style={style}
      width="44"
      height="28"
      viewBox="0 0 44 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 16c4-1 8-6 12-7 2-.4 4 .2 5.5 1.4C21 8 24 5 28 4c3-.6 6 .4 8 2.2 1.2 1 2.2 2.4 2.6 4 .6 2.2-.2 4.2-2 5.4-1.6 1-3.6 1.2-5.4.6-1.4-.4-2.6-1.2-3.6-2.2-.2 2.4-1.4 4.6-3.4 6-1.6 1.2-3.6 1.6-5.6 1.2C15 18.8 12 17 9.5 15.2 7 16.4 4.5 16.8 2 16z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M28 10c2.5-3.5 6-5.5 10-6-2.5 2.2-4 5-4.5 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="31.5" cy="8.5" r="1" fill="currentColor" />
    </svg>
  );
}

export default function FooterDoves() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden text-[var(--accent)]"
    >
      {DOVES.map((d, i) => (
        <DoveSVG
          key={i}
          className="footer-dove absolute opacity-[0.2] sm:opacity-[0.24]"
          style={{
            top: d.top,
            width: `${Math.round(36 * d.size)}px`,
            height: `${Math.round(23 * d.size)}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
