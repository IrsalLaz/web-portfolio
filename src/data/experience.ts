import type { Lang } from "../i18n/ui";

export interface Role {
  key: string;
  short: string;
  summary: string;
  title: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
  tech?: string[];
}

const en: Role[] = [
  {
    key: "duluin",
    short: "Duluin",
    summary:
      "Backend-focused engineer on the Duluin Gajian and Duluin Stake platforms: identity and access, money movement, and the move from a Laravel monolith to Go and Node.js services.",
    title: "Software Engineer",
    company: "Duluin (PT. Rasa Aksata Nusantara)",
    period: "Apr 2025 – Present",
    location: "Bandung, Indonesia",
    current: true,
    bullets: [
      "Designed and implemented an event-driven migration of identity and access from a Laravel monolith to a dedicated auth service, using a RabbitMQ saga with transactional outbox and inbox, trigger-based change data capture, gateway-level authorization and a reversible, feature-flagged cutover.",
      "As PIC, designed ROI calculation and bank disbursement for investors, with role-based approval, automatic ledger records and transfer receipts, which significantly reduced payout time.",
      "As PIC, designed and implemented the claim disbursement integration between the group's HRMS app and Duluin's disbursement pipeline, secured with OAuth2 client credentials and idempotent claim IDs.",
      "Built auth and API security features: tenant credentials with approval-based rotation, TOTP two-factor authentication for admins, and rate limiting at the gateway and in the auth service. Contributed to the transaction PIN.",
      "Designed and built a campaign engine for vouchers, cashback, referral codes and point grants, targeted per client company with quota and per-user rules.",
      "Automated warning-letter escalation for overdue invoices with an approval step, built investor maturity reminders as PIC, and automated contract-data matching and lead clean-up. Worked with the team on PPOB transaction limits and approvals.",
      "Rewrote RBAC in a Go service to stay compatible with Laravel's Spatie permissions, and built a per-user permission report for access reviews.",
      "Take features from PRD to deployment notes, working with business, finance, customer support and investment teams.",
    ],
    tech: ["Go", "Node.js", "Fastify", "Laravel", "MySQL", "Redis", "RabbitMQ"],
  },
  {
    key: "duluin-intern",
    short: "Duluin",
    summary: "Started on the public landing page, then moved to backend work on notifications and campaigns.",
    title: "Software Engineer Intern",
    company: "Duluin (PT. Rasa Aksata Nusantara)",
    period: "Feb 2025 – Apr 2025",
    location: "Bandung, Indonesia",
    bullets: [
      "Built the company's public landing page, then moved to backend work.",
      "Built the Laravel side of the push broadcast system — scheduling, Redis queue and duplicate-send protection — moving event, reminder and promotion messages to scheduled Firebase push notifications.",
      "Contributed to the campaign management system: vouchers, cashback and point injection.",
    ],
    tech: ["Laravel", "Redis", "Horizon"],
  },
  {
    key: "ntt",
    short: "NTT Ltd.",
    summary: "Built internal web tooling that automated preventive-maintenance reporting.",
    title: "Frontend Web Developer",
    company: "NTT Ltd.",
    period: "Jul 2023 – Jul 2024",
    location: "Jakarta, Indonesia",
    bullets: [
      "Built a Python and Flask web portal that automates preventive-maintenance reports, cutting preparation from about two weeks of manual work to about two minutes.",
      "Connected frontend and backend through REST APIs, tested endpoints with Postman, and deployed to the company's internal infrastructure.",
      "Wrote the functional specification document for technical and non-technical stakeholders.",
    ],
    tech: ["Python", "Flask", "REST", "Postman", "Git"],
  },
  {
    key: "ta",
    short: "Telkom University",
    summary: "Supported students in the Database and Programming Algorithms courses.",
    title: "Teaching Assistant",
    company: "Telkom University",
    period: "Oct–Dec 2022, Mar–Jun 2023",
    location: "Bandung, Indonesia",
    bullets: [
      "Ran lab sessions and review classes for Database and Programming Algorithms courses, and gave feedback on assignments.",
    ],
  },
];

// Job titles stay in English, as they appear on contracts and LinkedIn.
const id: Role[] = [
  {
    ...en[0],
    summary:
      "Engineer dengan fokus backend di platform Duluin Gajian dan Duluin Stake: identitas dan akses, perpindahan dana, serta perpindahan dari monolit Laravel ke service berbasis Go dan Node.js.",
    period: "Apr 2025 – Sekarang",
    bullets: [
      "Merancang dan mengimplementasikan migrasi identitas dan akses berbasis event dari monolit Laravel ke auth service tersendiri, dengan saga di RabbitMQ yang memakai transactional outbox dan inbox, change data capture berbasis trigger, otorisasi di gateway, dan cutover berbasis feature flag yang bisa di-rollback.",
      "Sebagai PIC, merancang perhitungan ROI dan pencairan dana via bank untuk investor, dengan approval berbasis peran, pencatatan ledger otomatis, dan bukti transfer, sehingga waktu payout berkurang secara signifikan.",
      "Sebagai PIC, merancang dan mengimplementasikan integrasi pencairan klaim antara aplikasi HRMS milik grup dan pipeline pencairan Duluin, diamankan dengan OAuth2 client credentials dan ID klaim yang idempotent.",
      "Membangun fitur keamanan auth dan API: tenant credential dengan rotasi berbasis approval, two-factor authentication TOTP untuk admin, serta rate limiting di gateway dan auth service. Berkontribusi pada PIN transaksi.",
      "Merancang dan membangun mesin kampanye untuk voucher, cashback, kode referral, dan pemberian poin, yang bisa ditargetkan per perusahaan klien dengan aturan kuota dan batas per pengguna.",
      "Mengotomasi eskalasi surat peringatan untuk invoice yang terlambat dengan langkah approval, membangun pengingat jatuh tempo investor sebagai PIC, serta mengotomasi pencocokan data kontrak dan pembersihan data leads. Bersama tim mengerjakan limit transaksi dan approval PPOB.",
      "Menulis ulang RBAC di sebuah service Go agar tetap kompatibel dengan permission Spatie di Laravel, dan membangun laporan permission per pengguna untuk review akses.",
      "Membawa fitur dari PRD sampai catatan deployment, bekerja sama dengan tim bisnis, finance, customer support, dan investasi.",
    ],
  },
  {
    ...en[1],
    summary: "Memulai dari landing page publik, lalu pindah ke pekerjaan backend untuk notifikasi dan kampanye.",
    bullets: [
      "Membangun landing page publik perusahaan, lalu pindah ke pekerjaan backend.",
      "Membangun sisi Laravel dari sistem push broadcast — penjadwalan, Redis queue, dan proteksi pengiriman ganda — yang memindahkan pesan event, pengingat, dan promosi ke push notification Firebase terjadwal.",
      "Berkontribusi pada sistem manajemen kampanye: voucher, cashback, dan point injection.",
    ],
  },
  {
    ...en[2],
    summary: "Membangun tooling web internal yang mengotomasi pelaporan preventive maintenance.",
    period: "Jul 2023 – Jul 2024",
    bullets: [
      "Membangun portal web berbasis Python dan Flask yang mengotomasi laporan preventive maintenance, memangkas waktu penyusunan dari sekitar dua minggu kerja manual menjadi sekitar dua menit.",
      "Menghubungkan frontend dan backend lewat REST API, menguji endpoint dengan Postman, dan melakukan deployment ke infrastruktur internal perusahaan.",
      "Menulis functional specification document untuk stakeholder teknis maupun non-teknis.",
    ],
  },
  {
    ...en[3],
    summary: "Mendampingi mahasiswa di mata kuliah Basis Data dan Algoritma Pemrograman.",
    period: "Okt–Des 2022, Mar–Jun 2023",
    bullets: [
      "Memandu sesi praktikum dan kelas review untuk mata kuliah Basis Data dan Algoritma Pemrograman, serta memberi umpan balik atas tugas.",
    ],
  },
];

export const experience: Record<Lang, Role[]> = { en, id };

export const education: Record<Lang, { school: string; degree: string; period: string }> = {
  en: { school: "Telkom University", degree: "Diploma (D3) in Software Engineering", period: "Sep 2021 – Jul 2024" },
  id: { school: "Telkom University", degree: "Diploma (D3) Rekayasa Perangkat Lunak Aplikasi", period: "Sep 2021 – Jul 2024" },
};

export const certifications = {
  issuer: "Dicoding",
  items: ["Belajar Dasar Structured Query Language (SQL)", "Belajar Dasar Pemrograman Web", "Belajar Dasar AI"],
};
