"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, ArrowLeft, Camera, Star } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"

export default function RestaurantPage() {
  const { name } = useParams()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [reviews, setReviews] = useState<Array<{ text: string; rating: number }>>([])

  const restaurant = tunisiaData.central.governorates
    .find((gov) => gov.name === "Mahdia")
    ?.places.find((place) => place.name === "El-Jem")
    ?.details.restaurants.find((rest) => rest.name.toLowerCase().replace(/ /g, "-") === name)

  useEffect(() => {
    // Simulating fetching reviews from Google Maps API
    setReviews([
      { text: "Great local cuisine and friendly service!", rating: 5 },
      { text: "Authentic Tunisian dishes, reasonable prices.", rating: 4 },
      { text: "Nice atmosphere and good food.", rating: 4 },
    ])
  }, [])

  if (!restaurant) {
    return <div>Restaurant not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/place/el-jem">
          <Button variant="outline" className="mb-6 text-blue-500 border-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to El-Jem
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-blue-500">{restaurant.name}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-lg mb-6">{restaurant.description}</p>
            <p className="text-blue-500 mb-6">Price Range: {restaurant.priceRange}</p>
            <Button
              variant="outline"
              className="bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setSelectedImage("/placeholder.svg")}
            >
              <Camera className="mr-2 h-4 w-4" /> View Photo Gallery
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <Image src="/placeholder.svg" alt={restaurant.name} fill className="object-cover rounded-lg" />
          </div>
        </div>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-500">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-500">Menu Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Traditional Tunisian Specialties</li>
              <li>Fresh Local Ingredients</li>
              <li>Daily Specials</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-500">Google Maps Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardContent className="py-4">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p>{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
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

