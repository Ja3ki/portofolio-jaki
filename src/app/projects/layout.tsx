import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected project management and data analysis work, including internal systems, analytics dashboards, and public repositories.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects",
    description:
      "Selected project management and data analysis work, including internal systems, analytics dashboards, and public repositories.",
    url: "/projects",
  },
  twitter: {
    title: "Projects",
    description:
      "Selected project management and data analysis work, including internal systems, analytics dashboards, and public repositories.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}