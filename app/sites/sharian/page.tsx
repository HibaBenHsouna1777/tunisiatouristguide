"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Compass } from "lucide-react"

const sharianSites = [
  { name: "Grand Erg Oriental", description: "Vast sea of sand dunes in the Sahara" },
  { name: "Chott el Djerid", description: "Largest salt lake in North Africa" },
  { name: "Ksar Ghilane", description: "Desert oasis with hot springs" },
  { name: "Douz", description: "Gateway to the Sahara, known as the 'Door of the Desert'" },
]

export default function SharianSitesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Sharian Sites</h1>
      <p className="text-xl text-white mb-8">Discover the vast dunes and oases of Tunisia's desert landscapes</p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {sharianSites.map((site, index) => (
          <Link key={index} href={`/sites/sharian/${site.name.toLowerCase().replace(/ /g, "-")}`}>
            <Card className="h-full transition-transform hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-500">
                  <Compass className="h-5 w-5" />
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

