import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import type { Attraction } from "@/types"

interface AttractionCardProps {
  attraction: Attraction
}

export default function AttractionCard({ attraction }: AttractionCardProps) {
  return (
    <Card className="overflow-hidden bg-[#131B26] border-[#2A3544] hover:border-[#00FFF0] transition-colors">
      <div className="relative h-48">
        <Image src={attraction.images[0] || "/placeholder.svg"} alt={attraction.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#00FFF0]">
          <MapPin className="h-5 w-5" />
          {attraction.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4 line-clamp-2">{attraction.description}</p>
        <Link href={`/attractions/${attraction.id}`}>
          <Button className="w-full bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90">Learn More</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

