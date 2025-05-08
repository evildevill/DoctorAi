import { cn } from "@/lib/utils"
import type { ChatMessage as ChatMessageType } from "@/lib/chatbot/types"
import { Stethoscope } from "lucide-react"

interface ChatMessageProps {
  message: ChatMessageType
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "bot"

  return (
    <div className={cn("flex w-full gap-3 py-2", isBot ? "justify-start" : "justify-end")}>
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
          <Stethoscope className="h-4 w-4" />
        </div>
      )}

      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] text-sm sm:text-base whitespace-pre-wrap",
          isBot ? "bg-slate-100 text-slate-800" : "bg-indigo-100 text-indigo-800",
        )}
      >
        {message.content}
      </div>

      {!isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-slate-200 text-slate-600 text-xs font-medium">
          You
        </div>
      )}
    </div>
  )
}
