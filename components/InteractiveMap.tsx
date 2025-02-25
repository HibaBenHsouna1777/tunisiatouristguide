"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { tunisiaData } from "@/data/tunisiaData"

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-muted flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

interface MapProps {
  center?: { lat: number; lng: number }
  zoom?: number
  showUserLocation?: boolean
}

export default function InteractiveMap({ center, zoom, showUserLocation }: MapProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    setIsMounted(true)

    if (showUserLocation && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting user location:", error)
        },
      )
    }
  }, [showUserLocation])

  const places = Object.values(tunisiaData).flatMap((region) =>
    region.governorates.flatMap((governorate) =>
      governorate.places.map((place) => ({
        name: place.name,
        lat: place.coordinates.lat,
        lng: place.coordinates.lng,
        type: place.type,
      })),
    ),
  )

  if (!isMounted) {
    return (
      <div className="h-[500px] w-full bg-muted flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    )
  }

  return <Map center={center || { lat: 34.0, lng: 9.0 }} zoom={zoom || 7} places={places} userLocation={userLocation} />
}

