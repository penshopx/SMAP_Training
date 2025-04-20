"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface QuizTabsProps {
  featuredQuizzes: any[]
  recentQuizzes: any[]
  allQuizzes: any[]
}

export function QuizTabs({ featuredQuizzes, recentQuizzes, allQuizzes }: QuizTabsProps) {
  return (
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

      <TabsContent value="recent" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentQuizzes.map((quiz) => (
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

      <TabsContent value="all" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allQuizzes.map((quiz) => (
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
    </Tabs>
  )
}