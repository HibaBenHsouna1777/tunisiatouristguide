"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Camera } from "lucide-react"
import { tunisiaData } from "@/data/tunisiaData"

export default function GovernoratePage() {
  const { name } = useParams()
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null)
  const [governorate, setGovernorate] = useState<any>(null)

  useEffect(() => {
    const fetchGovernorate = () => {
      const foundGovernorate = Object.values(tunisiaData)
        .flatMap((region) => region.governorates)
        .find((gov) => gov.name.toLowerCase().replace(/ /g, "-") === name)
      setGovernorate(foundGovernorate || null)
    }

    fetchGovernorate()
  }, [name])

  if (!governorate) {
    return <div className="container mx-auto px-4 py-8">Governorate not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 gradient-text">{governorate.name} Governorate</h1>
      <p className="text-xl mb-8">{governorate.description}</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {governorate.places.map((place: any, index: number) => (
          <Card key={index} className="overflow-hidden group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#2AB3C0]" />
                {place.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{place.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <Button variant="outline" onClick={() => setSelectedPlace(place.name)}>
                  Learn More
                </Button>
                <Link href={`/place/${place.name.toLowerCase().replace(/ /g, "-")}`}>
                  <Button variant="ghost">
                    <Camera className="h-5 w-5 mr-2" />
                    View Gallery
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedPlace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedPlace}</h2>
            <p className="mb-4">{governorate.places.find((place: any) => place.name === selectedPlace)?.description}</p>
            <Button onClick={() => setSelectedPlace(null)}>Close</Button>
          </div>
        </div>
      )}
    </div>
  )
}

