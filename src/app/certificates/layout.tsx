import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates",
  description:
    "Professional certificates, downloadable PDF credentials, and learning achievements in project management and data science.",
  alternates: {
    canonical: "/certificates",
  },
  openGraph: {
    title: "Certificates",
    description:
      "Professional certificates, downloadable PDF credentials, and learning achievements in project management and data science.",
    url: "/certificates",
  },
  twitter: {
    title: "Certificates",
    description:
      "Professional certificates, downloadable PDF credentials, and learning achievements in project management and data science.",
  },
};

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}