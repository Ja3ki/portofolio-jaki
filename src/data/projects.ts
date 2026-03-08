import type { Locale } from "@/data/profile";

type ProjectContent = {
  title: string;
  description?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  responsibilities?: string[];
  impact?: string[];
};

export type Project = {
  id: string;
  role?: string;
  duration?: string;
  tags?: string[];
  github?: string;
  docs?: string;
  demo?: string;
  file?: string;
  tools?: string[];
  content: Record<Locale, ProjectContent>;
};

export const projects: Project[] = [
  {
    id: "manufacturing-information-system",
    role: "Project Manager",
    duration: "4 months",
    tags: ["Project Management", "Manufacturing", "Internal System"],
    docs: "https://docs.google.com/document/d/17GHpHOUaMHykKB6slBoTKnuinsRCwJGXoArv37IUtRI/edit?usp=sharing",
    tools: ["Jira", "Spreadsheet", "Figma", "Documentation"],
    content: {
      en: {
        title: "Manufacturing Information System (Jeans Production Tracking)",
        description:
          "Internal system to track jeans production from start to finish using a batch-based workflow. Each batch uses QR-based identification to support product verification and production monitoring.",
        overview:
          "This project focused on improving visibility across the jeans production process. The system was designed to help users monitor every batch, trace production status, and reduce manual confusion during operational tracking.",
        problem:
          "Production monitoring was still dependent on manual notes and fragmented communication. This made it difficult to know the exact status of a batch, slowed down verification, and reduced operational visibility for the team.",
        solution:
          "I coordinated the development of a batch-based manufacturing information system with QR-supported identification. The system was designed to make product verification easier, centralize monitoring, and provide a clearer production flow from start to finish.",
        responsibilities: [
          "Defined project scope, timeline, and delivery milestones",
          "Coordinated developer and UI/UX collaboration during implementation",
          "Monitored progress and ensured feature delivery stayed aligned with goals",
          "Helped translate operational needs into structured system requirements",
        ],
        impact: [
          "Improved visibility of production status across batches and workflow stages",
          "Reduced reliance on fragmented manual checking during operational monitoring",
          "Made verification and production tracking more structured for the team",
        ],
      },
      id: {
        title: "Manufacturing Information System (Pelacakan Produksi Jeans)",
        description:
          "Sistem internal untuk melacak produksi jeans dari awal hingga akhir menggunakan alur kerja berbasis batch. Setiap batch menggunakan identifikasi berbasis QR untuk mendukung verifikasi produk dan monitoring produksi.",
        overview:
          "Proyek ini berfokus pada peningkatan visibilitas proses produksi jeans. Sistem dirancang untuk membantu pengguna memantau setiap batch, melacak status produksi, dan mengurangi kebingungan manual dalam monitoring operasional.",
        problem:
          "Monitoring produksi masih bergantung pada catatan manual dan komunikasi yang terpisah-pisah. Hal ini menyulitkan pelacakan status batch, memperlambat verifikasi, dan mengurangi visibilitas operasional tim.",
        solution:
          "Saya mengoordinasikan pengembangan sistem informasi manufaktur berbasis batch dengan dukungan identifikasi QR. Sistem ini dirancang untuk mempermudah verifikasi produk, memusatkan monitoring, dan memberikan alur produksi yang lebih jelas dari awal hingga akhir.",
        responsibilities: [
          "Menentukan scope proyek, timeline, dan delivery milestone",
          "Mengoordinasikan kolaborasi developer dan UI/UX selama implementasi",
          "Memantau progres dan memastikan delivery fitur tetap sesuai tujuan",
          "Membantu menerjemahkan kebutuhan operasional menjadi requirement sistem yang terstruktur",
        ],
        impact: [
          "Meningkatkan visibilitas status produksi di berbagai batch dan tahapan kerja",
          "Mengurangi ketergantungan pada pengecekan manual yang terpisah",
          "Membuat verifikasi dan tracking produksi lebih terstruktur untuk tim",
        ],
      },
    },
  },
  {
    id: "online-seller-tools",
    role: "Project Manager",
    duration: "1 month",
    tags: ["Project Management", "Analytics", "Dashboard"],
    tools: ["Jira", "Spreadsheet", "Dashboard Planning", "Documentation"],
    content: {
      en: {
        title: "Online Seller Tools (Analytics & Reporting)",
        description:
          "Analytics and reporting application for online sellers to monitor sales, revenue, profit, product comparisons, and downloadable reports for faster business analysis.",
        overview:
          "This project was built to help online sellers read business performance more quickly through one analytics dashboard. The focus was on turning sales data into practical reporting and comparisons that support daily decisions.",
        problem:
          "Many online sellers still review store performance manually, making it harder to compare products, analyze revenue trends, and track profit efficiently.",
        solution:
          "I managed the development of an analytics and reporting application that organized sales, revenue, and profit data into a single dashboard. The product also supported comparison views and downloadable reporting for easier business review.",
        responsibilities: [
          "Planned the project timeline and delivery targets",
          "Managed coordination between design and development work",
          "Tracked feature progress and clarified reporting priorities",
          "Ensured the dashboard stayed aligned with user business needs",
        ],
        impact: [
          "Made sales and profit reporting easier to review in one dashboard",
          "Helped users compare product performance more quickly",
          "Improved access to business insights for day-to-day decision making",
        ],
      },
      id: {
        title: "Online Seller Tools (Analytics & Reporting)",
        description:
          "Aplikasi analitik dan reporting untuk penjual online guna memantau penjualan, revenue, profit, perbandingan produk, dan laporan unduhan untuk analisis bisnis yang lebih cepat.",
        overview:
          "Proyek ini dibuat untuk membantu penjual online membaca performa bisnis lebih cepat melalui satu dashboard analitik. Fokus utamanya adalah mengubah data penjualan menjadi reporting dan perbandingan yang praktis untuk keputusan harian.",
        problem:
          "Banyak penjual online masih meninjau performa toko secara manual, sehingga lebih sulit membandingkan produk, menganalisis tren revenue, dan melacak profit secara efisien.",
        solution:
          "Saya mengelola pengembangan aplikasi analitik dan reporting yang merangkum data penjualan, revenue, dan profit ke dalam satu dashboard. Produk ini juga mendukung tampilan perbandingan dan reporting yang dapat diunduh.",
        responsibilities: [
          "Merencanakan timeline proyek dan target delivery",
          "Mengelola koordinasi antara pekerjaan desain dan development",
          "Melacak progres fitur dan memperjelas prioritas reporting",
          "Memastikan dashboard tetap selaras dengan kebutuhan bisnis pengguna",
        ],
        impact: [
          "Membuat reporting penjualan dan profit lebih mudah ditinjau dalam satu dashboard",
          "Membantu pengguna membandingkan performa produk dengan lebih cepat",
          "Meningkatkan akses terhadap insight bisnis untuk pengambilan keputusan harian",
        ],
      },
    },
  },
  {
    id: "warehouse-management-system",
    role: "Project Manager",
    duration: "1 month",
    tags: ["Project Management", "Warehouse", "Operations"],
    tools: ["Jira", "Spreadsheet", "Operational Documentation"],
    content: {
      en: {
        title: "Warehouse Management System",
        description:
          "Internal warehouse management system for stock recording, inbound and outbound goods tracking, and concise operational reporting to improve inventory visibility.",
        overview:
          "This internal warehouse project focused on stock visibility and operational discipline. The system was designed to simplify inbound and outbound goods tracking while keeping inventory reporting more organized.",
        problem:
          "Warehouse stock handling often becomes inefficient when inbound and outbound records are tracked manually or in separate places. This creates delays, inconsistent stock visibility, and reporting friction.",
        solution:
          "I managed the development of a warehouse management system that centralized stock recording, goods movement tracking, and operational reporting into a more structured workflow.",
        responsibilities: [
          "Defined the implementation scope and timeline",
          "Coordinated feature alignment with operational requirements",
          "Monitored progress and ensured team execution stayed on schedule",
          "Supported translation of warehouse workflow into system features",
        ],
        impact: [
          "Improved visibility of stock movement and inventory status",
          "Helped operations track inbound and outbound goods more clearly",
          "Supported more concise and structured warehouse reporting",
        ],
      },
      id: {
        title: "Warehouse Management System",
        description:
          "Sistem manajemen gudang internal untuk pencatatan stok, pelacakan barang masuk dan keluar, serta reporting operasional yang ringkas guna meningkatkan visibilitas inventaris.",
        overview:
          "Proyek gudang internal ini berfokus pada visibilitas stok dan disiplin operasional. Sistem dirancang untuk menyederhanakan pelacakan barang masuk dan keluar sambil membuat reporting inventaris lebih rapi.",
        problem:
          "Pengelolaan stok gudang sering menjadi tidak efisien ketika pencatatan barang masuk dan keluar dilakukan manual atau terpisah. Hal ini menimbulkan keterlambatan, visibilitas stok yang tidak konsisten, dan hambatan reporting.",
        solution:
          "Saya mengelola pengembangan sistem manajemen gudang yang memusatkan pencatatan stok, pelacakan pergerakan barang, dan reporting operasional ke dalam workflow yang lebih terstruktur.",
        responsibilities: [
          "Menentukan scope implementasi dan timeline",
          "Mengoordinasikan keselarasan fitur dengan kebutuhan operasional",
          "Memantau progres dan memastikan eksekusi tim tetap sesuai jadwal",
          "Mendukung penerjemahan workflow gudang ke dalam fitur sistem",
        ],
        impact: [
          "Meningkatkan visibilitas pergerakan stok dan status inventaris",
          "Membantu operasional melacak barang masuk dan keluar dengan lebih jelas",
          "Mendukung reporting gudang yang lebih ringkas dan terstruktur",
        ],
      },
    },
  },
  {
    id: "twitter-sentiment-analysis",
    role: "Data Analyst",
    duration: "Personal Project",
    tags: ["Python", "NLP", "TextBlob", "Sentiment Analysis"],
    github: "https://github.com/Ja3ki/project-twitter",
    tools: ["Python", "TextBlob", "Pandas", "Google Colab"],
    content: {
      en: {
        title: "Twitter Sentiment Analysis",
        description:
          "Sentiment analysis project on tweet data using TextBlob. Covers text preprocessing, cleaning, and sentiment classification into positive, negative, and neutral labels.",
        overview:
          "This project explored public sentiment from tweet data using a lightweight NLP workflow. The goal was to classify text into positive, negative, and neutral sentiment categories after a preprocessing pipeline.",
        problem:
          "Raw tweet data is noisy and difficult to interpret directly. Without cleaning and classification, it is hard to understand the overall public sentiment around a topic.",
        solution:
          "I built a sentiment analysis workflow using Python and TextBlob. The project included preprocessing, text cleaning, and polarity-based classification to convert tweet data into readable sentiment outputs.",
        responsibilities: [
          "Prepared and cleaned raw tweet text data",
          "Built sentiment classification logic using TextBlob",
          "Organized outputs for positive, negative, and neutral analysis",
          "Documented the analysis flow and result interpretation",
        ],
        impact: [
          "Turned noisy tweet data into structured sentiment categories",
          "Created a repeatable text preprocessing and classification workflow",
          "Helped summarize public opinion patterns more clearly",
        ],
      },
      id: {
        title: "Twitter Sentiment Analysis",
        description:
          "Proyek analisis sentimen pada data tweet menggunakan TextBlob. Mencakup preprocessing teks, cleaning, dan klasifikasi sentimen menjadi positif, negatif, dan netral.",
        overview:
          "Proyek ini mengeksplorasi sentimen publik dari data tweet menggunakan workflow NLP yang ringan. Tujuannya adalah mengklasifikasikan teks menjadi kategori positif, negatif, dan netral setelah proses preprocessing.",
        problem:
          "Data tweet mentah bersifat noisy dan sulit diinterpretasikan secara langsung. Tanpa proses cleaning dan classification, sulit memahami gambaran sentimen publik terhadap suatu topik.",
        solution:
          "Saya membangun workflow analisis sentimen menggunakan Python dan TextBlob. Proyek ini mencakup preprocessing, text cleaning, dan klasifikasi berbasis polarity untuk mengubah data tweet menjadi output sentimen yang lebih mudah dibaca.",
        responsibilities: [
          "Menyiapkan dan membersihkan data teks tweet mentah",
          "Membangun logika klasifikasi sentimen menggunakan TextBlob",
          "Menyusun output untuk analisis positif, negatif, dan netral",
          "Mendokumentasikan alur analisis dan interpretasi hasil",
        ],
        impact: [
          "Mengubah data tweet yang noisy menjadi kategori sentimen yang terstruktur",
          "Membuat workflow preprocessing dan classification yang dapat diulang",
          "Membantu merangkum pola opini publik dengan lebih jelas",
        ],
      },
    },
  },
];