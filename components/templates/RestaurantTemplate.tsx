import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, ArrowLeft } from "lucide-react"
import Map from "@/components/Map"

interface RestaurantProps {
  name: string
  description: string
  menu: string[]
  images: string[]
  location: {
    address: string
    coordinates: { lat: number; lng: number }
  }
}

export default function RestaurantTemplate({ name, description, menu, images, location }: RestaurantProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-4" asChild>
        <Link href="/historical-sites/oudna">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Oudna
        </Link>
      </Button>

      <h1 className="text-4xl font-bold mb-4">{name}</h1>
      <p className="text-xl mb-6">{description}</p>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Menu Highlights</h2>
          <ul className="list-disc pl-5 space-y-2">
            {menu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Address
              </CardTitle>
            </CardHeader>
            <CardContent>{location.address}</CardContent>
          </Card>
          <div className="mt-4 h-[200px] rounded-lg overflow-hidden">
            <Map center={location.coordinates} zoom={15} />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Food Images</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
            <Image src={image || "/placeholder.svg"} alt={`Dish ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

