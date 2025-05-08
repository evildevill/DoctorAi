"use client"

import { useEffect, useRef } from "react"
import { useChatbot } from "./chatbot-provider"
import { ChatMessage } from "./chat-message"
import { ChatInput } from "./chat-input"
import { TypingIndicator } from "./typing-indicator"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export function ChatContainer() {
  const { messages, isTyping, clearChat } = useChatbot()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  return (
    <div className="flex h-full flex-col rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b bg-white p-4">
        <div>
          <h2 className="text-lg font-semibold">Doctor AI Assistant</h2>
          <p className="text-sm text-slate-500">Ask me about your health concerns</p>
        </div>
        <Button variant="outline" size="sm" onClick={clearChat} className="text-slate-600">
          <RotateCcw className="mr-1 h-3 w-3" />
          Reset Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput />
    </div>
  )
}
