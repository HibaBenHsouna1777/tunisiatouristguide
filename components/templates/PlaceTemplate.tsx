import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Info, Utensils, Camera, ArrowLeft, Share2 } from "lucide-react"
import CommentSection from "@/components/CommentSection"
import Map from "@/components/Map"
import type { Place } from "@/types"

export default function PlaceTemplate({ name, description, image, coordinates, details }: Place) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/cities-regions">
        <Button variant="outline" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cities & Regions
        </Button>
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-blue-500">{name}</h1>
      <p className="text-xl mb-6">{description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={600}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-500" />
                Practical Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Getting There:</strong> {details.gettingThere}
              </p>
              <p>
                <strong>Entrance Fee:</strong> {details.entranceFee}
              </p>
              <p>
                <strong>Guided Tours:</strong> {details.guidedTours}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="attractions" className="space-y-8">
        <TabsList>
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
        </TabsList>

        <TabsContent value="attractions">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {details.attractions.map((attraction, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    {attraction.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="restaurants">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {details.restaurants.map((restaurant, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Utensils className="h-5 w-5 text-blue-500" />
                    {restaurant.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{restaurant.description}</p>
                  <p className="text-sm text-gray-500 mt-2">{restaurant.priceRange}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map
              center={{ lat: coordinates.lat, lng: coordinates.lng }}
              zoom={13}
              places={[
                { name, lat: coordinates.lat, lng: coordinates.lng, type: "attraction" },
                ...details.attractions.map((attr) => ({
                  ...attr,
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                  type: "attraction",
                })),
                ...details.restaurants.map((rest) => ({
                  ...rest,
                  lat: coordinates.lat,
                  lng: coordinates.lng,
                  type: "restaurant",
                })),
              ]}
              userLocation={null}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Button onClick={() => setSelectedImage(image)} className="mr-4">
          <Camera className="mr-2 h-4 w-4" /> View Gallery
        </Button>
        <Button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: name,
                text: description,
                url: window.location.href,
              })
            }
          }}
        >
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </div>

      <CommentSection initialComments={[]} />

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

