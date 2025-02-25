import { NextResponse } from "next/server"

const placeData = {
  matmata: {
    name: "Matmata",
    description:
      "A fascinating desert village famous for its unique troglodyte (cave) dwellings, used as filming locations for Star Wars.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/At%20Home%20in%20Tangier%20with%20Jamie%20Creel%20and%20Marco%20Scarani%20-%20Quintessence-etWVv3bcsFjs3Of89v36YfXG8n2xS8.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/78b495a2-e253-410f-88f7-3439c83baa88-kuDoiLkFrqxWOVpdfsWxJHr6bO1bkx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3ccc1745-9dcf-4b28-881a-62be886ae715-WhhFo9Rv1g0VBkJyVZpg6S7OoodzpT.jpeg",
    ],
    gettingThere: [
      { method: "Drive", details: "~7-hour drive (~500 km) from Tunis via A1 highway and C210 road." },
      { method: "Louage", details: "Shared taxi from Tunis to Gabès, then a local taxi to Matmata (~50 TND)." },
    ],
    foods: [
      { name: "Berber Couscous", description: "Traditional semolina dish with lamb or vegetables." },
      { name: "Tabouna Bread", description: "Handmade and baked in clay ovens." },
    ],
    restaurants: [
      { name: "Hotel Sidi Driss", description: "Authentic Berber meals", priceRange: "Budget: Meals under 20 TND" },
      { name: "Auberge de Matmata", description: "Cave-style dining", priceRange: "Luxury: Set menus from 50 TND" },
    ],
    beautifulSpots: [
      { name: "Troglodyte Homes", description: "Explore the unique underground architecture." },
      { name: "Hotel Sidi Driss", description: "Visit the Star Wars filming location." },
    ],
    tips: [
      { tip: "Best Time to Visit", description: "Spring (March–May) or fall (September–November)." },
      { tip: "Dress Code", description: "Light clothing, but bring a scarf or hat for sun protection." },
    ],
    souvenirs: ["Handwoven Berber rugs and blankets", "Traditional pottery and desert-themed souvenirs"],
  },
  "amphitheatre-of-el-djem": {
    name: "Amphitheatre of El Djem",
    description: "A UNESCO World Heritage site and one of the best-preserved Roman coliseums in the world.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f04604d-1686-4cc8-b848-036a92de381c-89Yg0TSgq1jA58L3zZQpzg2jrCud2F.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/060f4646-5f47-48d1-80b5-0a32e05c608e-abdU5Ox2JkDWEVJqYw3wfZ4VHpOWZ0.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f47f37d5-6f45-4d04-9ba7-dc320d336ef3-bPCRIMwf2DKYEpasjemkAzBZMx7UWy.jpeg",
    ],
    gettingThere: [
      { method: "Drive", details: "~2.5-hour drive (~210 km) from Tunis." },
      { method: "Train", details: "~3-hour ride (~15 TND) from Tunis." },
    ],
    foods: [
      { name: "Merguez Sausages", description: "Spiced lamb or beef sausages." },
      { name: "Brik", description: "Crispy pastry with egg and tuna." },
    ],
    restaurants: [
      { name: "El Djem Restaurant", description: "Local Tunisian dishes", priceRange: "Budget: 15–25 TND per meal" },
      { name: "Le Coliseum", description: "Mediterranean fusion cuisine", priceRange: "Mid-Range: 30–50 TND per meal" },
    ],
    beautifulSpots: [
      { name: "The Amphitheatre", description: "Explore the ancient gladiator arena." },
      { name: "Underground Chambers", description: "Walk through the tunnels where fighters prepared for battle." },
    ],
    tips: [
      { tip: "Best Time to Visit", description: "Morning or late afternoon to avoid peak heat." },
      { tip: "Photography", description: "Best lighting for pictures is around sunrise or sunset." },
    ],
    souvenirs: ["Roman-style mosaics and artwork", "Handcrafted leather goods"],
  },
  chebba: {
    name: "Chebba",
    description: "A charming coastal town known for its stunning beaches and seafood.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voyage%20Tunisie%20_%20vacances%20et%20s%C3%A9jour%20Tunisie%20(1)-yysxhULXam0AblVimeBgkMHzQrPFBW.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AA%D9%88%D9%86%D8%B3%20%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D9%87%20Tunis%20Tunisia%20%F0%9F%87%B9%F0%9F%87%B3-11EMOR58j61lNY8cHZ65a9YSm7BOvE.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8e3a71b2-bdcd-4a7f-9286-15b414776425-8AnG8l3TFlfyGOVyzg0nTa34nkbRO7.jpeg",
    ],
    gettingThere: [
      { method: "Drive", details: "~3-hour drive (~250 km) from Tunis." },
      { method: "Bus/Louage", details: "~4-hour journey (~25 TND) from Tunis." },
    ],
    foods: [
      { name: "Grilled Octopus", description: "A local delicacy." },
      { name: "Lablabi", description: "Chickpea-based soup with harissa." },
    ],
    restaurants: [
      { name: "La Sirène", description: "Seafood specialties", priceRange: "Mid-Range: 25–40 TND per meal" },
      { name: "Le Bleu Marin", description: "Mediterranean cuisine", priceRange: "Luxury: 50+ TND per meal" },
    ],
    beautifulSpots: [
      { name: "Chebba Beach", description: "Crystal-clear waters, ideal for swimming." },
      { name: "Chebba Port", description: "A lively area with fresh seafood markets." },
    ],
    tips: [
      { tip: "Best Time to Visit", description: "Summer (June–September) for beach activities." },
      { tip: "Sun Protection", description: "Bring sunscreen and a hat." },
    ],
    souvenirs: ["Handmade jewelry and seashell crafts"],
  },
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")

  if (id) {
    const place = placeData[id as keyof typeof placeData]
    if (place) {
      return NextResponse.json(place)
    } else {
      return NextResponse.json({ error: "Place not found" }, { status: 404 })
    }
  } else {
    return NextResponse.json(placeData)
  }
}

