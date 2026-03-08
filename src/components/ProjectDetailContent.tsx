"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { locale } = useLocale();
  const content = project.content[locale];

  return (
    <section className="py-10">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        {locale === "id" ? "← Kembali ke Proyek" : "← Back to Projects"}
      </Link>

      <div className="mt-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-8">
        <p className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          {project.role || (locale === "id" ? "Proyek" : "Project")}
          {project.duration ? ` • ${project.duration}` : ""}
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {content.title}
        </h1>

        {content.description ? (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 sm:text-base">
            {content.description}
          </p>
        ) : null}

        {content.impact?.length ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {content.impact.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  {locale === "id" ? "Hasil" : "Result"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
            >
              GitHub
            </a>
          ) : null}

          {project.docs ? (
            <a
              href={project.docs}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              Docs
            </a>
          ) : null}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              Demo
            </a>
          ) : null}

          {project.file ? (
            <a
              href={project.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              {locale === "id" ? "Berkas" : "File"}
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:col-span-2">
          <h2 className="text-lg font-semibold">
            {locale === "id" ? "Gambaran Umum" : "Overview"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.overview ||
              content.description ||
              (locale === "id"
                ? "Ringkasan belum tersedia."
                : "No overview available yet.")}
          </p>

          <h2 className="mt-8 text-lg font-semibold">
            {locale === "id" ? "Permasalahan" : "Problem"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.problem ||
              (locale === "id"
                ? "Penjelasan masalah belum ditambahkan."
                : "Problem statement has not been added yet.")}
          </p>

          <h2 className="mt-8 text-lg font-semibold">
            {locale === "id" ? "Solusi" : "Solution"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.solution ||
              (locale === "id"
                ? "Detail solusi belum ditambahkan."
                : "Solution details have not been added yet.")}
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold">
              {locale === "id" ? "Tanggung Jawab" : "Responsibilities"}
            </h2>
            {content.responsibilities?.length ? (
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {content.responsibilities.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {locale === "id"
                  ? "Belum ada tanggung jawab yang ditambahkan."
                  : "No responsibilities added yet."}
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold">Tools</h2>
            {project.tools?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {locale === "id"
                  ? "Belum ada tools yang ditambahkan."
                  : "No tools added yet."}
              </p>
            )}
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h2 className="text-lg font-semibold">
              {locale === "id" ? "Dampak" : "Impact"}
            </h2>
            {content.impact?.length ? (
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {content.impact.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {locale === "id"
                  ? "Belum ada catatan dampak."
                  : "No impact notes added yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}