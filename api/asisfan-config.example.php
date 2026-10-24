<?php
/**
 * CONTOH konfigurasi AsisFan AI.
 *
 * Cara pakai di Hostinger:
 *   1. Buka hPanel > File Manager.
 *   2. Masuk ke folder yang BERISI public_html (satu tingkat di atasnya).
 *   3. Buat file baru bernama: asisfan-config.php
 *   4. Salin isi file ini ke sana, lalu ganti PASTE_API_KEY_DI_SINI dengan API key Anthropic.
 *
 * JANGAN commit file asisfan-config.php ke git, dan jangan taruh key di file HTML/JS.
 */

return [
    // API key dari Claude Console (platform.claude.com > API Keys)
    'api_key' => 'PASTE_API_KEY_DI_SINI',

    // Model Claude yang dipakai. Pilihan: claude-opus-5-5 (paling pintar),
    // claude-sonnet-5-5 (seimbang), claude-haiku-5-5 (paling hemat).
    'model' => 'claude-opus-5-5',

    // Batas pemakaian agar saldo tidak terkuras
    'limit_per_ip_hour' => 30,  // pesan per pengunjung per jam
    'limit_per_day' => 300,     // total pesan semua pengunjung per hari
];
