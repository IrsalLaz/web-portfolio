// Single source for the /cv page, the PDF and the DOCX.
// Self-contained (no runtime imports) so scripts/cv-docx.mjs can load it directly.
// No phone number by design.

export interface CvRole {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface CvProject {
  name: string;
  description: string;
  url: string;
}

export const cv = {
  name: "Irsal Lazuard Izzatillah",
  headline: "Software Engineer — Backend & Distributed Systems",
  contacts: [
    { label: "Location", value: "Bandung, Indonesia" },
    { label: "Email", value: "irsallazuard547@gmail.com", href: "mailto:irsallazuard547@gmail.com" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/irsal-lazuard-izzatillah-850927229",
      href: "https://www.linkedin.com/in/irsal-lazuard-izzatillah-850927229/",
    },
    { label: "GitHub", value: "github.com/IrsalLaz", href: "https://github.com/IrsalLaz" },
    { label: "Portfolio", value: "irsal-lazuard.vercel.app", href: "https://irsal-lazuard.vercel.app" },
  ],
  summary:
    "Software engineer at an earned-wage-access fintech, building backend systems in Go, Node.js and Laravel. Works on authentication and authorization, payment and disbursement flows, and the migration of a Laravel monolith into services. Takes features from PRD to deployment and works closely with finance, investment and business teams.",
  skills: [
    { label: "Languages", value: "Go, JavaScript (Node.js), PHP, SQL, Python" },
    { label: "Backend", value: "Fastify, Laravel (Sanctum, Spatie Permission, Horizon), Sequelize, GORM, Flask, REST API design" },
    { label: "Data & Messaging", value: "MySQL 8, Redis, RabbitMQ, MinIO" },
    { label: "Security", value: "OAuth2, JWT (RS256, JWKS), token introspection, TOTP 2FA, RBAC, rate limiting (token bucket, fixed window)" },
    { label: "Architecture", value: "Transactional outbox/inbox, saga choreography, change data capture, feature-flagged migration, idempotent APIs" },
    { label: "Tools", value: "Git, Postman, node --test, go test, PHPUnit, PlantUML, Next.js" },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Duluin (PT. Rasa Aksata Nusantara)",
      location: "Bandung",
      period: "Apr 2025 – Present",
      bullets: [
        "Designed and implemented an event-driven migration of identity and access from a Laravel monolith to a dedicated auth service (Node.js, Go): RabbitMQ saga with transactional outbox/inbox, trigger-based change data capture, gateway-level authorization and a reversible, feature-flagged cutover, covered by automated and end-to-end tests.",
        "As PIC, designed ROI calculation and bank disbursement for investors, with role-based approval, split payouts, automatic ledger records and transfer receipts, significantly reducing payout time.",
        "As PIC, designed and implemented the claim disbursement integration between the group's HRMS app and Duluin's payment pipeline (Go, Laravel), using OAuth2 client credentials, idempotent claim IDs and approval steps.",
        "Built tenant API credentials with approval-based key rotation, TOTP 2FA for admin accounts, and token-bucket rate limiting at the API gateway. Contributed to the transaction PIN.",
        "Designed and built a campaign engine (vouchers, cashback, referral codes, point grants) with company-level targeting, quotas and per-user limits.",
        "Automated invoice warning-letter escalation with an approval step, investor maturity reminders (PIC) and contract-data clean-up. Contributed to PPOB transaction limits and approvals.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Duluin (PT. Rasa Aksata Nusantara)",
      location: "Bandung",
      period: "Feb 2025 – Apr 2025",
      bullets: [
        "Built the Laravel side of a scheduled push-broadcast system (Redis queue, duplicate-send protection), delivering event, reminder and promotion messages as Firebase push notifications.",
        "Built the company landing page; contributed to campaign management (vouchers, cashback, point injection).",
      ],
    },
    {
      title: "Frontend Web Developer",
      company: "NTT Ltd.",
      location: "Jakarta",
      period: "Jul 2023 – Jul 2024",
      bullets: [
        "Built a Python/Flask portal that automates preventive-maintenance reports, cutting preparation from about two weeks to about two minutes.",
        "Integrated REST APIs, tested with Postman, deployed to internal infrastructure, and wrote the functional specification document.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Telkom University",
      location: "Bandung",
      period: "Oct 2022 – Dec 2022, Mar 2023 – Jun 2023",
      bullets: ["Ran lab and review sessions for Database and Programming Algorithms."],
    },
  ] satisfies CvRole[],
  projects: [
    {
      name: "Extracting Identity from a Monolith",
      description: "Event-driven auth service migration across Node.js and Go services with RabbitMQ, MySQL and Redis.",
      url: "https://irsal-lazuard.vercel.app/projects/identity-migration",
    },
    {
      name: "ROI Calculation & Bank Disbursement",
      description: "Lockable payout snapshots, split payouts and role-based approval over a bank API.",
      url: "https://irsal-lazuard.vercel.app/projects/roi-disbursement",
    },
    {
      name: "Auth & API Security for Partner Integrations",
      description: "OAuth2 client/tenant credentials, TOTP 2FA and token-bucket rate limiting.",
      url: "https://irsal-lazuard.vercel.app/projects/api-security",
    },
  ] satisfies CvProject[],
  education: {
    degree: "Diploma (D3) in Software Engineering",
    school: "Telkom University, Bandung",
    period: "Sep 2021 – Jul 2024",
  },
  certifications: "Dicoding: Belajar Dasar Structured Query Language (SQL) · Belajar Dasar Pemrograman Web · Belajar Dasar AI",
};
