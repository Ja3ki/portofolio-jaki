"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import TrackedLink from "@/components/TrackedLink";
import { profile } from "@/data/profile";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
  const { locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: "/projects",
      label: locale === "id" ? "Proyek" : "Projects",
      eventLabel: "Projects",
    },
    {
      href: "/certificates",
      label: locale === "id" ? "Sertifikat" : "Certificates",
      eventLabel: "Certificates",
    },
    {
      href: "/#contact",
      label: locale === "id" ? "Kontak" : "Contact",
      eventLabel: "Contact",
    },
  ];

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
      <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <TrackedLink
            href="/"
            eventName="navbar_click"
            eventLabel="Home"
            className="text-sm font-semibold tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            {profile.name}
          </TrackedLink>

          <div className="hidden items-center gap-2 md:flex">
            <nav className="flex items-center gap-5">
              {navItems.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  eventName="navbar_click"
                  eventLabel={item.eventLabel}
                  className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  {item.label}
                </TrackedLink>
              ))}
            </nav>

            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />

            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-20 rounded-3xl border border-neutral-200 bg-white p-4 shadow-2xl dark:border-neutral-800 dark:bg-neutral-950"
          >
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <TrackedLink
                  key={item.href}
                  href={item.href}
                  eventName="mobile_navbar_click"
                  eventLabel={item.eventLabel}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
                >
                  {item.label}
                </TrackedLink>
              ))}
            </nav>

            <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-sm font-semibold">
                {locale === "id" ? "Tersedia untuk peluang" : "Open to opportunities"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {locale === "id"
                  ? "Project Management, Data Analysis, magang, full-time, dan freelance."
                  : "Project Management, Data Analysis, internship, full-time, and freelance roles."}
              </p>

              <TrackedLink
                href="/#contact"
                eventName="mobile_navbar_cta_click"
                eventLabel="Get in Touch"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
              >
                {locale === "id" ? "Hubungi Saya" : "Get in Touch"}
              </TrackedLink>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}