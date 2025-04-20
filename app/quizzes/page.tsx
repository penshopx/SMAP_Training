import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { QuizFilter } from "@/app/components/quiz-filter"
import { QuizTabs } from "@/app/components/quiz-tabs"

export const metadata: Metadata = {
  title: "Kuis ISO 37001",
  description: "Uji pemahaman Anda tentang ISO 37001 dengan kuis interaktif",
}

// Data dummy untuk kuis
const quizzes = [
  // ... data kuis yang sudah ada ...
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

export default function QuizzesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Kuis ISO 37001</h1>
          <p className="text-muted-foreground mt-1">
            Uji dan tingkatkan pemahaman Anda tentang ISO 37001 melalui kuis interaktif
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button>Riwayat Kuis Saya</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <QuizFilter 
            categories={categories} 
            difficulties={difficulties} 
          />
        </div>

        <div className="lg:col-span-3">
          <QuizTabs 
            featuredQuizzes={featuredQuizzes}
            recentQuizzes={recentQuizzes}
            allQuizzes={quizzes}
          />
        </div>
      </div>
    </div>
  )
}