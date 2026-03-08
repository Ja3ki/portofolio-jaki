import Container from "@/components/Container";
import NotFoundView from "@/components/NotFoundView";

export default function ProjectNotFound() {
  return (
    <Container>
      <NotFoundView
        titleEn="Project not found"
        titleId="Proyek tidak ditemukan"
        descriptionEn="The project you are looking for could not be found."
        descriptionId="Proyek yang Anda cari tidak dapat ditemukan."
        backHref="/projects"
        backLabelEn="Back to Projects"
        backLabelId="Kembali ke Proyek"
      />
    </Container>
  );
}