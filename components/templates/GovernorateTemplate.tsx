import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import AttractionCard from "@/components/AttractionCard"
import RestaurantCard from "@/components/RestaurantCard"

interface GovernorateProps {
  name: string
  featuredSite: {
    name: string
    description: string
    image: string
    attractions: Array<{ name: string; description: string; image: string }>
    restaurants: Array<{ name: string; description: string; image: string }>
  }
  nearbySites: Array<{ name: string; description: string; image: string }>
}

export default function GovernorateTemplate({ name, featuredSite, nearbySites }: GovernorateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{name} Governorate</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Featured Site: {featuredSite.name}</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              {featuredSite.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>{featuredSite.description}</p>
            <Link
              href={`/historical-sites/${featuredSite.name.toLowerCase().replace(/ /g, "-")}`}
              className="text-primary hover:underline mt-2 inline-block"
            >
              Learn more
            </Link>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold mb-4">Attractions</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {featuredSite.attractions.map((attraction, index) => (
            <AttractionCard key={index} {...attraction} />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mb-4">Restaurants</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {featuredSite.restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Nearby Sites</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nearbySites.map((site, index) => (
            <AttractionCard key={index} {...site} />
          ))}
        </div>
      </section>
    </div>
  )
}

