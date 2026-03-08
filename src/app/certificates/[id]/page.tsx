import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CertificateDetailContent from "@/components/CertificateDetailContent";
import { certificates } from "@/data/certificates";

type CertificateDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return certificates.map((certificate) => ({
    id: certificate.id,
  }));
}

export async function generateMetadata({
  params,
}: CertificateDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const certificate = certificates.find((item) => item.id === id);

  if (!certificate) {
    return {
      title: "Certificate Not Found",
    };
  }

  return {
    title: certificate.content.en.title,
    description: `${certificate.content.en.title} — ${certificate.issuer} (${certificate.year})`,
    alternates: {
      canonical: `/certificates/${certificate.id}`,
    },
    openGraph: {
      title: certificate.content.en.title,
      description: `${certificate.content.en.title} — ${certificate.issuer} (${certificate.year})`,
      url: `/certificates/${certificate.id}`,
    },
    twitter: {
      title: certificate.content.en.title,
      description: `${certificate.content.en.title} — ${certificate.issuer} (${certificate.year})`,
    },
  };
}

export default async function CertificateDetailPage({
  params,
}: CertificateDetailPageProps) {
  const { id } = await params;
  const certificate = certificates.find((item) => item.id === id);

  if (!certificate) {
    notFound();
  }

  return (
    <Container>
      <CertificateDetailContent certificate={certificate} />
    </Container>
  );
}