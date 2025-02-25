"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, History, Compass } from "lucide-react"

const historicalCategories = {
  ancient: {
    title: "Ancient Ruins",
    icon: <History className="h-5 w-5" />,
    sites: [
      { name: "Oudna", description: "Roman city with well-preserved ruins" },
      { name: "Dougga", description: "UNESCO World Heritage site with Roman ruins" },
      { name: "Carthage", description: "Ancient Phoenician and Roman city" },
    ],
  },
  medieval: {
    title: "Medieval Islamic Sites",
    icon: <Building className="h-5 w-5" />,
    sites: [
      { name: "Kairouan Great Mosque", description: "One of the oldest mosques in North Africa" },
      { name: "Medina of Tunis", description: "UNESCO World Heritage site with traditional architecture" },
    ],
  },
  berber: {
    title: "Berber Heritage Sites",
    icon: <Compass className="h-5 w-5" />,
    sites: [
      { name: "Matmata", description: "Famous for its underground troglodyte dwellings" },
      { name: "Chenini", description: "Ancient Berber village with unique architecture" },
    ],
  },
}

export default function HistoricalSitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Historical Sites</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(historicalCategories).map(([key, category]) => (
          <Button
            key={key}
            variant={selectedCategory === key ? "default" : "outline"}
            className="h-auto py-4"
            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
          >
            <div className="flex items-center gap-2">
              {category.icon}
              <div className="text-left">
                <h3 className="font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.sites.length} sites to explore</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      {selectedCategory && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {historicalCategories[selectedCategory as keyof typeof historicalCategories].sites.map((site, index) => (
            <Link key={index} href={`/sites/historical/${site.name.toLowerCase().replace(/ /g, "-")}`}>
              <Card className="h-full transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-blue-500">{site.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{site.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

