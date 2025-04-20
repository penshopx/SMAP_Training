import type { Metadata } from "next"
import { QuizzesClient } from "./quizzes-client"

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
  {
    id: "2",
    title: "Implementasi Sistem Manajemen Anti Penyuapan",
    description: "Kuis tentang langkah-langkah implementasi sistem manajemen anti penyuapan",
    category: "Implementasi",
    questions: 15,
    timeLimit: 20,
    difficulty: "Menengah",
    completions: 178,
    avgScore: 75,
    featured: true,
  },
  {
    id: "3",
    title: "Audit dan Sertifikasi ISO 37001",
    description: "Kuis tentang proses audit dan sertifikasi ISO 37001",
    category: "Audit",
    questions: 12,
    timeLimit: 18,
    difficulty: "Lanjutan",
    completions: 132,
    avgScore: 68,
    featured: false,
  },
  {
    id: "4",
    title: "Penilaian Risiko Penyuapan",
    description: "Kuis tentang metode penilaian risiko penyuapan dalam organisasi",
    category: "Manajemen Risiko",
    questions: 8,
    timeLimit: 12,
    difficulty: "Menengah",
    completions: 156,
    avgScore: 79,
    featured: true,
  },
  {
    id: "5",
    title: "Kebijakan Anti Penyuapan",
    description: "Kuis tentang pengembangan dan implementasi kebijakan anti penyuapan",
    category: "Kebijakan",
    questions: 10,
    timeLimit: 15,
    difficulty: "Pemula",
    completions: 198,
    avgScore: 85,
    featured: false,
  },
  {
    id: "6",
    title: "Uji Kelayakan dalam ISO 37001",
    description: "Kuis tentang proses uji kelayakan terhadap mitra bisnis dan personel",
    category: "Uji Kelayakan",
    questions: 12,
    timeLimit: 18,
    difficulty: "Lanjutan",
    completions: 112,
    avgScore: 72,
    featured: false,
  },
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
    <QuizzesClient 
      quizzes={quizzes}
      featuredQuizzes={featuredQuizzes}
      recentQuizzes={recentQuizzes}
      categories={categories}
      difficulties={difficulties}
    />
  )
}