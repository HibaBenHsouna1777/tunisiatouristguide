"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import GuideCard from "@/components/GuideCard"

const guides = [
  {
    name: "Katrin",
    expertise: ["Historical Sites", "Local Culture"],
    languages: ["English", "Arabic"],
    avatarUrl: "/placeholder.svg",
  },
  {
    name: "Ahmed",
    expertise: ["Ancient Roman Architecture", "Tunisian Cuisine"],
    languages: ["English", "French", "Arabic"],
    avatarUrl: "/placeholder.svg",
  },
  {
    name: "Sophie",
    expertise: ["Islamic Art", "Mediterranean History"],
    languages: ["English", "French", "Italian"],
    avatarUrl: "/placeholder.svg",
  },
]

const categories = [
  "Historical Sites",
  "Local Culture",
  "Ancient Roman Architecture",
  "Tunisian Cuisine",
  "Islamic Art",
  "Mediterranean History",
]

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredGuides = selectedCategory
    ? guides.filter((guide) => guide.expertise.includes(selectedCategory))
    : guides

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Find a Local Guide</h1>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredGuides.map((guide) => (
          <GuideCard key={guide.name} {...guide} />
        ))}
      </div>
    </div>
  )
}

