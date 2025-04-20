"use client"

import { useState } from "react"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuizFilterProps {
  categories: string[]
  difficulties: string[]
  onFilterChange?: (filters: any) => void
}

export function QuizFilter({ categories, difficulties, onFilterChange }: QuizFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua")
  const [searchQuery, setSearchQuery] = useState("")

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    if (onFilterChange) {
      onFilterChange({
        category: category === "Semua" ? null : category,
        difficulty: selectedDifficulty === "Semua" ? null : selectedDifficulty,
        search: searchQuery
      })
    }
  }

  const handleDifficultyClick = (difficulty: string) => {
    setSelectedDifficulty(difficulty)
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory === "Semua" ? null : selectedCategory,
        difficulty: difficulty === "Semua" ? null : difficulty,
        search: searchQuery
      })
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (onFilterChange) {
      onFilterChange({
        category: selectedCategory === "Semua" ? null : selectedCategory,
        difficulty: selectedDifficulty === "Semua" ? null : selectedDifficulty,
        search: e.target.value
      })
    }
  }

  return (
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
              onChange={handleSearchChange}
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
                onClick={() => handleCategoryClick(category)}
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
                onClick={() => handleDifficultyClick(difficulty)}
              >
                {difficulty}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}