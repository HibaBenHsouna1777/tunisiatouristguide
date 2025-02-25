"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function SidiBouSaidPage() {
  const pageData = {
    name: "Sidi Bou Saïd",
    description: "Tunisia's iconic blue-and-white village perched above the Mediterranean Sea",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200053-EIHto6oDpl5XV7HfdoI1VkaJLE6yMa.png",
    galleryImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200053-EIHto6oDpl5XV7HfdoI1VkaJLE6yMa.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200112-DRzHJMoqrKr2fuS29VdZSw7qnE3ZnN.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200139-2SUiBKHL6wGMZwMc6aYiUkHSkCYSNp.png",
      // Add more gallery images here
    ],
    quickInfo: {
      distance: "20-30 mins from Tunis by taxi",
      bestTime: "March-May, September-November",
      entryFee: "Entry to Palace: ~10 TND",
    },
    guides: [
      {
        name: "Karim",
        avatar: "/placeholder.svg",
        rating: 4.8,
        languages: ["English", "Arabic", "French"],
        specialty: "Historical Sites",
      },
      {
        name: "Leila",
        avatar: "/placeholder.svg",
        rating: 4.9,
        languages: ["English", "Arabic"],
        specialty: "Local Culture & Cuisine",
      },
    ],
    restaurants: [
      {
        name: "Café des Nattes",
        type: "Traditional",
        description: "Iconic spot for mint tea and snacks under 10 TND",
        priceRange: "Budget: Under 10 TND",
      },
      {
        name: "Le Bon Vieux Temps",
        type: "Traditional Tunisian",
        description: "Traditional cuisine with mains 20-40 TND",
        priceRange: "Mid-Range: 20-40 TND",
      },
      {
        name: "Dar Zarrouk",
        type: "Upscale",
        description: "Upscale dining with sea views, set menus from 60 TND",
        priceRange: "Luxury: Set menus from 60 TND",
      },
      {
        name: "Au Bonheur",
        type: "Seafood",
        description: "Seafood specialties 30-50 TND",
        priceRange: "Mid-Range: 30-50 TND",
      },
    ],
    travelerPosts: [
      {
        author: "Maria",
        location: "Sidi Bou Said",
        content: "Spent a wonderful afternoon exploring the narrow streets. The local crafts are amazing!",
        images: [
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200053-EIHto6oDpl5XV7HfdoI1VkaJLE6yMa.png",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%E2%80%99%C3%A9cran%202025-02-16%20200112-DRzHJMoqrKr2fuS29VdZSw7qnE3ZnN.png",
        ],
        date: "2 days ago",
      },
    ],
  }

  return <LocationTemplate {...pageData} />
}

