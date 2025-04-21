echo import type { Metadata, Viewport } from "next" > app\search\page.tsx
echo. >> app\search\page.tsx
echo // Metadata dan viewport harus diekspor di luar komponen >> app\search\page.tsx
echo export const metadata: Metadata = { >> app\search\page.tsx
echo   title: "Pencarian", >> app\search\page.tsx
echo   description: "Cari konten pelatihan SMAP", >> app\search\page.tsx
echo } >> app\search\page.tsx
echo. >> app\search\page.tsx
echo export const viewport: Viewport = { >> app\search\page.tsx
echo   width: "device-width", >> app\search\page.tsx
echo   initialScale: 1, >> app\search\page.tsx
echo } >> app\search\page.tsx
echo. >> app\search\page.tsx
echo // Halaman pencarian >> app\search\page.tsx
echo export default function SearchPage() { >> app\search\page.tsx
echo   return ( >> app\search\page.tsx
echo     ^<div className="container py-6"^> >> app\search\page.tsx
echo       ^<h1 className="text-3xl font-bold tracking-tight mb-4"^>Pencarian^</h1^> >> app\search\page.tsx
echo       ^<p className="text-muted-foreground mb-8"^>Cari kuis, studi kasus, dan dokumen ISO 37001^</p^> >> app\search\page.tsx
echo. >> app\search\page.tsx
echo       ^<div className="text-center py-12"^> >> app\search\page.tsx
echo         ^<p className="text-lg font-medium"^>Fitur pencarian akan segera tersedia^</p^> >> app\search\page.tsx
echo         ^<p className="text-muted-foreground mt-2"^>Silakan kembali nanti^</p^> >> app\search\page.tsx
echo       ^</div^> >> app\search\page.tsx
echo     ^</div^> >> app\search\page.tsx
echo   ) >> app\search\page.tsx
echo } >> app\search\page.tsx