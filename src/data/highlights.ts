import type { Lang } from "../i18n/ui";

export interface Highlight {
  title: string;
  body: string;
  project: string; // case-study slug
  projectTitle: string;
}

export const highlights: Record<Lang, Highlight[]> = {
  en: [
    {
      title: "Event-driven workflows with outbox and inbox",
      body: "Multi-service flows built as choreography sagas on RabbitMQ, with a transactional outbox, inbox deduplication, idempotent consumers and dead-letter handling.",
      project: "identity-migration",
      projectTitle: "Extracting Identity from a Monolith",
    },
    {
      title: "Change data capture for gradual migrations",
      body: "Trigger-based change data capture that keeps a replica in sync while data moves between databases, without changing every code path that writes it.",
      project: "identity-migration",
      projectTitle: "Extracting Identity from a Monolith",
    },
    {
      title: "Centralized authorization that Laravel still understands",
      body: "Permission checks moved to the API gateway, kept compatible with the existing Laravel roles and permissions.",
      project: "identity-migration",
      projectTitle: "Extracting Identity from a Monolith",
    },
    {
      title: "Rate limiting at the gateway",
      body: "A token bucket per client, shared across instances through Redis, plus stricter limits on sensitive authentication endpoints.",
      project: "api-security",
      projectTitle: "Auth & API Security for Partner Integrations",
    },
    {
      title: "Approval before money moves",
      body: "Payouts and claim disbursements pass role-based approval, bank account validation and locked calculations before any transfer is sent.",
      project: "roi-disbursement",
      projectTitle: "ROI Calculation & Bank Disbursement",
    },
    {
      title: "Idempotency where it matters",
      body: "Unique external IDs, inbox deduplication, resumable jobs and duplicate-send locks keep retries from paying or notifying twice.",
      project: "claim-integration",
      projectTitle: "Cross-App Claim Disbursement",
    },
  ],
  id: [
    {
      title: "Alur berbasis event dengan outbox dan inbox",
      body: "Alur lintas service yang dibangun sebagai choreography saga di RabbitMQ, dengan transactional outbox, deduplikasi inbox, consumer yang idempotent, dan penanganan dead-letter.",
      project: "identity-migration",
      projectTitle: "Memisahkan Identitas dari Monolit",
    },
    {
      title: "Change data capture untuk migrasi bertahap",
      body: "Change data capture berbasis trigger yang menjaga replica tetap sinkron selama data berpindah antar-database, tanpa mengubah setiap jalur kode yang menulisnya.",
      project: "identity-migration",
      projectTitle: "Memisahkan Identitas dari Monolit",
    },
    {
      title: "Otorisasi terpusat yang tetap dipahami Laravel",
      body: "Pengecekan permission dipindahkan ke API gateway, tetap kompatibel dengan role dan permission Laravel yang sudah ada.",
      project: "identity-migration",
      projectTitle: "Memisahkan Identitas dari Monolit",
    },
    {
      title: "Rate limiting di gateway",
      body: "Token bucket per client yang dibagikan antar-instance lewat Redis, ditambah limit yang lebih ketat untuk endpoint autentikasi yang sensitif.",
      project: "api-security",
      projectTitle: "Keamanan Auth & API untuk Integrasi Partner",
    },
    {
      title: "Approval sebelum uang berpindah",
      body: "Payout dan pencairan klaim melewati approval berbasis peran, validasi rekening bank, dan perhitungan yang dikunci sebelum transfer apa pun dikirim.",
      project: "roi-disbursement",
      projectTitle: "Perhitungan ROI & Pencairan via Bank",
    },
    {
      title: "Idempotency di tempat yang penting",
      body: "ID eksternal yang unik, deduplikasi inbox, job yang bisa dilanjutkan, dan lock anti pengiriman ganda mencegah retry membayar atau mengirim notifikasi dua kali.",
      project: "claim-integration",
      projectTitle: "Pencairan Klaim Lintas Aplikasi",
    },
  ],
};
