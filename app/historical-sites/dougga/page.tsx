"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function DouggaPage() {
  const douggaData = {
    name: "Dougga",
    title: "Dougga / Thugga - UNESCO World Heritage Site",
    overview:
      "One of North Africa's best-preserved Roman cities, featuring remarkable ruins from Roman and Byzantine rule that showcase the grandeur of ancient architecture and urban planning.",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dougga-archaelogical-site2-zgwV0zr1DG7gWibjFvwHJ5Y3WEKefz.webp",
    additionalImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2f3e11563d14e658369ac4a3c7ab1ccd.jpg-zHcjQ57mEBJELY13HixKuPrLfoKq34.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dougga-panoramique-1.jpg-rTBG322PNpaS22GV7qTd8IH4t8j1S6.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dougga-22.jpg-Ty8DdxOFMiZdkH4mWpFLY2oBzFe34p.jpeg",
    ],
    gettingThere: "From Tunis: ~2.5h by car, or take a bus to Téboursouk then taxi",
    entranceFee: "8 TND",
    guidedTours: "20-30 TND",
    coordinates: {
      lat: 36.4225,
      lng: 9.2189,
    },
    attractions: [
      {
        name: "Capitol",
        description:
          "A well-preserved Roman temple dedicated to Jupiter, Juno, and Minerva. Majestic columns and an elevated podium dominate the site.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dougga-archaelogical-site2-zgwV0zr1DG7gWibjFvwHJ5Y3WEKefz.webp",
      },
      {
        name: "Theatre of Dougga",
        description:
          "A grand Roman amphitheater with stunning valley views, built in the 2nd century AD, seating over 3,500 spectators.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dougga-panoramique-1.jpg-rTBG322PNpaS22GV7qTd8IH4t8j1S6.jpeg",
      },
      {
        name: "Mausoleum of Ateban",
        description: "A unique Libyco-Punic structure, rare in North Africa. Symbol of pre-Roman Numidian culture.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2f3e11563d14e658369ac4a3c7ab1ccd.jpg-zHcjQ57mEBJELY13HixKuPrLfoKq34.jpeg",
      },
      {
        name: "Temple of Saturn",
        description:
          "A temple dedicated to Saturn, reflecting North African Roman religion. Notable for its partially preserved walls and columns.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dougga-22.jpg-Ty8DdxOFMiZdkH4mWpFLY2oBzFe34p.jpeg",
      },
      {
        name: "House of Trifolium",
        description:
          "A luxurious Roman villa featuring intricate mosaic floors. Represents the domestic life of ancient Dougga's elite.",
        image: "/placeholder.svg",
      },
    ],
    restaurants: [
      {
        name: "Restaurant El Bassatine",
        description: "Traditional Tunisian specialties in a welcoming atmosphere",
        cuisine: "Traditional Tunisian",
        priceRange: "20-35 TND per meal",
        image: "/placeholder.svg",
      },
      {
        name: "Café Dougga",
        description: "Cozy café perfect for a quick break after site visits",
        cuisine: "Café & Pastries",
        priceRange: "5-15 TND per person",
        image: "/placeholder.svg",
      },
      {
        name: "Dar El Ain",
        description: "Elegant restaurant with scenic valley views from the terrace",
        cuisine: "Regional Tunisian",
        priceRange: "30-50 TND per person",
        image: "/placeholder.svg",
      },
      {
        name: "Ain El Karma",
        description: "Authentic local experience with homemade dishes",
        cuisine: "Local Tunisian",
        priceRange: "15-25 TND per person",
        image: "/placeholder.svg",
      },
      {
        name: "Le Riad de Dougga",
        description: "Fine dining with a fusion of Tunisian and Mediterranean cuisine",
        cuisine: "Mediterranean Fusion",
        priceRange: "40-60 TND per person",
        image: "/placeholder.svg",
      },
    ],
    visitorTips: [
      "Best time to visit is early morning or late afternoon to avoid peak heat",
      "Wear comfortable walking shoes as the site is extensive",
      "Bring water and sun protection",
      "Guided tours are recommended to fully appreciate the historical context",
      "Allow at least 3-4 hours to explore the main attractions",
      "Photography is allowed throughout the site",
      "Consider visiting during spring or autumn for optimal weather",
    ],
  }

  return <LocationTemplate {...douggaData} />
}

