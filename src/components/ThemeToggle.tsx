"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Subtle theme toggle with minimal visual weight.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme: Theme =
    resolvedTheme === "dark" || resolvedTheme === "light"
      ? resolvedTheme
      : "light";

  const handleToggle = (): void => {
    const nextTheme: Theme = currentTheme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold text-[color:var(--text-muted)]">
        Theme
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold transition hover:border-[color:var(--accent)]"
      aria-label={`Switch to ${currentTheme === "light" ? "dark" : "light"} mode`}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
        Theme
      </span>
      <span className="text-[color:var(--accent-strong)]">
        {currentTheme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
