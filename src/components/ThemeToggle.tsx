"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;
  const isDark = current === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-xl border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
      aria-label="Toggle theme"
    >
      <span className="inline-flex items-center gap-2">
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}