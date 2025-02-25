"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"

const historicalSites = [
  {
    name: "Oudna",
    description: "A Roman city on a hill with well-preserved ruins, including the Capitol and amphitheater.",
    image: "/placeholder.svg",
  },
  {
    name: "Carthage",
    description: "Ancient Phoenician and Roman ruins, UNESCO World Heritage site.",
    image: "/placeholder.svg",
  },
  {
    name: "Dougga",
    description: "Well-preserved Roman ruins showcasing the grandeur of ancient architecture.",
    image: "/placeholder.svg",
  },
  // Add more historical sites as needed
]

export default function HistoricalSitesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSites = historicalSites.filter(
    (site) =>
      site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Historical Sites of Tunisia</h1>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10 bg-secondary/50 border-none"
            placeholder="Search historical sites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site, index) => (
            <Link key={index} href={`/historical-sites/${site.name.toLowerCase()}`} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={site.image || "/placeholder.svg"}
                    alt={site.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {site.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{site.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

