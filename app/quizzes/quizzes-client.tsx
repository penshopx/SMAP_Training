"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search } from 'lucide-react'
import { useState } from "react"

interface QuizType {
  id: string
  title: string
  description: string
  category: string
  questions: number
  timeLimit: number
  difficulty: string
  completions: number
  avgScore: number
  featured: boolean
}

interface QuizzesClientProps {
  quizzes: QuizType[]
  featuredQuizzes: QuizType[]
  recentQuizzes: QuizType[]
  categories: string[]
  difficulties: string[]
}

export default function QuizzesClient({ 
  quizzes, 
  featuredQuizzes, 
  recentQuizzes, 
  categories, 
  difficulties 
}: QuizzesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Filter</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Cari</h3>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Cari kuis..." 
                  className="pl-8" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Kategori</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === selectedCategory ? "default" : "outline"}
                    size="sm"
                    className="mr-2 mb-2"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-2">Tingkat Kesulitan</h3>
              <div className="space-y-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={difficulty === selectedDifficulty ? "default" : "outline"}
                    size="sm"
                    className="mr-2 mb-2"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-3">
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="featured">Direkomendasikan</TabsTrigger>
            <TabsTrigger value="recent">Terbaru</TabsTrigger>
            <TabsTrigger value="all">Semua Kuis</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredQuizzes.map((quiz) => (
                <Card key={quiz.id} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{quiz.title}</CardTitle>
                      <Badge variant="outline">{quiz.difficulty}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-muted-foreground">Pertanyaan:</span> {quiz.questions}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Waktu:</span> {quiz.timeLimit} menit
                        </div>
                      </div>
                      <div>
                        <Badge variant="secondary">{quiz.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-3">
                    <div className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{quiz.completions}</span> peserta | Rata-rata:{" "}
                      <span className="font-medium text-foreground">{quiz.avgScore}%</span>
                    </div>
                    <Link href={`/quizzes/${quiz.id}`}>
                      <Button size="sm">Lihat Kuis</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* ... TabsContent lainnya ... */}
        </Tabs>
      </div>
    </div>
  )
}