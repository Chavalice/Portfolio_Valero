/*
  VALERO PORTFOLIO — vanilla JavaScript, GitHub Pages friendly.
  Learn-by-editing notes:
  1) Edit the `projects` and `certificates` arrays below to change visible content.
  2) Keep image paths in `assets/` and use relative paths (no leading slash).
  3) The hash router shows a project/certificate detail view without another HTML file.
  4) Animations honor `prefers-reduced-motion` and disable pointer tilt on touch devices.
*/
'use strict';

const projects = [
  {
    id: 'aether-nexus', number: '01', category: 'website', type: 'WEBSITE EDUKASI', title: 'Naturelearn', short: 'Website edukasi tentang alam yang dibuat menggunakan HTML dan CSS.',
    summary: 'Website sederhana untuk membantu pengguna mempelajari alam.',
    overview: 'Naturelearn adalah website edukasi tentang alam yang dibuat sebagai proyek pengembangan web. Website ini menyajikan informasi seputar alam dengan susunan halaman yang mudah dipahami.',
    challenge: 'Tantangannya adalah menyelaraskan pekerjaan dengan anggota kelompok dan menyusun tampilan website agar informasi mudah dibaca.',
    solution: 'Saya berkomunikasi dengan anggota kelompok dan menggunakan HTML serta CSS untuk menyusun konten dan mengatur tampilan website.',
    role: 'UI development · layout · interaction', date: 'PROJECT 01 / 2025', status: 'CONCEPT ENTRY', stack: ['HTML', 'CSS'],
    lessons: ['Menyusun struktur halaman menggunakan HTML', 'Mengatur tampilan website menggunakan CSS', 'Bekerja sama dan berkomunikasi dalam proyek kelompok'],
    images: ['assets/Naturelearn1.jpeg', 'assets/Naturelearn2.jpeg', 'assets/Naturelearn3.jpeg'],
    captions: ['Tampilan Naturelearn 1', 'Tampilan Naturelearn 2', 'Tampilan Naturelearn 3']
  },
  {
    id: 'nocturne-archive', number: '02', category: 'website', type: 'NEWS WEBSITE', title: 'Portal Berita', short: 'Website portal berita dan artikel yang dibuat hanya menggunakan HTML dan CSS.',
    summary: 'Website untuk menampilkan berita dan artikel menggunakan HTML dan CSS.',
    overview: 'Proyek ini merupakan website portal berita yang dibuat menggunakan HTML dan CSS. Website dirancang untuk menampilkan berita dan artikel dengan susunan yang rapi dan mudah dibaca.',
    challenge: 'Tantangannya adalah mengatur tata letak berita dan artikel agar terlihat rapi dan nyaman dibaca.',
    solution: 'Saya menggunakan HTML untuk menyusun konten dan CSS untuk mengatur tampilan, warna, ukuran teks, serta tata letak website.',
    role: 'Information architecture · front-end', date: 'PROJECT 02 / 2026', status: 'CONCEPT ENTRY', stack: ['HTML', 'CSS'],
    lessons: ['Menggunakan HTML untuk menyusun konten', 'Mengatur tata letak dan tampilan dengan CSS', 'Membuat informasi lebih rapi dan mudah dibaca'],
    images: ['assets/Berita1.jpeg', 'assets/Berita2.jpeg', 'assets/Berita3.jpeg'],
    captions: ['Halaman portal berita 1', 'Halaman portal berita 2', 'Halaman portal berita 3']
  },
  {
    id: 'echoes-of-rift', number: '03', category: 'game', type: 'SCRATCH GAME', title: 'Tower Defense', short: 'Game strategi tower defense kompleks yang dikembangkan menggunakan Scratch.',
    summary: 'Game Scratch tentang mempertahankan wilayah dari serangan musuh dengan mekanisme tower defense.',
    overview: 'Proyek ini adalah game tower defense yang dibuat menggunakan Scratch. Pemain harus mempertahankan wilayah dari serangan musuh melalui mekanisme permainan yang telah dirancang.',
    challenge: 'Tantangannya adalah mengatur pergerakan musuh, serangan menara, dan logika permainan agar dapat berjalan bersama.',
    solution: 'Saya menggunakan blok Scratch, variabel, kondisi, dan perulangan untuk menyusun mekanisme game serta menguji hasilnya.',
    role: 'Gameplay prototype · level design', date: 'PROJECT 03 / 2026', status: 'CONCEPT ENTRY', stack: ['Scratch', 'Visual Programming', 'Game Logic'],
    lessons: ['Memahami logika pemrograman melalui Scratch', 'Menggunakan variabel, kondisi, dan perulangan', 'Menguji game dan memperbaiki kesalahan'],
    images: ['assets/ScratchTD1.jpeg', 'assets/ScratchTD2.jpeg'],
    captions: ['Tampilan game Tower Defense 1', 'Tampilan game Tower Defense 2']
  },
  {
    id: 'neon-outpost', number: '04', category: 'game', type: 'RPG MAKER GAME', title: 'RPG Game', short: 'Game role-playing bergaya pixel yang dibuat menggunakan RPG Maker.',
    summary: 'Game RPG bergaya pixel yang dikembangkan menggunakan RPG Maker.',
    overview: 'Proyek ini merupakan game RPG yang dibuat menggunakan RPG Maker dengan tampilan bergaya pixel. Pengembangannya mencakup pembuatan peta, karakter, dialog, dan event permainan.',
    challenge: 'Tantangannya adalah mengatur peta, karakter, dialog, dan event agar saling terhubung dan permainan berjalan dengan baik.',
    solution: 'Saya menggunakan fitur RPG Maker untuk membuat peta, mengatur karakter, menyusun dialog, dan menambahkan event permainan.',
    role: 'Game systems · HUD concept · testing', date: 'PROJECT 04 / 2026', status: 'CONCEPT ENTRY', stack: ['RPG Maker', 'Pixel Art', 'Game Events'],
    lessons: ['Membuat dan mengatur peta permainan', 'Menyusun dialog dan interaksi karakter', 'Memahami event dan alur game RPG'],
    images: ['assets/RPG1.jpeg', 'assets/RPG2.jpeg', 'assets/RPG3.jpeg', 'assets/RPG4.jpeg'],
    captions: ['Tampilan RPG Game 1', 'Tampilan RPG Game 2', 'Tampilan RPG Game 3', 'Tampilan RPG Game 4']
  },
  {
    id: 'sentinel-rover', number: '05', category: 'robotics', type: 'BLOCKLY ROBOTICS', title: 'Robot', short: 'Proyek robot yang diprogram menggunakan Blockly dengan sistem blok mirip Scratch.',
    summary: 'Proyek robot yang menggunakan pemrograman visual Blockly untuk menjalankan instruksi.',
    overview: 'Proyek ini menggunakan Blockly, yaitu pemrograman visual berbasis blok yang mirip dengan Scratch, untuk menyusun instruksi bagi robot. Program dibuat agar robot melakukan tindakan sesuai perintah.',
    challenge: 'Tantangannya adalah menyusun blok perintah dengan urutan yang tepat agar robot melakukan tindakan sesuai instruksi.',
    solution: 'Saya menyusun blok perintah secara berurutan, menguji program, dan memperbaiki susunannya jika hasilnya belum sesuai.',
    role: 'Prototype · wiring · testing', date: 'PROJECT 05 / 2026', status: 'CONCEPT ENTRY', stack: ['Blockly', 'Visual Programming', 'Robotics'],
    lessons: ['Memahami urutan instruksi dalam pemrograman', 'Menggunakan blok visual untuk mengendalikan robot', 'Menguji program dan memperbaiki kesalahan'],
    images: ['assets/Robot1.jpeg', 'assets/Robot2.jpeg', 'assets/Robot3.jpeg'],
    captions: ['Tampilan proyek robot 1', 'Tampilan proyek robot 2', 'Tampilan proyek robot 3']
  },
  {
    id: 'vanta-finance', number: '06', category: 'design', type: 'UI DESIGN · FIGMA', title: 'Landing Page Figma', short: 'Desain tiga halaman landing page yang dibuat menggunakan Figma.',
    summary: 'Desain UI tiga halaman landing page menggunakan Figma dengan fokus pada tata letak dan tampilan.',
    overview: 'Proyek ini merupakan desain UI yang terdiri dari tiga konsep halaman landing page menggunakan Figma. Desain memperhatikan tata letak, warna, tipografi, dan susunan informasi.',
    challenge: 'Tantangannya adalah menyusun elemen pada tiga desain landing page agar terlihat rapi, menarik, dan mudah dipahami.',
    solution: 'Saya menggunakan Figma untuk menyusun elemen antarmuka, memilih warna dan tipografi, serta mengatur tata letak halaman.',
    role: 'UI exploration · component design', date: 'PROJECT 06 / 2026', status: 'CONCEPT ENTRY', stack: ['Figma', 'UI Design', 'Layout Design'],
    lessons: ['Menyusun tata letak antarmuka', 'Memilih warna dan tipografi yang sesuai', 'Memahami dasar desain UI dan kenyamanan pengguna'],
    images: ['assets/Figma1.jpeg'],
    captions: ['Desain landing page di Figma']
  },
  {
    id: 'archive-inventory', number: '07', category: 'database', type: 'DATABASE PROJECT', title: 'Database', short: 'Proyek basis data dengan dokumentasi tabel dan tampilan sistem.',
    summary: 'Dokumentasi proyek basis data beserta struktur dan tampilan yang berkaitan.',
    overview: 'Proyek ini berisi dokumentasi pekerjaan basis data, termasuk tampilan dan struktur data yang dibuat. Gambar pada galeri menunjukkan beberapa bagian dari proyek tersebut.',
    challenge: 'Tantangannya adalah menyusun data dan struktur tabel agar informasi tersimpan dengan rapi dan mudah dipahami.',
    solution: 'Saya menyusun struktur tabel dan memperhatikan hubungan antar data agar penyimpanan serta pengelolaan data lebih teratur.',
    role: 'Schema design · SQL · testing', date: 'PROJECT 07 / 2026', status: 'CONCEPT ENTRY', stack: ['SQL', 'Relational Model', 'CRUD'],
    lessons: ['Memahami struktur tabel dalam basis data', 'Mengenal primary key dan foreign key', 'Menyusun dan mengelola data secara teratur'],
    images: ['assets/DB1.jpeg', 'assets/DB2.jpeg', 'assets/DB3.jpeg', 'assets/DB4.png'],
    captions: ['Dokumentasi database 1', 'Dokumentasi database 2', 'Dokumentasi database 3', 'Dokumentasi database 4']
  }
];

const certificates = [
  {
    id: 'voice-of-youth',
    number: 'C–01',
    title: 'Voice of Youth (VOY) — Speech Competition',
    short: 'Sertifikat partisipasi dalam lomba pidato berbahasa Inggris Voice of Youth.',
    issuer: 'Voice of Youth (VOY)',
    date: '',
    credential: '',
    image: 'assets/VOYCertificate.jpeg',
    description: 'Sertifikat ini diberikan sebagai bukti partisipasi dalam Voice of Youth (VOY), sebuah lomba speech berbahasa Inggris. Kegiatan ini menjadi kesempatan untuk menyampaikan gagasan melalui pidato, melatih komunikasi dalam bahasa Inggris, dan membangun kepercayaan diri saat berbicara di depan audiens.',
    significance: 'Pengalaman mengikuti VOY menjadi bagian dari proses mengembangkan kemampuan berbicara, menyusun pesan dengan jelas, serta menyampaikan ide secara terstruktur. Sertifikat ini mencatat partisipasi dalam kompetisi tersebut.',
    skills: ['Pidato berbahasa Inggris', 'Komunikasi lisan', 'Penyampaian gagasan dan kepercayaan diri']
  },
  {
    id: 'national-character-seminar',
    number: 'C–02',
    title: 'Seminar Nasional — Membangun Karakter untuk Masa Depan',
    short: 'Sertifikat partisipasi dalam seminar nasional tentang pembangunan karakter untuk masa depan.',
    issuer: 'Seminar nasional tentang pembangunan karakter',
    date: '',
    credential: '',
    image: 'assets/NationalCertificate.jpeg',
    description: 'Sertifikat ini diperoleh melalui partisipasi dalam seminar besar bertema membangun karakter untuk menghadapi masa depan. Seminar ini berfokus pada pentingnya membentuk karakter, nilai-nilai positif, dan sikap yang dapat menjadi bekal dalam menghadapi tantangan di masa mendatang.',
    significance: 'Partisipasi dalam seminar ini menambah wawasan tentang peran karakter dalam perkembangan diri dan kesiapan menghadapi masa depan. Sertifikat ini menjadi dokumentasi keikutsertaan dalam kegiatan tersebut.',
    skills: ['Pengembangan karakter', 'Refleksi dan pengembangan diri', 'Persiapan menghadapi tantangan masa depan']
  }
];

const contactEmail = 'ivaleromz19@gmail.com';
const appView = document.getElementById('app-view');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
let revealObserver = null;
let toastTimer = null;

const categoryLabels = {
  website: 'WEB DEVELOPMENT', game: 'GAME DEVELOPMENT', robotics: 'ROBOTICS / IOT', design: 'UI / UX DESIGN', database: 'DATABASE SYSTEM'
};

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderProjectCard(project, index) {
  const image = project.images[0];
  return `
    <article class="project-card reveal" data-category="${escapeHTML(project.category)}" style="--card-order:${index}">
      <a class="project-card-link" href="#/project/${encodeURIComponent(project.id)}" data-project="${escapeHTML(project.id)}" aria-label="Buka detail proyek ${escapeHTML(project.title)}">
        <div class="project-media">
          <img src="${escapeHTML(image)}" alt="Gambar proyek ${escapeHTML(project.title)}" loading="lazy" width="1600" height="1000">
          <span class="media-shade"></span>
          <span class="project-index"><strong>${escapeHTML(project.number)}</strong> / 07</span>
          <span class="project-type">${escapeHTML(project.type)}</span>
        </div>
        <div class="card-content">
          <div class="card-meta"><span>${escapeHTML(categoryLabels[project.category] || project.category.toUpperCase())}</span><span class="card-status">${escapeHTML(project.status)}</span></div>
          <h3>${escapeHTML(project.title)}</h3>
          <p>${escapeHTML(project.short)}</p>
          <div class="card-bottom"><span>OPEN PROJECT FILE</span><span class="arrow" aria-hidden="true">↗</span></div>
        </div>
      </a>
    </article>`;
}

function renderCertificateCard(certificate) {
  return `
    <a class="certificate-card reveal" href="#/certificate/${encodeURIComponent(certificate.id)}" data-certificate="${escapeHTML(certificate.id)}" aria-label="Buka detail sertifikat ${escapeHTML(certificate.title)}">
      <div class="certificate-thumb"><img src="${escapeHTML(certificate.image)}" alt="Sertifikat ${escapeHTML(certificate.title)}" loading="lazy" width="1000" height="1400"></div>
      <div class="certificate-info"><span class="credential-tag">${escapeHTML(certificate.number)} / CREDENTIAL RECORD</span><h3>${escapeHTML(certificate.title)}</h3><p>${escapeHTML(certificate.short)}</p><div class="certificate-meta">ISSUER<br><strong>${escapeHTML(certificate.issuer)}</strong></div><span class="certificate-open">INSPECT CREDENTIAL <span aria-hidden="true">↗</span></span></div>
    </a>`;
}

function renderHome() {
  document.title = 'VALERO — Digital Portfolio';
  appView.innerHTML = `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="eyebrow-line"></span> INDEPENDENT DIGITAL CRAFT / ID–01</p><h1 id="hero-title">IDEAS BECOME<br><span class="title-outline">REALITY.</span><span class="title-cursor">_</span></h1><p class="hero-intro">Merancang pengalaman digital dengan presisi, rasa ingin tahu, dan sedikit keberanian untuk berjalan di luar pola.</p><div class="hero-actions"><a class="button button--primary" href="#projects" data-scroll="projects"><span>EXPLORE THE ARCHIVE</span><span class="button-icon">↘</span></a><a class="text-link" href="#about" data-scroll="about">Kenali pembuatnya <span>↗</span></a></div><div class="hero-meta"><div><span class="meta-label">BASE</span><strong>INDONESIA, ID</strong></div><div><span class="meta-label">FOCUS</span><strong>CODE × DESIGN</strong></div><div><span class="meta-label">STATUS</span><strong><i class="status-led"></i> BUILDING</strong></div></div></div>
      <div class="hero-art" aria-label="Ilustrasi geometris futuristik"><div class="art-topline"><span>FIG. 001 / THE MAKER</span><span>DIGITAL SPACE / 2026</span></div><div class="art-grid" aria-hidden="true"></div><div class="orbit orbit--outer" aria-hidden="true"></div><div class="orbit orbit--middle" aria-hidden="true"></div><div class="orbit orbit--inner" aria-hidden="true"></div><div class="sigil" aria-hidden="true"><svg viewBox="0 0 340 420"><path class="sigil-shadow" d="M170 18 48 90l14 112 108 184 108-184 14-112L170 18Z"/><path class="sigil-main" d="M170 38 69 98l12 98 89 151 89-151 12-98-101-60Z"/><path class="sigil-cut" d="M112 105 170 273l58-168M92 196h156M137 85l33 20 33-20M141 319l29-46 29 46"/><path class="sigil-accent" d="M170 145 181 169 173 188 181 207 170 230 159 207 167 188 159 169Z"/><circle cx="170" cy="196" r="7" class="sigil-core"/></svg></div><div class="art-label art-label--vertical">DISCIPLINE / CURIOSITY / EXECUTION</div><div class="art-stamp"><span>V</span><small>EST.</small><strong>2026</strong></div><div class="art-bottomline"><span>NO. 07 PROJECTS</span><span>SCROLL TO DECODE ↓</span></div><span class="art-cross art-cross--one" aria-hidden="true">+</span><span class="art-cross art-cross--two" aria-hidden="true">+</span></div><div class="hero-side-note" aria-hidden="true">A DIGITAL IDENTITY, BUILT BY HAND.</div><div class="scroll-cue"><span class="scroll-cue-line"></span> SCROLL TO EXPLORE</div>
    </section>
    <section class="ticker" aria-label="Area keahlian"><div class="ticker-track"><span>WEB DEVELOPMENT</span><b>✳</b><span>GAME DESIGN</span><b>✳</b><span>ROBOTICS</span><b>✳</b><span>UI / UX</span><b>✳</b><span>DATABASE SYSTEMS</span><b>✳</b><span>WEB DEVELOPMENT</span><b>✳</b><span>GAME DESIGN</span><b>✳</b><span>ROBOTICS</span><b>✳</b><span>UI / UX</span><b>✳</b></div></section>
    <section class="section about-section" id="about" aria-labelledby="about-title"><div class="section-heading"><p class="eyebrow"><span class="eyebrow-line"></span> 01 / THE IDENTITY</p><span class="section-index">[ A–001 ]</span></div><div class="about-layout"><div class="about-title-wrap"><h2 id="about-title">QUIET MIND.<br><em>PRECISE</em> EXECUTION.</h2><div class="red-rule"></div></div><div class="about-copy"><p class="lead">Saya Valero — pembelajar dan pembuat yang senang mengubah masalah menjadi sesuatu yang bisa dilihat, disentuh, dan digunakan.</p><p>Mulai dari antarmuka web, eksperimen game, robotik, sampai struktur data, setiap proyek adalah ruang untuk bertanya, menguji, lalu menyempurnakan. Arsip ini mendokumentasikan prosesnya, bukan hanya hasil akhirnya.</p><a class="text-link" href="#projects" data-scroll="projects">Lihat hasil eksplorasi <span>↘</span></a></div></div><div class="principles-grid"><article class="principle"><span class="principle-no">01</span><span class="principle-icon">⌘</span><h3>THINK IN SYSTEMS</h3><p>Menyusun bagian kecil menjadi pengalaman yang masuk akal dan konsisten.</p></article><article class="principle"><span class="principle-no">02</span><span class="principle-icon">◈</span><h3>MAKE IT TANGIBLE</h3><p>Belajar paling jauh saat ide diuji lewat prototipe dan implementasi nyata.</p></article><article class="principle"><span class="principle-no">03</span><span class="principle-icon">↗</span><h3>REFINE THE DETAILS</h3><p>Responsivitas, aksesibilitas, serta detail interaksi adalah bagian dari kualitas.</p></article></div></section>
    <section class="section projects-section" id="projects" aria-labelledby="projects-title"><div class="section-heading"><p class="eyebrow"><span class="eyebrow-line"></span> 02 / SELECTED OPERATIONS</p><span class="section-index">[ 07 ENTRIES ]</span></div><div class="section-title-row"><div><h2 id="projects-title">THE <em>ARCHIVE</em></h2><p class="section-subtitle">Tujuh eksperimen. Tujuh cara untuk menjadikan ide bekerja.</p></div><div class="archive-counter"><span class="counter-large">07</span><span>PROJECTS<br>CATALOGUED</span></div></div><div class="filter-bar" role="group" aria-label="Filter kategori proyek"><span class="filter-label">FILTER /</span><button class="filter-button is-active" type="button" data-filter="all" aria-pressed="true">ALL <span>07</span></button><button class="filter-button" type="button" data-filter="website" aria-pressed="false">WEB <span>02</span></button><button class="filter-button" type="button" data-filter="game" aria-pressed="false">GAME <span>02</span></button><button class="filter-button" type="button" data-filter="robotics" aria-pressed="false">ROBOTICS <span>01</span></button><button class="filter-button" type="button" data-filter="design" aria-pressed="false">UI / UX <span>01</span></button><button class="filter-button" type="button" data-filter="database" aria-pressed="false">DATABASE <span>01</span></button></div><div class="project-grid" id="project-grid">${projects.map(renderProjectCard).join('')}</div><div class="archive-footer"><span><span class="status-led"></span> ARCHIVE STATUS: OPEN</span><span>SELECT A FILE TO INSPECT <span class="arrow">↗</span></span></div></section>
    <section class="section process-section" aria-labelledby="process-title"><div class="section-heading"><p class="eyebrow"><span class="eyebrow-line"></span> 03 / WORKING METHOD</p><span class="section-index">[ PROCESS ]</span></div><div class="process-layout"><div><h2 id="process-title">FROM<br><em>UNKNOWN</em><br>TO USEFUL.</h2><p class="process-intro">Proses tidak selalu lurus. Tapi setiap langkah punya tujuan.</p></div><div class="process-list"><article><span>01</span><div><h3>OBSERVE</h3><p>Pahami kebutuhan, konteks, batasan, dan siapa yang akan memakai hasilnya.</p></div><span class="process-symbol">⌕</span></article><article><span>02</span><div><h3>PROTOTYPE</h3><p>Buat versi awal yang cukup nyata untuk diuji — jangan menebak terlalu lama.</p></div><span class="process-symbol">◇</span></article><article><span>03</span><div><h3>BUILD & TEST</h3><p>Implementasikan, temukan masalah, lalu perbaiki berdasarkan hasil pengujian.</p></div><span class="process-symbol">⌘</span></article><article><span>04</span><div><h3>SHIP & LEARN</h3><p>Dokumentasikan keputusan dan jadikan setiap versi sebagai bekal berikutnya.</p></div><span class="process-symbol">↗</span></article></div></div></section>
    <section class="section credentials-section" id="certificates" aria-labelledby="credentials-title"><div class="section-heading"><p class="eyebrow"><span class="eyebrow-line"></span> 04 / VERIFIED LEARNING</p><span class="section-index">[ 02 RECORDS ]</span></div><div class="section-title-row"><div><h2 id="credentials-title">THE <em>CREDENTIALS</em></h2><p class="section-subtitle">Dua catatan pembelajaran — dokumentasi proses bertumbuh.</p></div><span class="credential-seal" aria-hidden="true">V<span>✳</span>V</span></div><div class="certificate-grid" id="certificate-grid">${certificates.map(renderCertificateCard).join('')}</div></section>
    <section class="contact-section" id="contact" aria-labelledby="contact-title"><div class="contact-backdrop" aria-hidden="true">CONNECT</div><div class="section-heading"><p class="eyebrow"><span class="eyebrow-line"></span> 05 / OPEN CHANNEL</p><span class="section-index">[ TRANSMISSION READY ]</span></div><div class="contact-main"><div><p class="contact-kicker">HAVE A QUESTION, IDEA, OR COLLABORATION?</p><h2 id="contact-title">LET'S MAKE<br>SOMETHING <em>MATTER.</em></h2></div><div class="contact-actions"><p>Obrolan kecil bisa menjadi awal dari proyek yang menarik. Kirim pesan lewat kanal di bawah ini.</p><a class="button button--light" href="mailto:${escapeHTML(contactEmail)}" id="email-link"><span>INITIATE CONTACT</span><span class="button-icon">↗</span></a></div></div><div class="contact-bottom"><span><span class="status-led"></span> CHANNEL ENCRYPTION: VIBES ONLY</span><span>MADE WITH CURIOSITY <span class="heart-mark">✳</span> IN INDONESIA</span></div></section>`;
  appView.classList.remove('view-enter');
  void appView.offsetWidth;
  appView.classList.add('view-enter');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  if (mainNav) mainNav.classList.remove('is-open');
  setupFilters();
  setupRevealObserver();
  setupCardTilt();
  setActiveNav('');
}

function renderProjectDetail(project) {
  document.title = `${project.title} — VALERO Portfolio`;
  const gallery = project.images.map((image, index) => `<figure class="gallery-item"><img src="${escapeHTML(image)}" alt="${escapeHTML(project.title)} — ${escapeHTML(project.captions[index] || `Gambar ${index + 1}`)}" width="1600" height="1000" ${index ? 'loading="lazy"' : 'fetchpriority="high"'}><figcaption><span>${String(index + 1).padStart(2, '0')} / ${escapeHTML(project.captions[index] || 'Project image')}</span><span>VISUAL RECORD</span></figcaption></figure>`).join('');
  const nextProject = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];
  const facts = [ ['CATEGORY', categoryLabels[project.category]], ['ROLE', project.role], ['STACK / TOOLS', project.stack.join(' · ')], ['STATUS', project.status], ['REFERENCE', project.date] ].map(([label, value]) => `<div class="detail-fact"><span>${escapeHTML(label)}</span><span>${escapeHTML(value)}</span></div>`).join('');
  appView.innerHTML = `<section class="detail-view"><a href="#projects" class="back-link" data-scroll="projects"><span>←</span> RETURN TO ARCHIVE</a><header class="detail-header"><div><p class="detail-kicker">PROJECT FILE / ${escapeHTML(project.number)} — ${escapeHTML(project.type)}</p><h1>${escapeHTML(project.title.split(' ')[0])} <em>${escapeHTML(project.title.split(' ').slice(1).join(' '))}</em></h1><div class="detail-chips">${project.stack.map((item) => `<span>${escapeHTML(item)}</span>`).join('')}</div></div><p class="detail-summary">${escapeHTML(project.summary)}</p></header><div class="detail-gallery-title"><span>VISUAL DOCUMENTATION / ${String(project.images.length).padStart(2, '0')} FRAMES</span><span>PROJECT GALLERY</span></div><div class="detail-gallery">${gallery}</div><div class="detail-lower"><section class="detail-block"><h2>01 / THE BRIEF</h2><p>${escapeHTML(project.overview)}</p><h2 style="margin-top:28px">02 / THE CHALLENGE</h2><p>${escapeHTML(project.challenge)}</p><h2 style="margin-top:28px">03 / THE APPROACH</h2><p>${escapeHTML(project.solution)}</p></section><section class="detail-block"><h2>PROJECT INTELLIGENCE</h2><div class="detail-facts">${facts}</div><h2 style="margin-top:30px">WHAT THIS PROJECT TEACHES</h2><div class="detail-facts">${project.lessons.map((lesson, index) => `<div class="detail-fact"><span>LESSON 0${index + 1}</span><span>${escapeHTML(lesson)}</span></div>`).join('')}</div><p style="margin-top:19px;font-size:10px">Catatan: teks, stack, tanggal, dan status di halaman ini masih contoh awal. Edit array <code>projects</code> pada <code>script.js</code> agar sesuai dengan proyek aslimu.</p></section></div><div class="detail-next"><span>NEXT FILE IN ARCHIVE</span><a href="#/project/${encodeURIComponent(nextProject.id)}" data-project="${escapeHTML(nextProject.id)}">${escapeHTML(nextProject.title)} <span>↗</span></a></div></section>`;
  animateView();
  setActiveNav('projects');
  closeMenu();
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function renderCertificateDetail(certificate) {
  document.title = `${certificate.title} — VALERO Credentials`;
  const skills = certificate.skills.map((skill) => `<div class="detail-fact"><span>SKILL</span><span>${escapeHTML(skill)}</span></div>`).join('');
  const nextCertificate = certificates[(certificates.findIndex((item) => item.id === certificate.id) + 1) % certificates.length];
  appView.innerHTML = `<section class="detail-view cert-detail"><a href="#certificates" class="back-link" data-scroll="certificates"><span>←</span> RETURN TO CREDENTIALS</a><header class="detail-header"><div><p class="detail-kicker">CREDENTIAL RECORD / ${escapeHTML(certificate.number)}</p><h1>THE <em>CREDENTIAL.</em></h1><div class="detail-chips"><span>LEARNING RECORD</span><span>DOCUMENTATION</span></div></div><p class="detail-summary">${escapeHTML(certificate.short)}</p></header><div class="cert-sheet"><div class="cert-sheet-image"><img src="${escapeHTML(certificate.image)}" alt="Sertifikat ${escapeHTML(certificate.title)}" width="1000" height="1400"></div><div class="cert-sheet-copy"><span class="credential-tag">${escapeHTML(certificate.number)} / CERTIFICATE OF LEARNING</span><h2>${escapeHTML(certificate.title)}</h2><p>${escapeHTML(certificate.description)}</p><p>${escapeHTML(certificate.significance)}</p><div class="cert-detail-meta"><div><small>PENYELENGGARA / KEGIATAN</small><strong>${escapeHTML(certificate.issuer)}</strong></div>${certificate.date ? `<div><small>TANGGAL</small><strong>${escapeHTML(certificate.date)}</strong></div>` : ''}${certificate.credential ? `<div><small>REFERENSI SERTIFIKAT</small><strong>${escapeHTML(certificate.credential)}</strong></div>` : ''}<div><small>JENIS DOKUMEN</small><strong>SERTIFIKAT PARTISIPASI</strong></div></div><h2 style="font-size:17px;margin-top:28px">SKILLS DOCUMENTED</h2><div class="detail-facts">${skills}</div></div></div><div class="detail-next"><span>NEXT CREDENTIAL RECORD</span><a href="#/certificate/${encodeURIComponent(nextCertificate.id)}" data-certificate="${escapeHTML(nextCertificate.id)}">${escapeHTML(nextCertificate.title)} <span>↗</span></a></div></section>`;
  animateView();
  setActiveNav('certificates');
  closeMenu();
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

function renderNotFound() {
  document.title = 'File not found — VALERO Portfolio';
  appView.innerHTML = `<section class="view-error"><p class="eyebrow" style="justify-content:center">ARCHIVE / 404</p><h1>FILE NOT FOUND.</h1><p>File yang kamu cari belum tersedia di arsip ini.</p><a class="button button--primary" href="#home" data-home><span>RETURN TO BASE</span><span class="button-icon">↗</span></a></section>`;
  closeMenu();
}

function animateView() {
  appView.classList.remove('view-enter');
  void appView.offsetWidth;
  appView.classList.add('view-enter');
}

function routeFromHash() {
  const hash = window.location.hash || '#home';
  const projectMatch = hash.match(/^#\/project\/([^/?#]+)/);
  const certificateMatch = hash.match(/^#\/certificate\/([^/?#]+)/);
  if (projectMatch) {
    let id = projectMatch[1];
    try { id = decodeURIComponent(id); } catch (_) { /* Keep raw id and fall through to 404. */ }
    const project = projects.find((item) => item.id === id);
    project ? renderProjectDetail(project) : renderNotFound();
    return;
  }
  if (certificateMatch) {
    let id = certificateMatch[1];
    try { id = decodeURIComponent(id); } catch (_) { /* Keep raw id and fall through to 404. */ }
    const certificate = certificates.find((item) => item.id === id);
    certificate ? renderCertificateDetail(certificate) : renderNotFound();
    return;
  }
  renderHome();
  const sectionId = hash.startsWith('#') && hash.length > 1 ? hash.slice(1) : '';
  if (sectionId && sectionId !== 'home' && document.getElementById(sectionId)) {
    requestAnimationFrame(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' }));
  } else if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }
}

function navigateToHome(section = '') {
  const nextHash = section ? `#${section}` : '#home';
  if (window.location.hash === nextHash) {
    renderHome();
    requestAnimationFrame(() => section && document.getElementById(section)?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
  } else {
    window.location.hash = nextHash;
  }
}

function setupFilters() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card')];
  buttons.forEach((button) => button.addEventListener('click', () => {
    const requested = button.dataset.filter;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach((card, index) => {
      const matches = requested === 'all' || card.dataset.category === requested;
      card.hidden = !matches;
      if (matches) {
        card.style.animation = 'none';
        void card.offsetHeight;
        card.style.animation = prefersReducedMotion ? 'none' : `card-in .45s var(--ease) ${(index % 4) * 45}ms both`;
      }
    });
  }));
}

function setupRevealObserver() {
  revealObserver?.disconnect();
  const items = [...document.querySelectorAll('.reveal')];
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    document.body.classList.remove('reveal-ready');
    return;
  }
  document.body.classList.add('reveal-ready');
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
  items.forEach((item) => revealObserver.observe(item));
}

function setupCardTilt() {
  if (prefersReducedMotion || coarsePointer || !window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse') return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 4.4}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 4.4}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

function setActiveNav(target) {
  document.querySelectorAll('.main-nav a[data-scroll]').forEach((link) => {
    link.classList.toggle('is-current', target && link.dataset.scroll === target);
  });
}

function closeMenu() {
  if (!menuToggle || !mainNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Buka navigasi');
  mainNav.classList.remove('is-open');
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
}

function setupParticleField() {
  const canvas = document.getElementById('particle-field');
  if (!canvas || prefersReducedMotion || !canvas.getContext) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  let width = 0;
  let height = 0;
  let frame = 0;
  let points = [];
  const maxPoints = Math.min(66, Math.max(28, Math.floor(window.innerWidth / 19)));

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.6);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: maxPoints }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.3 + 0.35,
      dx: (Math.random() - 0.5) * 0.13,
      dy: (Math.random() - 0.5) * 0.13,
      alpha: Math.random() * 0.36 + 0.08
    }));
  }

  function draw() {
    context.clearRect(0, 0, width, height);
    points.forEach((point, index) => {
      point.x += point.dx;
      point.y += point.dy;
      if (point.x < -5) point.x = width + 5;
      if (point.x > width + 5) point.x = -5;
      if (point.y < -5) point.y = height + 5;
      if (point.y > height + 5) point.y = -5;
      context.beginPath();
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fillStyle = `rgba(226, 214, 222, ${point.alpha})`;
      context.fill();
      for (let nextIndex = index + 1; nextIndex < points.length; nextIndex += 1) {
        const other = points[nextIndex];
        const distanceX = point.x - other.x;
        const distanceY = point.y - other.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        if (distance < 100) {
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(227, 60, 72, ${(1 - distance / 100) * 0.09})`;
          context.lineWidth = 0.5;
          context.stroke();
        }
      }
    });
    if (!document.hidden) frame = window.requestAnimationFrame(draw);
  }
  resize();
  draw();
  window.addEventListener('resize', () => { window.cancelAnimationFrame(frame); resize(); draw(); }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    window.cancelAnimationFrame(frame);
    if (!document.hidden) draw();
  });
}

function setupPointerAura() {
  const aura = document.querySelector('.pointer-aura');
  if (!aura || coarsePointer || prefersReducedMotion) return;
  let request = 0;
  window.addEventListener('pointermove', (event) => {
    if (event.pointerType !== 'mouse') return;
    aura.style.opacity = '1';
    if (request) cancelAnimationFrame(request);
    request = requestAnimationFrame(() => {
      aura.style.left = `${event.clientX}px`;
      aura.style.top = `${event.clientY}px`;
    });
  }, { passive: true });
  document.addEventListener('pointerleave', () => { aura.style.opacity = '0'; });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
    mainNav.classList.toggle('is-open', open);
  });
}

document.addEventListener('click', (event) => {
  const scrollLink = event.target.closest('a[data-scroll]');
  if (scrollLink) {
    event.preventDefault();
    navigateToHome(scrollLink.dataset.scroll);
    closeMenu();
    return;
  }
  const homeLink = event.target.closest('a[data-home]');
  if (homeLink) {
    event.preventDefault();
    navigateToHome('');
    closeMenu();
    return;
  }
  const emailLink = event.target.closest('#email-link');
  if (emailLink && !contactEmail) {
    event.preventDefault();
    showToast('Kontak email belum tersedia.');
    return;
  }
  if (event.target.closest('a[data-project], a[data-certificate]')) closeMenu();
});

window.addEventListener('hashchange', routeFromHash);
const yearElement = document.getElementById('year-now');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());
setupParticleField();
setupPointerAura();
routeFromHash();
