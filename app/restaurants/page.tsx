"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Utensils, Search } from "lucide-react"

const restaurants = [
  {
    name: "Restaurant El Bassatine",
    description: "Traditional Tunisian specialties in a welcoming atmosphere near the Oudna archaeological site.",
    image: "/placeholder.svg",
  },
  {
    name: "Café Oudna",
    description: "Cozy café serving mint tea and pastries with a view of the Oudna ruins.",
    image: "/placeholder.svg",
  },
  {
    name: "Le Riad de Oudna",
    description: "A fusion of Tunisian and Mediterranean cuisine with a scenic view of Oudna.",
    image: "/placeholder.svg",
  },
  // Add more restaurants as needed
]

export default function RestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Restaurants in Tunisia</h1>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10 bg-secondary/50 border-none"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={index}
              href={`/restaurants/${restaurant.name.toLowerCase().replace(/ /g, "-")}`}
              className="group"
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-primary" />
                    {restaurant.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{restaurant.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

