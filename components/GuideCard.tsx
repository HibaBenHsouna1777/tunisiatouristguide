import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface GuideCardProps {
  name: string
  expertise: string[]
  languages: string[]
  avatarUrl?: string
}

export default function GuideCard({ name, expertise, languages, avatarUrl }: GuideCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">Expertise: {expertise.join(", ")}</p>
        <p className="text-sm text-muted-foreground mb-4">Languages: {languages.join(", ")}</p>
        <Button asChild>
          <Link href={`/chat/${name.toLowerCase().replace(/ /g, "-")}`}>Start Chat</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

