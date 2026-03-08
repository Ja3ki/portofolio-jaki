export type Locale = "en" | "id";

type ProfileContent = {
  availability: string;
  heroSummary: string;
  about: string[];
  focusAreas: string[];
  highlights: Array<{
    title: string;
    description: string;
  }>;
  contactIntro: string;
  education: Array<{
    institution: string;
    major: string;
    degree: string;
    period: string;
    gpa?: string;
  }>;
  experience: Array<{
    title: string;
    organization: string;
    type: string;
  }>;
};

export const profile = {
  name: "Fachri Muzaki",
  headline: "Project Manager • Data Analyst",
  location: "Indonesia",
  siteUrl: "https://your-portfolio.vercel.app",
  metrics: {
    toefl: "477",
  },
  analytics: {
    googleMeasurementId: "",
  },
  contact: {
    email: "fachrimuzaki4@gmail.com",
    whatsapp: "wa.me/6285729112136",
    linkedin: "https://www.linkedin.com/in/fachri-muzaki-3b4693240",
    github: "https://github.com/Ja3ki",
  },
  content: {
    en: {
      availability: "Open to full-time, internship, and freelance opportunities",
      heroSummary:
        "Project Manager and Data Analyst with experience coordinating cross-functional teams, managing delivery milestones, and building data-driven systems for operational efficiency.",
      about: [
        "Fresh graduate candidate from Institut Widya Pratama (S1, 2022–2026) with a GPA of 3.7. Experienced in internships and project-based work, especially in project coordination, reporting, and system improvement.",
        "Comfortable working with development and UI/UX teams, tracking progress, managing timelines, and translating business needs into structured execution. Familiar with Jira, spreadsheets, dashboards, and operational reporting.",
      ],
      focusAreas: [
        "Project planning & delivery",
        "KPI, analytics & reporting",
        "Stakeholder communication",
        "System improvement & efficiency",
      ],
      highlights: [
        {
          title: "Project Coordination",
          description:
            "Experienced in aligning team execution, timelines, milestones, and project delivery across cross-functional work.",
        },
        {
          title: "Operational Visibility",
          description:
            "Focused on building systems and reporting flows that improve monitoring, clarity, and decision-making.",
        },
        {
          title: "Data-Driven Thinking",
          description:
            "Comfortable turning raw operational data into dashboards, summaries, and more actionable business insights.",
        },
      ],
      contactIntro:
        "Open to opportunities in Project Management, Data Analysis, and technology-driven business roles.",
      education: [
        {
          institution: "Institut Widya Pratama",
          major: "Information Systems",
          degree: "Bachelor's Degree",
          period: "2022 – 2026",
          gpa: "3.7",
        },
      ],
      experience: [
        {
          title: "Intern",
          organization: "PT Publika Investa Karya",
          type: "Internship",
        },
        {
          title: "Intern",
          organization: "Dinas Kearsipan dan Perpustakaan Pekalongan",
          type: "Internship",
        },
      ],
    },
    id: {
      availability: "Terbuka untuk peluang full-time, magang, dan freelance",
      heroSummary:
        "Project Manager dan Data Analyst dengan pengalaman mengoordinasikan tim lintas fungsi, mengelola milestone delivery, dan membangun sistem berbasis data untuk meningkatkan efisiensi operasional.",
      about: [
        "Calon fresh graduate dari Institut Widya Pratama (S1, 2022–2026) dengan IPK 3.7. Memiliki pengalaman internship dan project-based work, khususnya dalam koordinasi proyek, reporting, dan system improvement.",
        "Terbiasa bekerja dengan tim development dan UI/UX, memantau progres, mengelola timeline, dan menerjemahkan kebutuhan bisnis menjadi eksekusi yang terstruktur. Familiar dengan Jira, spreadsheet, dashboard, dan reporting operasional.",
      ],
      focusAreas: [
        "Perencanaan & delivery proyek",
        "KPI, analitik & reporting",
        "Komunikasi stakeholder",
        "Improvement sistem & efisiensi",
      ],
      highlights: [
        {
          title: "Koordinasi Proyek",
          description:
            "Berpengalaman menyelaraskan eksekusi tim, timeline, milestone, dan delivery proyek dalam kerja lintas fungsi.",
        },
        {
          title: "Visibilitas Operasional",
          description:
            "Fokus membangun sistem dan alur reporting yang meningkatkan monitoring, kejelasan, dan pengambilan keputusan.",
        },
        {
          title: "Data-Driven Thinking",
          description:
            "Nyaman mengubah data operasional mentah menjadi dashboard, ringkasan, dan insight bisnis yang lebih dapat ditindaklanjuti.",
        },
      ],
      contactIntro:
        "Terbuka untuk peluang di bidang Project Management, Data Analysis, dan peran bisnis berbasis teknologi.",
      education: [
        {
          institution: "Institut Widya Pratama",
          major: "Sistem Informasi",
          degree: "Sarjana",
          period: "2022 – 2026",
          gpa: "3.7",
        },
      ],
      experience: [
        {
          title: "Magang",
          organization: "PT Publika Investa Karya",
          type: "Pengalaman Magang",
        },
        {
          title: "Magang",
          organization: "Dinas Kearsipan dan Perpustakaan Pekalongan",
          type: "Pengalaman Magang",
        },
      ],
    },
  } satisfies Record<Locale, ProfileContent>,
};