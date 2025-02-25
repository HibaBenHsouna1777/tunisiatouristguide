"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Info, Utensils, Camera } from "lucide-react"
import CommentSection from "@/components/CommentSection"
import Map from "@/components/Map"

const oudnaData = {
  name: "Oudna / Uthina",
  overview:
    "A Roman city on a hill, significant for its historical importance and well-preserved ruins, including the Capitol, amphitheater, baths, and villas.",
  mainImage: "/placeholder.svg",
  gettingThere: "From Tunis: ~30 mins by car",
  entranceFee: "5-10 TND",
  guidedTours: "20-30 TND",
  coordinates: { lat: 36.6167, lng: 10.1833 },
  attractions: [
    {
      name: "Capitol",
      description:
        "A large Roman temple dedicated to Jupiter, Junon, and Minerva. Only the columns of the façade remain, but they give an impression of the original grandeur.",
      image: "/placeholder.svg",
    },
    {
      name: "Amphitheater",
      description:
        "An elliptical amphitheater with a capacity of 15,000 spectators, making it the third-largest in Tunisia after El Jem and Carthage.",
      image: "/placeholder.svg",
    },
    {
      name: "Baths of Trajan",
      description: "Large public baths with intricate heating systems (hypocausts) and mosaic floors.",
      image: "/placeholder.svg",
    },
    {
      name: "Villa des Laberii",
      description:
        "A grand villa with beautiful mosaics, including mythological themes and rural scenes from ancient Tunisia.",
      image: "/placeholder.svg",
    },
    {
      name: "House of Industrius",
      description: "A house with mosaics, including a famous depiction of Venus emerging from the sea.",
      image: "/placeholder.svg",
    },
  ],
  restaurants: [
    {
      name: "Restaurant El Bassatine",
      description: "Traditional Tunisian specialties like couscous, grilled meats.",
      image: "/placeholder.svg",
    },
    {
      name: "Café Oudna",
      description: "Cozy café serving mint tea and pastries.",
      image: "/placeholder.svg",
    },
    {
      name: "Le Riad de Oudna",
      description: "A fusion of Tunisian and Mediterranean cuisine with a scenic view of Oudna.",
      image: "/placeholder.svg",
    },
  ],
}

export default function OudnaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 gradient-text">{oudnaData.name}</h1>
      <p className="text-xl mb-6">{oudnaData.overview}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Getting There
            </CardTitle>
          </CardHeader>
          <CardContent>{oudnaData.gettingThere}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Entrance Fee
            </CardTitle>
          </CardHeader>
          <CardContent>{oudnaData.entranceFee}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" />
              Guided Tours
            </CardTitle>
          </CardHeader>
          <CardContent>{oudnaData.guidedTours}</CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attractions" className="space-y-8">
        <TabsList>
          <TabsTrigger value="attractions">Attractions</TabsTrigger>
          <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          <TabsTrigger value="map">Map</TabsTrigger>
        </TabsList>

        <TabsContent value="attractions">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {oudnaData.attractions.map((attraction, index) => (
              <Card
                key={index}
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    {attraction.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="restaurants">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {oudnaData.restaurants.map((restaurant, index) => (
              <Link
                key={index}
                href={`/restaurants/${restaurant.name.toLowerCase().replace(/ /g, "-")}`}
                className="group"
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      {restaurant.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{restaurant.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <div className="h-[400px] rounded-lg overflow-hidden">
            <Map center={oudnaData.coordinates} zoom={15} />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {oudnaData.attractions.map((attraction, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(attraction.image)}
            >
              <Image
                src={attraction.image || "/placeholder.svg"}
                alt={attraction.name}
                fill
                className="object-cover transition-transform hover:scale-110"
              />
            </div>
          ))}
        </div>
        <Button className="mt-4">
          <Camera className="mr-2 h-4 w-4" /> Expand Gallery
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

