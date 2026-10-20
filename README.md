# VALERO — Futuristic Digital Portfolio

Portfolio statis bertema futuristik gelap dengan aksen merah dan putih, terinspirasi nuansa stealth / sci-fi dengan simbol geometris orisinal, tanpa memakai logo atau aset resmi dari game tertentu. Dibuat dengan **HTML, CSS, dan JavaScript vanilla** agar mudah dipelajari dan langsung bisa di-host di GitHub Pages.

## Isi folder

- `index.html` — kerangka dokumen, metadata, navigasi utama, dan pemanggilan file CSS/JS.
- `style.css` — warna, layout responsif, efek 3D, animasi, dan aturan tampilan perangkat kecil.
- `script.js` — data tujuh proyek dan dua sertifikat, routing hash, filter kategori, animasi partikel, tilt 3D, dan navigasi.
- `assets/` — gambar proyek, dua foto sertifikat (VOY dan seminar nasional), serta favicon.

## Jalankan di komputer

Cara termudah: buka `index.html` di browser. Untuk pengalaman pengembangan yang lebih nyaman di VS Code, pasang ekstensi **Live Server**, klik kanan `index.html`, lalu pilih **Open with Live Server**. Situs tidak memerlukan framework atau proses build.

## Ganti isi portofolio

1. Buka `script.js`, lalu cari array `projects`. Ubah `title`, `short`, `summary`, `overview`, `challenge`, `solution`, `role`, `date`, `stack`, `lessons`, `images`, dan `captions` sesuai proyekmu.
2. Untuk gambar, salin file gambar proyek ke folder `assets/`. Lalu sesuaikan daftar `images` pada proyek di `script.js`. Jumlah gambar bebas; grid detail akan menyesuaikan otomatis.
3. Placeholder SVG disediakan dengan nama file yang jelas. Cara praktis untuk foto PNG/JPG/WebP adalah menaruh file baru di `assets/`, lalu memperbarui path pada daftar `images` di `script.js`. Placeholder juga bisa diganti dengan ilustrasi SVG buatanmu sendiri. PNG, JPG, WebP, dan SVG dapat dipakai. Gunakan gambar yang kamu punya hak untuk publikasikan.
4. Dua sertifikat pada situs adalah partisipasi dalam lomba speech Voice of Youth (VOY) dan seminar nasional tentang pembangunan karakter. Detailnya dikelola pada array `certificates` di `script.js`.
5. Tombol kontak menggunakan alamat email yang ditetapkan pada variabel `contactEmail` di bagian awal `script.js`.
6. Cari kata `Valero`, `2026`, atau label lain di `index.html` dan `script.js` untuk mengganti identitas, tahun, lokasi, status, dan deskripsi. Beberapa label visual dibuat di template JavaScript. Sesuaikan juga teks `alt` di fungsi `renderProjectCard()` dan `renderProjectDetail()` agar deskripsi gambar sesuai dengan screenshot asli.

### Rasio gambar yang direkomendasikan

- Gambar proyek: **16:10** atau **3:2** (contohnya 1600×1000 atau 1500×1000).
- Sertifikat: orientasi portrait, **5:7** (contohnya 1000×1400), dengan teks cukup tajam untuk dibaca.
- Gunakan gambar terkompresi/WebP bila ukurannya besar. Hindari menyertakan informasi sensitif pada screenshot database atau sertifikat.

## Publikasikan lewat GitHub Pages

1. Buat repository baru di GitHub, misalnya `valero-portfolio`.
2. Unggah **isi folder ini** (file `index.html`, `style.css`, `script.js`, `README.md`, dan folder `assets`) ke root repository. Jangan unggah ZIP saja; ekstrak ZIP dulu.
3. Buka **Settings → Pages** pada repository.
4. Pada bagian *Build and deployment*, pilih **Deploy from a branch**. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
5. Tunggu proses deployment selesai. GitHub akan menampilkan URL Pages di bagian yang sama. Buka URL itu dan uji navigasi, foto, serta tampilan mobile.
6. Setiap kali kamu melakukan commit/push ke branch yang dipilih, GitHub Pages akan memperbarui situs otomatis.

Kalau menu Pages tidak tersedia atau repository organisasi memiliki kebijakan khusus, cek izin repository dan dokumentasi GitHub Pages terbaru.

## Fitur yang bisa kamu pelajari

- **Array of objects:** proyek dan sertifikat didefinisikan sebagai data, lalu dibuat menjadi kartu memakai `map()`.
- **Template literals:** membangun kartu dan halaman detail secara dinamis.
- **Hash routing:** `#/project/aether-nexus` dan `#/certificate/web-foundations` berganti tampilan tanpa membuat file HTML tambahan.
- **Event delegation:** klik navigasi ditangani pada `document`, sehingga tautan yang dibuat dinamis tetap berfungsi.
- **Filter kategori:** `data-filter` mengubah visibilitas kartu dan state tombol `aria-pressed`.
- **IntersectionObserver:** menampilkan kartu saat mendekati viewport untuk animasi masuk yang ringan.
- **Canvas animation:** partikel dan garis tipis bergerak sebagai lapisan latar, dengan jumlah dibatasi agar tidak terlalu berat.
- **3D tilt:** `pointermove` menghitung posisi pointer relatif terhadap kartu dan mengubah CSS custom properties `--tilt-x` dan `--tilt-y`.
- **Responsive design:** CSS Grid, media queries, dan `prefers-reduced-motion` menjaga layout serta animasi beradaptasi dengan perangkat dan preferensi pengguna.

## Ide peningkatan berikutnya

- Tambahkan link repository/demo nyata untuk setiap proyek, setelah URL sudah tersedia.
- Buat halaman *case study* lebih kuat lewat masalah awal, sketsa, keputusan desain, tantangan, solusi, dan hasil pengujian.
- Optimalkan semua foto ke WebP/AVIF, gunakan ukuran gambar yang sesuai, dan tulis `alt` yang spesifik.
- Tambahkan Open Graph image dan favicon personal, lalu isi deskripsi halaman yang akurat.
- Tambahkan pemeriksaan aksesibilitas, keyboard navigation, kontras, link yang hidup, dan uji beberapa ukuran layar.
- Pakai GitHub Issues/Projects untuk daftar pekerjaan, commits yang deskriptif, branch untuk fitur, serta README proyek yang menjelaskan cara menjalankan kode.
- Jika mengintegrasikan API atau backend, jangan pernah menyimpan password, token pribadi, atau secret di repository publik.

### Catatan konten

Nama proyek dan penjelasan di paket ini adalah **contoh starter** untuk memperlihatkan tata letak. Ubah sesuai proyek sungguhan dan jangan menyatakan bahwa sertifikat atau hasil proyek contoh merupakan prestasi nyata.
