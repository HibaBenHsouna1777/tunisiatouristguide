"use client"

import LocationTemplate from "@/components/templates/LocationTemplate"

export default function OuedZitounPage() {
  const ouedZitounData = {
    name: "Oued Zitoun",
    title: "واد زيتون (Oued Zitoun) - Natural Paradise",
    overview:
      "A picturesque natural site featuring a river with lush greenery surrounding it. It's a perfect destination for nature lovers and hikers, offering a serene escape with scenic views.",
    mainImage: "/placeholder.svg",
    additionalImages: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    gettingThere: "Located in غزالة, Governorate of Bizerte, Northern Tunisia. Accessible by road.",
    coordinates: {
      lat: 37.1667,
      lng: 9.8667,
    },
    attractions: [
      {
        name: "River Trail",
        description: "A scenic walking path along the river, perfect for nature photography and peaceful walks.",
        image: "/placeholder.svg",
      },
      {
        name: "Greenery Area",
        description: "Lush vegetation and peaceful spots ideal for picnics and relaxation.",
        image: "/placeholder.svg",
      },
      {
        name: "Hiking Routes",
        description: "Various hiking trails of different difficulty levels through the natural landscape.",
        image: "/placeholder.svg",
      },
    ],
    restaurants: [
      {
        name: "Local Cafés",
        description: "Traditional cafés in nearby towns serving local refreshments",
        cuisine: "Traditional Tunisian",
        priceRange: "5-15 TND per person",
        image: "/placeholder.svg",
      },
    ],
    visitorTips: [
      "Best visited during spring when the vegetation is most vibrant",
      "Bring comfortable hiking shoes and water",
      "Consider hiring a local guide for the best experience",
      "Pack a picnic as facilities are limited on-site",
      "Visit early morning for the best photography opportunities",
      "Check weather conditions before visiting",
      "Respect the natural environment and take all trash with you",
    ],
  }

  return <LocationTemplate {...ouedZitounData} />
}

