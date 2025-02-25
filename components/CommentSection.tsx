"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

interface CommentSectionProps {
  initialComments: Comment[]
}

export default function CommentSection({ initialComments }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: "Anonymous User",
        content: newComment,
        date: new Date().toLocaleDateString(),
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Comments</h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="mb-2"
        />
        <Button type="submit">Post Comment</Button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`} />
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="font-bold">{comment.author}</h4>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

