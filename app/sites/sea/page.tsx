"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Umbrella, Fish, LampIcon as Lighthouse } from "lucide-react"

const seaCategories = {
  beaches: {
    title: "Beach Resorts",
    icon: <Umbrella className="h-5 w-5" />,
    sites: [
      { name: "Hammamet Beach", description: "Popular beach resort with golden sands" },
      { name: "Djerba", description: "Island paradise with pristine beaches" },
    ],
  },
  diving: {
    title: "Marine and Diving Sites",
    icon: <Fish className="h-5 w-5" />,
    sites: [
      { name: "Tabarka", description: "Famous for coral reefs and underwater diving" },
      { name: "Kerkennah Islands", description: "Tranquil archipelago ideal for diving and fishing" },
    ],
  },
  coastal: {
    title: "Coastal Historical Sites",
    icon: <Lighthouse className="h-5 w-5" />,
    sites: [
      { name: "Sidi Bou Said", description: "Picturesque coastal town with blue and white architecture" },
      { name: "Bizerte", description: "Historic port city with a charming old harbor" },
    ],
  },
}

export default function SeaSitesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Sea Sites</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(seaCategories).map(([key, category]) => (
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
          {seaCategories[selectedCategory as keyof typeof seaCategories].sites.map((site, index) => (
            <Link key={index} href={`/sites/sea/${site.name.toLowerCase().replace(/ /g, "-")}`}>
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

