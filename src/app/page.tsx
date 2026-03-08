"use client";

import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import ContactSection from "@/components/ContactSection";
import TrackedLink from "@/components/TrackedLink";
import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { profile } from "@/data/profile";
import { useLocale } from "@/contexts/LocaleContext";

export default function HomePage() {
  const { locale } = useLocale();
  const content = profile.content[locale];
  const topProjects = projects.slice(0, 3);
  const topCertificates = certificates.slice(0, 3);

  return (
    <Container>
      <section className="py-12 sm:py-14">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-10">
          <p className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            {content.availability}
          </p>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            {profile.name}
          </h1>

          <p className="mt-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-base">
            {profile.headline}
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
            {content.heroSummary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <TrackedLink
              href="/projects"
              eventName="hero_cta_click"
              eventLabel="View Projects"
              className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
            >
              {locale === "id" ? "Lihat Proyek" : "View Projects"}
            </TrackedLink>

            <a
              href="/cv.pdf"
              download
              className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              {locale === "id" ? "Unduh CV" : "Download CV"}
            </a>

            <TrackedLink
              href="/#contact"
              eventName="hero_cta_click"
              eventLabel="Contact Me"
              className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
            >
              {locale === "id" ? "Hubungi Saya" : "Contact Me"}
            </TrackedLink>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {locale === "id" ? "Proyek" : "Projects"}
              </p>
              <p className="mt-1 text-2xl font-semibold">{projects.length}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                {locale === "id" ? "Sertifikat" : "Certificates"}
              </p>
              <p className="mt-1 text-2xl font-semibold">{certificates.length}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">TOEFL</p>
              <p className="mt-1 text-2xl font-semibold">{profile.metrics.toefl}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <SectionHeader
          title={locale === "id" ? "Nilai Utama Saya" : "What I Bring"}
          subtitle={
            locale === "id"
              ? "Ringkasan singkat tentang kekuatan yang saya bawa ke peran project dan data."
              : "A quick snapshot of the strengths I bring into project and data-focused roles."
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {content.highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
            >
              <p className="text-base font-semibold">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="py-10">
        <SectionHeader
          title={locale === "id" ? "Tentang Saya" : "About"}
          subtitle={locale === "id" ? "Ringkasan singkat." : "Quick overview."}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:col-span-2">
            {content.about.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 [&:not(:first-child)]:mt-4"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-sm font-semibold">{locale === "id" ? "Fokus" : "Focus"}</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              {content.focusAreas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-4">
        <SectionHeader
          title="Education & Experience"
          subtitle={
            locale === "id"
              ? "Latar belakang akademik dan pengalaman yang mendukung perjalanan profesional saya."
              : "Academic background and practical experience that support my professional growth."
          }
        />

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-base font-semibold">
              {locale === "id" ? "Pendidikan" : "Education"}
            </h3>

            <div className="mt-4 space-y-4">
              {content.education.map((item) => (
                <div
                  key={`${item.institution}-${item.period}`}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <p className="text-sm font-semibold">{item.institution}</p>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {item.degree} • {item.major}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.period}
                    {item.gpa ? ` • GPA ${item.gpa}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <h3 className="text-base font-semibold">
              {locale === "id" ? "Pengalaman" : "Experience"}
            </h3>

            <div className="mt-4 space-y-4">
              {content.experience.map((item) => (
                <div
                  key={`${item.organization}-${item.title}`}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <p className="text-sm font-semibold">{item.organization}</p>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {item.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-10">
        <SectionHeader
          title={locale === "id" ? "Proyek" : "Projects"}
          subtitle={
            locale === "id"
              ? "Pilihan pekerjaan di bidang project management dan data analysis."
              : "Selected work across project management and data analysis."
          }
          actionLabel={locale === "id" ? "Lihat semua" : "View all"}
          actionHref="/projects"
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topProjects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section id="certificates" className="py-10">
        <SectionHeader
          title={locale === "id" ? "Sertifikat" : "Certificates"}
          subtitle={
            locale === "id"
              ? "Sertifikat pilihan dengan file PDF yang bisa diunduh."
              : "Selected credentials with downloadable PDF copies."
          }
          actionLabel={locale === "id" ? "Lihat semua" : "View all"}
          actionHref="/certificates"
        />
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topCertificates.map((c) => (
            <CertificateCard key={c.id} c={c} />
          ))}
        </div>
      </section>

      <section className="py-4">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                {locale === "id" ? "Siap berkolaborasi?" : "Ready to collaborate?"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {locale === "id"
                  ? "Jelajahi proyek saya, lihat sertifikat saya, atau hubungi langsung jika Anda memiliki peluang magang, full-time, atau freelance."
                  : "Explore my projects, review my certificates, or reach out directly if you have an internship, full-time, or freelance opportunity."}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <TrackedLink
                href="/projects"
                eventName="bottom_cta_click"
                eventLabel="Explore Projects"
                className="rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
              >
                {locale === "id" ? "Jelajahi Proyek" : "Explore Projects"}
              </TrackedLink>

              <TrackedLink
                href="/#contact"
                eventName="bottom_cta_click"
                eventLabel="Get in Touch"
                className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
              >
                {locale === "id" ? "Hubungi Saya" : "Get in Touch"}
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </Container>
  );
}