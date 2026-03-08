"use client";

type FiltersProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  allLabel?: string;
};

export default function Filters({
  label,
  options,
  value,
  onChange,
  allLabel = "All",
}: FiltersProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </span>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label={label}
      >
        <button
          type="button"
          onClick={() => onChange("")}
          aria-pressed={value === ""}
          className={`rounded-full border px-3 py-1.5 text-sm transition ${
            value === ""
              ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
              : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900"
          }`}
        >
          {allLabel}
        </button>

        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={value === option}
            className={`rounded-full border px-3 py-1.5 text-sm transition ${
              value === option
                ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-900"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}