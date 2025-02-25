"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from "lucide-react"

const naturalSites = [
  { name: "Ichkeul National Park", description: "UNESCO World Heritage site, important for migratory birds" },
  { name: "Bou Hedma National Park", description: "Home to diverse flora and fauna, including Saharan antelopes" },
  { name: "Zembra and Zembretta Islands", description: "Protected marine and terrestrial ecosystems" },
  { name: "Chaambi Mountain", description: "Highest mountain in Tunisia with diverse plant life" },
]

export default function NaturalSitesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Natural Sites</h1>
      <p className="text-xl text-white mb-8">Experience Tunisia's natural beauty and diverse ecosystems</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {naturalSites.map((site, index) => (
          <Link key={index} href={`/sites/natural/${site.name.toLowerCase().replace(/ /g, "-")}`}>
            <Card className="h-full transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-500">
                  <Leaf className="h-5 w-5" />
                  {site.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{site.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

