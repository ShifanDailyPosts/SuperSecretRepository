        document.addEventListener('DOMContentLoaded', () => {

            // === 1. COMPREHENSIVE TOOLS CURRICULUM DATABASE ===
            const LEARN_MODULES = {
                html: {
                    id: "html",
                    name: "HTML",
                    category: "Markup Language",
                    badgeClass: "learn-badge-cyan",
                    iconClass: "fa-brands fa-html5",
                    iconColor: "#e34f26",
                    tagline: "Pondasi Kerangka & Struktur Utama Halaman Web",
                    brief: {
                        summary: "HTML (HyperText Markup Language) adalah bahasa markup standar yang menjadi pondasi dasar seluruh website di internet. Jika diibaratkan membangun rumah, HTML adalah tiang penyangga, dinding, lantai, dan atapnya sebelum rumah tersebut dicat dan dihias.",
                        takeaways: [
                            { icon: "fa-solid fa-cubes", title: "Penyusun Struktur", desc: "Menyusun hierarki dokumen dari judul (heading), paragraf, gambar, formulir, hingga tata letak navigasi." },
                            { icon: "fa-solid fa-tags", title: "Berbasis Tag Semantik", desc: "Menggunakan tag semantik seperti <header>, <nav>, <main>, dan <footer> agar ramah mesin pencari (SEO)." },
                            { icon: "fa-solid fa-globe", title: "Standar Global W3C", desc: "Dapat dieksekusi secara universal oleh semua web browser tanpa memerlukan instalasi compiler tambahan." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Anatomi Dokumen HTML Pertama Kamu",
                        desc: "Setiap halaman web modern selalu diawali dengan dokumen HTML standar. Mari pelajari kerangka dasar yang wajib kamu ketahui:",
                        codeTitle: "index.html (Struktur Dasar)",
                        code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portofolio Santri Developer</title>
</head>
<body>
    <header>
        <h1>Halo Dunia, Saya Shifan!</h1>
        <p>Santri di Hiraa Center & Pengembang Web</p>
    </header>

    <main>
        <section>
            <h2>Tentang Saya</h2>
            <p>Belajar coding dengan tekun untuk menebar manfaat.</p>
            <a href="https://github.com" target="_blank">Kunjungi GitHub Saya</a>
        </section>
    </main>
</body>
</html>`,
                        steps: [
                            { num: 1, title: "<!DOCTYPE html>", desc: "Mendeklarasikan bahwa dokumen ini menggunakan standar HTML5 modern." },
                            { num: 2, title: "<head> vs <body>", desc: "<head> memuat informasi metadata, judul tab, dan font. Sedangkan <body> memuat seluruh elemen visual yang dilihat pengunjung di layar." },
                            { num: 3, title: "Tag Heading <h1> - <h6>", desc: "Digunakan untuk hierarki judul utama (h1) hingga sub-judul yang lebih kecil (h2-h6)." },
                            { num: 4, title: "Tag Tautan <a> & Atribut href", desc: "Tag anchor dengan atribut href (hypertext reference) menghubungkan halaman ke website lain." }
                        ],
                        tip: "Gunakan tag semantik (seperti <main>, <article>, <section>) daripada hanya menggunakan <div>, agar struktur halamanmu rapi, bersih, dan mudah dibaca oleh Googlebot maupun pembaca layar tunanetra."
                    },
                    quiz: [
                        {
                            q: "Tag manakah yang digunakan untuk membuat judul utama paling besar dan penting pada halaman HTML?",
                            options: ["<head>", "<h6>", "<h1>", "<title>"],
                            ans: 2,
                            explain: "Benar! Tag <h1> adalah heading tingkat pertama yang merepresentasikan judul utama paling penting pada sebuah halaman."
                        },
                        {
                            q: "Atribut apa yang wajib dicantumkan pada tag <a> untuk menentukan alamat tujuan tautan?",
                            options: ["src", "link", "href", "target"],
                            ans: 2,
                            explain: "Tepat sekali! Atribut href (Hypertext Reference) bertugas menentukan tautan URL yang akan dibuka saat link diklik."
                        },
                        {
                            q: "Bagian manakah dari dokumen HTML yang memuat konten yang benar-benar tampil di layar browser pengunjung?",
                            options: ["<head>", "<title>", "<body>", "<meta>"],
                            ans: 2,
                            explain: "Tepat! Seluruh teks, gambar, tombol, dan elemen yang tampak di layar browser diletakkan di dalam tag <body>."
                        }
                    ],
                    challenge: "Buka VS Code atau teks editor di komputermu, buat satu berkas bernama `latihan.html`, lalu buat struktur HTML yang memuat namamu dalam tag <h1> dan 2 keahlian favoritmu dalam tag list (<ul><li>...</li></ul>)."
                },

                css: {
                    id: "css",
                    name: "CSS",
                    category: "Styling & Design",
                    badgeClass: "learn-badge-cyan",
                    iconClass: "fa-brands fa-css3-alt",
                    iconColor: "#1572b6",
                    tagline: "Desain Visual, Estetika Glassmorphism & Tata Letak Responsif",
                    brief: {
                        summary: "CSS (Cascading Style Sheets) adalah bahasa desain yang bertugas mempercantik dokumen HTML. Jika HTML adalah kerangka beton bangunan, maka CSS adalah cat dinding, jendela kaca artistik, lampu hiasan, serta interior ruangan yang menawan.",
                        takeaways: [
                            { icon: "fa-solid fa-palette", title: "Visual & Warna", desc: "Mengatur palet warna, gradien modern, tipografi, dan efek blur glassmorphism." },
                            { icon: "fa-solid fa-table-cells-large", title: "Layout Flexbox & Grid", desc: "Menyusun elemen agar tampil rapi dan proporsional di berbagai ukuran layar (responsif)." },
                            { icon: "fa-solid fa-wand-magic-sparkles", title: "Animasi & Transisi", desc: "Menciptakan animasi interaktif yang halus saat tombol disentuh atau halaman digulir." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Anatomi Selektor & CSS Box Model",
                        desc: "Aturan CSS terdiri dari Selector (siapa yang dihias), Property (gaya apa yang diubah), dan Value (nilai/warnanya):",
                        codeTitle: "styles.css (Contoh Kartu Glassmorphism)",
                        code: `/* Selektor elemen kartu */
.kartu-santri {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(6, 182, 212, 0.3);
    border-radius: 16px;
    padding: 24px;
    color: #f8fafc;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Efek saat kursor diarahkan ke kartu */
.kartu-santri:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(6, 182, 212, 0.2);
    border-color: #06b6d4;
}`,
                        steps: [
                            { num: 1, title: "Selector .kartu-santri", desc: "Titik (.) menandakan bahwa gaya ini ditujukan untuk semua elemen HTML yang memiliki class='kartu-santri'." },
                            { num: 2, title: "The CSS Box Model", desc: "Setiap elemen memiliki 4 lapisan: Content (isi) -> Padding (jarak dalam) -> Border (bingkai) -> Margin (jarak luar antar kartu)." },
                            { num: 3, title: "rgba() & backdrop-filter", desc: "Kombinasi warna transparan rgba dan filter blur menghasilkan estetika Glassmorphism modern yang dipakai di website Shifan ini." },
                            { num: 4, title: "Pseudo-class :hover", desc: "Menjalankan animasi transisi saat kursor mouse melayang di atas elemen." }
                        ],
                        tip: "Gunakan CSS Variables (seperti --primary-color: #06b6d4;) di root dokumenmu. Dengan variabel, kamu bisa mengubah seluruh tema warna website cukup dari satu baris kode saja."
                    },
                    quiz: [
                        {
                            q: "Properti CSS manakah yang digunakan untuk mengubah warna latar belakang sebuah elemen?",
                            options: ["color", "bgcolor", "background-color", "fill"],
                            ans: 2,
                            explain: "Tepat! 'background-color' (atau singkatan 'background') adalah properti resmi untuk mengatur warna latar belakang elemen."
                        },
                        {
                            q: "Dalam konsep CSS Box Model, area jarak transparan antara isi teks (content) dengan garis tepi (border) disebut?",
                            options: ["margin", "padding", "outline", "spacing"],
                            ans: 1,
                            explain: "Benar! 'Padding' adalah jarak bantalan di bagian dalam antara konten dengan border. Sedangkan 'margin' adalah jarak di luar border."
                        },
                        {
                            q: "Untuk membuat teks menjadi tebal (bold) menggunakan CSS, sintaks yang tepat adalah?",
                            options: ["font-style: bold;", "text-weight: 700;", "font-weight: bold;", "font-size: heavy;"],
                            ans: 2,
                            explain: "Tepat sekali! 'font-weight: bold;' atau nilai numerik seperti 'font-weight: 700;' digunakan untuk mengatur ketebalan font."
                        }
                    ],
                    challenge: "Cobalah tambahkan aturan CSS pada berkas HTML kamu agar sebuah teks judul memiliki warna cyan (#06b6d4), bayangan teks text-shadow, dan berikan padding 16px pada wadah pembungkusnya."
                },

                javascript: {
                    id: "javascript",
                    name: "JavaScript",
                    category: "Programming Language",
                    badgeClass: "learn-badge-gold",
                    iconClass: "fa-brands fa-js",
                    iconColor: "#f7df1e",
                    tagline: "Bahasa Logika Interaktif & Otak Dinamis Web Modern",
                    brief: {
                        summary: "JavaScript (JS) adalah bahasa pemrograman dinamis yang memberikan nyawa dan kecerdasan pada halaman web. Tanpa JavaScript, website hanyalah dokumen bacaan statis. Dengan JavaScript, website dapat merespons klik, menjalankan chatbot AsisFan, menyimpan tabungan ke LocalStorage, dan memproses data secara real-time.",
                        takeaways: [
                            { icon: "fa-solid fa-bolt", title: "Manipulasi DOM", desc: "Mampu menambah, menghapus, atau mengubah teks dan elemen HTML saat pengguna sedang membaca." },
                            { icon: "fa-solid fa-database", title: "Penyimpanan Browser", desc: "Memanfaatkan LocalStorage API untuk menyimpan status pengguna secara offline tanpa server rumit." },
                            { icon: "fa-solid fa-robot", title: "Logika Kecerdasan Buatan", desc: "Mendasari logika percakapan natural chatbot asisten cerdas seperti AsisFan." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Menangani Klik Pengguna & Variabel",
                        desc: "Mari lihat bagaimana JavaScript menangkap aksi tombol klik dari pengunjung:",
                        codeTitle: "script.js (Tombol Interaktif Sederhana)",
                        code: `// 1. Ambil elemen tombol dan teks dari dokumen HTML
const tombolSapa = document.getElementById('btnSapa');
const teksSambutan = document.getElementById('teksHasil');

let hitunganKlik = 0;

// 2. Pasang pendengar aksi klik (Event Listener)
tombolSapa.addEventListener('click', () => {
    hitunganKlik++;
    teksSambutan.innerHTML = \`Assalamu'alaikum! Kamu sudah mengklik tombol ini sebanyak <strong>\${hitunganKlik} kali</strong>. ✨\`;
    teksSambutan.style.color = '#38bdf8';
});`,
                        steps: [
                            { num: 1, title: "const vs let", desc: "Gunakan 'const' untuk variabel yang referensinya tidak berubah (seperti elemen DOM), dan 'let' untuk variabel yang nilainya akan bertambah/berubah (seperti hitungan)." },
                            { num: 2, title: "document.getElementById()", desc: "Metode standar untuk mencari elemen HTML berdasarkan atribut id yang unik." },
                            { num: 3, title: "addEventListener('click', ...)", desc: "Menugaskan browser untuk menjalankan fungsi tertentu saat pengunjung mengklik elemen tersebut." },
                            { num: 4, title: "Template Literals (`${...}`)", desc: "Fitur modern JavaScript untuk menggabungkan variabel ke dalam string teks dengan sangat mudah." }
                        ],
                        tip: "Buka DevTools di browsermu (klik kanan -> Inspect -> Tab Console). Kamu bisa mengetikkan perintah JavaScript langsung di sana seperti console.log('Halo Shifan!') untuk menguji kode secara instan."
                    },
                    quiz: [
                        {
                            q: "Keyword modern JavaScript manakah yang digunakan untuk mendeklarasikan variabel yang nilainya TIDAK akan diubah kembali?",
                            options: ["var", "let", "const", "static"],
                            ans: 2,
                            explain: "Tepat sekali! 'const' (konstanta) digunakan untuk variabel tetap yang nilainya tidak boleh ditimpa ulang."
                        },
                        {
                            q: "Perintah standar JavaScript manakah yang digunakan untuk mencetak informasi ke dalam panel console browser?",
                            options: ["print.log()", "console.log()", "browser.print()", "system.out.println()"],
                            ans: 1,
                            explain: "Benar! 'console.log()' adalah fungsi utama untuk debugging dan menampilkan output di konsol browser."
                        },
                        {
                            q: "Method apa yang digunakan untuk menangkap dan merespons aksi klik pengguna pada suatu elemen HTML?",
                            options: ["element.onClick()", "element.listen()", "element.addEventListener('click', callback)", "element.bindAction()"],
                            ans: 2,
                            explain: "Tepat! 'addEventListener('click', ...)' adalah metode standar W3C untuk mendaftarkan aksi interaktif pada elemen web."
                        }
                    ],
                    challenge: "Buat tombol HTML sederhana dengan id='btnUbah' dan tag paragraf. Tulis skrip JavaScript yang mengganti isi teks paragraf tersebut menjadi kalimat motivasi santri saat tombol diklik!"
                },

                python: {
                    id: "python",
                    name: "Python",
                    category: "General Programming",
                    badgeClass: "learn-badge-green",
                    iconClass: "fa-brands fa-python",
                    iconColor: "#38bdf8",
                    tagline: "Bahasa Pemrograman Serbaguna dengan Sintaks Bersih & Elegan",
                    brief: {
                        summary: "Python adalah bahasa pemrograman tingkat tinggi yang sangat populer di seluruh dunia karena sintaksnya yang menyerupai bahasa Inggris sehari-hari. Python digunakan dalam bidang kecerdasan buatan (AI), data science, otomatisasi sistem, hingga pengembangan backend web.",
                        takeaways: [
                            { icon: "fa-solid fa-feather", title: "Sintaks Ramah Pemula", desc: "Tidak memerlukan kurung kurawal rumit atau titik-koma; struktur kode diatur rapi oleh spasi (indentasi)." },
                            { icon: "fa-solid fa-brain", title: "Ekosistem AI & Sains", desc: "Pondasi utama riset AI, pembelajaran mesin (machine learning), dan komputasi ilmiah modern." },
                            { icon: "fa-solid fa-gears", title: "Otomasi & Scripting", desc: "Mampu mengotomasi tugas-tugas rutin komputer dalam hitungan beberapa baris kode singkat." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Program Logika Pertama dengan Python",
                        desc: "Berikut adalah contoh kode Python yang meminta nama pengguna dan menentukan tingkatan santri berdasarkan jumlah hafalan juz:",
                        codeTitle: "program_santri.py",
                        code: `# Program Evaluasi Capaian Santri
nama = input("Masukkan nama santri: ")
juz_hafalan = int(input("Berapa juz hafalan Al-Qur'an kamu? "))

# Struktur percabangan logika
if juz_hafalan >= 30:
    predikat = "Hafizh 30 Juz (Mutqin Mumtaz)"
elif juz_hafalan >= 15:
    predikat = "Pejuang Setengah Perjalanan (Mumtaz)"
elif juz_hafalan >= 5:
    predikat = "Santri Berprogres (Jayyid Jiddan)"
else:
    predikat = "Newbie Semangat (Bismillah Berprogres)"

print(f"Alhamdulillah, {nama} meraih predikat: {predikat}!")`,
                        steps: [
                            { num: 1, title: "Fungsi input() & print()", desc: "input() membaca ketikan dari pengguna, sedangkan print() menampilkan hasil ke layar terminal." },
                            { num: 2, title: "Konversi Tipe Data int()", desc: "Teks yang diketikkan pengguna diubah menjadi angka bulat (integer) agar bisa dibandingkan nilainya." },
                            { num: 3, title: "Indentasi (Tab/Spasi)", desc: "Di Python, isi dari percabangan if/elif/else wajib digeser ke dalam (biasanya 4 spasi). Tidak perlu tanda kurung kurawal {}." },
                            { num: 4, title: "F-String (f'...')", desc: "Menyisipkan variabel langsung ke dalam teks menggunakan kurung kurawal {nama} secara bersih." }
                        ],
                        tip: "Perhatikan spasi indentasi kamu! Sebagian besar error bagi pemula di Python disebabkan oleh indentasi yang tidak sejajar (IndentationError)."
                    },
                    quiz: [
                        {
                            q: "Bagaimana cara menampilkan teks 'Bismillah' ke layar terminal menggunakan Python?",
                            options: ["echo 'Bismillah'", "print('Bismillah')", "console.log('Bismillah')", "System.out.println('Bismillah')"],
                            ans: 1,
                            explain: "Benar! 'print()' adalah fungsi bawaan standar Python untuk menampilkan output ke layar."
                        },
                        {
                            q: "Di dalam bahasa Python, bagaimana cara mendefinisikan blok kode di dalam fungsi atau percabangan if?",
                            options: ["Menggunakan kurung kurawal { }", "Menggunakan indentasi (spasi/tab)", "Menutupnya dengan kata 'ENDIF'", "Menggunakan titik koma di akhir baris"],
                            ans: 1,
                            explain: "Tepat sekali! Python mengandalkan indentasi spasi untuk menentukan struktur hirarki blok kode, menjadikannya sangat bersih dan mudah dibaca."
                        },
                        {
                            q: "Karakter manakah yang digunakan untuk menulis baris komentar (catatan yang tidak dieksekusi) di Python?",
                            options: ["//", "/*", "#", "<!--"],
                            ans: 2,
                            explain: "Benar! Tanda pagar '#' digunakan untuk membuat komentar satu baris di Python."
                        }
                    ],
                    challenge: "Tulis program Python sederhana yang menghitung luas persegi panjang: minta input panjang dan lebar, lalu cetak hasil perhitungan luasnya menggunakan rumus panjang x lebar."
                },

                git: {
                    id: "git",
                    name: "Git & GitHub",
                    category: "Version Control",
                    badgeClass: "learn-badge-cyan",
                    iconClass: "fa-brands fa-github",
                    iconColor: "#cbd5e1",
                    tagline: "Sistem Kontrol Versi Kode & Platform Kolaborasi Developer Global",
                    brief: {
                        summary: "Git adalah sistem kontrol versi (Version Control System) terdistribusi yang mencatat setiap riwayat perubahan pada kode projekmu secara aman. Sedangkan GitHub adalah platform cloud tempat menyimpan repositori Git tersebut secara online agar dapat dicadangkan dan dikolaborasikan.",
                        takeaways: [
                            { icon: "fa-solid fa-clock-rotate-left", title: "Mesin Waktu Kode", desc: "Kamu bisa membatalkan kesalahan dan kembali ke versi kode kapan pun tanpa takut file rusak." },
                            { icon: "fa-solid fa-cloud-arrow-up", title: "Pencadangan Aman", desc: "Menyimpan seluruh aset portofolio di cloud GitHub agar tidak hilang jika laptop mengalami kendala." },
                            { icon: "fa-solid fa-code-branch", title: "Kolaborasi Tim", desc: "Mendukung pembuatan branch (cabang kerja) sehingga banyak developer bisa bekerja bersamaan tanpa bentrok." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Alur Kerja 3 Perintah Keramat Git",
                        desc: "Setiap kali kamu menyelesaikan fitur baru di website portofoliomu, berikut alur kerja standar yang selalu kamu jalankan:",
                        codeTitle: "Terminal / Bash",
                        code: `# 1. Periksa file apa saja yang baru kamu ubah
git status

# 2. Masukkan seluruh file perubahan ke Staging Area (siap dikemas)
git add .

# 3. Simpan perubahan secara permanen dengan catatan pesan bermakna
git commit -m "feat: tambahkan modul belajar dan latihan soal interaktif"

# 4. Kirimkan commit dari laptopmu ke server cloud GitHub
git push origin main`,
                        steps: [
                            { num: 1, title: "Working Directory", desc: "Area tempat kamu mengetik dan mengedit file di editor (sebelum file dimasukkan ke Git)." },
                            { num: 2, title: "git add . (Staging Area)", desc: "Menyiapkan file yang ingin dimasukkan ke dalam paket rekaman commit." },
                            { num: 3, title: "git commit -m '...'", desc: "Menyegel rekaman perubahan permanen dengan deskripsi yang menjelaskan apa yang baru diperbaiki atau ditambahkan." },
                            { num: 4, title: "git push origin main", desc: "Mengunggah paket commit lokal ke branch 'main' di server GitHub online." }
                        ],
                        tip: "Selalu sertakan pesan commit yang jelas dan bermakna (misal: 'fix: perbaiki tombol login' bukan 'update' atau 'revisi 123') agar riwayat projekmu mudah dipahami di masa depan."
                    },
                    quiz: [
                        {
                            q: "Perintah Git apakah yang digunakan untuk memindahkan perubahan berkas ke Staging Area sebelum disimpan?",
                            options: ["git push", "git commit", "git add .", "git save"],
                            ans: 2,
                            explain: "Tepat! 'git add .' memindahkan semua berkas yang telah dimodifikasi ke Staging Area."
                        },
                        {
                            q: "Perintah manakah yang digunakan untuk membuat catatan rekaman riwayat permanen disertai pesan deskripsi?",
                            options: ["git commit -m 'pesan'", "git log -m 'pesan'", "git record", "git push"],
                            ans: 0,
                            explain: "Benar! 'git commit -m' membuat catatan snapshot permanen dalam riwayat Git projekmu."
                        },
                        {
                            q: "Perintah apa yang digunakan untuk memeriksa status berkas apakah ada yang baru diubah atau belum ter-stage?",
                            options: ["git check", "git view", "git status", "git list"],
                            ans: 2,
                            explain: "Tepat sekali! 'git status' adalah perintah andalan untuk melihat kondisi cabang kerja dan berkas yang termodifikasi."
                        }
                    ],
                    challenge: "Buka terminal di komputermu pada folder projek, jalankan perintah `git status`, dan amati informasi branch serta berkas yang sedang dalam pengawasan Git."
                },

                hostinger: {
                    id: "hostinger",
                    name: "Hostinger FTP",
                    category: "Cloud & Deployment",
                    badgeClass: "learn-badge-cyan",
                    iconClass: "fa-solid fa-server",
                    iconColor: "#c084fc",
                    tagline: "Hosting Cloud & Protokol Deployment Website ke Ranah Publik",
                    brief: {
                        summary: "Hostinger adalah penyedia layanan web hosting tempat berkas website disimpan di server internet 24 jam nonstop. Sementara FTP (File Transfer Protocol) adalah jalur protokol pengiriman berkas dari komputer lokal menuju direktori server (public_html) agar website bisa dibuka oleh siapa saja di seluruh dunia.",
                        takeaways: [
                            { icon: "fa-solid fa-globe", title: "Akses Global 24/7", desc: "Membuat portofoliomu online dan dapat dikunjungi kapan pun oleh penguji, guru, maupun calon mitra." },
                            { icon: "fa-solid fa-bolt-lightning", title: "Otomasi Skrip Deployment", desc: "Mengunggah pembaruan file HTML, CSS, dan JS hanya dengan sekali klik skrip PowerShell (upload_ftp.ps1)." },
                            { icon: "fa-solid fa-shield-halved", title: "Proteksi Berkas (.htaccess)", desc: "Menjaga keamanan folder server agar file sensitif tidak bisa diintip orang luar." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Mengunggah Berkas ke Folder public_html",
                        desc: "Agar website dapat diakses publik, seluruh berkas utama (index.html, styles.css, script.js) harus diletakkan di dalam folder `public_html` di server hosting:",
                        codeTitle: "Konsep Alur FTP Deployment",
                        code: `# 1. Alur Koneksi FTP
Komputer Lokal (D:\\Portofolio Shifan\\)
         │
         ▼ (Protokol FTP port 21 terautentikasi)
Hostinger Web Server (IP: 145.79.9.243)
         │
         ▼
Folder Utama: /public_html/
   ├── index.html        (Halaman Utama Portofolio)
   ├── learn.html        (Modul Belajar & Latihan Soal)
   ├── styles.css        (Desain Tampilan Glassmorphism)
   ├── script.js         (Otak Interaktif & AsisFan AI)
   ├── .htaccess         (Proteksi Keamanan Server)
   └── assets/images/    (Foto Profil & Media)`,
                        steps: [
                            { num: 1, title: "Folder public_html", desc: "Merupakan akar direktori web. Berkas index.html di dalam folder ini otomatis menjadi halaman pertama yang terbuka saat domain diakses." },
                            { num: 2, title: "Kredensial FTP", desc: "Terdiri dari Host IP Server, Username FTP, dan Password FTP. Ingat: data ini harus dirahasiakan dan jangan diunggah ke GitHub!" },
                            { num: 3, title: "Skrip upload_ftp.ps1", desc: "Skrip otomasi yang membaca berkas lokal dan mengirimkannya ke Hostinger via method WebClient STOR secara instan." }
                        ],
                        tip: "Pastikan selalu menyertakan berkas .htaccess dengan aturan 'Options -Indexes' agar struktur folder hostingmu tidak terbuka bebas di internet."
                    },
                    quiz: [
                        {
                            q: "Kepanjangan dari singkatan FTP adalah?",
                            options: ["Fast Text Protocol", "File Transfer Protocol", "Folder Tracking Program", "Format Transmission Protocol"],
                            ans: 1,
                            explain: "Tepat sekali! FTP adalah singkatan dari File Transfer Protocol, protokol standar transfer file antar komputer dan server."
                        },
                        {
                            q: "Folder utama di server hosting tempat meletakkan berkas website agar bisa diakses oleh pengunjung umum adalah?",
                            options: ["private_folder", "public_html", "system_root", "server_files"],
                            ans: 1,
                            explain: "Benar! 'public_html' adalah root direktori standar web server tempat meletakkan dokumen yang dapat dibuka publik."
                        },
                        {
                            q: "Port default berstandar jaringan yang digunakan untuk koneksi FTP konvensional adalah?",
                            options: ["Port 80", "Port 443", "Port 21", "Port 22"],
                            ans: 2,
                            explain: "Tepat! Port 21 adalah port default yang digunakan untuk melayani perintah kontrol koneksi FTP."
                        }
                    ],
                    challenge: "Pahami alur berkas: jika kamu membuat halaman baru bernama `kontak.html` di komputer lokal, ke folder manakah di server Hostinger berkas tersebut harus diunggah agar bisa dibuka di browser?"
                },

                vscode: {
                    id: "vscode",
                    name: "VS Code",
                    category: "Code Editor",
                    badgeClass: "learn-badge-cyan",
                    iconClass: "fa-solid fa-code",
                    iconColor: "#007acc",
                    tagline: "Editor Kode Andalan Developer Modern dengan Ekosistem Super Lengkap",
                    brief: {
                        summary: "Visual Studio Code (VS Code) adalah teks editor dan Integrated Development Environment (IDE) ringan namun sangat bertenaga buatan Microsoft. Editor ini menjadi senjata harian Shifan dalam menulis kode HTML, CSS, JavaScript, dan skrip otomasi dengan cepat dan terstruktur.",
                        takeaways: [
                            { icon: "fa-solid fa-terminal", title: "Terminal Terintegrasi", desc: "Dapat menjalankan perintah Git dan PowerShell langsung di dalam editor tanpa perlu membuka jendela terpisah." },
                            { icon: "fa-solid fa-puzzle-piece", title: "Ribuan Ekstensi", desc: "Mendukung ekstensi populer seperti Live Server, Prettier, dan Auto Rename Tag untuk mempercepat coding." },
                            { icon: "fa-solid fa-keyboard", title: "Shortcut Produktivitas", desc: "Dilengkapi pintasan keyboard sakti untuk navigasi berkas dan perapian kode otomatis." }
                        ]
                    },
                    lesson: {
                        title: "Pelajaran Pembukaan: Shortcut Sakti & Emmet Cepat",
                        desc: "Berikut adalah shortcut keyboard yang wajib dikuasai santri developer agar mengetik kode 10 kali lebih cepat:",
                        codeTitle: "VS Code Productivity Guide",
                        code: `/* Shortcut Wajib Tahu di Windows */
Ctrl + P            -> Buka berkas apa saja secara instan (Quick Open)
Ctrl + Shift + P    -> Buka Command Palette (semua perintah editor)
Ctrl + ~ (backtick) -> Buka / Tutup Terminal terintegrasi
Alt + Shift + F     -> Merapikan format kode otomatis (Auto Format)
Alt + Panah Bawah   -> Menggandakan baris kode ke bawah
Ctrl + /            -> Memberi komentar (comment/uncomment) otomatis

/* Keajaiban Emmet di file HTML */
Ketik '!' lalu tekan Tab -> Menghasilkan kerangka lengkap HTML5 dalam 1 detik!
Ketik 'div.kartu>h3+p'  -> Menghasilkan <div> dengan class kartu, berisi <h3> dan <p>!`,
                        steps: [
                            { num: 1, title: "Explorer Panel (Ctrl + B)", desc: "Menampilkan dan menyembunyikan daftar berkas projek di panel kiri agar layar kerja lega." },
                            { num: 2, title: "Live Server Extension", desc: "Ekstensi yang membuat browser me-reload otomatis setiap kali kamu menekan Ctrl + S (Simpan)." },
                            { num: 3, title: "Format Document (Alt + Shift + F)", desc: "Menata indentasi spasi kode yang berantakan menjadi rapi dan mudah dibaca." }
                        ],
                        tip: "Selalu aktifkan fitur 'Format on Save' di pengaturan VS Code (Settings -> ketik 'Format on Save' -> centang). Kode kamu akan selalu rapi otomatis setiap kali disimpan!"
                    },
                    quiz: [
                        {
                            q: "Shortcut default pada VS Code di sistem Windows untuk membuka Terminal terintegrasi adalah?",
                            options: ["Ctrl + T", "Ctrl + ~ (backtick)", "Alt + F4", "Ctrl + Shift + T"],
                            ans: 1,
                            explain: "Tepat sekali! 'Ctrl + ~' membuka dan menutup terminal bawaan VS Code secara instan."
                        },
                        {
                            q: "Fitur singkatan bawaan VS Code yang memungkinkan kamu membuat kerangka HTML cukup dengan mengetik tanda '!' lalu Tab bernama?",
                            options: ["IntelliCode", "SnippetMaster", "Emmet", "AutoBoilerplate"],
                            ans: 2,
                            explain: "Benar! 'Emmet' adalah toolkit singkatan bawaan VS Code yang mempercepat penulisan tag HTML dan CSS secara drastis."
                        },
                        {
                            q: "Kombinasi tombol keyboard manakah yang digunakan untuk mencari dan membuka berkas projek secara instan (Quick Open)?",
                            options: ["Ctrl + P", "Ctrl + F", "Ctrl + O", "Alt + P"],
                            ans: 0,
                            explain: "Tepat! 'Ctrl + P' membuka bilah Quick Open file tanpa perlu mengeklik folder satu per satu di Explorer."
                        }
                    ],
                    challenge: "Buka VS Code, buat file baru berekstensi .html, ketik tanda seru (!) lalu tekan tombol Tab. Perhatikan bagaimana kerangka HTML5 dibuat otomatis dalam 1 detik!"
                }
            };

            const TOOL_KEYS = ['html', 'css', 'javascript', 'python', 'git', 'hostinger', 'vscode'];

            // === 2. STATE MANAGER & QUERY PARSER ===
            const urlParams = new URLSearchParams(window.location.search);
            let currentToolKey = (urlParams.get('tool') || 'html').toLowerCase();
            if (!LEARN_MODULES[currentToolKey]) currentToolKey = 'html';

            // Quiz progress tracker per tool
            const quizProgress = {};
            TOOL_KEYS.forEach(k => {
                quizProgress[k] = {
                    answers: {}, // questionIdx -> selectedOptIdx
                    submitted: false
                };
            });

            // === 3. DOM ELEMENTS ===
            const toolNavList = document.getElementById('toolNavList');
            const toolHeroBanner = document.getElementById('toolHeroBanner');
            const sectionBrief = document.getElementById('sectionBrief');
            const sectionLesson = document.getElementById('sectionLesson');
            const sectionQuiz = document.getElementById('sectionQuiz');
            const prevToolBtn = document.getElementById('prevToolBtn');
            const nextToolBtn = document.getElementById('nextToolBtn');
            const prevToolLabel = document.getElementById('prevToolLabel');
            const nextToolLabel = document.getElementById('nextToolLabel');

            // === 4. RENDER ENGINE ===
            function renderModule(toolKey) {
                const mod = LEARN_MODULES[toolKey];
                if (!mod) return;
                currentToolKey = toolKey;

                // Update URL query string without reloading page
                try {
                    const newUrl = new URL(window.location);
                    newUrl.searchParams.set('tool', toolKey);
                    window.history.replaceState({}, '', newUrl);
                } catch (e) {
                    // Safe fallback for file:// or restricted environments
                }

                // Update Active Tab in nav strip
                document.querySelectorAll('.tool-nav-btn').forEach(btn => {
                    if (btn.getAttribute('data-tool') === toolKey) {
                        btn.classList.add('active');
                        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    } else {
                        btn.classList.remove('active');
                    }
                });

                // Update Title
                document.title = `Modul Belajar ${mod.name} - Shifan Shalih Adiluhung`;

                // 1. Render Hero Banner
                toolHeroBanner.innerHTML = `
                    <div class="learn-hero-meta">
                        <div class="learn-hero-icon" style="color: ${mod.iconColor};">
                            <i class="${mod.iconClass}"></i>
                        </div>
                        <div class="learn-hero-title">
                            <h1>
                                <span>${mod.name}</span>
                                <span class="learn-badge ${mod.badgeClass}">${mod.category}</span>
                            </h1>
                            <p style="color: var(--text-secondary); margin-top: 0.35rem; font-size: 1.05rem;">
                                ${mod.tagline}
                            </p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); border: 1px solid var(--border-color); font-size: 0.8rem; padding: 0.35rem 0.85rem; border-radius: 20px;">
                            <i class="fa-solid fa-graduation-cap"></i> Tingkat: Dasar / Pembuka
                        </span>
                        <span class="badge" style="background: rgba(255, 255, 255, 0.05); color: var(--text-muted); border: 1px solid var(--border-color); font-size: 0.8rem; padding: 0.35rem 0.85rem; border-radius: 20px;">
                            <i class="fa-solid fa-circle-question"></i> ${mod.quiz.length} Soal Latihan
                        </span>
                    </div>
                `;

                // 2. Render Section 1: Ringkasan & Fungsi
                sectionBrief.innerHTML = `
                    <div class="section-tag-heading">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>1. Ringkasan &amp; Fungsi ${mod.name}</span>
                    </div>
                    <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.25rem;">
                        ${mod.brief.summary}
                    </p>
                    <div class="takeaway-grid">
                        ${mod.brief.takeaways.map(t => `
                            <div class="takeaway-card">
                                <h4><i class="${t.icon}"></i> ${t.title}</h4>
                                <p>${t.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                `;

                // 3. Render Section 2: Pelajaran Pembukaan
                sectionLesson.innerHTML = `
                    <div class="section-tag-heading">
                        <i class="fa-solid fa-book-open"></i>
                        <span>2. ${mod.lesson.title}</span>
                    </div>
                    <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.5rem;">
                        ${mod.lesson.desc}
                    </p>

                    <div class="code-playground">
                        <div class="code-header">
                            <div class="code-dots">
                                <span class="code-dot dot-red"></span>
                                <span class="code-dot dot-yellow"></span>
                                <span class="code-dot dot-green"></span>
                            </div>
                            <span class="code-title"><i class="fa-regular fa-file-code"></i> ${mod.lesson.codeTitle}</span>
                            <button type="button" class="copy-btn" id="copyCodeBtn" data-code="${encodeURIComponent(mod.lesson.code)}">
                                <i class="fa-regular fa-copy"></i>
                                <span>Salin Kode</span>
                            </button>
                        </div>
                        <pre class="code-content"><code>${escapeHtml(mod.lesson.code)}</code></pre>
                    </div>

                    <div class="step-list">
                        ${mod.lesson.steps.map(s => `
                            <div class="step-item">
                                <div class="step-num">${s.num}</div>
                                <div class="step-body">
                                    <h5>${s.title}</h5>
                                    <p>${s.desc}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="pro-tip-box">
                        <h5><i class="fa-solid fa-lightbulb"></i> Tips Santri Developer:</h5>
                        <p>${mod.lesson.tip}</p>
                    </div>
                `;

                // Bind copy button
                const copyBtn = document.getElementById('copyCodeBtn');
                if (copyBtn) {
                    copyBtn.addEventListener('click', () => {
                        const rawCode = decodeURIComponent(copyBtn.getAttribute('data-code'));
                        navigator.clipboard.writeText(rawCode).then(() => {
                            copyBtn.innerHTML = `<i class="fa-solid fa-check" style="color:#10b981;"></i> <span style="color:#10b981;">Tersalin!</span>`;
                            showToast("Kode berhasil disalin ke clipboard!", "success");
                            setTimeout(() => {
                                copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> <span>Salin Kode</span>`;
                            }, 2000);
                        });
                    });
                }

                // 4. Render Section 3: Latihan Soal Interaktif
                renderQuizSection(toolKey);

                // 5. Update Pager
                const currentIdx = TOOL_KEYS.indexOf(toolKey);
                const prevIdx = (currentIdx - 1 + TOOL_KEYS.length) % TOOL_KEYS.length;
                const nextIdx = (currentIdx + 1) % TOOL_KEYS.length;

                prevToolLabel.textContent = LEARN_MODULES[TOOL_KEYS[prevIdx]].name;
                nextToolLabel.textContent = LEARN_MODULES[TOOL_KEYS[nextIdx]].name;

                prevToolBtn.onclick = () => renderModule(TOOL_KEYS[prevIdx]);
                nextToolBtn.onclick = () => renderModule(TOOL_KEYS[nextIdx]);
            }

            // === 5. QUIZ ENGINE ===
            function renderQuizSection(toolKey) {
                const mod = LEARN_MODULES[toolKey];
                const state = quizProgress[toolKey];

                const letters = ['A', 'B', 'C', 'D'];
                const totalQ = mod.quiz.length;
                let answeredCount = Object.keys(state.answers).length;
                let correctCount = 0;

                Object.keys(state.answers).forEach(qIdx => {
                    if (state.answers[qIdx] === mod.quiz[qIdx].ans) {
                        correctCount++;
                    }
                });

                const quizHtml = mod.quiz.map((qItem, qIdx) => {
                    const chosen = state.answers[qIdx];
                    const isAnswered = (chosen !== undefined);

                    return `
                        <div class="quiz-item-card glass-card" id="qcard_${qIdx}">
                            <div class="quiz-item-header">
                                <span class="quiz-q-num"><i class="fa-solid fa-circle-question"></i> Soal ${qIdx + 1} dari ${totalQ}</span>
                                ${isAnswered ? (chosen === qItem.ans ? '<span class="badge" style="background: rgba(16,185,129,0.18); color: #34d399; font-size: 0.75rem;"><i class="fa-solid fa-check"></i> Benar</span>' : '<span class="badge" style="background: rgba(239,68,68,0.18); color: #f87171; font-size: 0.75rem;"><i class="fa-solid fa-xmark"></i> Kurang Tepat</span>') : ''}
                            </div>
                            <h4>${qItem.q}</h4>
                            <div class="quiz-options">
                                ${qItem.options.map((optText, optIdx) => {
                                    let extraClass = '';
                                    if (isAnswered) {
                                        if (optIdx === qItem.ans) extraClass = 'correct';
                                        else if (optIdx === chosen) extraClass = 'wrong';
                                    }
                                    return `
                                        <button type="button" class="quiz-opt-btn ${extraClass}" data-q="${qIdx}" data-opt="${optIdx}" ${isAnswered ? 'disabled' : ''}>
                                            <span class="opt-letter">${letters[optIdx]}</span>
                                            <span>${escapeHtml(optText)}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>

                            <div class="quiz-feedback-box ${isAnswered ? 'show' : ''} ${isAnswered ? (chosen === qItem.ans ? 'quiz-feedback-correct' : 'quiz-feedback-wrong') : ''}">
                                ${isAnswered ? (chosen === qItem.ans ? `<strong><i class="fa-solid fa-circle-check"></i> Jawaban Tepat!</strong> ` : `<strong><i class="fa-solid fa-circle-xmark"></i> Jawaban Kurang Tepat.</strong> `) + qItem.explain : ''}
                            </div>
                        </div>
                    `;
                }).join('');

                const scorePct = Math.round((correctCount / totalQ) * 100);

                sectionQuiz.innerHTML = `
                    <div class="section-tag-heading">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span>3. Latihan Soal Interaktif (${mod.name})</span>
                    </div>
                    <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                        Uji pemahamanmu setelah membaca materi di atas. Klik pilihan jawaban yang menurutmu paling tepat:
                    </p>

                    <div class="quiz-container">
                        ${quizHtml}
                    </div>

                    <!-- Live Score Board -->
                    <div class="quiz-score-board">
                        <div class="score-info">
                            <div class="score-trophy">
                                <i class="fa-solid ${scorePct === 100 ? 'fa-crown' : (scorePct >= 60 ? 'fa-award' : 'fa-seedling')}"></i>
                            </div>
                            <div class="score-text">
                                <h4>Progres Latihan: ${answeredCount} / ${totalQ} Soal Dijawab</h4>
                                <p>Skor Kamu Saat Ini: <strong style="color: ${scorePct >= 70 ? '#34d399' : '#fbbf24'}; font-size: 1.05rem;">${correctCount} Benar (${scorePct}%)</strong></p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-outline btn-sm" id="resetQuizBtn" style="cursor: pointer;">
                            <i class="fa-solid fa-rotate-left"></i>
                            <span>Ulangi Kuis ${mod.name}</span>
                        </button>
                    </div>

                    <!-- Hands-on Challenge -->
                    <div class="challenge-card">
                        <h4><i class="fa-solid fa-laptop-code"></i> Tantangan Praktik Mandiri:</h4>
                        <p>${mod.challenge}</p>
                    </div>
                `;

                // Bind option click listeners
                sectionQuiz.querySelectorAll('.quiz-opt-btn').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const qIdx = parseInt(btn.getAttribute('data-q'));
                        const optIdx = parseInt(btn.getAttribute('data-opt'));
                        state.answers[qIdx] = optIdx;

                        const isCorrect = (optIdx === mod.quiz[qIdx].ans);
                        if (isCorrect) {
                            showToast("Jawaban kamu tepat! Lanjutkan.", "success");
                        } else {
                            showToast("Jawaban kurang tepat. Perhatikan pembahasannya.", "error");
                        }

                        // Re-render quiz section to show feedback
                        renderQuizSection(toolKey);
                    });
                });

                // Bind reset quiz button
                const resetBtn = document.getElementById('resetQuizBtn');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        state.answers = {};
                        renderQuizSection(toolKey);
                        showToast(`Kuis ${mod.name} telah di-reset. Selamat mencoba kembali!`, "info");
                    });
                }
            }

            // === 6. TOP STRIP BUTTONS EVENT LISTENERS ===
            document.querySelectorAll('.tool-nav-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const toolKey = btn.getAttribute('data-tool');
                    renderModule(toolKey);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // Helper to escape HTML
            function escapeHtml(str) {
                return str
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            // Toast Helper
            function showToast(message, type = 'info') {
                const container = document.getElementById('toastContainer');
                if (!container) return;
                const toast = document.createElement('div');
                toast.className = `toast toast-${type}`;

                let iconClass = 'fa-circle-info';
                if (type === 'success') iconClass = 'fa-circle-check';
                if (type === 'error') iconClass = 'fa-triangle-exclamation';

                toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
                container.appendChild(toast);

                setTimeout(() => {
                    toast.style.animation = 'slideIn 0.3s ease-out reverse forwards';
                    setTimeout(() => toast.remove(), 300);
                }, 2800);
            }

            // === 7. INITIAL LAUNCH ===
            renderModule(currentToolKey);

        });
