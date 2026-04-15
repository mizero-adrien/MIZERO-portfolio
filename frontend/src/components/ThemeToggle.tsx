'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
};

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Zm0-15v2.2m0 17.6V22m9-10h-2.2M4.2 12H2m15.2 6.8-1.6-1.6M8.4 8.4 6.8 6.8m10.4 0-1.6 1.6M8.4 15.6l-1.6 1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 9.2 9.2 0 1 0 20 14.2Z" />
    </svg>
  );
}

export default function ThemeToggle({ lightLabel, darkLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme');
    const preferredTheme: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const nextTheme: Theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : preferredTheme;

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  }, []);

  const handleThemeToggle = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
    window.localStorage.setItem('theme', nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeToggle}
      aria-label={theme === 'dark' ? lightLabel : darkLabel}
      aria-pressed={theme === 'dark'}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="theme-toggle-text">{theme === 'dark' ? lightLabel : darkLabel}</span>
    </button>
  );
}