"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const popularDestinations = [
  {
    name: "Carthage",
    description: "Explore ancient Roman ruins",
    image: "/placeholder.svg",
  },
  {
    name: "Sidi Bou Said",
    description: "Wander through picturesque blue and white streets",
    image: "/placeholder.svg",
  },
  {
    name: "Sahara Desert",
    description: "Experience magical sunsets and starlit nights",
    image: "/placeholder.svg",
  },
  {
    name: "Sharian Sites",
    description: "Discover the vast dunes and oases",
    image: "/placeholder.svg",
  },
  {
    name: "Natural Sites",
    description: "Experience Tunisia's natural beauty",
    image: "/placeholder.svg",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality or redirect to a search results page
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/tunisia-desert-sunset.jpg')" }}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-blue-500">Discover</span>{" "}
          <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-transparent bg-clip-text">
            Tunisia's Treasures
          </span>
        </h1>
        <p className="text-2xl text-white mb-8">Explore ancient ruins, pristine beaches, and vibrant culture</p>
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </form>
        <h2 className="text-3xl font-bold mb-6 text-blue-500">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {popularDestinations.map((destination) => (
            <Link key={destination.name} href={`/destinations/${destination.name.toLowerCase().replace(/ /g, "-")}`}>
              <Card className="h-full transition-transform hover:scale-105">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="text-blue-500">{destination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

