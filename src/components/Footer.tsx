"use client";

import Container from "./Container";
import { useLocale } from "@/contexts/LocaleContext";

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="mt-12 border-t border-neutral-200 py-10 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} Fachri Muzaki.{" "}
            {locale === "id" ? "Dibuat dengan Next.js." : "Built with Next.js."}
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {locale === "id" ? "Minimal • Rapi • Responsif" : "Minimal • Clean • Responsive"}
          </p>
        </div>
      </Container>
    </footer>
  );
}