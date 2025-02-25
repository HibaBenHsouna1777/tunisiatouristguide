import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface CommentCardProps {
  username: string
  comment: string
  timestamp: string
  avatarUrl?: string
}

export default function CommentCard({ username, comment, timestamp, avatarUrl }: CommentCardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="flex items-start space-x-4 pt-6">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{username}</h4>
            <span className="text-sm text-muted-foreground">{timestamp}</span>
          </div>
          <p className="mt-1">{comment}</p>
        </div>
      </CardContent>
    </Card>
  )
}

