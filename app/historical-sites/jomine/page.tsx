"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function JominePage() {
  const jomineData = {
    name: "Jomine",
    title: "Jomine – A Journey Through History and Beauty",
    overview:
      "Jomine, a town rich in both history and natural beauty, offers a peaceful escape filled with ancient ruins, scenic landscapes, and local craftsmanship. Its close proximity to the Mediterranean coastline makes it a perfect destination for history enthusiasts and nature lovers alike.",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    gettingThere: "Accessible by car from major cities. Public transportation options available.",
    coordinates: {
      lat: 37.2139,
      lng: 9.9183,
    },
    attractions: [
      {
        name: "Roman Ruins of Utica",
        description:
          "Ancient Roman ruins featuring remains of temples, baths, and an ancient theater. One of the first Roman colonies in Africa.",
        image: "/placeholder.svg",
      },
      {
        name: "Medina of Jomine",
        description:
          "A charming historic quarter showcasing traditional Tunisian architecture, winding alleyways, and local markets.",
        image: "/placeholder.svg",
      },
      {
        name: "Fortified Citadel of Jomine",
        description:
          "A historic citadel offering panoramic views of the town and its surroundings, dating back to early Muslim conquests.",
        image: "/placeholder.svg",
      },
      {
        name: "Plage de Jomine",
        description: "A serene beach with golden sands and turquoise waters, ideal for relaxation and swimming.",
        image: "/placeholder.svg",
      },
      {
        name: "Cap Jomine",
        description:
          "A rugged coastal point known for its scenic views and natural beauty, perfect for hiking and peaceful retreats.",
        image: "/placeholder.svg",
      },
    ],
    restaurants: [
      {
        name: "Restaurant El Jomine",
        description: "Specializes in fresh, local seafood dishes and Tunisian delicacies",
        cuisine: "Seafood, Tunisian",
        priceRange: "25-45 TND per person",
        image: "/placeholder.svg",
      },
      {
        name: "Café de la Plage",
        description: "Mediterranean and Tunisian flavors, perfect for a light meal or coffee by the sea",
        cuisine: "Mediterranean, Tunisian",
        priceRange: "10-25 TND per person",
        image: "/placeholder.svg",
      },
    ],
    visitorTips: [
      "Explore the Roman Ruins of Utica early in the morning for the best light and fewer crowds",
      "Visit the Medina during late afternoon to experience the vibrant local life",
      "Bring comfortable walking shoes for exploring the historic sites",
      "Try local seafood specialties at Restaurant El Jomine",
      "Consider hiring a local guide for in-depth historical context",
      "Respect local customs and dress modestly when visiting religious sites",
      "Best time to visit beaches is during summer months (June-September)",
    ],
  }

  return <LocationTemplate {...jomineData} />
}

