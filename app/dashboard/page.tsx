"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("historical")

  const sites = {
    historical: [
      {
        title: "Carthage Ruins",
        description: "Ancient Phoenician and Roman ruins, UNESCO World Heritage site",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voyage%20Tunisie%20_%20vacances%20et%20s%C3%A9jour%20Tunisie%20(1)-yysxhULXam0AblVimeBgkMHzQrPFBW.jpeg",
      },
      // Add more historical sites
    ],
    sea: [
      {
        title: "Blue Lagoon",
        description: "Crystal clear waters perfect for swimming and diving",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D8%AA%D9%88%D9%86%D8%B3%20%D8%AA%D9%88%D9%86%D8%B3%D9%8A%D9%87%20Tunis%20Tunisia%20%F0%9F%87%B9%F0%9F%87%B3-11EMOR58j61lNY8cHZ65a9YSm7BOvE.jpeg",
      },
      // Add more sea sites
    ],
    saharan: [
      {
        title: "Sahara Desert Camp",
        description: "Experience magical sunsets and starlit nights in the desert",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Overnight%20Desert%20Camping%20in%20Tunisia_%20Embrace%20the%20Serenity!-WFfLMgC6QBYk7CKeQNOLQh5P0x44Tu.jpeg",
      },
      // Add more saharan sites
    ],
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Discover Tunisia</h1>

      <Tabs defaultValue="historical" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="historical">Historical Sites</TabsTrigger>
          <TabsTrigger value="sea">Sea Sites</TabsTrigger>
          <TabsTrigger value="saharan">Saharan Sites</TabsTrigger>
        </TabsList>

        {Object.entries(sites).map(([category, siteList]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {siteList.map((site, index) => (
                <Card key={index}>
                  <div
                    className="h-48 w-full relative"
                    style={{
                      backgroundImage: `url(${site.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {site.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{site.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Map Component Placeholder */}
      <div className="mt-12 h-[400px] rounded-xl bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Interactive Map Coming Soon</p>
      </div>
    </div>
  )
}

