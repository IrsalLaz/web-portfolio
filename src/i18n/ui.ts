// UI strings for both languages. Content (case studies, bios, bullets) lives in src/data and src/content.
export const languages = { en: "English", id: "Bahasa Indonesia" } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "meta.locale": "en_US",
    "skip": "Skip to content",
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cv": "CV",
    "nav.menu": "Menu",
    "nav.talk": "Let's talk",
    "nav.lang": "Language",
    "theme.dark": "Dark mode",

    "home.projects": "Projects",
    "home.about": "About me",
    "home.cv": "CV",
    "home.available": "Alive and well",
    "home.hello": "Hello",
    "home.openTo": "Happy to talk about",
    "home.basedIn": "Based in",
    "home.hl.label": "Engineering highlights",
    "home.hl.title": "Techniques I've applied in production work.",
    "home.hl.lead": "Each one links to the case study where it's explained in context.",
    "home.hl.link": "Case study",

    "exp.title": "Experience",
    "exp.lead":
      "The roles and teams that shaped how I build software — from automating reports to moving money and identity safely at a fintech.",
    "exp.desc": "Roles at Duluin, NTT Ltd. and Telkom University — backend engineering for fintech, internal tooling, and teaching.",
    "exp.roles": "Roles",
    "exp.period": "Period",
    "exp.location": "Location",
    "exp.contributions": "Contributions",
    "exp.tech": "Technologies",
    "exp.education": "Education",
    "exp.certs": "Certifications",

    "proj.title": "Projects",
    "proj.lead":
      "Five areas I worked on at Duluin — two of them as PIC — summarized at a high level by the skills involved. Internal architecture, screenshots and business figures are intentionally left out.",
    "proj.desc":
      "Case studies: identity migration, API security, ROI disbursement, cross-app claims and a campaign engine — backend systems for a fintech platform.",
    "proj.list": "Case studies",
    "proj.caseStudy": "Case study",
    "proj.problem": "Problem",
    "proj.role": "Role",
    "proj.highlight": "Highlight",
    "proj.keyTech": "Key technologies",
    "proj.alsoBuilt": "Also built",
    "proj.moreWork": "More work",

    "case.number": "Case study",
    "case.all": "All projects",
    "case.toc": "On this page",
    "case.prev": "← Previous",
    "case.next": "Next →",
    "case.back": "← Back",
    "case.more": "More work",
    "case.note":
      "This is a high-level summary of my contribution. Internal architecture, implementation details, security parameters and business figures are intentionally left out.",

    "skills.title": "Skills",
    "skills.lead": "What I use to design, build and ship backend systems. No ratings — select a skill to see where I actually used it.",
    "skills.desc": "Languages, frameworks, data stores, security and architecture patterns — each linked to the projects where it was used.",
    "skills.byCat": "Skills by category",
    "skills.detail": "Skill detail",
    "skills.select": "Select a skill",
    "skills.selectHint": "Choose a technology to see the projects where I used it.",
    "skills.usedIn": "Used in",

    "about.title": "About",
    "about.desc": "Software engineer at Duluin in Bandung. How I work, what I'm focused on, and where I studied.",
    "about.label": "A little about me",
    "about.how": "How I work",
    "about.howTitle": "From PRD to deployment notes.",
    "about.step": "Step",
    "about.now": "Right now",
    "about.nowTitle": "Building depth in system design.",
    "about.nowBody":
      "Event-driven patterns, data migration and access control are where I'm learning the most about architecture and the trade-offs behind it.",
    "about.nowLink": "Read the case study",
    "about.education": "Education",

    "contact.title": "Contact",
    "contact.desc": "Get in touch: email, LinkedIn, GitHub and CV.",
    "contact.label": "Get in touch",
    "contact.options": "Contact options",
    "contact.email": "Email",
    "contact.write": "Write an email",
    "contact.copy": "Copy address",
    "contact.copied": "Copied",
    "contact.copyFail": "Copy not available — select the address above",
    "contact.elsewhere": "Or find me here.",

    "footer.updated": "Last updated",
    "footer.fine": "Project descriptions are high-level summaries of my own contributions; no confidential details are shown.",
    "footer.email": "Email",

    "cv.note": "The CV is in English.",
  },
  id: {
    "meta.locale": "id_ID",
    "skip": "Langsung ke konten",
    "nav.home": "Beranda",
    "nav.experience": "Pengalaman",
    "nav.projects": "Proyek",
    "nav.skills": "Keahlian",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.cv": "CV",
    "nav.menu": "Menu",
    "nav.talk": "Hubungi saya",
    "nav.lang": "Bahasa",
    "theme.dark": "Mode gelap",

    "home.projects": "Proyek",
    "home.about": "Tentang saya",
    "home.cv": "CV",
    "home.available": "Hidup dan sehat",
    "home.hello": "Halo",
    "home.openTo": "Senang berdiskusi tentang",
    "home.basedIn": "Berdomisili di",
    "home.hl.label": "Sorotan engineering",
    "home.hl.title": "Teknik yang saya terapkan dalam pekerjaan nyata.",
    "home.hl.lead": "Setiap poin terhubung ke studi kasus yang menjelaskannya secara lengkap.",
    "home.hl.link": "Studi kasus",

    "exp.title": "Pengalaman",
    "exp.lead":
      "Peran dan tim yang membentuk cara saya membangun software — dari mengotomasi laporan sampai memindahkan uang dan identitas dengan aman di perusahaan fintech.",
    "exp.desc": "Peran di Duluin, NTT Ltd. dan Telkom University — backend engineering untuk fintech, tooling internal, dan mengajar.",
    "exp.roles": "Peran",
    "exp.period": "Periode",
    "exp.location": "Lokasi",
    "exp.contributions": "Kontribusi",
    "exp.tech": "Teknologi",
    "exp.education": "Pendidikan",
    "exp.certs": "Sertifikasi",

    "proj.title": "Proyek",
    "proj.lead":
      "Lima area yang saya kerjakan di Duluin — dua di antaranya sebagai PIC — dirangkum secara tingkat tinggi berdasarkan keahlian yang terlibat. Arsitektur internal, screenshot, dan angka bisnis sengaja tidak ditampilkan.",
    "proj.desc":
      "Studi kasus: migrasi identitas, keamanan API, pencairan ROI, klaim lintas aplikasi, dan mesin kampanye — sistem backend untuk platform fintech.",
    "proj.list": "Studi kasus",
    "proj.caseStudy": "Studi kasus",
    "proj.problem": "Masalah",
    "proj.role": "Peran",
    "proj.highlight": "Sorotan",
    "proj.keyTech": "Teknologi utama",
    "proj.alsoBuilt": "Juga saya bangun",
    "proj.moreWork": "Pekerjaan lain",

    "case.number": "Studi kasus",
    "case.all": "Semua proyek",
    "case.toc": "Di halaman ini",
    "case.prev": "← Sebelumnya",
    "case.next": "Berikutnya →",
    "case.back": "← Kembali",
    "case.more": "Pekerjaan lain",
    "case.note":
      "Ini adalah ringkasan tingkat tinggi dari kontribusi saya. Arsitektur internal, detail implementasi, parameter keamanan, dan angka bisnis sengaja tidak ditampilkan.",

    "skills.title": "Keahlian",
    "skills.lead":
      "Yang saya gunakan untuk merancang, membangun, dan merilis sistem backend. Tanpa rating — pilih sebuah skill untuk melihat di mana saya benar-benar memakainya.",
    "skills.desc": "Bahasa, framework, data store, keamanan, dan pola arsitektur — masing-masing terhubung ke proyek tempat ia dipakai.",
    "skills.byCat": "Keahlian per kategori",
    "skills.detail": "Detail keahlian",
    "skills.select": "Pilih sebuah skill",
    "skills.selectHint": "Pilih sebuah teknologi untuk melihat proyek tempat saya memakainya.",
    "skills.usedIn": "Dipakai di",

    "about.title": "Tentang",
    "about.desc": "Software engineer di Duluin, Bandung. Cara saya bekerja, fokus saya saat ini, dan latar pendidikan saya.",
    "about.label": "Sedikit tentang saya",
    "about.how": "Cara saya bekerja",
    "about.howTitle": "Dari PRD sampai catatan deployment.",
    "about.step": "Langkah",
    "about.now": "Saat ini",
    "about.nowTitle": "Memperdalam system design.",
    "about.nowBody":
      "Pola berbasis event, migrasi data, dan kontrol akses adalah area tempat saya paling banyak belajar tentang arsitektur dan trade-off di baliknya.",
    "about.nowLink": "Baca studi kasusnya",
    "about.education": "Pendidikan",

    "contact.title": "Kontak",
    "contact.desc": "Hubungi saya: email, LinkedIn, GitHub, dan CV.",
    "contact.label": "Hubungi saya",
    "contact.options": "Pilihan kontak",
    "contact.email": "Email",
    "contact.write": "Kirim email",
    "contact.copy": "Salin alamat",
    "contact.copied": "Tersalin",
    "contact.copyFail": "Tidak bisa menyalin — silakan pilih alamat di atas",
    "contact.elsewhere": "Atau temukan saya di sini.",

    "footer.updated": "Terakhir diperbarui",
    "footer.fine": "Deskripsi proyek adalah ringkasan tingkat tinggi dari kontribusi saya sendiri; tidak ada detail rahasia yang ditampilkan.",
    "footer.email": "Email",

    "cv.note": "CV tersedia dalam bahasa Inggris.",
  },
} as const;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
