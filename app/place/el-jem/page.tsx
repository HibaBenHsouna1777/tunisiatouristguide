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

export default function ElJemPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const elJem = tunisiaData.central.governorates
    .find((gov) => gov.name === "Mahdia")
    ?.places.find((place) => place.name === "El-Jem")

  if (!elJem) {
    return <div>El-Jem data not found</div>
  }

  const { attractions, restaurants } = elJem.details

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

  const galleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20Djem%20Tunisia-myRhckMx0WWnNt3I2gJtAlUopOmrBt.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b841ddf078cdd566337c18c258249ee8.jpg-MCDuKBh13SFGELQvM7bqxXiOV6bhWA.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wanderlust-7LxKtyv4eN9tPBNtB9vW04kCSMLPLf.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20c_Thysdrus%20(modern%20El-Djem,Tunisia)%20The%E2%80%A6-6p1EQBiIlm2GTwxIcTAoSjVR5ghr9x.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20Jam-yldc4hv4m3X6CDmWV0kxiIYhbGwVJk.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tunisia%20-%20El%20Djem%202013-vP7HtPSXunc0W6QTs5sPBwv6IaJlLU.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amphitheatre%20of%20El%20Jem-BnfQ9ROKfVveS4dftpvX6Ni6VgU3Tq.jpeg",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20Djem%20Tunisia-myRhckMx0WWnNt3I2gJtAlUopOmrBt.jpeg"
          alt="El-Jem Amphitheatre"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-blue-500">El-Jem</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-transparent bg-clip-text">
              – A Jewel of Roman Heritage
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-center">
            El-Jem is a historic town in the Governorate of Mahdia, Tunisia, renowned for its well-preserved Roman
            Amphitheatre, one of the best-preserved Colosseums in the world. Visitors can explore this ancient site,
            visit the nearby Musée d'El Jem, and enjoy local Tunisian cuisine, offering a blend of history and culture.
          </p>
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
            onClick={() => setSelectedImage(galleryImages[0])}
          >
            <Camera className="mr-2 h-4 w-4" /> Photo Gallery
          </Button>
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => window.open(`https://www.google.com/maps/place/El+Jem,+Tunisia`, "_blank")}
          >
            <MapPin className="mr-2 h-4 w-4" /> View on Map
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-500">Getting There</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{elJem.details.gettingThere}</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-500">Entrance Fees & Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{elJem.details.entranceFees}</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-500">Featured Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredAttractions.map((attraction, index) => (
            <Link
              key={index}
              href={`/place/el-jem/attraction/${attraction.name.toLowerCase().replace(/ /g, "-")}`}
              className="group"
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-500">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{attraction.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-blue-500">Nearby Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={index}
              href={`/place/el-jem/restaurant/${restaurant.name.toLowerCase().replace(/ /g, "-")}`}
              className="group"
            >
              <Card className="h-full bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
                <div className="relative h-48">
                  <Image src="/placeholder.svg" alt={restaurant.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-blue-500">{restaurant.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{restaurant.description}</p>
                  <p className="text-sm text-gray-400 mt-2">{restaurant.priceRange}</p>
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

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-500">Visitor Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input className="bg-gray-700 border-gray-600 text-white" placeholder="Share your experience..." />
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Post Comment</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black/90">
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {galleryImages.map((image, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-2 h-2 rounded-full p-0 bg-white/20"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

