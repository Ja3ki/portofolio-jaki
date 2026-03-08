"use client";

import { Languages } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-2xl border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
      aria-label="Language switcher"
    >
      <span className="px-2 text-neutral-500 dark:text-neutral-400" aria-hidden="true">
        <Languages size={16} />
      </span>

      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-xl px-3 py-1.5 text-sm transition ${
          locale === "en"
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLocale("id")}
        aria-pressed={locale === "id"}
        className={`rounded-xl px-3 py-1.5 text-sm transition ${
          locale === "id"
            ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
            : "text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-900"
        }`}
      >
        ID
      </button>
    </div>
  );
}