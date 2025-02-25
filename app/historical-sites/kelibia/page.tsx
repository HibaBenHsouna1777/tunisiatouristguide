"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function KelibiaPage() {
  const kelibiaData = {
    name: "Kelibia",
    title: "Kelibia (Cap Bon) – A Historic Coastal Destination",
    overview:
      "Located in the Cap Bon region, Kelibia is renowned for its white-sand beaches, historical significance, and beautiful landscapes. It's a perfect blend of cultural history, serene coastlines, and vibrant local life.",
    mainImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a0d775a7608397d6f2da18de347098b%20(1).jpg-5TvfNfXYfSTO51nBpmEL5LGyquw5Wx.jpeg",
    additionalImages: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1713518185625.jpg-aWVa5QEHtX8SnoF0sjRiCHz7DT1510.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2f04ef68-6fd6-486f-ae63-16aaabc094c0_1440x1439.jpg-ZMjV2Y82pkszDhC9ZBhAn7Cb5DSha9.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecwiepcjk8ohhlaanbaf-AWnr0n3kgKEq2ERukmiS6QYUINje2M.jpeg",
    ],
    gettingThere: "From Tunis: ~2 hours by car, or take a louage (shared taxi) from Tunis to Kelibia",
    entranceFee: "Fort: 5 TND",
    guidedTours: "15-25 TND",
    coordinates: {
      lat: 36.8486,
      lng: 11.0939,
    },
    attractions: [
      {
        name: "Fort de Kélibia",
        description:
          "A Byzantine fortress overlooking the Mediterranean, offering panoramic views of the coastline and town. The strategic location dates back to Roman times.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2a0d775a7608397d6f2da18de347098b%20(1).jpg-5TvfNfXYfSTO51nBpmEL5LGyquw5Wx.jpeg",
      },
      {
        name: "Plage de Kelibia",
        description:
          "Long sandy beach with crystal clear waters, perfect for swimming and relaxation. The beach features pristine white sand and excellent facilities.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1713518185625.jpg-aWVa5QEHtX8SnoF0sjRiCHz7DT1510.jpeg",
      },
      {
        name: "Fishing Port",
        description:
          "Tunisia's fourth-largest fishing port, known for its traditional fishing methods and fresh seafood. Experience the unique Lamparo night fishing technique.",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c13c7c46063981dc7d70978c14bb293.jpg-jxIy5wBH2sGqYosmSxLBjnoLx3L6QU.jpeg",
      },
    ],
    restaurants: [
      {
        name: "Le Marin",
        description: "Seafood restaurant with Mediterranean flavors and fresh local catch",
        cuisine: "Mediterranean Seafood",
        priceRange: "30-50 TND per person",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salade-fruits-de-mers.jpg-t4IYyFm5eIY2pZVD7PKy7a7LUW22pD.jpeg",
      },
      {
        name: "Café des Nattes",
        description: "Traditional café serving mint tea and local pastries with sea views",
        cuisine: "Traditional Tunisian",
        priceRange: "5-15 TND per person",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manaret.jpg-ZSAZT6CwzEbFydSo5APQQFpWVJD04V.jpeg",
      },
      {
        name: "Restaurant Le Phare",
        description: "Coastal dining with fresh seafood and panoramic views",
        cuisine: "Seafood",
        priceRange: "25-45 TND per person",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salade-fruits-de-mers.jpg-t4IYyFm5eIY2pZVD7PKy7a7LUW22pD.jpeg",
      },
    ],
    visitorTips: [
      "Best time to visit is during summer (June-September) for beach activities",
      "Visit the fortress during sunset for spectacular views",
      "Try the local seafood specialties, especially grilled fish",
      "Bring sun protection and comfortable walking shoes",
      "Consider visiting the morning fish market for a local experience",
      "Book accommodations in advance during peak season",
      "Local transport is limited - renting a car is recommended",
    ],
  }

  return <LocationTemplate {...kelibiaData} />
}

