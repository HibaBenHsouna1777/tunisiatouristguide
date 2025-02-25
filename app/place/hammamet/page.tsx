"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Search, Camera, UserPlus } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"

export default function HammametPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const hammamet = tunisiaData.coastal.governorates
    .find((gov) => gov.name === "Nabeul")
    ?.places.find((place) => place.name === "Hammamet")

  if (!hammamet) {
    return <div>Hammamet data not found</div>
  }

  const { attractions, restaurants } = hammamet.details

  const filteredAttractions = attractions.filter(
    (attraction) =>
      attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      attraction.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[50vh] w-full">
        <Image src={hammamet.image || "/placeholder.svg"} alt="Hammamet" fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-blue-500">Hammamet</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-transparent bg-clip-text">
              – A Jewel on the Mediterranean
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">{hammamet.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => setSelectedImage(hammamet.image)}
          >
            <Camera className="mr-2 h-4 w-4" /> Photo Gallery
          </Button>
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => window.open(`https://www.google.com/maps/place/Hammamet,+Tunisia`, "_blank")}
          >
            <MapPin className="mr-2 h-4 w-4" /> View on Map
          </Button>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Getting There</h2>
          <p>{hammamet.details.gettingThere}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Entrance Fees & Costs</h2>
          <p>{hammamet.details.entranceFees}</p>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-500">Featured Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAttractions.map((attraction, index) => (
            <Link key={index} href={`/place/hammamet/attraction/${attraction.name.toLowerCase().replace(/ /g, "-")}`}>
              <Card className="h-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="relative h-48">
                  <Image src={`/placeholder.svg`} alt={attraction.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-500">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{attraction.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-500">Nearby Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredRestaurants.map((restaurant, index) => (
            <Link key={index} href={`/place/hammamet/restaurant/${restaurant.name.toLowerCase().replace(/ /g, "-")}`}>
              <Card className="h-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="relative h-48">
                  <Image src={`/placeholder.svg`} alt={restaurant.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-500">{restaurant.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{restaurant.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-12">
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">
            <UserPlus className="mr-2 h-4 w-4" /> Find a Guide
          </Button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">User Comments</h2>
          {/* Add a comment form and display user comments here */}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black/90">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

