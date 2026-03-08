"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import Filters from "@/components/Filters";
import SearchInput from "@/components/SearchInput";
import SortSelect from "@/components/SortSelect";
import EmptyState from "@/components/EmptyState";
import { projects } from "@/data/projects";
import { useLocale } from "@/contexts/LocaleContext";

export default function ProjectsPage() {
  const { locale } = useLocale();
  const [query, setQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const roles = useMemo(
    () =>
      Array.from(
        new Set(projects.map((project) => project.role).filter(Boolean))
      ).sort() as string[],
    []
  );

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = projects.filter((project) => {
      const content = project.content[locale];
      const matchesRole = !selectedRole || project.role === selectedRole;

      const searchableText = [
        content.title,
        project.role,
        project.duration,
        content.description,
        ...(project.tags ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesRole && matchesQuery;
    });

    if (sortBy === "title-asc") {
      return [...result].sort((a, b) =>
        a.content[locale].title.localeCompare(b.content[locale].title)
      );
    }

    if (sortBy === "title-desc") {
      return [...result].sort((a, b) =>
        b.content[locale].title.localeCompare(a.content[locale].title)
      );
    }

    if (sortBy === "duration-desc") {
      return [...result].sort((a, b) => {
        const aValue = Number.parseInt(a.duration || "0", 10);
        const bValue = Number.parseInt(b.duration || "0", 10);
        return bValue - aValue;
      });
    }

    return result;
  }, [locale, query, selectedRole, sortBy]);

  return (
    <Container>
      <section className="py-10">
        <SectionHeader
          title={locale === "id" ? "Proyek" : "Projects"}
          subtitle={
            locale === "id"
              ? "Pekerjaan di bidang project management dan data analysis, termasuk sistem internal dan repository publik."
              : "Project management and data analysis work, including internal systems and public repositories."
          }
        />

        <div className="mb-6 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SearchInput
                value={query}
                onChange={setQuery}
                label={locale === "id" ? "Cari proyek" : "Search projects"}
                placeholder={
                  locale === "id"
                    ? "Cari berdasarkan judul, role, deskripsi, atau tag..."
                    : "Search by title, role, description, or tags..."
                }
              />
            </div>

            <SortSelect
              label={locale === "id" ? "Urutkan proyek" : "Sort projects"}
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "default", label: locale === "id" ? "Urutan default" : "Default order" },
                { value: "title-asc", label: locale === "id" ? "Judul (A–Z)" : "Title (A–Z)" },
                { value: "title-desc", label: locale === "id" ? "Judul (Z–A)" : "Title (Z–A)" },
                { value: "duration-desc", label: locale === "id" ? "Durasi terpanjang" : "Longest duration" },
              ]}
            />
          </div>

          <div className="mt-4">
            <Filters
              label={locale === "id" ? "Filter berdasarkan role" : "Filter by role"}
              options={roles}
              value={selectedRole}
              onChange={setSelectedRole}
              allLabel={locale === "id" ? "Semua role" : "All roles"}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400" aria-live="polite">
              {locale === "id"
                ? `Menampilkan ${filteredProjects.length} dari ${projects.length} proyek`
                : `Showing ${filteredProjects.length} of ${projects.length} projects`}
            </p>

            {query || selectedRole || sortBy !== "default" ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedRole("");
                  setSortBy("default");
                }}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                {locale === "id" ? "Reset filter" : "Clear filters"}
              </button>
            ) : null}
          </div>
        </div>

        {filteredProjects.length ? (
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} p={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={locale === "id" ? "Tidak ada proyek ditemukan" : "No projects found"}
            description={
              locale === "id"
                ? "Coba kata kunci lain atau reset filter yang dipilih."
                : "Try another keyword or reset the selected filter."
            }
          />
        )}
      </section>
    </Container>
  );
}