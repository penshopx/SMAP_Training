import Link from "next/link"
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Pelatihan ISO 37001</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Platform pelatihan komprehensif untuk memahami dan mengimplementasikan Sistem Manajemen Anti Penyuapan
          berdasarkan ISO 37001
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Studi Kasus</h2>
            <p className="text-gray-600 mb-4">Pelajari dari contoh implementasi nyata</p>
            <p className="mb-4">
              Eksplorasi studi kasus dari berbagai organisasi yang telah berhasil mengimplementasikan ISO 37001.
            </p>
            <Link href="/case-studies" className="text-blue-600 hover:underline flex items-center">
              Lihat Studi Kasus <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Dokumen & Template</h2>
            <p className="text-gray-600 mb-4">Akses dokumen dan template penting</p>
            <p className="mb-4">
              Dapatkan akses ke berbagai dokumen panduan, template, dan contoh kebijakan untuk implementasi ISO 37001.
            </p>
            <Link href="/documents" className="text-blue-600 hover:underline flex items-center">
              Lihat Dokumen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Kuis Interaktif</h2>
            <p className="text-gray-600 mb-4">Uji pemahaman Anda</p>
            <p className="mb-4">
              Tingkatkan pemahaman Anda tentang ISO 37001 melalui serangkaian kuis interaktif dengan penilaian otomatis.
            </p>
            <Link href="/quizzes" className="text-blue-600 hover:underline flex items-center">
              Mulai Kuis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 inline-flex items-center">
          Masuk ke Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}