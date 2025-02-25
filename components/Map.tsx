"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface MapProps {
  center: { lat: number; lng: number }
  zoom: number
  places: Array<{ name: string; lat: number; lng: number; type: string }>
  userLocation: { lat: number; lng: number } | null
}

export default function Map({ center, zoom, places, userLocation }: MapProps) {
  const router = useRouter()
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && !mapRef.current) {
      mapRef.current = L.map("map").setView([center.lat, center.lng], zoom)

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current)

      places.forEach((place) => {
        const marker = L.marker([place.lat, place.lng], { icon: createCustomIcon(place.type) }).addTo(mapRef.current!)

        marker.bindPopup(`
          <div class="text-center">
            <h3 class="font-bold">${place.name}</h3>
            <p class="text-sm text-gray-600">${place.type}</p>
            <button
              onclick="window.location.href='/place/${place.name.toLowerCase().replace(/ /g, "-")}'"
              class="mt-2 text-sm text-blue-600 hover:text-blue-800"
            >
              View Details
            </button>
          </div>
        `)
      })

      if (userLocation) {
        const userIcon = L.icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
          shadowSize: [41, 41],
        })

        L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
          .addTo(mapRef.current)
          .bindPopup("Your location")
          .openPopup()
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [center, zoom, places, userLocation])

  return <div id="map" style={{ height: "500px", width: "100%" }} />
}

function createCustomIcon(type: string) {
  let iconUrl = ""
  switch (type) {
    case "Historical":
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"
      break
    case "Cultural":
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png"
      break
    case "Museum":
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"
      break
    case "Nature":
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png"
      break
    default:
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png"
  }

  return L.icon({
    iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],
  })
}

