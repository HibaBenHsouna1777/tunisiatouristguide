"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, Building, Compass } from "lucide-react"
import InteractiveMap from "@/components/InteractiveMap"
import { tunisiaData } from "@/data/tunisiaData"

export default function CitiesRegionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)

  const filteredRegions = Object.entries(tunisiaData)
    .map(([key, region]) => ({
      ...region,
      governorates: region.governorates
        .map((governorate) => ({
          ...governorate,
          places: governorate.places.filter(
            (place) =>
              place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              place.description.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((governorate) => governorate.places.length > 0),
    }))
    .filter((region) => region.governorates.length > 0)

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 gradient-text">Explore Tunisia's Cities & Regions</h1>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10 bg-secondary/50 border-none"
            placeholder="Search cities and regions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="map" className="space-y-8">
          <TabsList className="inline-flex h-auto p-1 bg-secondary/50 rounded-full">
            <TabsTrigger
              value="map"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <MapPin className="h-4 w-4" />
              Interactive Map
            </TabsTrigger>
            <TabsTrigger
              value="list"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            >
              <Building className="h-4 w-4" />
              List View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-6">
            <div className="w-full max-w-4xl mx-auto">
              <InteractiveMap showUserLocation />
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-6">
            <div className="grid gap-8">
              {filteredRegions.map((region) => (
                <Card key={region.name} className="overflow-hidden card-hover">
                  <CardHeader className="gradient-bg text-white">
                    <CardTitle className="flex items-center gap-2">
                      <Compass className="h-6 w-6" />
                      {region.name} Tunisia
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {region.governorates.map((governorate) => (
                        <div key={governorate.name}>
                          <h3 className="text-xl font-semibold mb-4">{governorate.name} Governorate</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {governorate.places.map((place) => (
                              <Link
                                key={place.name}
                                href={`/place/${place.name.toLowerCase().replace(/ /g, "-")}`}
                                className="group"
                              >
                                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                                  <div className="relative h-48 overflow-hidden">
                                    <Image
                                      src={place.image || "/placeholder.svg"}
                                      alt={place.name}
                                      fill
                                      className="object-cover transition-transform group-hover:scale-105"
                                    />
                                  </div>
                                  <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                      <MapPin className="h-5 w-5 text-primary" />
                                      {place.name}
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="text-muted-foreground line-clamp-3">{place.description}</p>
                                  </CardContent>
                                </Card>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

