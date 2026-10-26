// Every skill lists where it was actually used. See design.md §6 (/skills).
import type { Lang } from "../i18n/ui";
import { localizePath } from "../i18n/utils";

export interface UsedIn {
  label: string;
  href?: string;
}

export interface Skill {
  name: string;
  note?: string;
  usedIn: UsedIn[];
}

export interface SkillGroup {
  category: string;
  items: Skill[];
}

type Ref = keyof typeof refs.en;

const refs = {
  en: {
    identity: { label: "Extracting Identity from a Monolith", href: "/projects/identity-migration" },
    api: { label: "Auth & API Security for Partner Integrations", href: "/projects/api-security" },
    roi: { label: "ROI Calculation & Bank Disbursement", href: "/projects/roi-disbursement" },
    claim: { label: "Cross-App Claim Disbursement", href: "/projects/claim-integration" },
    campaign: { label: "Campaign & Rewards Engine", href: "/projects/campaign-engine" },
    broadcast: { label: "Scheduled Push Broadcasts", href: "/projects#more-work" },
    ppob: { label: "PPOB Approval & Limits", href: "/projects#more-work" },
    letters: { label: "Warning-Letter Automation", href: "/projects#more-work" },
    investor: { label: "Investor Maturity Reminders", href: "/projects#more-work" },
    ntt: { label: "NTT Ltd. — maintenance report portal", href: "/experience#ntt" },
    dashboards: { label: "Duluin internal admin dashboards" },
    frontends: { label: "Duluin Gajian and Duluin Stake frontends" },
    docs: { label: "PRDs, technical docs and deployment notes for every project above" },
  },
  id: {
    identity: { label: "Memisahkan Identitas dari Monolit", href: "/projects/identity-migration" },
    api: { label: "Keamanan Auth & API untuk Integrasi Partner", href: "/projects/api-security" },
    roi: { label: "Perhitungan ROI & Pencairan via Bank", href: "/projects/roi-disbursement" },
    claim: { label: "Pencairan Klaim Lintas Aplikasi", href: "/projects/claim-integration" },
    campaign: { label: "Mesin Kampanye & Reward", href: "/projects/campaign-engine" },
    broadcast: { label: "Push Broadcast Terjadwal", href: "/projects#more-work" },
    ppob: { label: "Approval & Limit PPOB", href: "/projects#more-work" },
    letters: { label: "Otomasi Surat Peringatan", href: "/projects#more-work" },
    investor: { label: "Pengingat Jatuh Tempo Investor", href: "/projects#more-work" },
    ntt: { label: "NTT Ltd. — portal laporan maintenance", href: "/experience#ntt" },
    dashboards: { label: "Dashboard admin internal Duluin" },
    frontends: { label: "Frontend Duluin Gajian dan Duluin Stake" },
    docs: { label: "PRD, dokumen teknis, dan catatan deployment untuk semua proyek di atas" },
  },
} satisfies Record<Lang, Record<string, UsedIn>>;

interface SkillDef {
  name: string;
  note?: Partial<Record<Lang, string>>;
  usedIn: Ref[];
}

const n = (en: string, id: string) => ({ en, id });

const groups: { category: Record<Lang, string>; items: SkillDef[] }[] = [
  {
    category: n("Languages", "Bahasa"),
    items: [
      { name: "Go", note: n("Backend services", "Service backend"), usedIn: ["identity", "claim"] },
      { name: "Node.js", note: n("JavaScript on Fastify", "JavaScript dengan Fastify"), usedIn: ["identity", "api", "ppob"] },
      { name: "PHP", note: n("Laravel", "Laravel"), usedIn: ["roi", "campaign", "claim", "broadcast", "letters"] },
      { name: "SQL", note: n("MySQL", "MySQL"), usedIn: ["identity", "roi", "claim", "campaign"] },
      { name: "Python", note: n("Flask", "Flask"), usedIn: ["ntt"] },
    ],
  },
  {
    category: n("Backend", "Backend"),
    items: [
      { name: "Fastify", usedIn: ["identity", "api", "ppob"] },
      { name: "Laravel", note: n("Sanctum, Spatie Permission, Horizon", "Sanctum, Spatie Permission, Horizon"), usedIn: ["roi", "campaign", "claim", "api", "broadcast"] },
      { name: "Sequelize", usedIn: ["identity"] },
      { name: "GORM", usedIn: ["identity"] },
      { name: "Flask", usedIn: ["ntt"] },
      { name: "REST APIs", usedIn: ["api", "claim", "ntt"] },
    ],
  },
  {
    category: n("Data & messaging", "Data & messaging"),
    items: [
      { name: "MySQL 8", note: n("Transactions, row locks, triggers", "Transaksi, row lock, trigger"), usedIn: ["identity", "roi", "claim", "campaign"] },
      { name: "Redis", note: n("Queues, caching, counters", "Queue, caching, counter"), usedIn: ["api", "identity", "roi", "broadcast"] },
      { name: "RabbitMQ", note: n("Topic exchanges, quorum queues, dead-letter queues", "Topic exchange, quorum queue, dead-letter queue"), usedIn: ["identity"] },
      { name: "MinIO", note: n("Object storage for generated PDFs", "Object storage untuk PDF yang dihasilkan"), usedIn: ["letters"] },
    ],
  },
  {
    category: n("Security", "Keamanan"),
    items: [
      { name: "OAuth2", note: n("Client credentials, refresh, revocation", "Client credentials, refresh, revocation"), usedIn: ["api", "claim"] },
      { name: "JWT / JWKS", note: n("RS256 signing, JWKS verification", "Penandatanganan RS256, verifikasi JWKS"), usedIn: ["identity"] },
      { name: "Introspection", note: n("Token introspection for services", "Token introspection untuk service"), usedIn: ["identity"] },
      { name: "TOTP 2FA", usedIn: ["api"] },
      { name: "RBAC", note: n("Spatie roles and gateway-level checks", "Role Spatie dan pengecekan di gateway"), usedIn: ["identity", "roi", "claim"] },
      { name: "Rate limiting", note: n("Token bucket and fixed window", "Token bucket dan fixed window"), usedIn: ["api"] },
    ],
  },
  {
    category: n("Architecture", "Arsitektur"),
    items: [
      { name: "Outbox / inbox", usedIn: ["identity"] },
      { name: "Saga", note: n("Choreography over RabbitMQ", "Choreography di atas RabbitMQ"), usedIn: ["identity"] },
      { name: "CDC", note: n("Trigger-based change data capture", "Change data capture berbasis trigger"), usedIn: ["identity"] },
      { name: "Dual-write migration", usedIn: ["identity"] },
      { name: "Flagged cutover", usedIn: ["identity"] },
      { name: "Idempotent APIs", usedIn: ["claim", "identity", "campaign"] },
    ],
  },
  {
    category: n("Integrations", "Integrasi"),
    items: [
      { name: "Bank APIs", note: n("Account inquiry and disbursement", "Inquiry rekening dan pencairan dana"), usedIn: ["roi", "claim"] },
      { name: "Bill payments", note: n("Third-party aggregator", "Aggregator pihak ketiga"), usedIn: ["ppob"] },
      { name: "WhatsApp API", usedIn: ["investor"] },
      { name: "Push", note: n("Through the notification service", "Melalui notification service"), usedIn: ["broadcast", "campaign"] },
      { name: "SMTP", usedIn: ["letters", "investor"] },
    ],
  },
  {
    category: n("Frontend", "Frontend"),
    items: [
      { name: "Blade + jQuery", note: n("With DataTables", "Dengan DataTables"), usedIn: ["dashboards", "api", "campaign"] },
      { name: "Next.js", usedIn: ["frontends"] },
    ],
  },
  {
    category: n("Testing & tools", "Testing & tools"),
    items: [
      { name: "node --test", usedIn: ["identity"] },
      { name: "go test", usedIn: ["identity"] },
      { name: "PHPUnit", usedIn: ["identity"] },
      { name: "Postman", usedIn: ["ntt", "api"] },
      { name: "Git", usedIn: ["docs"] },
      { name: "PlantUML / Mermaid", usedIn: ["docs"] },
    ],
  },
];

export function getSkills(lang: Lang): SkillGroup[] {
  return groups.map((g) => ({
    category: g.category[lang],
    items: g.items.map((s) => ({
      name: s.name,
      note: s.note?.[lang],
      usedIn: s.usedIn.map((r) => {
        const ref: UsedIn = refs[lang][r];
        return ref.href ? { label: ref.label, href: localizePath(ref.href, lang) } : { label: ref.label };
      }),
    })),
  }));
}

export const waysOfWorking: Record<Lang, { title: string; body: string }[]> = {
  en: [
    { title: "Plan", body: "Set the month's target — a new feature, an enhancement, a fix or R&D — and write it up as a PRD or notes." },
    { title: "Break it down", body: "Split the work into tasks that can be finished in a day or a week." },
    { title: "Test as I go", body: "Schedule internal testing for each sub-task, and review regularly with the team or senior engineers." },
    { title: "QA & UAT", body: "Take the feature through QA, then user acceptance testing with the teams who will use it." },
    { title: "Ship", body: "Write deployment notes: branches to check out, commands to run and, where needed, a rollback plan." },
  ],
  id: [
    { title: "Rencanakan", body: "Menentukan target bulan ini — fitur baru, enhancement, bugfix, atau R&D — lalu menuliskannya sebagai PRD atau catatan." },
    { title: "Pecah jadi task", body: "Membagi pekerjaan menjadi task yang bisa diselesaikan dalam sehari atau seminggu." },
    { title: "Uji sambil jalan", body: "Menjadwalkan pengujian internal untuk tiap sub-task, dan melakukan review rutin bersama tim atau engineer senior." },
    { title: "QA & UAT", body: "Membawa fitur melewati QA, lalu user acceptance testing bersama tim yang akan memakainya." },
    { title: "Rilis", body: "Menulis catatan deployment: branch yang perlu di-checkout, command yang perlu dijalankan, dan bila perlu rencana rollback." },
  ],
};
