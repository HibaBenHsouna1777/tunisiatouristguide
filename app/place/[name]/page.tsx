"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Info, AlertTriangle, ArrowLeft, Share2, Clock, Ticket, Compass } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"
import CommentSection from "@/components/CommentSection"

interface Place {
  name: string
  description: string
  image: string
  additionalImages?: string[]
  coordinates: {
    lat: number
    lng: number
  }
  type: string
  details?: {
    entranceFee?: string
    guidedTours?: string
    openingHours?: string
    bestTimeToVisit?: string
    landmarks?: Array<{
      name: string
      description: string
    }>
    beaches?: Array<{
      name: string
      description: string
    }>
    activities?: string[]
  }
}

export default function PlacePage() {
  const { name } = useParams()
  const router = useRouter()
  const [place, setPlace] = useState<Place | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const fetchPlace = () => {
      const allPlaces = Object.values(tunisiaData).flatMap((region) => region.governorates.flatMap((gov) => gov.places))
      const foundPlace = allPlaces.find((p) => p.name.toLowerCase().replace(/ /g, "-") === name)
      setPlace(foundPlace || null)
    }

    fetchPlace()
  }, [name])

  if (!place) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  const allImages = [place.image, ...(place.additionalImages || [])]

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" className="flex items-center gap-2" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: place.name,
                text: place.description,
                url: window.location.href,
              })
            }
          }}
        >
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-4 gradient-text">{place.name}</h1>
          <p className="text-xl mb-6">{place.description}</p>

          {place.details && (
            <div className="space-y-4">
              {place.details.entranceFee && (
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-primary" />
                  <span>Entrance Fee: {place.details.entranceFee}</span>
                </div>
              )}
              {place.details.openingHours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Hours: {place.details.openingHours}</span>
                </div>
              )}
              {place.details.bestTimeToVisit && (
                <div className="flex items-center gap-2">
                  <Compass className="h-5 w-5 text-primary" />
                  <span>Best Time: {place.details.bestTimeToVisit}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={allImages[currentImageIndex] || "/placeholder.svg"}
            alt={place.name}
            fill
            className="object-cover"
          />
          {allImages.length > 1 && (
            <>
              <Button
                variant="ghost"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={handlePrevImage}
              >
                ←
              </Button>
              <Button
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                onClick={handleNextImage}
              >
                →
              </Button>
            </>
          )}
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-8">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          {place.details?.landmarks && <TabsTrigger value="landmarks">Landmarks</TabsTrigger>}
          {place.details?.activities && <TabsTrigger value="activities">Activities</TabsTrigger>}
        </TabsList>

        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                About {place.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">{place.description}</p>
              {place.details?.guidedTours && (
                <div className="mt-4">
                  <h3 className="font-semibold">Guided Tours</h3>
                  <p>{place.details.guidedTours}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gallery">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${place.name} - Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </TabsContent>

        {place.details?.landmarks && (
          <TabsContent value="landmarks">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {place.details.landmarks.map((landmark, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{landmark.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{landmark.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        )}

        {place.details?.activities && (
          <TabsContent value="activities">
            <Card>
              <CardHeader>
                <CardTitle>Available Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {place.details.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>

      <CommentSection initialComments={[]} />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-black/90">
          <Button
            variant="ghost"
            className="absolute right-4 top-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <AlertTriangle className="h-6 w-6" />
          </Button>
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

