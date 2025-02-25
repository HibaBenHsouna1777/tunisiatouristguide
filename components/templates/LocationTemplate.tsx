"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Clock, Ticket, Info, Utensils, AlertTriangle, ArrowLeft, Share2, UserPlus } from "lucide-react"
import CommentSection from "@/components/CommentSection"

interface Attraction {
  name: string
  description: string
  image: string
}

interface Restaurant {
  name: string
  description: string
  cuisine: string
  priceRange: string
  image: string
}

interface LocationTemplateProps {
  name: string
  title: string
  overview: string
  mainImage: string
  additionalImages: string[]
  gettingThere: string
  entranceFee?: string
  guidedTours?: string
  attractions: Attraction[]
  restaurants: Restaurant[]
  visitorTips: string[]
  coordinates: {
    lat: number
    lng: number
  }
}

export default function LocationTemplate({
  name,
  title,
  overview,
  mainImage,
  additionalImages,
  gettingThere,
  entranceFee,
  guidedTours,
  attractions,
  restaurants,
  visitorTips,
  coordinates,
}: LocationTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const allImages = [mainImage, ...additionalImages]

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: name,
        text: overview,
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
          <Button variant="outline" className="flex items-center gap-2" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 gradient-text">{title}</h1>
            <p className="text-xl mb-6">{overview}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{gettingThere}</span>
              </div>
              {entranceFee && (
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-primary" />
                  <span>Entrance Fee: {entranceFee}</span>
                </div>
              )}
              {guidedTours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Guided Tours: {guidedTours}</span>
                </div>
              )}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src={allImages[currentImageIndex] || "/placeholder.svg"} alt={name} fill className="object-cover" />
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

        {/* Main Content */}
        <Tabs defaultValue="attractions" className="space-y-8">
          <TabsList>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="tips">Visitor Tips</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          <TabsContent value="attractions">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {attractions.map((attraction, index) => (
                <Card
                  key={index}
                  className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.name}
                      fill
                      className="object-cover"
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
              {restaurants.map((restaurant, index) => (
                <Card
                  key={index}
                  className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={restaurant.image || "/placeholder.svg"}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      {restaurant.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{restaurant.description}</p>
                    <p className="text-sm text-primary mt-2">{restaurant.cuisine}</p>
                    <p className="text-sm text-muted-foreground">{restaurant.priceRange}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {visitorTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-primary mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
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
                    alt={`${name} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Find a Guide Section */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5" />
                Find a Local Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Enhance your visit with a knowledgeable local guide who can share detailed historical context and hidden
                stories about {name}.
              </p>
              <Button className="w-full sm:w-auto">
                <UserPlus className="mr-2 h-4 w-4" />
                Connect with a Guide
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection initialComments={[]} />
        </div>

        {/* Image Viewer Dialog */}
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
    </div>
  )
}

