"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FileText } from "lucide-react";
import type { Certificate } from "@/data/certificates";
import { trackEvent } from "@/lib/analytics";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import TrackedLink from "@/components/TrackedLink";
import { useLocale } from "@/contexts/LocaleContext";

const PdfPreview = dynamic(() => import("@/components/PdfPreview"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
      Loading preview...
    </div>
  ),
});

export default function CertificateCard({ c }: { c: Certificate }) {
  const { locale } = useLocale();
  const content = c.content[locale];
  const hasPdf = Boolean(c.pdfUrl);
  const titleId = `certificate-title-${c.id}`;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <article
        aria-labelledby={titleId}
        className="h-full w-full rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 id={titleId} className="text-base font-semibold leading-snug">
                {content.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {c.issuer} • {c.year}
              </p>

              {content.category ? (
                <p className="mt-2 inline-flex w-fit rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                  {content.category}
                </p>
              ) : null}
            </div>

            <div className="shrink-0">
              {hasPdf ? (
                <TrackedExternalLink
                  href={c.pdfUrl}
                  download
                  eventName="certificate_download"
                  eventLabel={content.title}
                  aria-label={`Download certificate PDF for ${content.title}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
                >
                  {locale === "id" ? "Unduh" : "Download"}
                </TrackedExternalLink>
              ) : (
                <span
                  aria-label={`PDF not available for ${content.title}`}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {locale === "id" ? "Unduh" : "Download"}
                </span>
              )}
            </div>
          </div>

          <div
            className="mt-4 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900"
            aria-label={`Preview area for ${content.title}`}
          >
            <div className="aspect-[16/9] w-full">
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                  <FileText
                    size={24}
                    className="text-neutral-600 dark:text-neutral-300"
                  />
                </div>

                <p className="mt-4 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                  {locale === "id"
                    ? "Preview sertifikat tersedia"
                    : "Certificate preview available"}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {locale === "id"
                    ? "Buka preview cepat atau halaman detail untuk melihat dokumen."
                    : "Open the quick preview or detail page to view the document."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <TrackedLink
              href={`/certificates/${c.id}`}
              eventName="certificate_detail_click"
              eventLabel={content.title}
              className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
            >
              {locale === "id" ? "Detail" : "Details"}
            </TrackedLink>

            {hasPdf ? (
              <button
                type="button"
                onClick={() => {
                  trackEvent("certificate_preview_open", {
                    label: content.title,
                  });
                  setIsOpen(true);
                }}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                Preview
              </button>
            ) : null}

            {c.verifyUrl ? (
              <TrackedExternalLink
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                eventName="certificate_verify_click"
                eventLabel={content.title}
                aria-label={`Verify certificate ${content.title}`}
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                {locale === "id" ? "Verifikasi" : "Verify"}
              </TrackedExternalLink>
            ) : null}
          </div>
        </div>
      </article>

      {isOpen && hasPdf ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${titleId}-modal`}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-neutral-800 bg-white shadow-2xl dark:bg-neutral-950"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
              <div className="min-w-0">
                <h2
                  id={`${titleId}-modal`}
                  className="text-lg font-semibold text-neutral-900 dark:text-neutral-50"
                >
                  {content.title}
                </h2>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                  {c.issuer} • {c.year}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[calc(90vh-88px)] overflow-auto bg-neutral-100 p-4 dark:bg-neutral-900">
              <div className="mx-auto flex min-h-[320px] w-full items-center justify-center rounded-2xl bg-white p-4 dark:bg-neutral-950">
                <PdfPreview
                  url={c.pdfUrl!}
                  title={content.title}
                  widthMode="modal"
                />
              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <TrackedExternalLink
                  href={c.pdfUrl}
                  download
                  eventName="certificate_download"
                  eventLabel={content.title}
                  className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
                >
                  {locale === "id" ? "Unduh PDF" : "Download PDF"}
                </TrackedExternalLink>

                <TrackedLink
                  href={`/certificates/${c.id}`}
                  eventName="certificate_detail_click"
                  eventLabel={content.title}
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
                >
                  {locale === "id" ? "Buka Detail" : "Open Details"}
                </TrackedLink>

                {c.verifyUrl ? (
                  <TrackedExternalLink
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    eventName="certificate_verify_click"
                    eventLabel={content.title}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
                  >
                    {locale === "id"
                      ? "Verifikasi Sertifikat"
                      : "Verify Certificate"}
                  </TrackedExternalLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}