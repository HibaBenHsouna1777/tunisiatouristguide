"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Clock, Ticket, ArrowLeft, Camera } from "lucide-react"
import CommentCard from "@/components/cards/CommentCard"
import Map from "@/components/Map"

// This would come from your data source
const mockAttraction = {
  id: "capitol",
  name: "Capitol of Oudna",
  description: "Large Roman temple dedicated to Jupiter, Juno, and Minerva...",
  images: ["https://example.com/capitol1.jpg", "https://example.com/capitol2.jpg", "https://example.com/capitol3.jpg"],
  location: {
    lat: 36.4225,
    lng: 9.2189,
  },
  details: {
    entranceFee: "8 TND",
    openingHours: "8:00 AM - 5:30 PM",
    bestTimeToVisit: "Early morning or late afternoon",
  },
  comments: [
    {
      id: "1",
      author: {
        name: "Sarah",
        avatar: "/placeholder.svg",
      },
      content: "Beautiful place! The architecture is stunning.",
      timestamp: "about 1 year ago",
    },
  ],
}

export default function AttractionPage() {
  const params = useParams()
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [showAllImages, setShowAllImages] = useState(false)

  const displayImages = showAllImages ? mockAttraction.images : mockAttraction.images.slice(0, 3)

  return (
    <div className="min-h-screen bg-[#0B0F15] text-white">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 text-[#00FFF0]" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-4 text-[#00FFF0]">{mockAttraction.name}</h1>
        <p className="text-gray-400 mb-8">{mockAttraction.description}</p>

        {/* Photo Gallery */}
        <Card className="bg-[#131B26] border-[#2A3544] mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[#00FFF0]">
              <Camera className="h-5 w-5" />
              Photo Gallery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video cursor-pointer rounded-lg overflow-hidden"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${mockAttraction.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            {mockAttraction.images.length > 3 && !showAllImages && (
              <Button
                className="mt-4 bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90"
                onClick={() => setShowAllImages(true)}
              >
                Expand Gallery
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Details */}
          <div className="lg:col-span-2">
            <Card className="bg-[#131B26] border-[#2A3544] mb-8">
              <CardHeader>
                <CardTitle className="text-[#00FFF0]">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#00FFF0]" />
                  <span>
                    Location coordinates: {mockAttraction.location.lat}, {mockAttraction.location.lng}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#00FFF0]" />
                  <span>{mockAttraction.details.openingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-[#00FFF0]" />
                  <span>Entrance Fee: {mockAttraction.details.entranceFee}</span>
                </div>
              </CardContent>
            </Card>

            {/* Comments */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#00FFF0]">Visitor Comments</h2>
              {mockAttraction.comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-1">
            <Card className="bg-[#131B26] border-[#2A3544]">
              <CardHeader>
                <CardTitle className="text-[#00FFF0]">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <Map
                    center={mockAttraction.location}
                    zoom={15}
                    markers={[
                      {
                        position: mockAttraction.location,
                        title: mockAttraction.name,
                      },
                    ]}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Viewer Dialog */}
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
    </div>
  )
}

