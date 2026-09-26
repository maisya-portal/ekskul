# Ekskul Maisya - PWA Jurnal & Presensi Pengampu

Aplikasi Progressive Web App (PWA) modern untuk guru/ustadz pengampu kegiatan Ekstrakurikuler di **Pondok Pesantren Imam Syafi'i Brebes**.

🌐 **Live URL GitHub Pages:**  
👉 **[https://maisya-portal.github.io/ekskul/](https://maisya-portal.github.io/ekskul/)**

---

## 🚀 Fitur Utama

1. **Mobile-First & PWA Installable:**
   - Dapat diinstall langsung ke layar utama (*Add to Home Screen*) di perangkat Android & iOS tanpa perlu unduh lewat Play Store/App Store.
   - Dilengkapi *Service Worker* dan *Web App Manifest* untuk performa instan dan offline fallback.
2. **Pilih Nama Pengampu Cepat:**
   - Autocomplete nama pengampu yang otomatis tersimpan di `localStorage` ponsel. Guru tidak perlu memilih ulang setiap kali membuka aplikasi.
3. **Pencatatan Materi Latihan (Wajib):**
   - Kolom jurnal agenda materi yang diajarkan pada sesi pertemuan.
4. **Catatan Kendala & Kejadian:**
   - Form evaluasi lapangan untuk mencatat santri sakit/cedera, sarana perlengkapan, atau kejadian khusus.
5. **Presensi Santri 1-Tap:**
   - Daftar santri anggota termuat otomatis dengan status default *Hadir*. Cukup 1 ketukan untuk merubah ke *Izin*, *Sakit*, atau *Alfa*.
6. **Penilaian Predikat:**
   - Opsi penginputan nilai predikat (A / B / C / D) per santri saat sesi evaluasi atau penilaian bulanan.
7. **Riwayat Sesi & Status Honor:**
   - Guru dapat memantau riwayat sesi yang telah disubmit beserta status pencairan honor oleh Kepala Divisi (Kadiv) Kesantrian.

---

## ⚙️ Cara Mengaktifkan GitHub Pages di Repository

Aplikasi ini sudah dilengkapi file workflow otomatis: `.github/workflows/deploy.yml` dan `.nojekyll`.

Untuk memastikan GitHub Pages aktif di repository GitHub:
1. Buka repository [https://github.com/maisya-portal/ekskul](https://github.com/maisya-portal/ekskul).
2. Masuk ke menu **Settings** > **Pages** (di sidebar kiri).
3. Pada bagian **Build and deployment**:
   - **Source:** Pilih **GitHub Actions** (otomatis mendeploy via workflow `deploy.yml`), ATAU
   - Pilih **Deploy from a branch** -> Branch: `main` / Folder: `/ (root)` -> Klik **Save**.
4. Dalam 1-2 menit, status akan hijau dan web aktif di:  
   **`https://maisya-portal.github.io/ekskul/`**

---

## 🔒 Koneksi Backend
Aplikasi ini terhubung langsung secara real-time ke Core Database Portal Kesantrian Ponpes Imam Syafi'i Brebes melalui API Google Apps Script yang tangguh (mendukung CORS safe-request dan auto fallback JSONP).
