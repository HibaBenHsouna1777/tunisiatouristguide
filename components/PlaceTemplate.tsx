"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Search, Camera, MapPin } from "lucide-react"
import Layout from "./Layout"

interface Attraction {
  name: string
  description: string
  image: string
}

interface Restaurant {
  name: string
  description: string
  cuisine: string
  priceRange: string
  image: string
}

interface PlaceTemplateProps {
  name: string
  description: string
  image: string
  attractions: Attraction[]
  restaurants: Restaurant[]
}

const PlaceTemplate: React.FC<PlaceTemplateProps> = ({ name, description, image, attractions, restaurants }) => {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Layout>
      <div className="relative h-[70vh] w-full">
        <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            <span className="text-blue-500">{name}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-center mb-8">{description}</p>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search attractions and restaurants..."
              className="w-full py-2 px-4 rounded-full bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            <Camera className="inline-block mr-2" /> Photo Gallery
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            <MapPin className="inline-block mr-2" /> View on Map
          </button>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-blue-500">Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">{attraction.name}</h3>
                <p className="text-gray-300">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold mb-6 text-blue-500">Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-500">{restaurant.name}</h3>
                <p className="text-gray-300 mb-2">{restaurant.description}</p>
                <p className="text-sm text-gray-400">Cuisine: {restaurant.cuisine}</p>
                <p className="text-sm text-gray-400">Price Range: {restaurant.priceRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PlaceTemplate

