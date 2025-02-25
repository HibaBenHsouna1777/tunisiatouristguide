import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import type { Comment } from "@/types"

interface CommentCardProps {
  comment: Comment
}

export default function CommentCard({ comment }: CommentCardProps) {
  return (
    <Card className="bg-[#131B26] border-[#2A3544]">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={comment.author.avatar} />
            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-[#00FFF0]">{comment.author.name}</h3>
              <span className="text-sm text-gray-400">{comment.timestamp}</span>
            </div>
            <p className="mt-2 text-gray-200">{comment.content}</p>
            {comment.images && comment.images.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-4">
                {comment.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                    <Image src={image || "/placeholder.svg"} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

