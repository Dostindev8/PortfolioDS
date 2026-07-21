"use client";

export default function SkillBadge({ children, accentClass = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/80 px-3 py-1.5 text-xs text-[var(--fg-muted)] transition-all duration-200 hover:scale-105 sm:text-sm ${accentClass}`}
    >
      {children}
    </span>
  );
}
