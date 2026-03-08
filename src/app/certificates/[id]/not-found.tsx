import Container from "@/components/Container";
import NotFoundView from "@/components/NotFoundView";

export default function CertificateNotFound() {
  return (
    <Container>
      <NotFoundView
        titleEn="Certificate not found"
        titleId="Sertifikat tidak ditemukan"
        descriptionEn="The certificate you are looking for could not be found."
        descriptionId="Sertifikat yang Anda cari tidak dapat ditemukan."
        backHref="/certificates"
        backLabelEn="Back to Certificates"
        backLabelId="Kembali ke Sertifikat"
      />
    </Container>
  );
}