"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

/**
 * Determine the initial theme based on stored preference and system setting.
 */
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }
  const storedTheme: string | null = localStorage.getItem(THEME_STORAGE_KEY);
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

/**
 * Apply the selected theme to the document root and persist it.
 */
const applyTheme = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_STORAGE_KEY, theme);
};

/**
 * Subtle theme toggle with minimal visual weight.
 */
export function ThemeToggle(): JSX.Element {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const initialTheme: Theme = getInitialTheme();
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const handleToggle = (): void => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-semibold transition hover:border-[color:var(--accent)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
        Theme
      </span>
      <span className="text-[color:var(--accent-strong)]">
        {theme === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
