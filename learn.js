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
            tagline: "Pondasi Arsitektur Semantik, Aksesibilitas (A11y) & Struktur Web Modern",
            brief: {
                summary: "HTML (HyperText Markup Language) adalah bahasa markup standar yang menjadi fondasi dasar seluruh website di internet. Dalam era web modern, HTML bukan sekadar menampilkan teks atau gambar, melainkan bertindak sebagai arsitektur semantik yang memberi makna pada setiap elemen. Arsitektur semantik ini memungkinkan peramban web (browser), mesin pencari (SEO Googlebot), dan teknologi bantu disabilitas (Screen Readers) untuk memahami struktur dokumen secara akurat, hierarkis, dan mudah diakses oleh semua pengguna.",
                takeaways: [
                    { icon: "fa-solid fa-sitemap", title: "Arsitektur Semantik & SEO", desc: "Tag seperti <header>, <nav>, <main>, <article>, <section>, dan <footer> memberi sinyal struktural yang jelas ke Googlebot untuk meningkatkan ranking SEO." },
                    { icon: "fa-solid fa-universal-access", title: "Aksesibilitas Universal (WCAG)", desc: "Standar aksesibilitas memastikan konten dapat dinavigasi oleh screen reader melalui atribut alt, aria-label, dan struktur form yang benar." },
                    { icon: "fa-solid fa-shield-halved", title: "Validasi Form Bawaan", desc: "HTML5 menyediakan sistem validasi input bawaan tanpa JavaScript melalui atribut required, type='email', pattern, min, dan max." },
                    { icon: "fa-solid fa-mobile-screen-button", title: "Metadata & Viewport", desc: "Tag <meta name='viewport'> menjamin scaling responsif di layar ponsel, serta meta Open Graph (og:) untuk kartu preview media sosial." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Anatomi Dokumen HTML5 Semantik & Aksesibel",
                desc: "Berikut kerangka dokumen HTML5 profesional yang menerapkan hierarki semantik, aksesibilitas formulir, dan metadata SEO:",
                codeTitle: "index.html (Standar Profesional)",
                code: `<!DOCTYPE html>
<html lang="id">
<head>
    <!-- 1. Metadata Dasar & Responsiveness -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Portofolio resmi Shifan Shalih Adiluhung - Santri & Web Developer">
    <title>Shifan Shalih Adiluhung | Web Developer</title>

    <!-- 2. Favicon & Stylesheet External -->
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- 3. Semantic Header & Navigasi Utama -->
    <header class="site-header">
        <a href="#main-content" class="skip-link">Lewati ke konten utama</a>
        <nav aria-label="Navigasi Utama Situs">
            <a href="#tentang">Tentang</a>
            <a href="#karya">Karya</a>
            <a href="#kontak">Hubungi</a>
        </nav>
    </header>

    <!-- 4. Konten Pokok Tunggal Dokumen -->
    <main id="main-content">
        <article class="hero-article">
            <header>
                <h1>Bismillah, Selamat Datang di Karya Shifan</h1>
                <p class="subtitle">Santri Hiraa Center yang berdedikasi di bidang teknologi web.</p>
            </header>
            
            <section id="kontak-form">
                <h2>Kirim Pesan Kolaborasi</h2>
                <!-- Form dengan label aksesibel & validasi bawaan -->
                <form action="/kirim" method="POST">
                    <div class="form-group">
                        <label for="namaUser">Nama Lengkap:</label>
                        <input type="text" id="namaUser" name="nama" required minlength="3" placeholder="Masukkan nama">
                    </div>
                    <div class="form-group">
                        <label for="emailUser">Alamat Email:</label>
                        <input type="email" id="emailUser" name="email" required placeholder="nama@email.com">
                    </div>
                    <button type="submit">Kirim Pesan</button>
                </form>
            </section>
        </article>
    </main>

    <!-- 5. Footer Semantik Penutup -->
    <footer class="site-footer">
        <p>&copy; 2026 Shifan Shalih Adiluhung. Dibuat dengan integritas santri.</p>
    </footer>
</body>
</html>`,
                steps: [
                    { 
                        num: 1, 
                        title: "<!DOCTYPE html> & <html lang='id'>", 
                        desc: "Deklarasi awal dokumen: '<!DOCTYPE html>' memberitahu peramban agar merender halaman menggunakan standar HTML5 modern (bukan Quirks Mode lama). Atribut 'lang=\"id\"' (Bahasa Indonesia) sangat penting bagi mesin pencari (SEO) dan memungkinkan software pembaca layar (Screen Reader) melafalkan teks dengan intonasi serta aksen bahasa Indonesia yang tepat." 
                    },
                    { 
                        num: 2, 
                        title: "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", 
                        desc: "Kunci wajib website responsif di layar ponsel/tablet. Tag ini memiliki 2 instruksi vital: (1) 'width=device-width' menyelaraskan lebar halaman web dengan lebar fisik layar smartphone dalam satuan CSS pixel (bukan resolusi monitor PC), dan (2) 'initial-scale=1.0' menetapkan tingkat pembesaran (zoom) awal pada rasio 100% (1:1 proporsional). Tanpa tag ini, browser smartphone akan memperlakukan website seolah-olah dibuka di layar desktop lebar (default 980px), mengakibatkan halaman mengecil drastis (zoom-out) dan teks menjadi mikroskopis hingga sulit dibaca tanpa dicubit (pinch-to-zoom)." 
                    },
                    { 
                        num: 3, 
                        title: "Pemisahan Landmark Semantik: <header>, <nav>, dan <main>", 
                        desc: "Tiga tag struktural resmi W3C dengan fungsi yang sangat berbeda: (1) '<header>' adalah area kepala/pengantar (berisi logo, judul situs, slogan, atau banner atas); (2) '<nav>' khusus membungkus daftar tautan navigasi penting (menu utama) agar pengguna tuna netra dapat langsung mengenali menu tanpa harus membaca seluruh isi halaman; dan (3) '<main>' adalah wadah tunggal konten pokok yang unik pada halaman tersebut. Aturan mutlak W3C: tag <main> HANYA BOLEH ADA 1 KALI per halaman dan tidak boleh dibungkus di dalam header atau footer." 
                    },
                    { 
                        num: 4, 
                        title: "Aksesibilitas Formulir: Relasi <label for='id'> dan <input id='...'>", 
                        desc: "Standar aksesibilitas WCAG: nilai atribut 'for' pada tag <label> harus persis sama dengan atribut 'id' pada kotak <input>. Keuntungannya: saat pengguna mengklik atau menyentuh teks label, kursor seketika aktif di dalam kotak input terkait. Ini memperbesar target sentuh di layar ponsel dan mempermudah pengguna disabilitas motorik." 
                    },
                    { 
                        num: 5, 
                        title: "Sistem Validasi Input Bawaan HTML5", 
                        desc: "Atribut 'required' mencegah form dikirim jika belum diisi, atribut 'type=\"email\"' otomatis mengecek keberadaan tanda '@' dan domain surat elektronik, serta 'minlength=\"3\"' membatasi jumlah karakter minimal. Semua pengecekan ini dijalankan otomatis oleh browser secara instan tanpa membutuhkan sebaris pun kode JavaScript." 
                    },
                    { 
                        num: 6, 
                        title: "Tautan Aksesibilitas 'Skip-Link' (<a href='#main-content'>)", 
                        desc: "Teknik aksesibilitas profesional: tautan navigasi tersembunyi di posisi paling atas halaman yang baru muncul saat pengguna menekan tombol Tab keyboard. Tautan ini memungkinkan pengguna tunanetra melompati daftar panjang menu navigasi di header dan langsung mendarat pada konten inti halaman (<main id='main-content'>)." 
                    }
                ],
                tip: "Hindari 'div soup' (menggunakan <div> untuk segala hal). Selalu utamakan tag semantik (<article>, <section>, <aside>, <button>). Jangan pernah mengganti <button> dengan <div onclick='...'> karena <div> tidak dapat diakses keyboard (tombol Tab/Enter) dan tidak dikenali screen reader."
            },
            challenge: "Buka teks editor, buat dokumen HTML5 semantik yang memuat: (1) satu tag <main>, (2) formulir pendaftaran dengan input nama (type='text', required) dan nomor WhatsApp (type='tel'), serta (3) tag <figure> dengan <img> yang memiliki atribut alt deskriptif dan <figcaption> keterangan gambar.",
            questionPool: [
                {
                    q: "Manakah perbedaan mendasar antara tag semantik <article> dan <section>?",
                    options: [
                        "<article> berdiri sendiri dan bermakna mandiri (dapat disindikasi/dibagikan terpisah), sedangkan <section> mengelompokkan konten yang memiliki tema serumpun",
                        "<article> hanya untuk teks blog tulisan panjang, sedangkan <section> hanya untuk gambar dan video",
                        "<article> adalah elemen inline, sedangkan <section> adalah elemen block-level",
                        "Tidak ada perbedaan sama sekali, keduanya identik fungsinya dengan tag <div>"
                    ],
                    ans: 0,
                    explain: "Tepat! Standar W3C menyatakan <article> dirancang untuk konten independen dan mandiri (seperti postingan blog, kartu produk, atau berita), sedangkan <section> membagi dokumen ke dalam bab atau bagian bertema sama."
                },
                {
                    q: "Mengapa atribut 'alt' pada tag <img> sangat penting dalam standar web modern?",
                    options: [
                        "Hanya berfungsi mempercepat proses unduhan gambar di server web",
                        "Menyediakan teks pengganti bagi pembaca layar tunanetra (Screen Reader) dan membantu SEO mesin pencari saat gambar gagal dimuat",
                        "Wajib diisi dengan nama file gambar lengkap dengan ekstensinya",
                        "Mengatur warna border di sekeliling gambar secara otomatis"
                    ],
                    ans: 1,
                    explain: "Benar! Atribut 'alt' (alternative text) adalah pilar aksesibilitas (WCAG) yang dibacakan oleh screen reader dan ditampilkan jika gambar gagal dimuat atau koneksi lambat."
                },
                {
                    q: "Berapa kali tag semantik <main> diperbolehkan muncul di dalam satu dokumen HTML?",
                    options: [
                        "Boleh sebanyak-banyaknya di setiap kartu",
                        "Maksimal 2 kali (satu untuk desktop, satu untuk mobile)",
                        "Hanya boleh 1 kali per halaman karena merepresentasikan konten inti unik halaman tersebut",
                        "Tergantung pada jumlah tag <header> yang digunakan"
                    ],
                    ans: 2,
                    explain: "Tepat! Spesifikasi HTML5 menetapkan bahwa tag <main> harus unik dan hanya ada satu dalam satu dokumen, tidak boleh diletakkan di dalam <header>, <footer>, atau <nav>."
                },
                {
                    q: "Agar saat pengguna mengklik teks label kursor otomatis masuk ke kotak input, atribut apa yang harus dihubungkan?",
                    options: [
                        "Atribut 'name' pada label dan 'class' pada input",
                        "Atribut 'for' pada <label> harus bernilai sama persis dengan atribut 'id' pada <input>",
                        "Atribut 'href' pada label dan 'target' pada input",
                        "Atribut 'title' pada label dan 'placeholder' pada input"
                    ],
                    ans: 1,
                    explain: "Benar! Keterkaitan antara <label for='emailId'> dan <input id='emailId'> menciptakan relasi aksesibilitas resmi sehingga area klik menjadi lebih luas dan ramah pengguna."
                },
                {
                    q: "Apakah fungsi utama tag <meta name='viewport' content='width=device-width, initial-scale=1.0'>?",
                    options: [
                        "Mengompresi ukuran gambar agar halaman lebih ringan diakses",
                        "Memerintahkan browser untuk menyesuaikan lebar halaman dengan lebar fisik layar perangkat pengguna (kunci web responsif)",
                        "Membuat website dapat diakses secara offline tanpa internet",
                        "Mengaktifkan mode gelap (dark mode) otomatis pada browser ponsel"
                    ],
                    ans: 1,
                    explain: "Tepat! Tanpa meta viewport, browser smartphone akan merender halaman web pada resolusi layar desktop virtual (biasanya 980px) lalu mengecilkannya secara drastis (zoom-out)."
                },
                {
                    q: "Mengapa tautan dengan target='_blank' disarankan untuk selalu dilengkapi atribut rel='noopener noreferrer'?",
                    options: [
                        "Mencegah eksploitasi tab-nabbing keamanan (window.opener) dan melindungi privasi informasi perujuk",
                        "Agar tautan tersebut otomatis terbuka di aplikasi WhatsApp pengguna",
                        "Untuk mencegah Google mengindeks tautan tujuan ke hasil pencarian",
                        "Agar tautan berubah warna menjadi biru saat sudah diklik"
                    ],
                    ans: 0,
                    explain: "Benar! 'noopener' mencegah halaman baru yang dibuka memiliki akses kendali ke halaman asal melalui objek JavaScript 'window.opener', sebuah celah keamanan penting."
                },
                {
                    q: "Manakah pasangan elemen yang tepat untuk menyajikan gambar ilustrasi beserta takarir keterangan teksnya secara semantik?",
                    options: [
                        "<div> dan <span>",
                        "<image> dan <text>",
                        "<figure> dan <figcaption>",
                        "<picture> dan <summary>"
                    ],
                    ans: 2,
                    explain: "Tepat! Elemen <figure> digunakan untuk membungkus konten mandiri (seperti diagram, foto, kode), dan <figcaption> menyediakan takarir penjelas semantik."
                },
                {
                    q: "Bagaimanakah perilaku elemen bertipe 'inline' (seperti <span> atau <a>) dibandingkan elemen 'block' (seperti <div> atau <p>)?",
                    options: [
                        "Elemen inline selalu memulai baris baru di bawahnya dan mengambil lebar penuh 100%",
                        "Elemen inline hanya mengambil lebar selebar kontennya dan tidak memaksa baris baru",
                        "Elemen inline tidak dapat diberi gaya warna atau ukuran font dengan CSS",
                        "Elemen inline tidak boleh diletakkan di dalam tag <body>"
                    ],
                    ans: 1,
                    explain: "Benar! Elemen inline mengalir bersama teks tanpa memutus baris, sedangkan elemen block secara default membentang selebar kontainer induk dan memulai baris baru."
                },
                {
                    q: "Manakah atribut validasi HTML5 yang digunakan untuk membatasi panjang minimum karakter input teks?",
                    options: [
                        "minlength",
                        "charlimit",
                        "minimum-text",
                        "validate-min"
                    ],
                    ans: 0,
                    explain: "Tepat! Atribut 'minlength' (dan pasangannya 'maxlength') memeriksa jumlah karakter input secara langsung di sisi browser sebelum form disubmit."
                },
                {
                    q: "Entitas karakter HTML apakah yang wajib digunakan untuk menampilkan simbol kurung siku buka kurung siku tutup (< dan >) di dalam teks?",
                    options: [
                        "&less; dan &greater;",
                        "&lt; dan &gt;",
                        "&open; dan &close;",
                        "&tag-start; dan &tag-end;"
                    ],
                    ans: 1,
                    explain: "Benar! Karena karakter '<' dan '>' digunakan sebagai pembuka tag oleh parser HTML, kita harus menuliskan entitas '&lt;' (less than) dan '&gt;' (greater than)."
                },
                {
                    q: "Tag HTML manakah yang paling tepat dan semantik untuk menampilkan kutipan panjang beserta sumber rujukannya?",
                    options: [
                        "<q>",
                        "<blockquote>",
                        "<cite>",
                        "<em>"
                    ],
                    ans: 1,
                    explain: "Tepat! <blockquote> digunakan untuk kutipan blok teks panjang dari sumber lain, sering dikombinasikan dengan atribut cite='URL'."
                },
                {
                    q: "Apa fungsi dari tag semantik <aside> dalam tata letak dokumen web?",
                    options: [
                        "Membungkus menu navigasi utama di bagian atas",
                        "Memuat konten pelengkap/pendukung yang berhubungan tidak langsung dengan konten utama (seperti sidebar, callout, atau arsip tautan)",
                        "Menampilkan video latar belakang secara otomatis",
                        "Menutup seluruh konten halaman sebelum tag </html>"
                    ],
                    ans: 1,
                    explain: "Tepat! <aside> mewakili bagian dokumen yang kontennya berhubungan secara tangensial (pendukung/pelengkap) terhadap konten inti di sekitarnya."
                }
            ]
        },

        css: {
            id: "css",
            name: "CSS",
            category: "Styling & Design",
            badgeClass: "learn-badge-cyan",
            iconClass: "fa-brands fa-css3-alt",
            iconColor: "#1572b6",
            tagline: "Desain Antarmuka, Sistem Layout Grid/Flexbox, Variabel Tema & Animasi GPU",
            brief: {
                summary: "CSS (Cascading Style Sheets) adalah bahasa penataan visual yang mengontrol setiap aspek tampilan antarmuka website modern. Penguasaan CSS masa kini tidak lagi terbatas pada pemilihan warna dasar atau font, melainkan mencakup arsitektur Box Model, sistem tata letak multi-dimensi (Flexbox dan CSS Grid), variabel kustom (:root custom properties) untuk tema instan, desain responsif mobile-first, hingga animasi dengan akselerasi perangkat keras (GPU) untuk pengalaman visual yang sangat responsif dan elegan.",
                takeaways: [
                    { icon: "fa-solid fa-box-archive", title: "Arsitektur The Box Model", desc: "Penerapan box-sizing: border-box menjamin kalkulasi padding dan border dihitung ke dalam total dimensi elemen tanpa merusak layout." },
                    { icon: "fa-solid fa-table-cells-large", title: "Flexbox 1D vs CSS Grid 2D", desc: "Kombinasi Flexbox untuk perataan satu sumbu (baris/kolom komponen) dan Grid untuk struktur dua sumbu halaman responsif." },
                    { icon: "fa-solid fa-swatchbook", title: "CSS Custom Properties (Variables)", desc: "Mendefinisikan token desain terpusat di selector :root untuk memudahkan penggantian palet tema warna dan mode gelap." },
                    { icon: "fa-solid fa-wand-magic-sparkles", title: "Animasi Berperforma Tinggi", desc: "Mengoptimalkan transisi CSS menggunakan properti transform dan opacity yang diproses langsung oleh GPU tanpa layout reflow." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: CSS Grid Auto-Fit, Variabel :root & Glassmorphism",
                desc: "Pelajari bagaimana menyusun CSS modern yang bersih, memanfaatkan variabel tema, grid adaptif otomatis, dan kartu glassmorphism:",
                codeTitle: "styles.css (Modern CSS Architecture)",
                code: `/* ====================================================
   1. DESAIN TOKEN & VARIABEL TEMA (CSS CUSTOM PROPERTIES)
   ==================================================== */
:root {
    --bg-primary: #0b1120;
    --bg-surface: rgba(15, 23, 42, 0.75);
    --border-accent: rgba(6, 182, 212, 0.3);
    --primary-color: #06b6d4;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --font-heading: 'Outfit', sans-serif;
    --radius-lg: 16px;
    --shadow-glow: 0 10px 30px rgba(6, 182, 212, 0.2);
}

/* ====================================================
   2. GLOBAL BOX-SIZING RESET
   ==================================================== */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: sans-serif;
    line-height: 1.6;
}

/* ====================================================
   3. RESPONSIVE CSS GRID TANPA MEDIA QUERY KAKU
   ==================================================== */
.gallery-grid {
    display: grid;
    /* Otomatis mengisi kolom sesuai lebar layar: min 280px, max 1fr */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

/* ====================================================
   4. KARTU MODERN DENGAN GLASSMORPHISM & GPU HOVER
   ==================================================== */
.glass-card {
    background: var(--bg-surface);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--border-accent);
    border-radius: var(--radius-lg);
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* Hanya animasikan transform & opacity untuk performa 60FPS */
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.25s ease,
                border-color 0.25s ease;
    will-change: transform;
}

.glass-card:hover {
    transform: translateY(-6px);
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
}

/* Indikator fokus aksesibilitas untuk keyboard */
.glass-card:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 4px;
}`,
                steps: [
                    { 
                        num: 1, 
                        title: "Token Desain Terpusat di :root (CSS Custom Properties)", 
                        desc: "Menempatkan variabel warna, jenis huruf, dan radius sudut di pseudo-class ':root'. Manfaat utamanya: saat kamu ingin mengubah warna tema website atau menerapkan fitur Dark/Light Mode, kamu cukup mengganti nilai variabel di satu tempat (:root) dan seluruh komponen antarmuka seketika berubah serentak tanpa perlu mengedit ratusan baris CSS satu per satu." 
                    },
                    { 
                        num: 2, 
                        title: "Universal Box-Sizing Reset (*, *::before, *::after)", 
                        desc: "Secara bawaan peramban menerapkan model 'content-box', di mana jika elemen diberi 'width: 100%' lalu ditambah 'padding: 20px' dan 'border: 2px', lebar totalnya membengkak menjadi 100% + 40px + 4px sehingga layout jebol ke samping. Deklarasi 'box-sizing: border-box' pada reset universal (*) memastikan nilai padding dan border 'ditelan' ke dalam kalkulasi total lebar dan tinggi elemen, sehingga ukuran elemen selalu presisi dan tidak pernah merusak kontainer luar." 
                    },
                    { 
                        num: 3, 
                        title: "Tata Letak Responsif Modern: repeat(auto-fit, minmax(280px, 1fr))", 
                        desc: "Formula sakti CSS Grid 2 dimensi tanpa perlu menuliskan banyak aturan kaku @media query: (1) 'repeat()' mengulang pembagian kolom; (2) 'auto-fit' secara cerdas mengisi kolom sebanyak mungkin sesuai sisa ruang layar; dan (3) 'minmax(280px, 1fr)' mengunci batas minimal lebar kartu 280px (pas di layar HP), dan jika ada ruang sisa, kartu akan meregang rata ('1fr' = 1 fraction). Hasilnya: otomatis 1 kolom di ponsel, 2 kolom di tablet, dan 3-4 kolom di monitor desktop secara adaptif dan elegan." 
                    },
                    { 
                        num: 4, 
                        title: "Estetika Kaca Buram Modern (Glassmorphism)", 
                        desc: "Kombinasi latar semi-transparan ('background: rgba(15, 23, 42, 0.75)') dengan filter mutakhir 'backdrop-filter: blur(12px)'. Efek ini memburamkan konten apa pun yang berada persis di belakang kartu, menciptakan kedalaman antarmuka (depth of field) futuristik layaknya kaca frosted glass pada sistem operasi modern." 
                    },
                    { 
                        num: 5, 
                        title: "Animasi Akselerasi GPU 60 FPS (Hardware Acceleration)", 
                        desc: "Saat mendesain efek hover kartu atau tombol, hindari menganimasikan properti layout seperti 'top', 'margin', atau 'width' karena memicu proses berat 'Layout Reflow' pada prosesor CPU. Selalu gunakan 'transform: translateY(-6px)' dan 'opacity' yang diproses langsung oleh kartu grafis (GPU) pada Compositor Thread, menghasilkan gerakan selembut sutra tanpa stuttering (patah-patah)." 
                    },
                    { 
                        num: 6, 
                        title: "Aksesibilitas Navigasi Keyboard (:focus-visible)", 
                        desc: "Solusi cerdas standar WCAG: pseudo-class ':focus-visible' menampilkan garis cincin fokus kontras tinggi HANYA ketika pengguna menavigasi halaman menggunakan tombol Tab keyboard (sangat membantu penyandang disabilitas motorik), namun tidak akan memunculkan garis kotak yang mengganggu saat elemen diklik biasa menggunakan mouse." 
                    }
                ],
                tip: "Gunakan unit relatif 'rem' untuk font dan margin/padding daripada 'px' absolut. Karena 1rem dihitung dari ukuran dasar font di peramban pengguna (default 16px), tampilan akan tetap proporsional jika pengguna memperbesar font sistem untuk alasan keterbacaan mata."
            },
            challenge: "Buka file CSS pribadimu, definisikan 3 variabel di :root (--warna-tema, --warna-teks, --radius), buat kelas tombol .btn-modern dengan padding rem, dan berikan transisi hover yang hanya mengubah transform dan filter box-shadow!",
            questionPool: [
                {
                    q: "Mengapa deklarasi 'box-sizing: border-box' pada reset universal dianggap sebagai standar wajib CSS modern?",
                    options: [
                        "Karena membuat border elemen selalu berwarna hitam secara default",
                        "Karena memastikan padding dan border dihitung ke dalam total lebar (width) dan tinggi (height) elemen sehingga dimensi tidak membengkak",
                        "Karena menghilangkan margin bawaan dari seluruh tag paragraf dan judul",
                        "Karena otomatis mengubah tata letak elemen menjadi Flexbox"
                    ],
                    ans: 1,
                    explain: "Benar! Pada model default (content-box), lebar total adalah width + padding + border sehingga elemen sering kali meluap keluar kontainer. Border-box mengatasi masalah ini secara tuntas."
                },
                {
                    q: "Pada Flexbox, properti manakah yang mengatur perataan elemen sepanjang sumbu utama (Main Axis)?",
                    options: [
                        "align-items",
                        "justify-content",
                        "flex-wrap",
                        "align-content"
                    ],
                    ans: 1,
                    explain: "Tepat! 'justify-content' mengontrol perataan di sepanjang main axis (horizontal jika flex-direction: row), sedangkan 'align-items' mengatur perataan di sepanjang cross axis (vertikal)."
                },
                {
                    q: "Apa arti dari baris 'grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))' pada CSS Grid?",
                    options: [
                        "Membuat tepat 3 kolom berukuran 260px di semua perangkat",
                        "Secara otomatis menyesuaikan jumlah kolom: setiap kolom memiliki lebar minimal 260px dan meregang mengisi ruang sisa secara merata",
                        "Membatasi maksimal lebar kontainer grid menjadi 260px",
                        "Mengunci tinggi setiap baris menjadi 260px di layar mobile"
                    ],
                    ans: 1,
                    explain: "Tepat sekali! 'auto-fit' dan 'minmax(260px, 1fr)' adalah pola grid responsif paling populer: kolom akan bertambah atau berkurang otomatis sesuai ruang layar yang tersedia tanpa merusak tampilan."
                },
                {
                    q: "Bagaimana cara membaca nilai variabel CSS '--accent-color' di dalam properti deklarasi?",
                    options: [
                        "color: $--accent-color;",
                        "color: var(--accent-color);",
                        "color: get(--accent-color);",
                        "color: @accent-color;"
                    ],
                    ans: 1,
                    explain: "Benar! Sintaks resmi CSS Custom Properties menggunakan fungsi 'var(--nama-variabel)' untuk mengambil nilai yang telah dideklarasikan."
                },
                {
                    q: "Di antara pilihan berikut, manakah urutan spesifisitas selector dari yang paling kuat hingga yang paling lemah?",
                    options: [
                        "Tag Element > Class Selector > ID Selector > Inline Style",
                        "Inline Style > ID Selector > Class Selector (termasuk atribut & pseudo-class) > Tag Element",
                        "ID Selector > Inline Style > Tag Element > Class Selector",
                        "Class Selector > Inline Style > ID Selector > Tag Element"
                    ],
                    ans: 1,
                    explain: "Tepat! Aturan spesifisitas CSS menilai bobot: Inline style (1,0,0,0) > ID (0,1,0,0) > Class/Pseudo-class (0,0,1,0) > Tag/Pseudo-element (0,0,0,1)."
                },
                {
                    q: "Apa perbedaan visual dan struktural antara 'display: none' dan 'visibility: hidden'?",
                    options: [
                        "'display: none' hanya membuat elemen transparan, sedangkan 'visibility: hidden' menghapus elemen dari DOM",
                        "'display: none' menghapus elemen sepenuhnya dari alur tata letak (tidak memakan ruang), sedangkan 'visibility: hidden' menyembunyikan elemen tetapi ruang fisiknya tetap tersisa",
                        "Keduanya memiliki efek yang persis sama tanpa perbedaan",
                        "'visibility: hidden' hanya berlaku untuk gambar dan video"
                    ],
                    ans: 1,
                    explain: "Benar! 'display: none' membuat elemen tidak dirender dalam flow dokumen, sedangkan 'visibility: hidden' membuat elemen tidak tampak namun ruang kotaknya tetap memakan tempat di layar."
                },
                {
                    q: "Properti CSS manakah yang digunakan untuk menciptakan efek kaca buram (glassmorphism) pada elemen yang berada di belakang kartu?",
                    options: [
                        "background-blur: 10px;",
                        "backdrop-filter: blur(10px);",
                        "filter: opacity(0.5);",
                        "box-shadow: inset 0 0 10px rgba(0,0,0,0.5);"
                    ],
                    ans: 1,
                    explain: "Tepat! 'backdrop-filter: blur(...)' menerapkan filter grafis pada area di belakang elemen semi-transparan, menghasilkan estetika modern glassmorphism."
                },
                {
                    q: "Properti manakah yang paling direkomendasikan untuk animasi CSS karena diproses langsung oleh GPU tanpa memicu layout reflow?",
                    options: [
                        "width dan height",
                        "top dan left",
                        "transform dan opacity",
                        "margin dan padding"
                    ],
                    ans: 2,
                    explain: "Sangat tepat! 'transform' dan 'opacity' dihitung pada Compositor Thread GPU, menghasilkan animasi yang sangat mulus (60 FPS) tanpa membebani CPU dengan recalculate layout."
                },
                {
                    q: "Ukuran unit 'rem' dihitung secara relatif terhadap ukuran font dari elemen apa?",
                    options: [
                        "Elemen induk langsung (Parent element)",
                        "Elemen akar dokumen (Root element <html>)",
                        "Ukuran lebar layar perangkat (Viewport width)",
                        "Elemen <body> terdekat"
                    ],
                    ans: 1,
                    explain: "Benar! 'rem' singkatan dari Root EM, nilainya selalu dikalkulasikan relatif terhadap ukuran font pada elemen <html> (bawaan browser biasanya 16px)."
                },
                {
                    q: "Pseudo-class manakah yang menampilkan indikator fokus hanya saat pengguna berinteraksi menggunakan keyboard (misalnya tombol Tab)?",
                    options: [
                        ":focus",
                        ":focus-visible",
                        ":hover",
                        ":active"
                    ],
                    ans: 1,
                    explain: "Tepat! ':focus-visible' adalah fitur aksesibilitas modern yang mencegah garis fokus muncul saat pengguna mengklik dengan mouse, namun tetap menampilkannya secara jelas saat bernavigasi dengan keyboard."
                },
                {
                    q: "Properti apakah yang wajib ada pada pseudo-element '::before' atau '::after' agar elemen semu tersebut dapat dirender?",
                    options: [
                        "display: block;",
                        "content: '';",
                        "position: absolute;",
                        "visibility: visible;"
                    ],
                    ans: 1,
                    explain: "Benar! Tanpa deklarasi properti 'content' (meskipun hanya berupa string kosong content: ''), pseudo-element ::before atau ::after tidak akan pernah ditampilkan di layar."
                },
                {
                    q: "Dalam filosofi desain 'Mobile-First', media query utama biasanya disusun menggunakan kondisi apa?",
                    options: [
                        "@media (max-width: ...)",
                        "@media (min-width: ...)",
                        "@media (orientation: landscape)",
                        "@media (screen-only: true)"
                    ],
                    ans: 1,
                    explain: "Tepat! Pendekatan mobile-first menulis gaya dasar untuk layar kecil terlebih dahulu tanpa media query, lalu menggunakan '@media (min-width: ...)' secara bertahap saat layar bertambah lebar ke tablet dan desktop."
                }
            ]
        },

        javascript: {
            id: "javascript",
            name: "JavaScript",
            category: "Programming Language",
            badgeClass: "learn-badge-yellow",
            iconClass: "fa-brands fa-js",
            iconColor: "#f7df1e",
            tagline: "Logika Interaktif, Manipulasi DOM, Asynchronous (Async/Await) & Storage API",
            brief: {
                summary: "JavaScript adalah bahasa pemrograman dinamis tingkat tinggi yang menjadi motor penggerak interaktivitas aplikasi web modern. Di balik layar, mesin JavaScript (seperti V8 di Chrome atau SpiderMonkey di Firefox) mengeksekusi kode melalui single-threaded Event Loop yang mampu menangani ribuan aksi pengguna, request jaringan, dan manipulasi data secara asynchronous tanpa membuat antarmuka macet (*non-blocking*). Penguasaan JavaScript modern (ES6+) mencakup manipulasi DOM, event delegation, Promises, async/await, serta penyimpanan persisten lokal.",
                takeaways: [
                    { icon: "fa-solid fa-bolt", title: "Manipulasi DOM & Event Delegation", desc: "Mendengarkan event interaksi pengguna pada kontainer induk untuk menangani banyak elemen dinamis secara hemat memori." },
                    { icon: "fa-solid fa-clock", title: "Asynchronous & Event Loop", desc: "Memanfaatkan Promises dan async/await untuk menangani pengambilan data jaringan (API fetch) tanpa memblokir thread antarmuka." },
                    { icon: "fa-solid fa-code", title: "Sintaks Modern ECMAScript (ES6+)", desc: "Penggunaan arrow functions, destructuring, template literals, spread operator (...), optional chaining (?.), dan nullish coalescing (??)." },
                    { icon: "fa-solid fa-database", title: "Web Storage & Client State", desc: "Menyimpan data aplikasi di sisi browser menggunakan LocalStorage dengan serialisasi objek berbasis JSON." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Event Delegation, Async/Await & LocalStorage",
                desc: "Perhatikan arsitektur kode JavaScript modern yang mengelola daftar tugas santri secara reaktif, efisien, dan tersimpan permanen:",
                codeTitle: "app.js (Clean Modern JavaScript)",
                code: `// ====================================================
// 1. STATE MANAGER & PERSISTENCE (LOCALSTORAGE)
// ====================================================
const STORAGE_KEY = 'santri_tasks_data';

// Ambil data tersimpan atau gunakan nilai awal
const loadTasks = () => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [
            { id: 1, title: 'Muraja'ah Juz 30', done: true },
            { id: 2, title: 'Latihan Coding JavaScript DOM', done: false }
        ];
    } catch (err) {
        console.error("Gagal membaca LocalStorage:", err);
        return [];
    }
};

const saveTasks = (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

let tasks = loadTasks();

// ====================================================
// 2. DOM CACHE & ELEMENT SELECTION
// ====================================================
const taskListEl = document.getElementById('taskList');
const taskFormEl = document.getElementById('taskForm');
const taskInputEl = document.getElementById('taskInput');

// ====================================================
// 3. RENDER FUNCTION (PURE STATE TO UI)
// ====================================================
const renderTasks = () => {
    if (tasks.length === 0) {
        taskListEl.innerHTML = '<li class="empty-state">Belum ada tugas hari ini.</li>';
        return;
    }

    // Transformasi array menjadi string HTML dengan .map()
    taskListEl.innerHTML = tasks.map(task => \`
        <li class="task-item \${task.done ? 'is-completed' : ''}" data-id="\${task.id}">
            <input type="checkbox" class="task-check" \${task.done ? 'checked' : ''}>
            <span class="task-title">\${escapeHtml(task.title)}</span>
            <button type="button" class="btn-delete" title="Hapus tugas">&times;</button>
        </li>
    \`).join('');
};

// ====================================================
// 4. EVENT DELEGATION (EFISIENSI SATU EVENT LISTENER)
// ====================================================
taskListEl.addEventListener('click', (e) => {
    // Cari elemen pembungkus terdekat yang memiliki data-id
    const itemEl = e.target.closest('.task-item');
    if (!itemEl) return;
    const taskId = parseInt(itemEl.dataset.id, 10);

    // Jika pengguna mengklik checkbox
    if (e.target.classList.contains('task-check')) {
        tasks = tasks.map(t => t.id === taskId ? { ...t, done: e.target.checked } : t);
        saveTasks(tasks);
        renderTasks();
    }

    // Jika pengguna mengklik tombol hapus
    if (e.target.classList.contains('btn-delete')) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks(tasks);
        renderTasks();
    }
});

// Sanitasi string untuk mencegah celah keamanan XSS
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Inisialisasi awal UI
renderTasks();`,
                steps: [
                    { 
                        num: 1, 
                        title: "Pola Arsitektur State-Driven & Single Source of Truth", 
                        desc: "Standar software engineering modern melarang memanipulasi teks HTML secara terpisah-pisah di berbagai fungsi. Kita memisahkan antara 'State' (variabel data 'tasks' di memori JavaScript sebagai satu-satunya pusat kebenaran) dan 'UI' (tampilan visual di browser). Setiap kali data ditambah, dicentang, atau dihapus, kita hanya memodifikasi array 'tasks', menyimpannya ke LocalStorage, lalu memanggil fungsi 'renderTasks()' untuk menyinkronkan tampilan antarmuka secara otomatis dan rapi." 
                    },
                    { 
                        num: 2, 
                        title: "Efisiensi Memori: Event Delegation & e.target.closest()", 
                        desc: "Mengapa kita tidak memasang 'addEventListener' pada setiap tombol hapus tugas? Jika ada 1.000 tugas, membuat 1.000 event listener akan memboroskan RAM browser secara drastis, dan tugas baru yang ditambahkan nanti tidak akan memiliki listener. Dengan 'Event Delegation', kita HANYA memasang 1 listener pada elemen induk ('taskListEl'). Memanfaatkan fenomena 'Event Bubbling' (sinyal klik merambat naik ke induk), fungsi 'e.target.closest(\".task-item\")' melacak kartu tugas terdekat yang diklik, membaca ID uniknya lewat dataset, lalu memproses aksi yang sesuai dengan sangat cepat dan hemat memori." 
                    },
                    { 
                        num: 3, 
                        title: "Prinsip Immutability: Transformasi .map() & Penyaringan .filter()", 
                        desc: "Hindari merusak data asli secara langsung. (1) '.map()' digunakan untuk mentransformasikan setiap elemen array menjadi bentuk baru—misalnya mengubah array objek data menjadi untaian elemen HTML '<li>...</li>' untuk dirender ke layar. (2) '.filter()' digunakan untuk menyaring data—misalnya saat menghapus tugas, kita membuat array baru yang hanya memuat tugas dengan ID yang tidak cocok ('t.id !== taskId'). Array lama tidak dimutasi secara liar, mencegah timbulnya bug efek samping (*side-effects*) yang sulit dilacak." 
                    },
                    { 
                        num: 4, 
                        title: "Salinan Dangkal Bersih: Spread Operator ({ ...t, done })", 
                        desc: "Sintaksis tiga titik ('...') adalah fitur sakti ES6 untuk membuat salinan objek (shallow copy). Kode '{ ...t, done: e.target.checked }' menyalin seluruh properti lama dari objek tugas 't' (seperti id dan title), kemudian menimpa hanya nilai 'done' dengan status centang terbaru tanpa mengubah objek aslinya secara destruktif." 
                    },
                    { 
                        num: 5, 
                        title: "Serialisasi Penyimpanan: JSON.stringify() vs JSON.parse()", 
                        desc: "Fitur browser LocalStorage hanya dapat menyimpan tipe data teks string primitif, bukan objek atau array JavaScript. Oleh karena itu, kita menggunakan 'JSON.stringify(tasks)' untuk mengonversi array objek menjadi format teks string JSON sebelum disimpan, dan menggunakan 'JSON.parse(raw)' saat website dibuka kembali untuk merekonstruksi teks JSON tersebut kembali menjadi array objek JavaScript yang siap dipakai." 
                    },
                    { 
                        num: 6, 
                        title: "Sanitasi Input & Proteksi Keamanan XSS (Cross-Site Scripting)", 
                        desc: "Celah keamanan berbahaya pada aplikasi web: jika pengguna mengetik teks '<script>curiPassword()</script>' lalu kita langsung memasukkannya ke innerHTML, peramban akan mengeksekusi kode jahat tersebut. Fungsi 'escapeHtml()' menetralkan ancaman ini dengan mengganti karakter khusus seperti '<' menjadi entitas aman '&lt;' dan '>' menjadi '&gt;' sehingga teks murni tampil sebagai tulisan biasa tanpa celah eksekusi." 
                    }
                ],
                tip: "Gunakan fitur modern Optional Chaining (obj?.prop) dan Nullish Coalescing (val ?? defaultVal) untuk mencegah error runtime legendaris 'Cannot read properties of undefined'."
            },
            challenge: "Buka tab Console perambanmu (tekan F12 > Console), buat array berisi 3 angka [10, 25, 40], lalu gunakan fungsi .reduce((sum, num) => sum + num, 0) untuk menghitung total jumlahnya!",
            questionPool: [
                {
                    q: "Manakah perbedaan mendasar antara variabel yang dideklarasikan dengan 'const', 'let', dan 'var'?",
                    options: [
                        "'var' memiliki block scope, sedangkan 'let' dan 'const' memiliki global scope",
                        "'const' nilainya tidak dapat di-reassign (konstan), 'let' dapat diubah dan memiliki block scope, sedangkan 'var' memiliki function scope dan terpengaruh hoisting",
                        "'let' hanya digunakan untuk angka, sedangkan 'const' hanya untuk teks",
                        "Ketiganya persis sama dan hanya variasi penulisan nama di JavaScript"
                    ],
                    ans: 1,
                    explain: "Benar! 'const' mencegah reassignment identifier, 'let' membatasi jangkauan pada blok kurung kurawal ({}), sedangkan 'var' warisan lama memiliki function scope yang rentan bug hoisting."
                },
                {
                    q: "Apa perbedaan antara operator pembanding '==' (loose equality) dan '===' (strict equality)?",
                    options: [
                        "'==' membandingkan nilai setelah melakukan konversi tipe data otomatis (type coercion), sedangkan '===' membandingkan nilai dan tipe data tanpa konversi",
                        "'===' selalu menghasilkan nilai false jika digunakan pada angka",
                        "'==' hanya untuk teks string, sedangkan '===' untuk perbandingan objek",
                        "Tidak ada perbedaan, keduanya melakukan perbandingan identik"
                    ],
                    ans: 0,
                    explain: "Tepat! Contohnya: '5' == 5 bernilai true (karena string '5' dikoversi ke angka 5), sedangkan '5' === 5 bernilai false karena tipenya berbeda (string vs number)."
                },
                {
                    q: "Metode array manakah yang digunakan untuk memfilter dan menghasilkan array baru hanya berisi elemen yang memenuhi syarat kondisi tertentu?",
                    options: [
                        ".map()",
                        ".filter()",
                        ".forEach()",
                        ".reduce()"
                    ],
                    ans: 1,
                    explain: "Benar! '.filter()' menerima fungsi predikat (yang mengembalikan boolean true/false) dan menghasilkan array baru yang hanya memuat elemen dengan nilai true."
                },
                {
                    q: "Apakah nilai kembalian dari ekspresi 'typeof null' di JavaScript?",
                    options: [
                        "'null'",
                        "'undefined'",
                        "'object'",
                        "'boolean'"
                    ],
                    ans: 2,
                    explain: "Tepat! Secara teknis 'typeof null' mengembalikan 'object'. Ini adalah bug historis warisan versi pertama JavaScript tahun 1995 yang dipertahankan demi menjaga kompatibilitas website lama."
                },
                {
                    q: "Blok apakah yang digunakan untuk menangani exception atau error agar aplikasi web tidak crash dan berhenti mendadak?",
                    options: [
                        "if...else",
                        "try...catch...finally",
                        "switch...case",
                        "while...do"
                    ],
                    ans: 1,
                    explain: "Benar! Blok 'try' mengeksekusi kode rawan error, blok 'catch' menangani objek error yang tertangkap, dan 'finally' selalu dijalankan di akhir pembersihan proses."
                },
                {
                    q: "Fungsi apakah yang digunakan untuk mengubah objek JavaScript menjadi format string JSON agar dapat disimpan di LocalStorage?",
                    options: [
                        "JSON.parse()",
                        "JSON.stringify()",
                        "JSON.toString()",
                        "JSON.encode()"
                    ],
                    ans: 1,
                    explain: "Tepat! 'JSON.stringify(obj)' mengubah objek menjadi representasi string JSON, sedangkan 'JSON.parse(str)' mengembalikannya menjadi objek JavaScript."
                },
                {
                    q: "Apa perbedaan mendasar antara 'localStorage' dan 'sessionStorage' di peramban?",
                    options: [
                        "localStorage hanya bisa menampung 100 karakter, sedangkan sessionStorage tidak terbatas",
                        "Data di localStorage tetap tersimpan meskipun browser/komputer dimatikan, sedangkan sessionStorage otomatis terhapus saat tab browser ditutup",
                        "sessionStorage tersimpan di server web, sedangkan localStorage di komputer lokal",
                        "localStorage hanya dapat diakses melalui bahasa pemrograman PHP"
                    ],
                    ans: 1,
                    explain: "Benar! 'localStorage' bersifat persisten tanpa batas waktu sampai dihapus secara manual, sedangkan 'sessionStorage' hanya hidup selama siklus satu tab browser dibuka."
                },
                {
                    q: "Apakah yang dimaksud dengan teknik 'Event Delegation' pada manipulasi DOM?",
                    options: [
                        "Membuat event listener baru pada setiap elemen anak secara terpisah",
                        "Menempatkan satu event listener pada elemen induk untuk menangani aksi dari elemen-elemen anak melalui prinsip bubbling",
                        "Menonaktifkan seluruh event klik pada halaman web",
                        "Mendelegasikan penanganan event ke server backend"
                    ],
                    ans: 1,
                    explain: "Sangat tepat! Event Delegation memanfaatkan sifat 'Event Bubbling': satu event listener pada induk (misal <ul>) dapat menangani klik pada ribuan elemen anak (<li>) secara hemat memori."
                },
                {
                    q: "Operator Nullish Coalescing (??) hanya akan mengembalikan nilai sisi kanan jika nilai sisi kirinya bernilai apa?",
                    options: [
                        "false, 0, atau string kosong ''",
                        "null atau undefined saja",
                        "NaN saja",
                        "Semua nilai falsy"
                    ],
                    ans: 1,
                    explain: "Tepat! Berbeda dari operator '||' yang menganggap 0 atau '' sebagai falsy, operator '??' hanya berpindah ke nilai default jika operand kirinya benar-benar bernilai 'null' atau 'undefined'."
                },
                {
                    q: "Bagaimanakah urutan eksekusi tugas dalam arsitektur Event Loop JavaScript?",
                    options: [
                        "Semua timer dieksekusi sebelum kode sinkron",
                        "Call Stack (kode sinkron) dieksekusi hingga kosong, lalu Microtask Queue (Promise), baru kemudian Task Queue (setTimeout)",
                        "Task Queue dieksekusi secara acak tanpa aturan prioritas",
                        "JavaScript menjalankan semua tugas secara multi-threaded paralel murni"
                    ],
                    ans: 1,
                    explain: "Benar! JavaScript adalah single-threaded: Call stack sinkron selalu diselesaikan pertama, lalu antrean microtask (Promises), kemudian macrotask (setTimeout/setInterval)."
                },
                {
                    q: "Manakah sintaks yang benar untuk mengekstraksi properti 'nama' dan 'umur' dari sebuah objek menggunakan Destructuring ES6?",
                    options: [
                        "const [nama, umur] = objek;",
                        "const { nama, umur } = objek;",
                        "const nama, umur from objek;",
                        "const extract(nama, umur) of objek;"
                    ],
                    ans: 1,
                    explain: "Tepat! Sintaks kurung kurawal 'const { nama, umur } = objek;' adalah Object Destructuring untuk menyalin properti objek ke variabel lokal dengan nama yang sama."
                },
                {
                    q: "Bagaimanakah perilaku konteks 'this' di dalam sebuah Arrow Function dibandingkan fungsi konvensional?",
                    options: [
                        "Arrow function selalu menunjuk 'this' ke elemen DOM yang diklik",
                        "Arrow function tidak memiliki 'this' sendiri, melainkan mewarisi nilai 'this' dari scope leksikal tempat fungsi tersebut didefinisikan",
                        "Arrow function membuat 'this' bernilai undefined secara permanen",
                        "Arrow function memiliki nilai 'this' yang selalu berubah secara otomatis setiap detik"
                    ],
                    ans: 1,
                    explain: "Sangat tepat! Arrow function memiliki 'lexical this' yang sangat berguna pada callback asynchronous agar tidak kehilangan konteks objek pemiliknya."
                }
            ]
        },

        python: {
            id: "python",
            name: "Python",
            category: "General Programming",
            badgeClass: "learn-badge-cyan",
            iconClass: "fa-brands fa-python",
            iconColor: "#38bdf8",
            tagline: "Sintaks Bersih PEP 8, Multi-Paradigma, Automasi Scripting & Pondasi Kecerdasan Buatan (AI)",
            brief: {
                summary: "Python adalah bahasa pemrograman interpretatif tingkat tinggi yang dirancang oleh Guido van Rossum dengan fokus utama pada keterbacaan kode (*code readability*). Mengacu pada pedoman filosofis *The Zen of Python (PEP 20)*, sintaksis Python sengaja dirancang menyerupai bahasa Inggris alami tanpa titik koma atau kurung kurawal berlebih. Python mendukung multi-paradigma (pemrograman berorientasi objek, fungsional, dan prosedural) serta memiliki ekosistem pustaka (*libraries*) terbesar di dunia untuk automasi sistem, rekayasa data, dan kecerdasan buatan (Machine Learning & AI).",
                takeaways: [
                    { icon: "fa-solid fa-feather-pointed", title: "Sintaksis Bersih & Terbaca (PEP 8)", desc: "Blok kode ditentukan oleh indentasi spasi yang konsisten, menghasilkan kode yang rapi dan mudah dirawat antar-tim pengembang." },
                    { icon: "fa-solid fa-cubes-stacked", title: "Struktur Data Bawaan yang Sangat Kuat", desc: "List, Dictionary, Tuple, dan Set bawaan Python dirancang dengan performa algoritma tinggi untuk pengolahan data instan." },
                    { icon: "fa-solid fa-shield-virus", title: "Context Manager & Robust Handling", desc: "Pernyataan 'with' menjamin resource file atau koneksi jaringan tertutup otomatis tanpa risiko memory leak." },
                    { icon: "fa-solid fa-brain", title: "Ekosistem AI, Sains & Automasi Global", desc: "Pondasi utama pustaka canggih dunia seperti PyTorch, TensorFlow, Pandas, FastAPI, hingga script automasi harian." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Type Hints, List Comprehension & File Handling",
                desc: "Pelajari cara menulis skrip Python modern yang profesional dengan type hints, pengolahan data comprehension, dan context manager:",
                codeTitle: "santri_analytics.py (Professional Python 3.10+)",
                code: `from datetime import datetime
from typing import List, Dict

# ====================================================
# 1. STRUKTUR DATA & TYPE HINTS
# ====================================================
santri_db: List[Dict[str, any]] = [
    {"nama": "Shifan Shalih Adiluhung", "juz": 5, "kehadiran": 98, "aktif": True},
    {"nama": "Ahmad Fauzan", "juz": 3, "kehadiran": 85, "aktif": True},
    {"nama": "Zaidan Al-Farisi", "juz": 8, "kehadiran": 95, "aktif": True},
    {"nama": "Santri Alumni", "juz": 30, "kehadiran": 100, "aktif": False}
]

# ====================================================
# 2. PENGOLAHAN DATA DENGAN LIST COMPREHENSION
# ====================================================
# Saring hanya santri aktif yang memiliki hafalan minimal 4 juz
santri_unggulan = [
    s["nama"] for s in santri_db 
    if s["aktif"] and s["juz"] >= 4
]

# Hitung rata-rata juz dengan fungsi bawaan sum() dan len()
santri_aktif = [s for s in santri_db if s["aktif"]]
rata_juz = sum(s["juz"] for s in santri_aktif) / len(santri_aktif)

# ====================================================
# 3. PENULISAN LAPORAN DENGAN CONTEXT MANAGER (WITH)
# ====================================================
def buat_laporan_harian(filename: str) -> bool:
    """Menulis ringkasan data ke file teks dengan aman."""
    try:
        # Context manager 'with' otomatis menutup file meski terjadi error
        with open(filename, mode="w", encoding="utf-8") as f:
            f.write(f"=== LAPORAN EVALUASI SANTRI ===\\n")
            f.write(f"Waktu Cetak : {datetime.now().strftime('%d-%m-%Y %H:%M')}\\n")
            f.write(f"Rata-rata Juz Santri Aktif : {rata_juz:.2f} Juz\\n")
            f.write(f"Santri Berprestasi (>= 4 Juz):\\n")
            for idx, nama in enumerate(santri_unggulan, start=1):
                f.write(f"  {idx}. {nama}\\n")
        return True
    except OSError as err:
        print(f"Gagal menulis berkas {filename}: {err}")
        return False

# Jalankan fungsi
sukses = buat_laporan_harian("rekap_santri.txt")
print(f"Status pembuatan berkas: {'Sukses' if sukses else 'Gagal'}")`,
                steps: [
                    { 
                        num: 1, 
                        title: "Type Hints & Anotasi Tipe Data Modern (PEP 484)", 
                        desc: "Meskipun Python adalah bahasa pengetikan dinamis, standar Python modern mewajibkan Type Hints seperti 'santri_db: List[Dict]' dan 'def buat_laporan(...) -> bool'. Anotasi ini berfungsi sebagai dokumentasi mandiri yang hidup, memudahkan programmer lain memahami struktur data tanpa menebak-nebak, serta mengaktifkan deteksi error otomatis di editor (IntelliSense) sebelum program dijalankan." 
                    },
                    { 
                        num: 2, 
                        title: "Sintaks Idiomatik: List Comprehension", 
                        desc: "Fitur khas Python paling elegan untuk menyaring dan mentransformasikan data dalam satu baris ekspresif tanpa perulangan for bertingkat. Pola dasarnya: '[ekspresi for item in koleksi if kondisi]'. Pada contoh kode: '[s[\"nama\"] for s in santri_db if s[\"aktif\"] and s[\"juz\"] >= 4]' dibaca: 'Ambil nama santri, dari database santri_db, HANYA jika santri aktif dan hafalannya minimal 4 juz'. Selain jauh lebih ringkas, List Comprehension dieksekusi langsung pada layer internal C-Python sehingga kecepatannya jauh melampaui metode append manual." 
                    },
                    { 
                        num: 3, 
                        title: "Pengelolaan Resource Aman: Context Manager 'with open(...)'", 
                        desc: "Mengapa kita TIDAK BOLEH membuka berkas dengan cara lama 'f = open(...); f.close()'? Jika di tengah proses penulisan terjadi error atau program mati mendadak, baris 'f.close()' tidak akan pernah dieksekusi sehingga berkas terkunci di RAM sistem operasi (resource leak) atau file menjadi korup. Pernyataan 'with open(...) as f' menerapkan protokol Context Manager (method bawaan '__enter__' dan '__exit__') yang menjamin berkas PASTI dan OTOMATIS DITUTUP dengan aman seketika blok kode selesai, bahkan jika terjadi error di dalamnya." 
                    },
                    { 
                        num: 4, 
                        title: "Format String Canggih: F-Strings dengan Format Specifier", 
                        desc: "Awalan huruf 'f' di depan string ('f\"...\"') memungkinkan penyisipan variabel dan ekspresi langsung di dalam kurung kurawal. Fitur Format Specifier seperti '{rata_juz:.2f}' membulatkan bilangan desimal float secara presisi menjadi tepat 2 digit di belakang koma (misal 5.3333 menjadi '5.33') tanpa memerlukan pemanggilan fungsi pembulatan tambahan." 
                    },
                    { 
                        num: 5, 
                        title: "Iterasi Elegan dengan Fungsi Bawaan enumerate(..., start=1)", 
                        desc: "Alih-alih membuat variabel hitungan manual 'i = 1' lalu menambahkan 'i += 1' di setiap putaran loop, fungsi 'enumerate(koleksi, start=1)' langsung mengembalikan pasangan nomor urut dan nilai elemen secara bersamaan. Kode menjadi jauh lebih bersih, mudah dibaca, dan bebas dari potensi bug lupa menaikkan angka counter." 
                    },
                    { 
                        num: 6, 
                        title: "Penanganan Error Sistem: Blok try...except OSError", 
                        desc: "Operasi pembacaan/penulisan berkas sangat rentan terhadap kegagalan di luar kendali kode kita—seperti media penyimpanan penuh, hak akses ditolak (permission denied), atau disk tidak dapat diakses. Menangkap exception spesifik 'OSError' mencegah program crash mendadak dan memungkinkan kita menampilkan pesan log yang bersahabat kepada pengguna." 
                    }
                ],
                tip: "Gunakan environment virtual (python -m venv .venv) di setiap proyek barumu untuk mengisolasi versi pustaka dan paket pip, mencegah konflik dependensi antar-proyek di komputermu."
            },
            challenge: "Tulis skrip Python ringkas di kepalamu: buat dictionary santri = {'nama': 'Shifan', 'usia': 15}, gunakan method .get('asal', 'Jawa Barat') untuk mengambil nilai default jika key tidak ada, lalu cetak menggunakan f-string!",
            questionPool: [
                {
                    q: "Bagaimana cara Python membedakan blok kode fungsi, perulangan, atau percabangan if dari kode di luarnya?",
                    options: [
                        "Menggunakan tanda kurung kurawal { dan }",
                        "Menggunakan tanda titik koma ; di setiap akhir baris",
                        "Menggunakan indentasi spasi yang konsisten menjorok ke dalam",
                        "Menggunakan kata kunci begin dan end"
                    ],
                    ans: 2,
                    explain: "Benar! Ciri khas utama sintaksis Python adalah penggunaan indentasi (standar PEP 8 merekomendasikan 4 spasi) untuk mendefinisikan scope blok kode."
                },
                {
                    q: "Manakah di antara tipe data Python berikut yang bersifat 'immutable' (tidak dapat diubah nilainya setelah dibuat)?",
                    options: [
                        "List",
                        "Dictionary",
                        "Tuple",
                        "Set"
                    ],
                    ans: 2,
                    explain: "Tepat! 'Tuple' (ditulis dengan kurung biasa (1, 2, 3)) bersifat immutable, berbeda dari List atau Dictionary yang datanya bisa ditambah atau diubah (mutable)."
                },
                {
                    q: "Sintaks List Comprehension manakah yang benar untuk menghasilkan daftar kuadrat dari angka genap saja pada list 'angka'?",
                    options: [
                        "[x**2 for x in angka if x % 2 == 0]",
                        "[for x in angka: x**2 if x % 2 == 0]",
                        "[x if x % 2 == 0 then x**2 for x in angka]",
                        "[x**2 in angka where x % 2 == 0]"
                    ],
                    ans: 0,
                    explain: "Benar! Pola standar List Comprehension adalah [ekspresi for item in iterable if kondisi], menghasilkan kode yang sangat ringkas dan cepat dieksekusi."
                },
                {
                    q: "Mengapa membuka berkas dianjurkan menggunakan pernyataan 'with open(...) as f:'?",
                    options: [
                        "Karena otomatis mengenkripsi isi file dengan kata sandi",
                        "Karena berfungsi sebagai Context Manager yang menjamin berkas otomatis ditutup setelah blok selesai, bahkan jika terjadi error",
                        "Karena membuat proses membaca berkas menjadi 100 kali lebih cepat",
                        "Karena hanya format ini yang didukung oleh sistem operasi Windows"
                    ],
                    ans: 1,
                    explain: "Tepat! Pernyataan 'with' memanggil method __enter__ dan __exit__ secara otomatis untuk membersihkan dan menutup berkas tanpa risiko memory leak."
                },
                {
                    q: "Apa perbedaan antara operator '==' dan operator 'is' pada Python?",
                    options: [
                        "Tidak ada perbedaan, keduanya memeriksa hal yang sama",
                        "'==' memeriksa kesamaan nilai (equality), sedangkan 'is' memeriksa kesamaan identitas memori (apakah keduanya merujuk objek yang sama persis di RAM)",
                        "'is' hanya digunakan untuk tipe data teks string",
                        "'==' hanya dapat digunakan pada angka genap"
                    ],
                    ans: 1,
                    explain: "Benar! Contoh: a = [1, 2]; b = [1, 2]. Maka a == b adalah True (karena nilainya sama), tetapi a is b adalah False (karena berada di lokasi memori terpisah)."
                },
                {
                    q: "Method dictionary apakah yang digunakan untuk mengambil nilai secara aman tanpa menimbulkan error 'KeyError' jika kuncinya tidak ditemukan?",
                    options: [
                        ".fetch()",
                        ".get()",
                        ".lookup()",
                        ".find()"
                    ],
                    ans: 1,
                    explain: "Tepat! Method 'dict.get(key, default_value)' mengembalikan None atau nilai default kustom jika key tidak ada, mencegah crash KeyError."
                },
                {
                    q: "Fungsi bawaan Python manakah yang digunakan untuk mengulang koleksi data sekaligus mendapatkan nomor indeks dan nilainya bersamaan?",
                    options: [
                        "range()",
                        "enumerate()",
                        "zip()",
                        "counter()"
                    ],
                    ans: 1,
                    explain: "Benar! 'for idx, val in enumerate(data):' mengembalikan pasangan tuple (indeks, nilai) secara langsung dan sangat bersih."
                },
                {
                    q: "Keyword apakah yang digunakan di Python untuk membuat fungsi anonim singkat dalam satu baris ekspresi?",
                    options: [
                        "def",
                        "lambda",
                        "func",
                        "inline"
                    ],
                    ans: 1,
                    explain: "Tepat! Fungsi 'lambda' adalah fungsi anonim kecil yang hanya boleh memiliki satu ekspresi, sering digunakan sebagai argumen pengurutan key=lambda x: x['umur']."
                },
                {
                    q: "Bagian manakah dalam penanganan error 'try...except' yang dijamin SELALU dieksekusi, baik terjadi exception maupun tidak?",
                    options: [
                        "else",
                        "finally",
                        "catch",
                        "default"
                    ],
                    ans: 1,
                    explain: "Benar! Blok 'finally' selalu dijalankan di akhir proses, ideal untuk menutup koneksi database atau membersihkan berkas sementara."
                },
                {
                    q: "Bagaimana cara memformat variabel angka desimal 'skor = 95.6789' menjadi string dengan 2 angka di belakang koma menggunakan F-string?",
                    options: [
                        "f'{skor:2}'",
                        "f'{skor:.2f}'",
                        "f'{round(skor, 2)}f'",
                        "f'{skor % 2}'"
                    ],
                    ans: 1,
                    explain: "Tepat! Format specifier ':.2f' pada f-string membulatkan dan menampilkan bilangan float dengan tepat 2 digit desimal (menghasilkan '95.68')."
                },
                {
                    q: "Apa nama dokumen pedoman resmi gaya penulisan kode (Style Guide) yang menjadi standar konvensi komunitas Python sedunia?",
                    options: [
                        "PEP 8",
                        "ISO 9001",
                        "W3C Python Standard",
                        "RFC 2616"
                    ],
                    ans: 0,
                    explain: "Benar! PEP 8 (Python Enhancement Proposal 8) adalah panduan resmi yang menetapkan konvensi penamaan variabel, fungsi, batas panjang baris, dan indentasi di Python."
                },
                {
                    q: "Tipe data bawaan Python apakah yang secara otomatis menghapus elemen duplikat dan tidak memiliki indeks posisi terurut?",
                    options: [
                        "List",
                        "Tuple",
                        "Set",
                        "Array"
                    ],
                    ans: 2,
                    explain: "Tepat! 'Set' (dibuat dengan kurung kurawal {1, 2, 3}) menyimpan elemen unik tanpa duplikasi dan mendukung operasi matematika himpunan seperti irisan dan gabungan."
                }
            ]
        },

        git: {
            id: "git",
            name: "Git & GitHub",
            category: "Version Control & Collaboration",
            badgeClass: "learn-badge-purple",
            iconClass: "fa-brands fa-github",
            iconColor: "#cbd5e1",
            tagline: "Sistem Kontrol Versi Terdistribusi (DAG), Alur Percabangan & Kolaborasi Cloud",
            brief: {
                summary: "Git adalah sistem kontrol versi terdistribusi (Distributed Version Control System) yang diciptakan oleh Linus Torvalds untuk melacak setiap perubahan riwayat kode sumber secara matematis melalui struktur graf asiklik terarah (DAG) dan hash kriptografi. Berbeda dari sekadar mencadangkan file secara manual, Git mencatat snapshot lengkap proyek di titik waktu tertentu. Bersama platform cloud GitHub, developer dapat bereksperimen di branch terisolasi, mereview kode rekan lewat Pull Request, serta berkolaborasi dalam tim software engineering skala global dengan aman.",
                takeaways: [
                    { icon: "fa-solid fa-tree", title: "Arsitektur 3 Status Berkas", desc: "Memahami perpindahan berkas antara Working Directory (lokal), Staging Area/Index (persiapan), dan HEAD Repository (commit)." },
                    { icon: "fa-solid fa-code-branch", title: "Branching Ringan & Terisolasi", desc: "Membuat cabang fitur terpisah (git checkout -b) memungkinkan eksperimen bebas tanpa risiko merusak kode produksi utama." },
                    { icon: "fa-solid fa-code-merge", title: "Resolusi Merge Conflict", desc: "Membaca dan menyelesaikan konflik integrasi kode ketika dua cabang memodifikasi baris berkas yang sama secara bersamaan." },
                    { icon: "fa-solid fa-user-shield", title: "Keamanan Repositori & .gitignore", desc: "Mencegah file kredensial rahasia, environment lokal (.env), dan direktori build terunggah secara tidak sengaja ke publik." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Alur Kerja Harian Profesional & Git Semantic Commit",
                desc: "Berikut panduan terminal alur kerja profesional harian dari pembuatan branch, pementasan berkas, commit semantik, hingga sinkronisasi remote:",
                codeTitle: "Terminal Bash / PowerShell Commands",
                code: `# ====================================================
# 1. PERIKSA STATUS & BUAT CABANG FITUR BARU
# ====================================================
# Periksa kondisi berkas saat ini
git status

# Buat dan langsung berpindah ke branch fitur baru (Feature Branch)
git checkout -b feat/modul-belajar-interaktif

# ====================================================
# 2. PEMENTASAN BERKAS (STAGING AREA) SECARA SELEKTIF
# ====================================================
# Tambahkan berkas spesifik ke area pementasan
git add learn.html learn.js styles.css

# Periksa perbedaan kode yang siap di-commit vs yang ada di repo
git diff --staged

# ====================================================
# 3. BUAT COMMIT BERSIH DENGAN KONVENSI SEMANTIK
# ====================================================
# Tuliskan pesan commit yang terstruktur (feat/fix/refactor/docs)
git commit -m "feat(learn): tambahkan kurikulum 7 tools dan sistem kuis acak 5 soal"

# ====================================================
# 4. SINKRONISASI DENGAN REPOSITORI UTAMA (REMOTE)
# ====================================================
# Ambil pembaruan terbaru dari remote tanpa langsung menggabungkan
git fetch origin main

# Pindahkan branch lokal kita di atas commit terbaru remote
git pull --rebase origin main

# Unggah cabang fitur ke GitHub untuk direview via Pull Request
git push -u origin feat/modul-belajar-interaktif

# ====================================================
# 5. MELIHAT RIWAYAT KOMIT DALAM BENTUK GRAF RINGKAS
# ====================================================
git log --graph --oneline --decorate -n 5`,
                steps: [
                    { 
                        num: 1, 
                        title: "Alur Kerja Terisolasi: Feature Branch (git checkout -b)", 
                        desc: "Aturan emas kontrol versi: jangan pernah mengedit kode fitur baru atau melakukan uji coba langsung di cabang utama ('main'). Perintah 'git checkout -b feat/nama-fitur' (atau 'git switch -c') membuat cabang terisolasi baru. Jika eksperimen fiturnya gagal atau dibatalkan, kamu cukup menghapus cabang tersebut tanpa pernah merusak kestabilan kode produksi di branch utama." 
                    },
                    { 
                        num: 2, 
                        title: "Panggung Seleksi: Staging Area (git add) & git diff --staged", 
                        desc: "Arsitektur Git membagi siklus berkas menjadi 3 zona: (1) 'Working Directory' (folder lokal tempat kamu mengetik kode), (2) 'Staging Area / Index' (panggung penyeleksian berkas), dan (3) 'Repository / HEAD' (rekaman snapshot commit permanen). Perintah 'git add <file>' memungkinkan kita memilih hanya berkas tertentu yang ingin dimasukkan ke dalam commit berikutnya. Hindari kebiasaan asal 'git add .', dan selalu gunakan 'git diff --staged' untuk meninjau secara saksama setiap baris kode hijau (tambah) dan merah (hapus) yang siap direkam." 
                    },
                    { 
                        num: 3, 
                        title: "Standar Pesan Commit Semantik (Conventional Commits)", 
                        desc: "Jangan pernah menuliskan pesan commit yang ambigu seperti 'update' atau 'perbaikan bug'. Industri perangkat lunak global mewajibkan format Semantic Commits terstruktur: (1) 'feat:' untuk fitur baru (misal 'feat(auth): tambah login Google'), (2) 'fix:' untuk perbaikan bug error, (3) 'refactor:' untuk merapikan struktur kode tanpa mengubah fungsi, (4) 'docs:' untuk perubahan dokumentasi, dan (5) 'chore:' untuk pembaruan dependensi build. Pola ini memudahkan pembuatan changelog versi rilis secara otomatis dan membuat riwayat proyek mudah diaudit." 
                    },
                    { 
                        num: 4, 
                        title: "Perbedaan Krusial: git fetch origin main vs git pull", 
                        desc: "'git fetch origin main' hanya mengambil metadata dan commit terbaru dari server GitHub ke komputer lokal tanpa menyentuh atau mengubah berkas kerjamu, sehingga aman untuk memeriksa update. Sebaliknya, 'git pull' langsung mengunduh SEKALIGUS menggabungkan (fetch + merge) commit remote ke cabang lokalmu secara instan, yang berpotensi memicu konflik jika kamu belum siap." 
                    },
                    { 
                        num: 5, 
                        title: "Pembersihan Riwayat Log: Rebase (--rebase) vs Merge Biasa", 
                        desc: "Saat menggabungkan cabang fitur kembali ke cabang utama, perintah 'git pull --rebase' memindahkan pangkal branch fitur kita ke atas commit terbaru dari remote. Hasilnya: riwayat komit pada 'git log' menjadi satu garis lurus yang rapi dan elegan tanpa menghasilkan commit sampah 'Merge branch...' yang mengotori diagram repositori." 
                    },
                    { 
                        num: 6, 
                        title: "Kolaborasi Tim di Cloud: Pull Request (PR) & Code Review", 
                        desc: "Setelah cabang fitur di-push ke GitHub ('git push -u origin <cabang>'), kita membuat Pull Request (PR). Di halaman PR ini, rekan satu tim dapat menginspeksi perbedaan kode baris per baris (code review), meninggalkan komentar saran perbaikan, dan menunggu hasil automated test (CI/CD) lulus sebelum tombol merge ke branch produksi ditekan." 
                    }
                ],
                tip: "Gunakan 'git commit --amend' jika kamu hanya ingin memperbaiki typo pada pesan commit terakhir yang belum di-push ke remote, atau 'git stash' untuk menyimpan sementara pekerjaan yang belum selesai saat harus berganti cabang mendadak."
            },
            challenge: "Buka terminal komputermu di folder proyek ini, jalankan perintah `git log -n 3 --oneline` untuk melihat 3 commit terbaru, lalu periksa status berkas lokal dengan `git status`!",
            questionPool: [
                {
                    q: "Area apakah dalam arsitektur Git yang berfungsi sebagai tempat persiapan berkas sebelum dicatat secara permanen ke dalam riwayat commit?",
                    options: [
                        "Working Directory",
                        "Staging Area (Index)",
                        "Remote Repository",
                        "Trash Bin"
                    ],
                    ans: 1,
                    explain: "Benar! 'Staging Area' atau 'Index' adalah area perantara tempat pengembang mengumpulkan dan menyeleksi berkas (via git add) sebelum dieksekusi menjadi snapshot commit permanen."
                },
                {
                    q: "Perintah Git ringkas manakah yang digunakan untuk membuat branch baru sekaligus langsung berpindah ke branch tersebut?",
                    options: [
                        "git branch --create-and-jump <nama>",
                        "git checkout -b <nama> (atau git switch -c <nama>)",
                        "git branch -m <nama>",
                        "git merge --new <nama>"
                    ],
                    ans: 1,
                    explain: "Tepat! Flag '-b' pada 'git checkout -b <nama>' (atau perintah baru 'git switch -c') membuat cabang baru dan seketika memindahkan HEAD ke cabang tersebut."
                },
                {
                    q: "Apa perbedaan mendasar antara perintah 'git fetch' dan 'git pull'?",
                    options: [
                        "'git fetch' mengunduh perubahan dari server remote tanpa langsung menggabungkannya ke berkas kerja lokal, sedangkan 'git pull' otomatis mengunduh sekaligus menggabungkan (fetch + merge)",
                        "'git fetch' digunakan untuk mengunggah commit ke server, sedangkan 'git pull' untuk menghapus commit",
                        "'git pull' hanya bekerja pada repositori lokal tanpa koneksi internet",
                        "Keduanya adalah perintah yang sama persis tanpa perbedaan"
                    ],
                    ans: 0,
                    explain: "Benar! 'git fetch' aman dijalankan kapan pun untuk memeriksa update tanpa merusak kode lokal, sedangkan 'git pull' adalah kombinasi instan dari fetch dilanjutkan dengan merge."
                },
                {
                    q: "Berkas khusus apakah yang digunakan untuk memberitahu Git agar mengabaikan berkas kredensial sensitif atau folder build raksasa?",
                    options: [
                        ".gitconfig",
                        ".gitignore",
                        ".gitprotect",
                        ".gitsecret"
                    ],
                    ans: 1,
                    explain: "Tepat! Berkas '.gitignore' mendaftar pola nama file/folder (seperti .env, node_modules/, atau upload_ftp.ps1) agar tidak dilacak atau diunggah ke repositori Git."
                },
                {
                    q: "Kapan situasi 'Merge Conflict' terjadi di dalam Git?",
                    options: [
                        "Ketika komputer kehilangan koneksi internet saat commit",
                        "Ketika dua commit/cabang yang berbeda memodifikasi baris kode yang sama pada berkas yang sama dan Git tidak dapat memutuskan versi mana yang benar secara otomatis",
                        "Ketika kapasitas penyimpanan server GitHub sudah penuh",
                        "Ketika nama file memiliki huruf kapital yang tidak konsisten"
                    ],
                    ans: 1,
                    explain: "Tepat sekali! Jika dua branch mengedit baris kode yang sama, Git akan berhenti dan meminta pengembang memilih baris mana yang dipertahankan melalui penanda <<<<<<< dan >>>>>>>."
                },
                {
                    q: "Perintah apakah yang digunakan untuk membatalkan perubahan pada berkas di Working Directory yang belum dimasukkan ke Staging Area?",
                    options: [
                        "git restore <file>",
                        "git delete <file>",
                        "git unstage <file>",
                        "git erase <file>"
                    ],
                    ans: 0,
                    explain: "Benar! 'git restore <file>' mengembalikan isi berkas kerja ke kondisi persis seperti pada commit terakhir, membuang modifikasi yang belum di-stage."
                },
                {
                    q: "Apa yang dimaksud dengan 'Pull Request' (PR) dalam alur kerja kolaborasi di GitHub?",
                    options: [
                        "Perintah untuk memaksa menarik seluruh kode dari komputer orang lain",
                        "Mekanisme pengajuan usulan penggabungan cabang fitur ke cabang utama yang dilengkapi ruang diskusi, code review, dan automated tests",
                        "Laporan bug error yang otomatis dikirim ke tim keamanan",
                        "Permintaan izin untuk menghapus repositori publik"
                    ],
                    ans: 1,
                    explain: "Tepat! Pull Request adalah inti kolaborasi software engineering di GitHub tempat rekan tim memeriksa kualitas kode (code review) sebelum dimerge ke produksi."
                },
                {
                    q: "Perintah Git manakah yang digunakan untuk melihat riwayat commit dalam format satu baris per commit yang bersih dan ringkas?",
                    options: [
                        "git history --short",
                        "git log --oneline",
                        "git commit --list",
                        "git show --summary"
                    ],
                    ans: 1,
                    explain: "Benar! 'git log --oneline' menampilkan 7 karakter hash commit beserta judul pesan commit dalam satu baris per rekaman."
                },
                {
                    q: "Apakah yang ditunjuk oleh pointer 'HEAD' pada repositori Git?",
                    options: [
                        "Commit pertama kali saat repositori dibuat",
                        "Penunjuk referensi ke commit atau cabang lokal yang sedang aktif dikerjakan saat ini",
                        "Akun pemilik server GitHub",
                        "Alamat IP server hosting"
                    ],
                    ans: 1,
                    explain: "Tepat! 'HEAD' adalah simbol penunjuk di dalam direktori .git yang menunjukkan commit snapshot tempat working tree kamu saat ini berada."
                },
                {
                    q: "Perintah apakah yang digunakan untuk menyimpan sementara perubahan kode yang belum selesai di-commit saat kamu harus segera berganti ke branch lain?",
                    options: [
                        "git stash",
                        "git pause",
                        "git hold",
                        "git sleep"
                    ],
                    ans: 0,
                    explain: "Benar! 'git stash' menyembunyikan perubahan lokal yang belum di-commit ke papan penyimpanan sementara, dan dapat dipanggil kembali nanti dengan 'git stash pop'."
                },
                {
                    q: "Manakah pernyataan yang paling akurat mengenai perbedaan Git dan GitHub?",
                    options: [
                        "Git dan GitHub adalah produk yang persis sama dari perusahaan yang sama",
                        "Git adalah perangkat lunak open-source pengendali versi lokal di komputermu, sedangkan GitHub adalah platform web hosting cloud untuk menyimpan dan mengolaborasikan repositori Git",
                        "Git hanya bisa digunakan untuk bahasa Python, sedangkan GitHub untuk HTML",
                        "GitHub bekerja secara offline, sedangkan Git wajib menggunakan internet"
                    ],
                    ans: 1,
                    explain: "Sangat tepat! Git adalah tool CLI lokal pengendali versi, sedangkan GitHub (bersama GitLab atau Bitbucket) adalah platform cloud berbasis web untuk hosting dan kolaborasi tim."
                },
                {
                    q: "Perintah apakah yang digunakan untuk mendaftarkan URL repositori cloud online dengan nama alias 'origin' pada proyek lokalmu?",
                    options: [
                        "git link remote <url>",
                        "git remote add origin <url>",
                        "git cloud connect origin <url>",
                        "git server set <url>"
                    ],
                    ans: 1,
                    explain: "Tepat! 'git remote add origin <url>' menghubungkan repositori Git lokal dengan URL server remote dan memberinya alias standar 'origin'."
                }
            ]
        },

        hostinger: {
            id: "hostinger",
            name: "Hostinger FTP",
            category: "Deployment & Hosting",
            badgeClass: "learn-badge-purple",
            iconClass: "fa-solid fa-server",
            iconColor: "#c084fc",
            tagline: "Protokol Transfer Berkas (FTP/FTPS), Konfigurasi Server Web & Automasi Rilis",
            brief: {
                summary: "Website yang selesai dibuat di komputer lokal (*localhost*) belum dapat diakses oleh publik global sebelum diunggah ke server web hosting yang terhubung 24/7 ke internet. Hostinger menyediakan infrastruktur server web berkecepatan tinggi, dan FTP (File Transfer Protocol) merupakan protokol standar jaringan untuk mentransfer berkas HTML, stylesheet CSS, skrip JavaScript, serta aset media langsung ke direktori publik server. Penguasaan deployment mencakup pemahaman struktur direktori web (public_html), konfigurasi keamanan server lewat berkas .htaccess, manajemen izin akses (*file permissions*), dan automasi rilis berkas.",
                takeaways: [
                    { icon: "fa-solid fa-folder-tree", title: "Anatomi Direktori public_html", desc: "Folder publik akar tempat berkas index.html dieksekusi server saat pengunjung membuka nama domain resmi di browser." },
                    { icon: "fa-solid fa-network-wired", title: "Protokol Jaringan: FTP vs FTPS", desc: "Memahami perbedaan port 21 standar dan enkripsi FTPS/SSL port 990 untuk menjamin kredensial tidak dicegat di jaringan publik." },
                    { icon: "fa-solid fa-gears", title: "Konfigurasi Server Web (.htaccess)", desc: "Mengendalikan aturan rewrite URL, proteksi file sensitif, keamanan CSP (Content Security Policy), dan browser cache control." },
                    { icon: "fa-solid fa-terminal", title: "Automasi Scripted Deployment", desc: "Menyusun skrip PowerShell/Bash untuk mengunggah pembaruan website secara otomatis dalam hitungan detik tanpa aplikasi FTP manual." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Alur Otomasi Upload PowerShell & Keamanan .htaccess",
                desc: "Pelajari bagaimana skrip automasi pengunggahan berkas bekerja dengan retry attempt dan bagaimana berkas .htaccess mengamankan server:",
                codeTitle: "upload_ftp.ps1 & .htaccess (Production Configuration)",
                code: `# ====================================================
# 1. SKRIP POWERSHELL AUTOMATION DEPLOYMENT
# ====================================================
$ftpServer = "145.79.9.243"
$username  = "u848516441.shifandailyposts.mediasosial.net"
$password  = "KredensialRahasiaHostinger"

function Upload-FtpFile {
    param ([string]$localFilePath, [string]$remotePath)
    $ftpUrl = "ftp://$ftpServer/$remotePath"
    Write-Host "Mengunggah $localFilePath ke server..." -ForegroundColor Cyan

    for ($attempt = 1; $attempt -le 3; $attempt++) {
        try {
            $client = New-Object System.Net.WebClient
            $client.Credentials = New-Object System.Net.NetworkCredential($username, $password)
            # Mengirim berkas menggunakan protokol STOR standar
            $client.UploadFile($ftpUrl, "STOR", $localFilePath)
            $client.Dispose()
            Write-Host "  -> Sukses terbit di $remotePath!" -ForegroundColor Green
            return $true
        } catch {
            Write-Host "  -> Percobaan $attempt gagal: $_" -ForegroundColor Yellow
            Start-Sleep -Seconds 2
        }
    }
    return $false
}

# Eksekusi sinkronisasi berkas website
Upload-FtpFile "d:\\Portofolio Shifan\\index.html" "index.html"
Upload-FtpFile "d:\\Portofolio Shifan\\learn.html" "learn.html"
Upload-FtpFile "d:\\Portofolio Shifan\\learn.js"   "learn.js"

# ====================================================
# 2. CONTOH KONFIGURASI KEAMANAN (.htaccess)
# ====================================================
# Cegah pembacaan isi direktori oleh pihak luar
# Options -Indexes

# Lindungi file konfigurasi sensitif (.env, .git, .ps1)
# <FilesMatch "\\.(env|ps1|json|git|log)$">
#     Require all denied
# </FilesMatch>`,
                steps: [
                    { 
                        num: 1, 
                        title: "Konektivitas Host Server & Kredensial Akun FTP", 
                        desc: "Untuk menghubungkan komputer lokal ke server hosting Hostinger secara terprogram, kita memerlukan 3 data penting dari hPanel: (1) Alamat IP/Host FTP (seperti 145.79.9.243), (2) Username akun FTP yang berwenang mengakses direktori publik, dan (3) Kata sandi FTP yang terlindungi secara aman." 
                    },
                    { 
                        num: 2, 
                        title: "Protokol Jaringan RFC 959: Perintah STOR (Store) vs RETR", 
                        desc: "Bagaimanakah protokol FTP mentransfer berkas melintasi internet? Dalam skrip PowerShell '$client.UploadFile($ftpUrl, \"STOR\", $localPath)', parameter 'STOR' (Store) adalah instruksi baku protokol FTP resmi yang memerintahkan server web Hostinger untuk membuka kanal data transfer dan menyimpan aliran biner berkas dari komputer lokal ke direktori tujuan server. Kebalikannya adalah perintah 'RETR' (Retrieve) yang digunakan untuk mengunduh berkas dari server ke komputer lokal kita." 
                    },
                    { 
                        num: 3, 
                        title: "Mekanisme Ketahanan: Retry Loop Otomatis 3x Percobaan", 
                        desc: "Koneksi internet antar-benua ke server hosting rentan mengalami lonjakan latensi atau timeout singkat. Alih-alih membiarkan deployment gagal total saat terjadi gangguan sesaat, kita membungkus perintah upload di dalam perulangan 'for ($attempt = 1; $attempt -le 3; $attempt++)' yang dipadukan dengan 'try...catch'. Jika percobaan pertama gagal, skrip akan memberikan jeda istirahat 2 detik ('Start-Sleep -Seconds 2') lalu otomatis mencoba kembali hingga maksimal 3 kali sebelum melaporkan kegagalan." 
                    },
                    { 
                        num: 4, 
                        title: "Manajemen Memori Jaringan: client.Dispose()", 
                        desc: "Setelah satu berkas selesai diunggah, objek 'System.Net.WebClient' wajib ditutup dan dibersihkan dari RAM menggunakan method 'client.Dispose()'. Jika diabaikan, sesi koneksi soket TCP akan menggantung (hung socket), yang dapat mengakibatkan server hosting memblokir IP komputermu karena dianggap melebihi batas kuota koneksi bersamaan (*concurrent connections limit*)." 
                    },
                    { 
                        num: 5, 
                        title: "Pengamanan Server Web dengan Berkas .htaccess", 
                        desc: "Berkas '.htaccess' adalah pusat konfigurasi direktori pada web server LiteSpeed/Apache di Hostinger. Perintah 'Options -Indexes' mencegah pengunjung asing melihat daftar folder website jika file index tidak ada. Blok '<FilesMatch>' digunakan untuk memblokir unduhan langsung berkas sensitif seperti skrip PowerShell (.ps1), variabel lingkungan (.env), dan konfigurasi Git dari publik." 
                    },
                    { 
                        num: 6, 
                        title: "Teknik Cache-Busting (?v=2.0) pada Aset Statis", 
                        desc: "Peramban web pengguna secara agresif menyimpan berkas CSS dan JavaScript di memori cache lokal agar hemat kuota. Masalahnya: saat kita memperbarui kode di server, pengunjung lama sering kali masih melihat tampilan lama yang rusak. Dengan menambahkan parameter string query unik seperti 'learn.js?v=2.1' pada tag HTML, browser akan mendeteksi URL baru dan seketika mengunduh berkas kode paling mutakhir." 
                    }
                ],
                tip: "Jangan pernah mengunggah berkas skrip deployment (yang berisi kata sandi FTP) ke repositori publik GitHub. Selalu daftarkan 'upload_ftp.ps1' ke dalam berkas '.gitignore' agar kredensial servermu tetap aman."
            },
            challenge: "Buka berkas `.htaccess` di proyekmu, periksa apakah baris `Options -Indexes` sudah aktif untuk mencegah pengunjung asing melihat daftar folder website!",
            questionPool: [
                {
                    q: "Di dalam direktori manakah berkas website publik (seperti index.html) harus diletakkan pada server hosting agar dapat diakses oleh pengunjung di browser?",
                    options: [
                        "/system_root",
                        "public_html (atau htdocs)",
                        "/private_data",
                        "/database_backup"
                    ],
                    ans: 1,
                    explain: "Benar! 'public_html' adalah direktori akar dokumen (document root) standar pada mayoritas web hosting Linux tempat web server melayani konten publik."
                },
                {
                    q: "Apakah kepanjangan dari singkatan protokol FTP?",
                    options: [
                        "Fast Text Protocol",
                        "File Transfer Protocol",
                        "Format Transmission Program",
                        "Folder Tracking Process"
                    ],
                    ans: 1,
                    explain: "Tepat! FTP adalah singkatan dari File Transfer Protocol, protokol jaringan tertua dan standar untuk mentransfer berkas antar-komputer."
                },
                {
                    q: "Berapakah nomor port jaringan default yang digunakan oleh protokol FTP konvensional?",
                    options: [
                        "Port 80",
                        "Port 443",
                        "Port 21",
                        "Port 22"
                    ],
                    ans: 2,
                    explain: "Benar! Port 21 adalah port kontrol standar untuk protokol FTP, sedangkan port 80 untuk HTTP, 443 untuk HTTPS, dan 22 untuk SSH/SFTP."
                },
                {
                    q: "Perintah direktif apakah pada berkas '.htaccess' yang berfungsi mencegah pengunjung melihat daftar seluruh isi folder jika tidak ada file index.html?",
                    options: [
                        "Hide -All",
                        "Options -Indexes",
                        "Block -DirectoryList",
                        "Secure -Folders"
                    ],
                    ans: 1,
                    explain: "Tepat! 'Options -Indexes' menonaktifkan directory browsing; jika pengunjung membuka folder tanpa index, server akan menampilkan 403 Forbidden alih-alih daftar file."
                },
                {
                    q: "Mengapa kredensial kata sandi FTP tidak boleh disimpan di berkas yang di-push ke GitHub publik?",
                    options: [
                        "Karena ukuran file akan membengkak dan memperlambat Git",
                        "Karena orang asing di internet dapat mencuri sandi tersebut dan membajak/merusak seluruh berkas di server hostingmu",
                        "Karena GitHub otomatis menolak semua file teks",
                        "Karena akun FTP hanya dapat digunakan satu kali saja"
                    ],
                    ans: 1,
                    explain: "Sangat tepat! Kredensial server adalah rahasia mutlak. Jika bocor di repositori publik, bot pemindai dapat meretas dan menyusupkan malware ke website."
                },
                {
                    q: "Arti dari kode status HTTP 404 pada respons web server adalah apa?",
                    options: [
                        "Server berhasil memproses permintaan (OK)",
                        "Berkas atau halaman yang diminta tidak ditemukan di server",
                        "Akses ke berkas tersebut dilarang (Forbidden)",
                        "Terjadi error internal pada kode server (Internal Server Error)"
                    ],
                    ans: 1,
                    explain: "Benar! HTTP 404 Not Found menandakan bahwa server aktif dan menerima permintaan, tetapi alamat URL yang dituju tidak ada di direktori server."
                },
                {
                    q: "Apa keunggulan protokol FTPS (FTP over SSL) atau SFTP dibandingkan protokol FTP biasa?",
                    options: [
                        "FTPS/SFTP mengompresi gambar secara otomatis",
                        "FTPS/SFTP mengenkripsi username, kata sandi, dan data transfer berkas sehingga aman dari penyadapan jaringan (man-in-the-middle attack)",
                        "FTPS tidak memerlukan username sama sekali",
                        "FTPS hanya bekerja pada sistem operasi Android"
                    ],
                    ans: 1,
                    explain: "Tepat! FTP biasa mengirimkan username dan sandi dalam bentuk plain-text mentah. FTPS/SFTP membungkus sesi dengan enkripsi kriptografi modern (TLS/SSH)."
                },
                {
                    q: "Izin hak akses (File Permissions) numerik berapakah yang paling standar dan aman untuk berkas statis (seperti .html, .css, .jpg) di server web Linux?",
                    options: [
                        "777 (Full read, write, execute untuk semua orang)",
                        "644 (Pemilik bisa membaca & menulis, publik hanya bisa membaca)",
                        "000 (Semua akses diblokir)",
                        "100 (Hanya bisa dieksekusi)"
                    ],
                    ans: 1,
                    explain: "Benar! Izin 644 (rw-r--r--) adalah standar keamanan berkas web: pemilik akun berhak mengedit, sementara pengunjung publik web server hanya diberi izin membaca (read)."
                },
                {
                    q: "Teknik 'Cache-Busting' (misalnya memanggil styles.css?v=2.1) bertujuan untuk apa?",
                    options: [
                        "Menghapus cache database server",
                        "Memaksa peramban pengunjung mengunduh berkas CSS/JS versi terbaru dari server dan mengabaikan salinan cache lama di komputernya",
                        "Mempercepat pengetikan kode di editor",
                        "Menonaktifkan enkripsi SSL"
                    ],
                    ans: 1,
                    explain: "Tepat! Karena browser gemar menyimpan file statis di memori lokal demi kecepatan, menambahkan parameter query '?v=...' memaksa browser mendeteksi URL baru dan mengambil berkas teranyar."
                },
                {
                    q: "Kode status HTTP berapakah yang menandakan bahwa permintaan berhasil diselesaikan dengan sukses oleh server?",
                    options: [
                        "HTTP 200 OK",
                        "HTTP 301 Moved Permanently",
                        "HTTP 403 Forbidden",
                        "HTTP 502 Bad Gateway"
                    ],
                    ans: 0,
                    explain: "Benar! '200 OK' adalah status standar keberhasilan protokol HTTP untuk permintaan berkas yang berhasil ditemukan dan dikirimkan ke peramban."
                },
                {
                    q: "Sistem apakah di internet yang bertanggung jawab menerjemahkan nama domain (seperti shifandailyposts.mediasosial.net) menjadi alamat IP server hosting?",
                    options: [
                        "FTP (File Transfer Protocol)",
                        "DNS (Domain Name System)",
                        "SSL (Secure Sockets Layer)",
                        "DHCP (Dynamic Host Configuration)"
                    ],
                    ans: 1,
                    explain: "Tepat! DNS (Domain Name System) bertindak sebagai buku telepon internet global yang memetakan nama domain ramah manusia ke alamat IP numerik server."
                },
                {
                    q: "Perintah FTP apakah yang digunakan oleh client untuk mengunggah dan menyimpan berkas baru ke direktori server?",
                    options: [
                        "RETR (Retrieve)",
                        "STOR (Store)",
                        "QUIT",
                        "PORT"
                    ],
                    ans: 1,
                    explain: "Benar! 'STOR' (Store) adalah perintah resmi protokol FTP untuk mengunggah dan menyimpan berkas, sedangkan 'RETR' (Retrieve) untuk mengunduh."
                }
            ]
        },

        vscode: {
            id: "vscode",
            name: "VS Code",
            category: "Code Editor & IDE",
            badgeClass: "learn-badge-cyan",
            iconClass: "fa-solid fa-code",
            iconColor: "#007acc",
            tagline: "Arsitektur Editor Modern, Language Server Protocol (LSP), Emmet & Debugging Visual",
            brief: {
                summary: "Visual Studio Code (VS Code) yang dikembangkan oleh Microsoft adalah editor kode sumber terpopuler di dunia software engineering modern. Dibangun di atas fondasi Electron dan Monaco Editor, keunggulan utama VS Code terletak pada penerapan Language Server Protocol (LSP) yang memisahkan pemrosesan bahasa (IntelliSense autocomplete, linting, diagnosa error) ke proses latar belakang independen. Hal ini membuat editor tetap sangat ringan, cepat, serta dapat diekspansi secara tak terbatas melalui ribuan ekstensi terkurasi, debugging visual terintegrasi, terminal multi-shell, dan integrasi kontrol versi Git.",
                takeaways: [
                    { icon: "fa-solid fa-bolt", title: "Language Server Protocol & IntelliSense", desc: "Autocomplete kontekstual cerdas yang memahami definisi fungsi, tipe data variabel, dan dokumentasi parameter secara instan." },
                    { icon: "fa-solid fa-keyboard", title: "Navigasi Keyboard Cepat & Multi-Cursor", desc: "Menguasai Command Palette (Ctrl+Shift+P), Quick Open (Ctrl+P), dan multi-cursor (Ctrl+D) melipatgandakan kecepatan coding." },
                    { icon: "fa-solid fa-sliders", title: "Workspace Configuration (.vscode)", desc: "Menstandarkan aturan format kode tim, linter, dan ekstensi yang direkomendasikan melalui file .vscode/settings.json." },
                    { icon: "fa-solid fa-bug", title: "Debugger Visual & Terminal Terpadu", desc: "Menyetel breakpoint, menginspeksi alur eksekusi variabel, dan menjalankan shell terminal tanpa perlu berpindah jendela aplikasi." }
                ]
            },
            lesson: {
                title: "Pelajaran Mendalam: Pintasan Sakti, Emmet Abbreviation & Workspace JSON",
                desc: "Pelajari konfigurasi file settings.json profesional serta daftar pintasan tombol esensial yang wajib dikuasai developer modern:",
                codeTitle: ".vscode/settings.json (Professional Workspace Setup)",
                code: `{
    /* 1. Pengaturan Editor & Perapian Otomatis */
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.bracketPairColorization.enabled": true,
    "editor.guides.bracketPairs": "active",

    /* 2. Navigasi & Tampilan Visual */
    "editor.cursorBlinking": "smooth",
    "editor.cursorSmoothCaretAnimation": "on",
    "editor.smoothScrolling": true,
    "editor.renderWhitespace": "selection",
    "editor.wordWrap": "on",

    /* 3. Terminal Terintegrasi Bawaan */
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "terminal.integrated.fontSize": 13,

    /* 4. Emmet Cepat untuk HTML & JSX */
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "emmet.triggerExpansionOnTab": true,

    /* 5. Penyembunyian Berkas Sampah dari Explorer */
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/Thumbs.db": true,
        "**/node_modules": false
    }
}`,
                steps: [
                    { 
                        num: 1, 
                        title: "Pusat Kendali Editor: Ctrl + Shift + P (Command Palette)", 
                        desc: "Pintu gerbang utama ke seluruh fitur, perintah, dan konfigurasi VS Code. Menekan 'Ctrl + Shift + P' (atau F1) memunculkan bilah pencarian universal tempat kamu dapat menjalankan tindakan apa saja—seperti mengubah tema warna, memformat dokumen, reload window, hingga menginstal ekstensi—semuanya hanya dengan mengetik kata kunci tanpa perlu menyentuh mouse." 
                    },
                    { 
                        num: 2, 
                        title: "Navigasi Kilat Proyek: Ctrl + P (Quick Open File)", 
                        desc: "Mengapa programmer profesional jarang mengklik folder satu per satu di panel Explorer? Pada proyek nyata dengan puluhan subfolder dan ribuan berkas, mencari file secara manual sangat membuang waktu. Pintasan 'Ctrl + P' memunculkan palet pencarian instan berbasis pencocokan fuzzy (fuzzy search). Cukup ketik beberapa huruf tanpa perlu nama lengkap (misalnya ketik 'lrnjs' untuk menemukan 'learn.js'), lalu tekan Enter. Berkas seketika terbuka dalam hitungan milidetik tanpa tanganmu perlu meninggalkan keyboard." 
                    },
                    { 
                        num: 3, 
                        title: "Terminal Terintegrasi: Ctrl + ` (Tanda Petik Miring Backtick)", 
                        desc: "Tombol backtick ('\`') terletak di pojok kiri atas keyboard, tepat di bawah tombol Esc dan di sebelah kiri angka 1. Menekan kombinasi 'Ctrl + \`' akan memunculkan atau menyembunyikan terminal bawaan (PowerShell / Bash) langsung di bagian bawah editor. Nilai plus terbesarnya: terminal otomatis aktif tepat di direktori kerja proyek saat ini ('d:\\Portofolio Shifan'), sehingga kamu tidak perlu membuka jendela PowerShell terpisah di luar editor dan tidak perlu repot mengetikkan perintah 'cd' berulang-ulang untuk menjalankan Git atau skrip deployment." 
                    },
                    { 
                        num: 4, 
                        title: "Multi-Cursor Editing: Ctrl + D (Pilih Kata Serupa)", 
                        desc: "Sorot satu kata atau nama variabel yang ingin kamu ganti, lalu tekan 'Ctrl + D'. VS Code akan secara otomatis menyorot kemunculan kata berikutnya yang sama dan menambahkan kursor aktif tambahan. Tekan beberapa kali untuk memilih 3, 5, atau 10 kata sekaligus, lalu ketik nama barunya—seluruh kata akan berubah serentak dalam satu ketukan tanpa risiko salah ketik pada fitur Find & Replace global." 
                    },
                    { 
                        num: 5, 
                        title: "Duplikasi Baris Kilat: Shift + Alt + Panah Atas/Bawah", 
                        desc: "Alih-alih melakukan blok teks manual, Ctrl+C lalu Ctrl+V yang lambat, cukup letakkan kursor pada baris kode yang ingin kamu gandakan lalu tekan kombinasi 'Shift + Alt + Panah Bawah' (atau Panah Atas). Baris kode tersebut seketika terduplikasi secara presisi tepat di bawahnya dalam hitungan sepersekian detik." 
                    },
                    { 
                        num: 6, 
                        title: "Generator Kerangka Sakti: Emmet Abbreviations (Tombol Tab)", 
                        desc: "Fitur penulisan kode HTML/CSS paling revolusioner: daripada mengetik tag pembuka dan penutup secara manual satu per satu, kamu cukup mengetikkan notasi singkatan selector CSS—misalnya 'ul.menu>li*3>a'—lalu tekan tombol Tab. VS Code seketika membentangkan singkatan tersebut menjadi elemen list beranggotakan 3 baris lengkap dengan tag tautan anchor secara sempurna!" 
                    }
                ],
                tip: "Pasang ekstensi wajib developer modern: (1) Prettier untuk format kode rapi otomatis saat save, (2) Live Server untuk preview web otomatis reload, dan (3) GitLens untuk melihat riwayat penulis setiap baris kode secara visual."
            },
            challenge: "Buka VS Code di komputermu, buat satu baris baru di file HTML, ketik singkatan Emmet `div.kartu-santri>h3+p+button.btn` lalu tekan tombol Tab, dan saksikan kerangka HTML terbentuk dalam 1 detik!",
            questionPool: [
                {
                    q: "Pintasan tombol (keyboard shortcut) sakti apakah di VS Code untuk membuka kotak pencarian dan pembukaan berkas secara instan (Quick Open File)?",
                    options: [
                        "Ctrl + P",
                        "Ctrl + F",
                        "Ctrl + O",
                        "Ctrl + N"
                    ],
                    ans: 0,
                    explain: "Benar! 'Ctrl + P' membuka palet Quick Open untuk melompat ke berkas apa saja hanya dengan mengetikkan beberapa huruf dari nama berkas tersebut."
                },
                {
                    q: "Pintasan tombol apakah yang digunakan untuk membuka Command Palette (pusat seluruh perintah dan pengaturan fitur) di VS Code?",
                    options: [
                        "Ctrl + Shift + P (atau F1)",
                        "Ctrl + Alt + Del",
                        "Ctrl + Shift + Esc",
                        "Alt + Tab"
                    ],
                    ans: 0,
                    explain: "Tepat! 'Ctrl + Shift + P' (atau tombol F1) adalah gerbang Command Palette tempat semua perintah VS Code dapat dicari dan dijalankan dengan cepat."
                },
                {
                    q: "Bagaimanakah shortcut keyboard untuk memunculkan atau menyembunyikan terminal terintegrasi bawaan di VS Code pada Windows?",
                    options: [
                        "Ctrl + T",
                        "Ctrl + ` (tanda backtick di bawah tombol Esc)",
                        "Ctrl + Shift + T",
                        "Alt + Enter"
                    ],
                    ans: 1,
                    explain: "Benar! 'Ctrl + `' (tanda petik miring backtick) membuka atau menyembunyikan panel terminal terpadu tanpa menutup proses shell yang sedang berjalan."
                },
                {
                    q: "Fitur pintar VS Code apakah yang memberikan pelengkapan otomatis (autocomplete), petunjuk parameter fungsi, dan navigasi kode cerdas?",
                    options: [
                        "AutoPilot",
                        "IntelliSense",
                        "CodeSpell",
                        "SmartType"
                    ],
                    ans: 1,
                    explain: "Tepat! 'IntelliSense' adalah istilah payung Microsoft untuk fitur pelengkapan kode cerdas, informasi tipe, dan daftar member berbasis Language Server Protocol."
                },
                {
                    q: "Pintasan tombol apakah yang digunakan untuk memilih kata yang sama berikutnya sehingga kita dapat mengedit banyak teks serupa secara bersamaan (Multi-Cursor)?",
                    options: [
                        "Ctrl + D",
                        "Ctrl + H",
                        "Ctrl + M",
                        "Shift + F3"
                    ],
                    ans: 0,
                    explain: "Sangat tepat! Menekan 'Ctrl + D' berulang kali akan menambahkan kursor pada kata yang sama berikutnya, memungkinkan refactoring nama variabel dalam sekejap."
                },
                {
                    q: "Folder dan berkas apakah yang digunakan untuk menyimpan pengaturan khusus proyek (Workspace Settings) yang dapat dibagikan ke tim lewat Git?",
                    options: [
                        ".config/editor.cfg",
                        ".vscode/settings.json",
                        "vscode_preferences.ini",
                        "system.workspace"
                    ],
                    ans: 1,
                    explain: "Benar! Folder '.vscode' yang memuat berkas 'settings.json' memungkinkan proyek memiliki aturan khusus (seperti tab size, linter, atau formatter) yang berlaku seragam bagi seluruh tim."
                },
                {
                    q: "Fitur singkatan bawaan VS Code apakah yang memungkinkan penulisan 'ul>li*3' dibentangkan menjadi 3 baris list HTML secara instan saat menekan Tab?",
                    options: [
                        "Emmet",
                        "SnippetPro",
                        "MacroText",
                        "HTML-Gen"
                    ],
                    ans: 0,
                    explain: "Tepat! 'Emmet' adalah toolkit pengembang bawaan di VS Code yang mengubah singkatan berbasis CSS selector menjadi markup HTML lengkap."
                },
                {
                    q: "Pintasan tombol apakah yang digunakan untuk menduplikasi baris kode saat ini ke atas atau ke bawah seketika tanpa perlu copy-paste?",
                    options: [
                        "Ctrl + C lalu Ctrl + V",
                        "Shift + Alt + Panah Atas / Bawah",
                        "Ctrl + D",
                        "Alt + Insert"
                    ],
                    ans: 1,
                    explain: "Benar! 'Shift + Alt + Panah Atas / Bawah' menduplikasi baris tempat kursor berada secara instan, menghemat waktu penulisan kode berulang."
                },
                {
                    q: "Pintasan tombol (shortcut) apakah di VS Code yang digunakan untuk mengubah nama variabel/fungsi di seluruh file secara aman (Rename Symbol)?",
                    options: [
                        "F2",
                        "F5",
                        "Ctrl + R",
                        "F12"
                    ],
                    ans: 0,
                    explain: "Tepat! Tombol 'F2' memicu Rename Symbol yang secara cerdas mengubah nama identifier di semua referensi yang terkait, jauh lebih aman daripada Find & Replace mentah."
                },
                {
                    q: "Tombol shortcut apakah di VS Code yang digunakan untuk memulai sesi penelusuran error (Start Debugging) dengan breakpoints?",
                    options: [
                        "F5",
                        "F11",
                        "Ctrl + Enter",
                        "Shift + F10"
                    ],
                    ans: 0,
                    explain: "Benar! Tombol 'F5' menjalankan debugger bawaan dengan konfigurasi launch.json untuk menelusuri eksekusi program baris demi baris."
                },
                {
                    q: "Ekstensi populer apakah di VS Code yang menyediakan server lokal untuk preview website dan otomatis me-refresh halaman browser setiap kali file disimpan?",
                    options: [
                        "Live Server",
                        "AutoRefresh Pro",
                        "Browser Sync Plus",
                        "Web Previewer"
                    ],
                    ans: 0,
                    explain: "Tepat! 'Live Server' oleh Ritwick Dey adalah salah satu ekstensi terpopuler yang menginjeksi socket ke halaman lokal sehingga browser otomatis ter-reload saat file HTML/CSS/JS diubah."
                },
                {
                    q: "Pintasan tombol apakah yang digunakan untuk menyembunyikan atau memunculkan bilah samping utama (Primary Side Bar Explorer) di VS Code?",
                    options: [
                        "Ctrl + B",
                        "Ctrl + E",
                        "Ctrl + S",
                        "Alt + B"
                    ],
                    ans: 0,
                    explain: "Benar! 'Ctrl + B' digunakan untuk membuka/menutup Primary Side Bar, memberikan area layar yang lebih luas dan fokus saat mengetik kode."
                }
            ]
        }
    };

    const TOOL_KEYS = ['html', 'css', 'javascript', 'python', 'git', 'hostinger', 'vscode'];

    // === 2. DYNAMIC RANDOM QUIZ SAMPLER (5 SOAL ACAK SETIAP BUKA HALAMAN) ===
    function shuffleArray(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    // Ambil tepat 5 soal acak dari pool 12 soal
    function pickRandomQuestions(toolKey, count = 5) {
        const pool = LEARN_MODULES[toolKey].questionPool || [];
        return shuffleArray(pool).slice(0, Math.min(count, pool.length));
    }

    // State tracker kuis per tool
    const quizState = {};
    TOOL_KEYS.forEach(k => {
        quizState[k] = {
            questions: pickRandomQuestions(k, 5),
            answers: {} // questionIdx -> selectedOptIdx
        };
    });

    // === 3. STATE MANAGER & QUERY PARSER ===
    const urlParams = new URLSearchParams(window.location.search);
    let currentToolKey = (urlParams.get('tool') || 'html').toLowerCase();
    if (!LEARN_MODULES[currentToolKey]) currentToolKey = 'html';

    // === 4. DOM ELEMENTS ===
    const toolNavList = document.getElementById('toolNavList');
    const toolHeroBanner = document.getElementById('toolHeroBanner');
    const sectionBrief = document.getElementById('sectionBrief');
    const sectionLesson = document.getElementById('sectionLesson');
    const sectionQuiz = document.getElementById('sectionQuiz');
    const prevToolBtn = document.getElementById('prevToolBtn');
    const nextToolBtn = document.getElementById('nextToolBtn');
    const prevToolLabel = document.getElementById('prevToolLabel');
    const nextToolLabel = document.getElementById('nextToolLabel');

    // === 5. RENDER ENGINE ===
    function renderModule(toolKey) {
        const mod = LEARN_MODULES[toolKey];
        if (!mod) return;
        currentToolKey = toolKey;

        // Update URL query string tanpa reload halaman
        try {
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('tool', toolKey);
            window.history.replaceState({}, '', newUrl);
        } catch (e) {
            // Fallback aman untuk protokol file:// atau sandbox terbatas
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

        // Update Document Title
        document.title = `Modul Belajar & Kuis ${mod.name} - Shifan Shalih Adiluhung`;

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
                    <i class="fa-solid fa-graduation-cap"></i> Tingkat: Komprehensif & Mendalam
                </span>
                <span class="badge" style="background: rgba(6, 182, 212, 0.12); color: #38bdf8; border: 1px solid rgba(6, 182, 212, 0.3); font-size: 0.8rem; padding: 0.35rem 0.85rem; border-radius: 20px;">
                    <i class="fa-solid fa-dice"></i> 5 Soal Latihan (Acak Setiap Sesi)
                </span>
            </div>
        `;

        // 2. Render Section 1: Ringkasan & 4 Key Takeaways
        sectionBrief.innerHTML = `
            <div class="section-tag-heading">
                <i class="fa-solid fa-circle-info"></i>
                <span>1. Ringkasan &amp; Pembahasan Mendalam ${mod.name}</span>
            </div>
            <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 1.5rem;">
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

        // Bind copy button listener
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

        // 4. Render Section 3: Latihan Soal Interaktif (5 Soal Dinamis)
        renderQuizSection(toolKey);

        // 5. Update Pager Navigasi Bawah
        const currentIdx = TOOL_KEYS.indexOf(toolKey);
        const prevIdx = (currentIdx - 1 + TOOL_KEYS.length) % TOOL_KEYS.length;
        const nextIdx = (currentIdx + 1) % TOOL_KEYS.length;

        prevToolLabel.textContent = LEARN_MODULES[TOOL_KEYS[prevIdx]].name;
        nextToolLabel.textContent = LEARN_MODULES[TOOL_KEYS[nextIdx]].name;

        prevToolBtn.onclick = () => {
            renderModule(TOOL_KEYS[prevIdx]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        nextToolBtn.onclick = () => {
            renderModule(TOOL_KEYS[nextIdx]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }

    // === 6. QUIZ ENGINE (5 SOAL ACAK & EVALUASI LANGSUNG) ===
    function renderQuizSection(toolKey) {
        const mod = LEARN_MODULES[toolKey];
        const state = quizState[toolKey];
        const activeQuestions = state.questions; // 5 soal acak

        const letters = ['A', 'B', 'C', 'D'];
        const totalQ = activeQuestions.length;
        let answeredCount = Object.keys(state.answers).length;
        let correctCount = 0;

        Object.keys(state.answers).forEach(qIdxStr => {
            const qIdx = parseInt(qIdxStr, 10);
            if (activeQuestions[qIdx] && state.answers[qIdx] === activeQuestions[qIdx].ans) {
                correctCount++;
            }
        });

        const quizHtml = activeQuestions.map((qItem, qIdx) => {
            const chosen = state.answers[qIdx];
            const isAnswered = (chosen !== undefined);
            const isCorrect = isAnswered && (chosen === qItem.ans);

            return `
                <div class="quiz-item-card glass-card" id="qcard_${qIdx}">
                    <div class="quiz-item-header">
                        <span class="quiz-q-num"><i class="fa-solid fa-circle-question"></i> Soal ${qIdx + 1} dari ${totalQ}</span>
                        ${isAnswered ? (isCorrect ? '<span class="badge" style="background: rgba(16,185,129,0.18); color: #34d399; font-size: 0.78rem; font-weight:600;"><i class="fa-solid fa-check"></i> Jawaban Tepat</span>' : '<span class="badge" style="background: rgba(239,68,68,0.18); color: #f87171; font-size: 0.78rem; font-weight:600;"><i class="fa-solid fa-xmark"></i> Kurang Tepat</span>') : ''}
                    </div>
                    <h4>${escapeHtml(qItem.q)}</h4>
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

                    <div class="quiz-feedback-box ${isAnswered ? 'show' : ''} ${isAnswered ? (isCorrect ? 'quiz-feedback-correct' : 'quiz-feedback-wrong') : ''}">
                        ${isAnswered ? (isCorrect ? `<strong><i class="fa-solid fa-circle-check"></i> Tepat Sekali!</strong> ` : `<strong><i class="fa-solid fa-circle-xmark"></i> Kurang Tepat.</strong> `) + escapeHtml(qItem.explain) : ''}
                    </div>
                </div>
            `;
        }).join('');

        const scorePct = totalQ > 0 ? Math.round((correctCount / totalQ) * 100) : 0;

        sectionQuiz.innerHTML = `
            <div class="section-tag-heading">
                <i class="fa-solid fa-pen-to-square"></i>
                <span>3. Latihan Soal Interaktif (${mod.name})</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
                Tersedia <strong>5 soal pilihan ganda acak</strong> yang diundi otomatis dari bank soal materi ${mod.name} setiap kali kamu membuka halaman. Uji pemahamanmu sekarang:
            </p>

            <div class="quiz-container">
                ${quizHtml}
            </div>

            <!-- Live Score Board -->
            <div class="quiz-score-board">
                <div class="score-info">
                    <div class="score-trophy">
                        <i class="fa-solid ${scorePct === 100 ? 'fa-crown' : (scorePct >= 80 ? 'fa-award' : (scorePct >= 60 ? 'fa-medal' : 'fa-seedling'))}"></i>
                    </div>
                    <div class="score-text">
                        <h4>Progres Latihan: ${answeredCount} / ${totalQ} Soal Dijawab</h4>
                        <p>Skor Kamu Saat Ini: <strong style="color: ${scorePct >= 80 ? '#34d399' : (scorePct >= 60 ? '#fbbf24' : '#f87171')}; font-size: 1.05rem;">${correctCount} dari ${totalQ} Benar (${scorePct}%)</strong></p>
                    </div>
                </div>
                <button type="button" class="btn btn-outline btn-sm" id="resetQuizBtn" style="cursor: pointer; display: inline-flex; align-items: center; gap: 0.5rem;">
                    <i class="fa-solid fa-shuffle"></i>
                    <span>Acak 5 Soal Baru &amp; Ulangi</span>
                </button>
            </div>

            <!-- Hands-on Challenge -->
            <div class="challenge-card">
                <h4><i class="fa-solid fa-laptop-code"></i> Tantangan Praktik Mandiri:</h4>
                <p style="color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6; margin: 0;">${mod.challenge}</p>
            </div>
        `;

        // Bind option click listeners
        sectionQuiz.querySelectorAll('.quiz-opt-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const qIdx = parseInt(btn.getAttribute('data-q'), 10);
                const optIdx = parseInt(btn.getAttribute('data-opt'), 10);
                state.answers[qIdx] = optIdx;

                const isCorrect = (optIdx === activeQuestions[qIdx].ans);
                if (isCorrect) {
                    showToast("Jawaban kamu tepat! Lanjutkan.", "success");
                } else {
                    showToast("Jawaban kurang tepat. Perhatikan pembahasannya.", "error");
                }

                // Re-render quiz section to show visual feedback
                renderQuizSection(toolKey);
            });
        });

        // Bind reset quiz button (mengacak 5 soal baru dari pool)
        const resetBtn = document.getElementById('resetQuizBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                state.questions = pickRandomQuestions(toolKey, 5);
                state.answers = {};
                renderQuizSection(toolKey);
                showToast(`Kuis ${mod.name} diacak ulang dengan 5 soal baru! Selamat mencoba.`, "info");
            });
        }
    }

    // === 7. TOP STRIP BUTTONS EVENT LISTENERS ===
    document.querySelectorAll('.tool-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const toolKey = btn.getAttribute('data-tool');
            renderModule(toolKey);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Helper to escape HTML
    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
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

    // === 8. INITIAL LAUNCH ===
    renderModule(currentToolKey);

});
