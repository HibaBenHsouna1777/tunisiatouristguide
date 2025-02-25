import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info } from "lucide-react"

interface AttractionCardProps {
  name: string
  description: string
  image: string
}

export default function AttractionCard({ name, description, image }: AttractionCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        <Button asChild>
          <Link href={`/attractions/${name.toLowerCase().replace(/ /g, "-")}`}>Learn More</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

