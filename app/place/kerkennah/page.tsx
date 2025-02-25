"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MapPin, Clock } from "lucide-react"

// Dummy data for Tunisia (Replace with actual data or import)
const tunisiaData = {
  coastal: {
    governorates: [
      {
        name: "Sfax",
        places: [
          {
            name: "Kerkennah",
            details: {
              restaurants: [
                {
                  name: "Restaurant Kerkennah",
                  description: "Delicious seafood with a view.",
                  priceRange: "$10-$30",
                },
                {
                  name: "Chez Chérif",
                  description: "Traditional Tunisian dishes.",
                  priceRange: "$5-$20",
                },
              ],
              beautifulSpots: [
                {
                  name: "Sidi Fredj Beach",
                  description: "A beautiful beach with clear water.",
                },
                {
                  name: "The Old Fortress",
                  description: "Historical site with stunning views.",
                },
              ],
            },
          },
        ],
      },
    ],
  },
}

export default function KerkennahPage() {
  const [commentText, setCommentText] = useState("")

  const comments = [
    {
      author: "Sarah",
      text: "Beautiful place! The blue and white architecture is stunning.",
      timeAgo: "about 1 year ago",
    },
    {
      author: "Ahmed",
      text: "I recommend visiting during sunset. The views are breathtaking!",
      timeAgo: "about 1 year ago",
    },
  ]

  const guides = [
    {
      name: "Karim",
      specialty: "Historical Sites",
      languages: ["English", "Arabic", "French"],
      rating: 4.8,
    },
    {
      name: "Leila",
      specialty: "Local Culture & Cuisine",
      languages: ["English", "Arabic"],
      rating: 4.9,
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Kerkennah Islands</h1>
        <p className="text-xl mb-8">A tranquil archipelago known for traditional fishing and pristine beaches</p>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="relative h-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coucher-de-soleil-magique.jpg-JeaaENLek0n79qlfrmwcvpAzH3tiyP.jpeg"
              alt="Sunset in Kerkennah"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8c13c7c46063981dc7d70978c14bb293.jpg-jxIy5wBH2sGqYosmSxLBjnoLx3L6QU.jpeg"
              alt="Night fishing boats"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-64">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8123e6a0fe1dcb1887ffd55708fa775e.jpg-cU7vduWBldh8QxMAkYIq6Ojgh74N72.jpeg"
              alt="Traditional boats"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Quick Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>20-30 mins from Sfax by ferry</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Best time: March-May, September-November</span>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="restaurants" className="space-y-8">
          <TabsList>
            <TabsTrigger value="restaurants">Local Foods</TabsTrigger>
            <TabsTrigger value="spots">Beautiful Spots</TabsTrigger>
            <TabsTrigger value="tips">Visitor Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="restaurants">
            <div className="grid gap-6">
              {tunisiaData.coastal.governorates[0].places[0].details.restaurants.map((restaurant, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{restaurant.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{restaurant.description}</p>
                    <p className="text-primary mt-2">{restaurant.priceRange}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spots">
            <div className="grid gap-6">
              {tunisiaData.coastal.governorates[0].places[0].details.beautifulSpots.map((spot, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{spot.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{spot.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          <div className="mb-6">
            <Input
              placeholder="Share your experience..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="mb-2"
            />
            <Button>Post Comment</Button>
          </div>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-muted-foreground text-sm">{comment.timeAgo}</span>
                  </div>
                  <p>{comment.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Find a Guide Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Find a Local Guide</h2>
          <div className="grid gap-4">
            {guides.map((guide, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{guide.name}</h3>
                      <p className="text-sm text-muted-foreground">{guide.specialty}</p>
                      <div className="flex gap-2 mt-1">
                        {guide.languages.map((lang) => (
                          <span key={lang} className="text-xs bg-primary/10 px-2 py-1 rounded">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-primary font-semibold">★ {guide.rating}</div>
                      <Button size="sm" className="mt-2">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

