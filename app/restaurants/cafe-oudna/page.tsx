import RestaurantTemplate from "@/components/templates/RestaurantTemplate"

export default function CafeOudnaPage() {
  const restaurantData = {
    name: "Café Oudna",
    description: "Cozy café serving mint tea and pastries with a view of the Oudna ruins.",
    menu: ["Tunisian mint tea", "Turkish coffee", "Baklava", "Kaak warka", "Makroudh"],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    location: {
      address: "Rue des Thermes, Oudna, Zaghouan, Tunisia",
      coordinates: { lat: 36.6167, lng: 10.1833 },
    },
  }

  return <RestaurantTemplate {...restaurantData} />
}

