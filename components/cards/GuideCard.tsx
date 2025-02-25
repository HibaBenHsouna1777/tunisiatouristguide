import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MessageSquare } from "lucide-react"
import type { Guide } from "@/types"

interface GuideCardProps {
  guide: Guide
  onStartChat: (guideId: string) => void
}

export default function GuideCard({ guide, onStartChat }: GuideCardProps) {
  return (
    <Card className="bg-[#131B26] border-[#2A3544]">
      <CardHeader>
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={guide.avatar} />
            <AvatarFallback>{guide.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="flex items-center justify-between text-[#00FFF0]">
              {guide.name}
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 mr-1" />
                {guide.rating}
              </div>
            </CardTitle>
            <p className="text-sm text-gray-400">{guide.expertise.join(" • ")}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {guide.languages.map((lang) => (
            <span key={lang} className="px-2 py-1 text-xs rounded-full bg-[#2A3544] text-[#00FFF0]">
              {lang}
            </span>
          ))}
        </div>
        <Button className="w-full bg-[#00FFF0] text-black hover:bg-[#00FFF0]/90" onClick={() => onStartChat(guide.id)}>
          <MessageSquare className="h-4 w-4 mr-2" />
          Start Chat
        </Button>
      </CardContent>
    </Card>
  )
}

