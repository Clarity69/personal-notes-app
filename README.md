# Personal Notes App V2

Submission akhir kelas **Belajar Membuat Aplikasi Web dengan React** (Dicoding).
Dibangun dengan React 18, React Router v6, Vite, dan Notes API Dicoding.

## Menjalankan proyek

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run lint     # cek konsistensi gaya & kualitas kode
npm run build    # build produksi ke folder dist/
```

## Struktur folder

```
src/
├── components/   # komponen UI kecil, satu tanggung jawab per file
├── contexts/     # AuthContext, ThemeContext, LocaleContext
├── hooks/        # useInput, useFetch, useSearchableNotes, useKeyword, useAsyncAction
├── pages/        # Home, Archive, Detail, Add, Login, Register, NotFound
├── styles/       # style.css (variabel tema terang/gelap)
├── utils/        # network-data.js, locales.js, index.js
├── App.jsx       # definisi rute + route guard
└── main.jsx      # entry point + provider
```

## Custom hooks

| Hook | Fungsi | Dipakai di |
|---|---|---|
| `useInput` | Controlled input `[value, onChange, reset]` | `LoginInput`, `RegisterInput` |
| `useFetch` | GET data + status loading, aman dari race condition | `useSearchableNotes`, `DetailPage` |
| `useSearchableNotes` | Ambil catatan + keyword URL + filter judul | `HomePage`, `ArchivePage` |
| `useKeyword` | Sinkronisasi keyword pencarian dengan `?keyword=` | `useSearchableNotes` |
| `useAsyncAction` | Status proses untuk aksi async (cegah submit ganda) | Login, Register, Add, Detail |

## Pemetaan kriteria submission

| Kriteria | Lokasi |
|---|---|
| Integrasi RESTful API | `utils/network-data.js` |
| Registrasi & login | `pages/RegisterPage.jsx`, `pages/LoginPage.jsx` |
| Simpan access token & authedUser | `contexts/AuthContext.jsx` (localStorage `accessToken`) |
| Logout | `components/LogoutButton.jsx` |
| Proteksi halaman catatan | `components/PrivateRoute.jsx` & `PublicRoute.jsx` |
| Tema gelap/terang persisten | `contexts/ThemeContext.jsx` + `components/ThemeToggle.jsx` |
| Ganti bahasa ID/EN persisten | `contexts/LocaleContext.jsx` + `components/LocaleToggle.jsx` |
| Indikator loading | `components/LoadingIndicator.jsx`, `SubmitButton`, `ActionButton` |
| Kriteria opsional V1 | Pencarian via URL, halaman 404, batas 50 karakter judul, PropTypes |
| Konsistensi gaya kode | `eslint.config.js` + `.editorconfig` |
