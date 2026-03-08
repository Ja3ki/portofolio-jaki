"use client";

import { useLocale } from "@/contexts/LocaleContext";

export default function PageLoader() {
  const { locale } = useLocale();

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex w-full max-w-md flex-col items-center rounded-3xl border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-900 dark:border-neutral-700 dark:border-t-white" />

        <h2 className="mt-5 text-lg font-semibold">
          {locale === "id" ? "Sedang memuat..." : "Loading..."}
        </h2>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {locale === "id"
            ? "Mohon tunggu sebentar, konten sedang diproses."
            : "Please wait a moment while the content is being prepared."}
        </p>
      </div>
    </div>
  );
}