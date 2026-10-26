import type { Lang } from "../i18n/ui";

// Language-independent facts.
export const site = {
  name: "Irsal Lazuard Izzatillah",
  shortName: "Irsal Lazuard",
  initials: "IL",
  title: "Software Engineer",
  url: "https://irsal-lazuard.vercel.app",
  email: "irsallazuard547@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/irsal-lazuard-izzatillah-850927229/",
    github: "https://github.com/IrsalLaz",
  },
  cv: {
    pdf: "/cv/irsal-lazuard-izzatillah-cv.pdf",
    docx: "/cv/irsal-lazuard-izzatillah-cv.docx",
  },
  roleLabel: "Software Engineer @ Duluin",
  city: "Bandung",
  timeZone: "Asia/Jakarta",
  ogDescription: "Backend and distributed systems for fintech — Go, Node.js, Laravel, MySQL, Redis, RabbitMQ.",
} as const;

interface Copy {
  location: string;
  description: string;
  headline: string;
  sub: string;
  openTo: string;
  about: string[];
  contact: { heading: string; body: string };
}

export const copy: Record<Lang, Copy> = {
  en: {
    location: "Bandung, Indonesia",
    description:
      "Software engineer in Bandung building secure, reliable backend systems for fintech: authentication and authorization, payment and disbursement flows, and monolith-to-services migration.",
    headline: "I build secure, reliable backend systems for fintech.",
    sub: "At Duluin, I work on authentication and authorization, payment and disbursement flows, and the move from a Laravel monolith to services in Go and Node.js.",
    openTo: "backend engineering and system design.",
    about: [
      "I'm a software engineer at Duluin (PT. Rasa Aksata Nusantara), an earned-wage-access fintech that serves blue-collar workers and the companies that employ them. I joined as an intern in February 2025 and joined the engineering team as a Software Engineer in April 2025.",
      "Most of my work is backend: authentication and API security, the flows that move money to investors and employees, and moving identity and access out of a Laravel monolith into services. I write Go, Node.js (Fastify) and PHP (Laravel), and I build the internal dashboards that operations, finance and investment teams use every day — so I work across the stack when a feature needs it.",
      "I usually own a feature from the PRD to the deployment notes: breaking it into daily and weekly tasks, reviewing it with senior engineers, and taking it through QA and UAT. Because the systems handle money, I work closely with business, finance, customer support and investment teams.",
      "I'm building depth in system design and software architecture. Event-driven design, data migration and access control are where I'm learning the most.",
    ],
    contact: {
      heading: "Let's talk",
      body: "Happy to talk about backend engineering, system design and fintech. Email is the fastest way to reach me.",
    },
  },
  id: {
    location: "Bandung, Indonesia",
    description:
      "Software engineer di Bandung yang membangun sistem backend yang aman dan andal untuk fintech: autentikasi dan otorisasi, alur pembayaran dan pencairan dana, serta migrasi dari monolit ke service.",
    headline: "Saya membangun sistem backend yang aman dan andal untuk fintech.",
    sub: "Di Duluin, saya mengerjakan autentikasi dan otorisasi, alur pembayaran dan pencairan dana, serta perpindahan dari monolit Laravel ke service berbasis Go dan Node.js.",
    openTo: "backend engineering dan system design.",
    about: [
      "Saya software engineer di Duluin (PT. Rasa Aksata Nusantara), perusahaan fintech earned wage access yang melayani pekerja blue-collar dan perusahaan tempat mereka bekerja. Saya bergabung sebagai intern pada Februari 2025, lalu bergabung dengan tim engineering sebagai Software Engineer sejak April 2025.",
      "Sebagian besar pekerjaan saya ada di backend: autentikasi dan keamanan API, alur yang menyalurkan dana ke investor dan karyawan, serta pemindahan identitas dan akses dari monolit Laravel ke service. Saya menulis Go, Node.js (Fastify), dan PHP (Laravel), dan saya juga membangun dashboard internal yang dipakai tim operasional, finance, dan investasi setiap hari — jadi saya bekerja lintas stack saat sebuah fitur membutuhkannya.",
      "Biasanya saya memegang sebuah fitur dari PRD sampai catatan deployment: memecahnya menjadi task harian dan mingguan, me-review bersama engineer senior, lalu membawanya melewati QA dan UAT. Karena sistemnya mengelola uang, saya bekerja erat dengan tim bisnis, finance, customer support, dan investasi.",
      "Saat ini saya sedang memperdalam system design dan software architecture. Desain berbasis event, migrasi data, dan kontrol akses adalah area tempat saya paling banyak belajar.",
    ],
    contact: {
      heading: "Mari ngobrol",
      body: "Senang berdiskusi tentang backend engineering, system design, dan fintech. Email adalah cara tercepat untuk menghubungi saya.",
    },
  },
};
