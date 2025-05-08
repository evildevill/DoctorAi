"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export function ChatbotButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Don't show on the chatbot page
  if (pathname === "/chatbot") return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-64">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Need health advice?</h3>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setShowTooltip(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-slate-600 mb-3">Get instant medical information from our AI assistant</p>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600"
            onClick={() => router.push("/chatbot")}
          >
            Open Chatbot
          </Button>
        </div>
      )}

      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg bg-gradient-to-r from-violet-600 to-indigo-600"
        onClick={() => router.push("/chatbot")}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageSquare className="h-6 w-6" />
        <span className="sr-only">Open Medical Chatbot</span>
      </Button>
    </div>
  )
}
