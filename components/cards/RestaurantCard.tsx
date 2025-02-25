import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils } from "lucide-react"
import type { Restaurant } from "@/types"

interface RestaurantCardProps {
  restaurant: Restaurant
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Card className="overflow-hidden bg-[#131B26] border-[#2A3544] hover:border-[#00FFF0] transition-colors">
      <div className="relative h-48">
        <Image src={restaurant.images[0] || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#00FFF0]">
          <Utensils className="h-5 w-5" />
          {restaurant.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-2 line-clamp-2">{restaurant.description}</p>
        <p className="text-[#00FFF0] mb-4">{restaurant.priceRange}</p>
        <Link href={`/restaurants/${restaurant.id}`}>
          <Button className="w-full bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90">View Menu</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

