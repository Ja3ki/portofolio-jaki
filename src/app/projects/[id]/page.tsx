import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.content.en.title,
    description: project.content.en.description || project.content.en.overview,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      title: project.content.en.title,
      description: project.content.en.description || project.content.en.overview,
      url: `/projects/${project.id}`,
    },
    twitter: {
      title: project.content.en.title,
      description: project.content.en.description || project.content.en.overview,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <ProjectDetailContent project={project} />
    </Container>
  );
}