"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Info, Camera, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import dynamic from "next/dynamic"
import type { SpecificLocation } from "@/data/tunisiaData"

const Map = dynamic(() => import("@/components/Map"), { ssr: false })

interface PlacePageProps {
  data: SpecificLocation
}

const PlacePage: React.FC<PlacePageProps> = ({ data }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <Link href="/cities-regions" className="text-blue-500 hover:underline mb-4 inline-block">
        <ArrowLeft className="inline-block mr-2" />
        Back to Cities & Regions
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-blue-500">{data.title}</h1>
      <p className="text-xl mb-8">{data.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-blue-500" />
              Getting There
            </CardTitle>
          </CardHeader>
          <CardContent>{data.practicalInfo.gettingThere}</CardContent>
        </Card>
        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-4 w-4 text-blue-500" />
              Entrance Fee
            </CardTitle>
          </CardHeader>
          <CardContent>{data.practicalInfo.entranceFee}</CardContent>
        </Card>
        <Card className="bg-gray-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-blue-500" />
              Guided Tours
            </CardTitle>
          </CardHeader>
          <CardContent>{data.practicalInfo.guidedTours}</CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <Button onClick={() => setIsGalleryOpen(true)} className="bg-blue-500 text-white">
          <Camera className="mr-2 h-4 w-4" />
          Photo Gallery
        </Button>
      </div>

      <div className="mb-8">
        <Map center={{ lat: data.coordinates[0], lng: data.coordinates[1] }} zoom={13} />
      </div>

      <Tabs defaultValue="attractions" className="mb-8">
        <TabsList className="bg-gray-800">
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="dining">{data.restaurants ? "Restaurants" : "Cafes"}</TabsTrigger>
        </TabsList>
        <TabsContent value="attractions">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.attractions.map((attraction, index) => (
              <Card key={index} className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-blue-500">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent>{attraction.description}</CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="dining">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(data.restaurants || data.cafes)?.map((place, index) => (
              <Card key={index} className="bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-blue-500">{place.name}</CardTitle>
                </CardHeader>
                <CardContent>{place.description}</CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="bg-black">
          <div className="grid grid-cols-2 gap-4">
            {data.gallery.map((img, index) => (
              <div
                key={index}
                className="relative h-64 cursor-pointer"
                onClick={() => setSelectedImage(`/images/${img}`)}
              >
                <Image src={`/images/${img}`} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="bg-black p-0">
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Full size image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default PlacePage

