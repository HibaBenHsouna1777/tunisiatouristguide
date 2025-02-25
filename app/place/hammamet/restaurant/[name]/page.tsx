"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, ArrowLeft, Camera } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"

export default function RestaurantPage() {
  const { name } = useParams()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [reviews, setReviews] = useState<string[]>([])

  const restaurant = tunisiaData.coastal.governorates
    .find((gov) => gov.name === "Nabeul")
    ?.places.find((place) => place.name === "Hammamet")
    ?.details.restaurants.find((rest) => rest.name.toLowerCase().replace(/ /g, "-") === name)

  useEffect(() => {
    // Simulating fetching reviews from Google Maps API
    setReviews(["Great food and atmosphere!", "The service was excellent.", "Highly recommended for seafood lovers."])
  }, [])

  if (!restaurant) {
    return <div>Restaurant not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/place/hammamet">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hammamet
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-blue-500">{restaurant.name}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-lg mb-6">{restaurant.description}</p>
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

        <Card className="mb-8 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-500">Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
              <MapPin className="h-12 w-12 text-gray-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8 bg-gray-800">
          <CardHeader>
            <CardTitle className="text-blue-500">Menu Highlights</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Signature Dish 1</li>
              <li>Signature Dish 2</li>
              <li>Signature Dish 3</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Google Maps Reviews</h2>
          {reviews.map((review, index) => (
            <Card key={index} className="mb-4 bg-gray-800">
              <CardContent className="py-4">
                <p>{review}</p>
              </CardContent>
            </Card>
          ))}
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

