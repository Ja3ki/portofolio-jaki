"use client";

import type { Project } from "@/data/projects";
import TrackedLink from "@/components/TrackedLink";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { useLocale } from "@/contexts/LocaleContext";

export default function ProjectCard({ p }: { p: Project }) {
  const { locale } = useLocale();
  const content = p.content[locale];
  const titleId = `project-title-${p.id}`;
  const highlightImpact = content.impact?.[0];

  return (
    <article
      aria-labelledby={titleId}
      className="h-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="flex h-full flex-col">
        <h3 id={titleId} className="text-base font-semibold leading-snug">
          {content.title}
        </h3>

        {p.role ? (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {p.role}
            {p.duration ? ` • ${p.duration}` : ""}
          </p>
        ) : p.duration ? (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            {p.duration}
          </p>
        ) : null}

        {content.description ? (
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.description}
          </p>
        ) : null}

        {highlightImpact ? (
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {locale === "id" ? "Dampak Utama" : "Key Impact"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
              {highlightImpact}
            </p>
          </div>
        ) : null}

        {p.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${content.title} tags`}>
            {p.tags.map((tag) => (
              <li key={tag}>
                <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <TrackedLink
            href={`/projects/${p.id}`}
            eventName="project_detail_click"
            eventLabel={content.title}
            aria-label={`View project details for ${content.title}`}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
          >
            {locale === "id" ? "Detail" : "Details"}
          </TrackedLink>

          {p.github ? (
            <TrackedExternalLink
              href={p.github}
              target="_blank"
              rel="noreferrer"
              eventName="project_github_click"
              eventLabel={content.title}
              aria-label={`Open GitHub repository for ${content.title}`}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              GitHub
            </TrackedExternalLink>
          ) : null}

          {p.docs ? (
            <TrackedExternalLink
              href={p.docs}
              target="_blank"
              rel="noreferrer"
              eventName="project_docs_click"
              eventLabel={content.title}
              aria-label={`Open documentation for ${content.title}`}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              Docs
            </TrackedExternalLink>
          ) : null}

          {p.demo ? (
            <TrackedExternalLink
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              eventName="project_demo_click"
              eventLabel={content.title}
              aria-label={`Open demo for ${content.title}`}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              Demo
            </TrackedExternalLink>
          ) : null}

          {p.file ? (
            <TrackedExternalLink
              href={p.file}
              target="_blank"
              rel="noreferrer"
              eventName="project_file_click"
              eventLabel={content.title}
              aria-label={`Open file for ${content.title}`}
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              File
            </TrackedExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}