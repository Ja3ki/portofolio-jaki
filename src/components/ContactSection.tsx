"use client";

import { useMemo, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { profile } from "@/data/profile";
import { trackEvent } from "@/lib/analytics";
import TrackedExternalLink from "@/components/TrackedExternalLink";
import { useLocale } from "@/contexts/LocaleContext";

type InfoItem = {
  label: string;
  href: string;
  copyValue?: string;
  icon: ReactNode;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company: string;
};

function IconPill({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  title,
}: {
  children: ReactNode;
  onClick?: () => void;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
    >
      {children}
    </button>
  );
}

function OpenLink({ href, label }: { href: string; label: string }) {
  return (
    <TrackedExternalLink
      href={href}
      target="_blank"
      rel="noreferrer"
      eventName="contact_link_click"
      eventLabel={label}
      aria-label={label}
      className="inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 px-4 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 dark:bg-white dark:text-neutral-900"
    >
      Open <ExternalLink className="ml-2" size={16} aria-hidden="true" />
    </TrackedExternalLink>
  );
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactSection() {
  const { locale } = useLocale();
  const c = profile.contact;
  const content = profile.content[locale];
  const formStartedAt = useRef(Date.now());

  const items: InfoItem[] = useMemo(
    () => [
      {
        label: "Email",
        href: `mailto:${c.email}`,
        copyValue: c.email,
        icon: <Mail size={18} aria-hidden="true" />,
      },
      {
        label: "WhatsApp",
        href: `https://${c.whatsapp}`,
        copyValue: c.whatsapp.replace("wa.me/", ""),
        icon: <Phone size={18} aria-hidden="true" />,
      },
      {
        label: "LinkedIn",
        href: c.linkedin,
        copyValue: c.linkedin,
        icon: <Linkedin size={18} aria-hidden="true" />,
      },
      {
        label: "GitHub",
        href: c.github,
        copyValue: c.github,
        icon: <Github size={18} aria-hidden="true" />,
      },
    ],
    [c]
  );

  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      trackEvent("contact_copy", { label });
      setFeedback({
        type: "success",
        message: locale === "id" ? "Berhasil disalin." : "Copied to clipboard.",
      });
    } catch {
      setFeedback({
        type: "error",
        message: locale === "id" ? "Gagal menyalin." : "Failed to copy.",
      });
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFeedback(null);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      company: form.company.trim(),
      formStartedAt: formStartedAt.current,
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFeedback({
        type: "error",
        message:
          locale === "id"
            ? "Mohon lengkapi nama, email, dan pesan terlebih dahulu."
            : "Please complete name, email, and message first.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message.");
      }

      trackEvent("contact_form_submit", {
        subject: payload.subject || "Portfolio message",
      });

      setFeedback({
        type: "success",
        message:
          locale === "id"
            ? "Pesan berhasil dikirim. Saya akan segera merespons."
            : "Message sent successfully. I will get back to you soon.",
      });

      setForm(initialForm);
      formStartedAt.current = Date.now();
    } catch (error) {
      trackEvent("contact_form_error");

      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : locale === "id"
            ? "Gagal mengirim pesan."
            : "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10">
      <div className="mb-5">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {locale === "id" ? "Kontak" : "Contact"}
        </h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {locale === "id" ? "Mari terhubung. Saya biasanya merespons dengan cepat." : "Let’s connect. I usually reply fast."}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:col-span-2">
          <p className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            {content.availability}
          </p>

          <h3 className="mt-4 text-xl font-semibold">
            {locale === "id" ? "Ingin bekerja sama?" : "Want to work together?"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {content.contactIntro}
          </p>

          <div className="mt-5 grid gap-3">
            {items.map((it) => (
              <div
                key={it.label}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <IconPill>{it.icon}</IconPill>
                    <p className="text-sm font-semibold">{it.label}</p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {it.copyValue ? (
                      <ActionButton
                        onClick={() => copy(it.copyValue!, it.label)}
                        title={`${locale === "id" ? "Salin" : "Copy"} ${it.label}`}
                      >
                        <Copy size={16} aria-hidden="true" />
                      </ActionButton>
                    ) : null}

                    <OpenLink href={it.href} label={`Open ${it.label}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:col-span-3">
          <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange("company")}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  {locale === "id" ? "Nama" : "Name"}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder={locale === "id" ? "Nama Anda" : "Your name"}
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:ring-neutral-800"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="your@email.com"
                  className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:ring-neutral-800"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="text-sm font-semibold">
                {locale === "id" ? "Subjek" : "Subject"}
              </label>
              <input
                id="contact-subject"
                type="text"
                value={form.subject}
                onChange={handleChange("subject")}
                placeholder={locale === "id" ? "contoh: Peluang magang" : "e.g., Internship opportunity"}
                className="mt-2 w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:ring-neutral-800"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-sm font-semibold">
                {locale === "id" ? "Pesan" : "Message"}
              </label>
              <textarea
                id="contact-message"
                required
                value={form.message}
                onChange={handleChange("message")}
                placeholder={locale === "id" ? "Tulis pesan Anda..." : "Write your message..."}
                className="mt-2 min-h-[160px] w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-neutral-200 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:ring-neutral-800"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-neutral-900"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" aria-hidden="true" />
                  {locale === "id" ? "Mengirim..." : "Sending..."}
                </>
              ) : locale === "id" ? (
                "Kirim Pesan"
              ) : (
                "Send Message"
              )}
            </button>

            {feedback ? (
              <div
                role="status"
                aria-live="polite"
                className={`flex items-start gap-2 rounded-2xl border px-4 py-3 text-sm ${
                  feedback.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300"
                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
                }`}
              >
                {feedback.type === "success" ? (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                ) : (
                  <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                )}
                <p>{feedback.message}</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}