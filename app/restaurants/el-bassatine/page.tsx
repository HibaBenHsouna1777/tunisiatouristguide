import RestaurantTemplate from "@/components/templates/RestaurantTemplate"

export default function ElBassatinePage() {
  const restaurantData = {
    name: "Restaurant El Bassatine",
    description: "Traditional Tunisian specialties in a welcoming atmosphere near the Oudna archaeological site.",
    menu: [
      "Couscous with lamb and vegetables",
      "Grilled sea bream with harissa",
      "Brik à l'oeuf",
      "Tunisian salad",
      "Mint tea and assorted pastries",
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: {
      address: "Route de Oudna, Zaghouan, Tunisia",
      coordinates: { lat: 36.6167, lng: 10.1833 },
    },
  }

  return <RestaurantTemplate {...restaurantData} />
}

