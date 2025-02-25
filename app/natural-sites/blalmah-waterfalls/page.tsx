"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function BlalmahWaterfallsPage() {
  const blalmahData = {
    name: "Blalmah Waterfalls",
    title: "شلالات البلالمة (Blalmah Waterfalls) - Hidden Gem",
    overview:
      "A hidden natural gem featuring cascading waterfalls and a tranquil natural environment. Perfect for eco-tourism and nature photography, offering peaceful retreats and nature walks.",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    gettingThere:
      "Located in غزالة, Governorate of Bizerte, Northern Tunisia. Limited access - local guide recommended.",
    coordinates: {
      lat: 37.1833,
      lng: 9.8833,
    },
    attractions: [
      {
        name: "Main Waterfall",
        description: "The primary cascade offering stunning views and photo opportunities.",
        image: "/placeholder.svg",
      },
      {
        name: "Nature Reserve",
        description: "Protected area surrounding the waterfalls with diverse flora and fauna.",
        image: "/placeholder.svg",
      },
      {
        name: "Eco-Tourism Trail",
        description: "Marked path through the natural landscape leading to various viewpoints.",
        image: "/placeholder.svg",
      },
    ],
    restaurants: [
      {
        name: "Nearby Towns",
        description: "Restaurants and cafés available in surrounding towns",
        cuisine: "Local Tunisian",
        priceRange: "10-30 TND per person",
        image: "/placeholder.svg",
      },
    ],
    visitorTips: [
      "Best visited after rainfall when the waterfalls are most impressive",
      "Bring appropriate footwear for wet and slippery conditions",
      "Local guide recommended for safety and best experience",
      "Limited facilities on-site - come prepared",
      "Ideal for photography during morning hours",
      "Check seasonal accessibility before visiting",
      "Respect the protected environment",
    ],
  }

  return <LocationTemplate {...blalmahData} />
}

