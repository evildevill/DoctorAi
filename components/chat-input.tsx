"use client"

import { useState, useRef, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useChatbot } from "./chatbot-provider"
import type { QuickReply } from "@/lib/chatbot/types"

export function ChatInput() {
  const [message, setMessage] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const { sendMessage, quickReplies, isTyping } = useChatbot()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message.trim())
      setMessage("")
    }
  }

  const handleQuickReply = (reply: QuickReply) => {
    sendMessage(reply.value)
  }

  return (
    <div className="border-t bg-white p-4">
      {quickReplies && quickReplies.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickReply(reply)}
              disabled={isTyping}
              className="text-xs truncate max-w-[180px]"
            >
              {reply.text}
            </Button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          disabled={isTyping}
          className="flex-1"
        />
        <Button
          type="submit"
          size="icon"
          disabled={!message.trim() || isTyping}
          className="bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
    </div>
  )
}
