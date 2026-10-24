// Terapkan tema tersimpan sebelum halaman tampil, agar tidak "berkedip" gelap ke terang.
// Dimuat tepat setelah <body> (tanpa defer).
try {
    if (localStorage.getItem('ssa_theme') === 'light') {
        document.body.classList.replace('dark-theme', 'light-theme');
    }
} catch (e) { /* penyimpanan diblokir: pakai tema bawaan */ }
