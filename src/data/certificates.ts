import type { Locale } from "@/data/profile";

type CertificateContent = {
  title: string;
  category?: string;
};

export type Certificate = {
  id: string;
  issuer: string;
  year: string | number;
  pdfUrl?: string;
  verifyUrl?: string;
  content: Record<Locale, CertificateContent>;
};

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/1.pdf",
    content: {
      en: {
        title: "Introduction to Product Management",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Introduction to Product Management",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-2",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/2.pdf",
    content: {
      en: {
        title: "Product Development & Lifecycle",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Product Development & Lifecycle",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-3",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/3.pdf",
    content: {
      en: {
        title: "Understanding Business Model",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Understanding Business Model",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-4",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/4.pdf",
    content: {
      en: {
        title: "Product Vision and North Star",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Product Vision and North Star",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-5",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/5.pdf",
    content: {
      en: {
        title: "Problem and Product Discovery",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Problem and Product Discovery",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-6",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/6.pdf",
    content: {
      en: {
        title: "Product Ideation",
        category: "Product Management Fundamentals",
      },
      id: {
        title: "Product Ideation",
        category: "Fundamental Product Management",
      },
    },
  },
  {
    id: "cert-7",
    issuer: "MySkill",
    year: 2025,
    pdfUrl: "/certificates/7.pdf",
    content: {
      en: {
        title: "Project Management & Scrum Framework",
        category: "Project Management",
      },
      id: {
        title: "Project Management & Scrum Framework",
        category: "Project Management",
      },
    },
  },
  {
    id: "cert-8",
    issuer: "Dicoding",
    year: 2024,
    pdfUrl: "/certificates/8.pdf",
    content: {
      en: {
        title: "Belajar Dasar Data Science",
        category: "Data Science",
      },
      id: {
        title: "Belajar Dasar Data Science",
        category: "Data Science",
      },
    },
  },
];