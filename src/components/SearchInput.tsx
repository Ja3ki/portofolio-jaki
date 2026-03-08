"use client";

import { Search, X } from "lucide-react";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
};

export default function SearchInput({
  value,
  onChange,
  placeholder,
  label,
}: SearchInputProps) {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="relative">
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>

      <Search
        size={18}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        aria-hidden="true"
      />

      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="w-full rounded-2xl border border-neutral-200 bg-white py-3 pl-11 pr-11 text-sm outline-none transition focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:ring-neutral-800"
      />

      {value ? (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-600 transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900"
          aria-label={`Clear ${label.toLowerCase()}`}
        >
          <X size={16} aria-hidden="true" />
        </button>
      ) : null}
    </div>
  );
}