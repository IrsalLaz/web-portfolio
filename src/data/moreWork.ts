import type { Lang } from "../i18n/ui";

export interface MoreWorkItem {
  title: string;
  role: string;
  tech: string[];
  body: string;
}

export const moreWork: Record<Lang, MoreWorkItem[]> = {
  en: [
    {
      title: "Scheduled Push Broadcasts",
      role: "Software Engineer Intern",
      tech: ["Laravel", "Redis", "Horizon"],
      body: "Built the Laravel side of a broadcast system that sends event, reminder and promotion messages as scheduled Firebase push notifications. Schedules can follow each client's payroll cutoff, repeat monthly and personalise messages, and layered locks prevent duplicate sends. The notification service itself was built by another engineer.",
    },
    {
      title: "PPOB Approval & Limits",
      role: "Team project",
      tech: ["Node.js", "Fastify", "MySQL"],
      body: "With the team, integrated a bill-payment provider and added transaction limits and approval rules, so larger requests are reviewed before they're paid.",
    },
    {
      title: "Warning-Letter Automation",
      role: "Software Engineer",
      tech: ["Laravel", "MinIO", "Scheduler"],
      body: "A daily escalation job for overdue invoices: reminders before the due date, then warning letters generated as PDFs from templates and stored in object storage. The final notice goes out only after an approval step, and pending notices are monitored from the dashboard.",
    },
    {
      title: "Investor Maturity Reminders",
      role: "Person in charge (PIC)",
      tech: ["Laravel", "Scheduler", "WhatsApp API"],
      body: "A daily digest of upcoming investment maturities, with urgency levels, for the team that follows up with investors. The same query drives the email, the sidebar badge and the dashboard table, so the numbers always agree. Investor notifications are also sent over WhatsApp.",
    },
  ],
  id: [
    {
      title: "Push Broadcast Terjadwal",
      role: "Software Engineer Intern",
      tech: ["Laravel", "Redis", "Horizon"],
      body: "Membangun sisi Laravel dari sistem broadcast yang mengirim pesan event, pengingat, dan promosi sebagai push notification Firebase terjadwal. Jadwal bisa mengikuti cutoff payroll tiap klien, berulang setiap bulan, dan mempersonalisasi pesan, sementara lock berlapis mencegah pengiriman ganda. Notification service-nya sendiri dibangun oleh engineer lain.",
    },
    {
      title: "Approval & Limit PPOB",
      role: "Proyek tim",
      tech: ["Node.js", "Fastify", "MySQL"],
      body: "Bersama tim, mengintegrasikan provider pembayaran tagihan serta menambahkan limit transaksi dan aturan approval, sehingga permintaan yang lebih besar ditinjau sebelum dibayar.",
    },
    {
      title: "Otomasi Surat Peringatan",
      role: "Software Engineer",
      tech: ["Laravel", "MinIO", "Scheduler"],
      body: "Job eskalasi harian untuk invoice yang terlambat: pengingat sebelum jatuh tempo, lalu surat peringatan yang dibuat sebagai PDF dari template dan disimpan di object storage. Surat peringatan terakhir hanya dikirim setelah melewati langkah approval, dan surat yang tertunda dipantau dari dashboard.",
    },
    {
      title: "Pengingat Jatuh Tempo Investor",
      role: "Person in charge (PIC)",
      tech: ["Laravel", "Scheduler", "WhatsApp API"],
      body: "Ringkasan harian tentang investasi yang akan jatuh tempo, lengkap dengan tingkat urgensi, untuk tim yang menindaklanjuti investor. Query yang sama dipakai untuk email, badge di sidebar, dan tabel dashboard, sehingga angkanya selalu konsisten. Notifikasi untuk investor juga dikirim lewat WhatsApp.",
    },
  ],
};
