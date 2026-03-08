"use client";

import Link from "next/link";
import type { Certificate } from "@/data/certificates";
import PdfPreview from "@/components/PdfPreview";
import { useLocale } from "@/contexts/LocaleContext";

export default function CertificateDetailContent({
  certificate,
}: {
  certificate: Certificate;
}) {
  const { locale } = useLocale();
  const content = certificate.content[locale];

  return (
    <section className="py-10">
      <Link
        href="/certificates"
        className="inline-flex items-center text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        {locale === "id" ? "← Kembali ke Sertifikat" : "← Back to Certificates"}
      </Link>

      <div className="mt-5 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-8">
        <p className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
          {certificate.issuer} • {certificate.year}
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {content.title}
        </h1>

        {content.category ? (
          <p className="mt-4 inline-flex w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            {content.category}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {certificate.pdfUrl ? (
            <a
              href={certificate.pdfUrl}
              download
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
            >
              {locale === "id" ? "Unduh PDF" : "Download PDF"}
            </a>
          ) : null}

          {certificate.verifyUrl ? (
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              {locale === "id" ? "Verifikasi Sertifikat" : "Verify Certificate"}
            </a>
          ) : null}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <h2 className="text-lg font-semibold">
          {locale === "id" ? "Preview Sertifikat" : "Certificate Preview"}
        </h2>

        <div className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
          <div className="min-h-[420px] w-full p-4">
            {certificate.pdfUrl ? (
              <PdfPreview
                url={certificate.pdfUrl}
                title={content.title}
                widthMode="modal"
              />
            ) : (
              <div className="flex min-h-[360px] items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
                {locale === "id"
                  ? "File PDF belum tersedia."
                  : "No PDF file specified."}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}