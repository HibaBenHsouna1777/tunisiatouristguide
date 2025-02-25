"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const guides = {
  katrin: {
    name: "Katrin",
    expertise: ["Historical Sites", "Local Culture"],
    languages: ["English", "Arabic"],
    avatarUrl: "/placeholder.svg",
  },
  // Add other guides here
}

export default function ChatPage() {
  const { guideName } = useParams()
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState<Array<{ sender: string; message: string }>>([])

  const guide = guides[guideName as keyof typeof guides]

  const handleSendMessage = () => {
    if (message.trim()) {
      setChat([...chat, { sender: "You", message }])
      setMessage("")
      // Simulate guide response (replace with actual API call in a real app)
      setTimeout(() => {
        setChat((prev) => [
          ...prev,
          { sender: guide.name, message: "Thank you for your message. How can I assist you today?" },
        ])
      }, 1000)
    }
  }

  if (!guide) {
    return <div>Guide not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center mb-6">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={guide.avatarUrl} alt={guide.name} />
            <AvatarFallback>{guide.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{guide.name}</h1>
            <p className="text-sm text-muted-foreground">
              {guide.expertise.join(", ")} | {guide.languages.join(", ")}
            </p>
          </div>
        </div>
        <div className="bg-muted p-4 rounded-lg h-[400px] overflow-y-auto mb-4">
          {chat.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.sender === "You" ? "text-right" : ""}`}>
              <span className="font-semibold">{msg.sender}: </span>
              {msg.message}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  )
}

