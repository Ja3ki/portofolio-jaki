"use client";

import { useEffect, useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.mjs";

type PdfPreviewProps = {
  url: string;
  title?: string;
  widthMode?: "card" | "modal";
};

export default function PdfPreview({
  url,
  title,
  widthMode = "card",
}: PdfPreviewProps) {
  const [error, setError] = useState<string | null>(null);
  const [width, setWidth] = useState(420);
  const file = useMemo(() => ({ url }), [url]);

  useEffect(() => {
    const updateWidth = () => {
      if (typeof window === "undefined") return;

      const viewportWidth = window.innerWidth;

      if (widthMode === "modal") {
        if (viewportWidth < 480) {
          setWidth(280);
        } else if (viewportWidth < 768) {
          setWidth(360);
        } else if (viewportWidth < 1024) {
          setWidth(520);
        } else {
          setWidth(700);
        }
        return;
      }

      if (viewportWidth < 480) {
        setWidth(260);
      } else if (viewportWidth < 768) {
        setWidth(320);
      } else {
        setWidth(420);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [widthMode]);

  return (
    <div
      className="flex h-full w-full items-center justify-center overflow-hidden"
      aria-label={title ? `PDF preview for ${title}` : "PDF preview"}
    >
      {error ? (
        <div
          className="flex h-full items-center justify-center px-4 text-center text-sm text-neutral-500 dark:text-neutral-400"
          role="status"
          aria-live="polite"
        >
          Preview not available.
        </div>
      ) : (
        <Document
          file={file}
          onLoadError={(e) => setError(String(e))}
          onSourceError={(e) => setError(String(e))}
          loading={
            <div
              className="flex h-full items-center justify-center px-4 text-center text-sm text-neutral-500 dark:text-neutral-400"
              role="status"
              aria-live="polite"
            >
              Loading preview...
            </div>
          }
        >
          <Page
            pageNumber={1}
            width={width}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      )}
    </div>
  );
}