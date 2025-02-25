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

  const attraction = tunisiaData.central.governorates
    .find((gov) => gov.name === "Mahdia")
    ?.places.find((place) => place.name === "El-Jem")
    ?.details.attractions.find((attr) => attr.name.toLowerCase().replace(/ /g, "-") === name)

  if (!attraction) {
    return <div>Attraction not found</div>
  }

  const galleryImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20Djem%20Tunisia-myRhckMx0WWnNt3I2gJtAlUopOmrBt.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b841ddf078cdd566337c18c258249ee8.jpg-MCDuKBh13SFGELQvM7bqxXiOV6bhWA.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wanderlust-7LxKtyv4eN9tPBNtB9vW04kCSMLPLf.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3rd%20c_Thysdrus%20(modern%20El-Djem,Tunisia)%20The%E2%80%A6-6p1EQBiIlm2GTwxIcTAoSjVR5ghr9x.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/El%20Jam-yldc4hv4m3X6CDmWV0kxiIYhbGwVJk.jpeg",
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/place/el-jem">
          <Button variant="outline" className="mb-6 text-blue-500 border-blue-500">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to El-Jem
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-blue-500">{attraction.name}</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-lg mb-6">{attraction.description}</p>
            <Button
              variant="outline"
              className="bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setSelectedImage(attraction.image)}
            >
              <Camera className="mr-2 h-4 w-4" /> View Photo Gallery
            </Button>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src={attraction.image || "/placeholder.svg"}
              alt={attraction.name}
              fill
              className="object-cover rounded-lg"
            />
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
            <CardTitle className="text-blue-500">Visitor Comments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Share your experience..."
                className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
              />
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

