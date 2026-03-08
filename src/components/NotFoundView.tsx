"use client";

import TrackedLink from "@/components/TrackedLink";
import { useLocale } from "@/contexts/LocaleContext";

type NotFoundViewProps = {
  titleEn?: string;
  titleId?: string;
  descriptionEn?: string;
  descriptionId?: string;
  backHref?: string;
  backLabelEn?: string;
  backLabelId?: string;
};

export default function NotFoundView({
  titleEn = "Page not found",
  titleId = "Halaman tidak ditemukan",
  descriptionEn = "The page you are looking for does not exist or may have been moved.",
  descriptionId = "Halaman yang Anda cari tidak tersedia atau mungkin sudah dipindahkan.",
  backHref = "/",
  backLabelEn = "Back to Home",
  backLabelId = "Kembali ke Beranda",
}: NotFoundViewProps) {
  const { locale } = useLocale();

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="w-full max-w-xl rounded-3xl border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:px-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 text-lg font-semibold dark:border-neutral-800 dark:bg-neutral-900">
          404
        </div>

        <h1 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
          {locale === "id" ? titleId : titleEn}
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {locale === "id" ? descriptionId : descriptionEn}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <TrackedLink
            href={backHref}
            eventName="not_found_click"
            eventLabel={backHref}
            className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
          >
            {locale === "id" ? backLabelId : backLabelEn}
          </TrackedLink>

          <TrackedLink
            href="/#contact"
            eventName="not_found_click"
            eventLabel="Contact"
            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
          >
            {locale === "id" ? "Hubungi Saya" : "Contact Me"}
          </TrackedLink>
        </div>
      </div>
    </div>
  );
}