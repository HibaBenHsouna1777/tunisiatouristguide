"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

const elJemPhotos = [
  {
    src: "https://example.com/el-jem-1.jpg",
    alt: "El Jem Amphitheater exterior view",
  },
  {
    src: "https://example.com/el-jem-2.jpg",
    alt: "El Jem Amphitheater interior view",
  },
  {
    src: "https://example.com/el-jem-3.jpg",
    alt: "El Jem Amphitheater aerial view",
  },
  {
    src: "https://example.com/el-jem-4.jpg",
    alt: "El Jem Amphitheater at sunset",
  },
  {
    src: "https://example.com/el-jem-5.jpg",
    alt: "El Jem Amphitheater architectural details",
  },
]

export default function ElJemGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">El Jem Amphitheater Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {elJemPhotos.map((photo, index) => (
          <Card
            key={index}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setSelectedImage(photo.src)}
          >
            <CardContent className="p-2">
              <div className="relative aspect-square">
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover rounded-lg" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

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

