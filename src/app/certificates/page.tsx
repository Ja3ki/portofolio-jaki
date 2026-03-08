"use client";

import { useMemo, useState } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import CertificateCard from "@/components/CertificateCard";
import Filters from "@/components/Filters";
import SearchInput from "@/components/SearchInput";
import SortSelect from "@/components/SortSelect";
import EmptyState from "@/components/EmptyState";
import { certificates } from "@/data/certificates";
import { useLocale } from "@/contexts/LocaleContext";

export default function CertificatesPage() {
  const { locale } = useLocale();
  const [query, setQuery] = useState("");
  const [selectedIssuer, setSelectedIssuer] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("year-desc");

  const issuers = useMemo(
    () => Array.from(new Set(certificates.map((c) => c.issuer))).sort(),
    []
  );

  const categories = useMemo(
    () =>
      Array.from(
        new Set(certificates.map((c) => c.content[locale].category).filter(Boolean))
      ).sort() as string[],
    [locale]
  );

  const years = useMemo(
    () =>
      Array.from(new Set(certificates.map((c) => String(c.year)))).sort(
        (a, b) => Number(b) - Number(a)
      ),
    []
  );

  const filteredCertificates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const result = certificates.filter((certificate) => {
      const content = certificate.content[locale];
      const matchesIssuer =
        !selectedIssuer || certificate.issuer === selectedIssuer;
      const matchesCategory =
        !selectedCategory || content.category === selectedCategory;
      const matchesYear =
        !selectedYear || String(certificate.year) === selectedYear;

      const searchableText = [
        content.title,
        certificate.issuer,
        content.category,
        String(certificate.year),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesIssuer && matchesCategory && matchesYear && matchesQuery;
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

    if (sortBy === "year-asc") {
      return [...result].sort((a, b) => Number(a.year) - Number(b.year));
    }

    return [...result].sort((a, b) => Number(b.year) - Number(a.year));
  }, [locale, query, selectedIssuer, selectedCategory, selectedYear, sortBy]);

  return (
    <Container>
      <section className="py-10">
        <SectionHeader
          title={locale === "id" ? "Semua Sertifikat" : "All Certificates"}
          subtitle={
            locale === "id"
              ? "Cari, filter, urutkan, preview cepat, buka detail, dan unduh koleksi sertifikat Anda."
              : "Search, filter, sort, preview, open details, and download your certificate collection."
          }
        />

        <div className="mb-6 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SearchInput
                value={query}
                onChange={setQuery}
                label={locale === "id" ? "Cari sertifikat" : "Search certificates"}
                placeholder={
                  locale === "id"
                    ? "Cari berdasarkan judul, issuer, kategori, atau tahun..."
                    : "Search by title, issuer, category, or year..."
                }
              />
            </div>

            <SortSelect
              label={locale === "id" ? "Urutkan sertifikat" : "Sort certificates"}
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: "year-desc", label: locale === "id" ? "Terbaru dulu" : "Newest first" },
                { value: "year-asc", label: locale === "id" ? "Terlama dulu" : "Oldest first" },
                { value: "title-asc", label: locale === "id" ? "Judul (A–Z)" : "Title (A–Z)" },
                { value: "title-desc", label: locale === "id" ? "Judul (Z–A)" : "Title (Z–A)" },
              ]}
            />
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            <Filters
              label="Issuer"
              options={issuers}
              value={selectedIssuer}
              onChange={setSelectedIssuer}
              allLabel={locale === "id" ? "Semua issuer" : "All issuers"}
            />

            <Filters
              label={locale === "id" ? "Kategori" : "Category"}
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              allLabel={locale === "id" ? "Semua kategori" : "All categories"}
            />

            <Filters
              label={locale === "id" ? "Tahun" : "Year"}
              options={years}
              value={selectedYear}
              onChange={setSelectedYear}
              allLabel={locale === "id" ? "Semua tahun" : "All years"}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <p className="text-sm text-neutral-600 dark:text-neutral-400" aria-live="polite">
              {locale === "id"
                ? `Menampilkan ${filteredCertificates.length} dari ${certificates.length} sertifikat`
                : `Showing ${filteredCertificates.length} of ${certificates.length} certificates`}
            </p>

            {query || selectedIssuer || selectedCategory || selectedYear || sortBy !== "year-desc" ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedIssuer("");
                  setSelectedCategory("");
                  setSelectedYear("");
                  setSortBy("year-desc");
                }}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                {locale === "id" ? "Reset filter" : "Clear filters"}
              </button>
            ) : null}
          </div>
        </div>

        {filteredCertificates.length ? (
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} c={certificate} />
            ))}
          </div>
        ) : (
          <EmptyState
            title={locale === "id" ? "Tidak ada sertifikat ditemukan" : "No certificates found"}
            description={
              locale === "id"
                ? "Coba kata kunci lain atau reset filter yang dipilih."
                : "Try another keyword or reset the selected filters."
            }
          />
        )}
      </section>
    </Container>
  );
}