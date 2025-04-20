export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Kuis ISO 37001</h1>
      <p className="text-muted-foreground mt-1">
        Uji dan tingkatkan pemahaman Anda tentang ISO 37001 melalui kuis interaktif
      </p>
    </div>
  )
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kuis ISO 37001",
  description: "Uji pemahaman Anda tentang ISO 37001 dengan kuis interaktif",
}

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Kuis ISO 37001</h1>
      <p className="text-muted-foreground mt-1">
        Uji dan tingkatkan pemahaman Anda tentang ISO 37001 melalui kuis interaktif
      </p>
    </div>
  )
}
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// Import komponen client secara dinamis untuk menghindari error
const QuizzesClient = dynamic(() => import("./quizzes-client"), { ssr: false })

export const metadata: Metadata = {
  title: "Kuis ISO 37001",
  description: "Uji pemahaman Anda tentang ISO 37001 dengan kuis interaktif",
}

// Data dummy untuk kuis
const quizzes = [
  {
    id: "1",
    title: "Dasar-dasar ISO 37001",
    description: "Kuis tentang konsep dasar dan prinsip-prinsip ISO 37001",
    category: "Pengetahuan Dasar",
    questions: 10,
    timeLimit: 15,
    difficulty: "Pemula",
    completions: 245,
    avgScore: 82,
    featured: true,
  },
  // ... data lainnya
]

// Filter kuis berdasarkan featured
const featuredQuizzes = quizzes.filter((quiz) => quiz.featured)
const recentQuizzes = [...quizzes].sort((a, b) => b.completions - a.completions).slice(0, 4)

// Kategori kuis
const categories = [
  "Semua",
  "Pengetahuan Dasar",
  "Implementasi",
  "Audit",
  "Manajemen Risiko",
  "Kebijakan",
  "Uji Kelayakan",
]

// Tingkat kesulitan
const difficulties = ["Semua", "Pemula", "Menengah", "Lanjutan"]

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Kuis ISO 37001</h1>
      <p className="text-muted-foreground mt-1">
        Uji dan tingkatkan pemahaman Anda tentang ISO 37001 melalui kuis interaktif
      </p>
      
      <div className="mt-8">
        <QuizzesClient 
          quizzes={quizzes}
          featuredQuizzes={featuredQuizzes}
          recentQuizzes={recentQuizzes}
          categories={categories}
          difficulties={difficulties}
        />
      </div>
    </div>
  )
}