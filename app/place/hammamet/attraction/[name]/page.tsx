"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, ArrowLeft, Camera } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"

export default function AttractionPage() {
  const { name } = useParams()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const attraction = tunisiaData.coastal.governorates
    .find((gov) => gov.name === "Nabeul")
    ?.places.find((place) => place.name === "Hammamet")
    ?.details.attractions.find((attr) => attr.name.toLowerCase().replace(/ /g, "-") === name)

  if (!attraction) {
    return <div>Attraction not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/place/hammamet">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Hammamet
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-blue-500">{attraction.name}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-lg mb-6">{attraction.description}</p>
            <Button
              variant="outline"
              className="bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setSelectedImage("/placeholder.svg")}
            >
              <Camera className="mr-2 h-4 w-4" /> View Photo Gallery
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <Image src="/placeholder.svg" alt={attraction.name} fill className="object-cover rounded-lg" />
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

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">Visitor Comments</h2>
          {/* Add a comment form and display visitor comments here */}
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

