import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function SectionHeader({ title, subtitle, actionLabel, actionHref }: Props) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>
        ) : null}
      </div>

      {actionLabel && actionHref ? (
        <div className="shrink-0">
          <Link
            href={actionHref}
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
          >
            {actionLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}