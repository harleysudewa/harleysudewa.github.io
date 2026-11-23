"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      try {
        const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
        const initialTheme = savedTheme || "dark";
        setTheme(initialTheme);

        if (initialTheme === "light") {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        } else {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
        }
      } catch {
        // Fallback to dark if localStorage is blocked
        document.documentElement.classList.add("dark");
      }
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore if localStorage unavailable
    }

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  // Avoid hydration mismatch by rendering a placeholder until mounted
  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-muted)]" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-tag-bg)] transition-colors focus:outline-none"
    >
      {theme === "dark" ? (
        <Sun size={17} className="text-amber-400 hover:rotate-45 transition-transform duration-300" />
      ) : (
        <Moon size={17} className="text-slate-600 hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}
