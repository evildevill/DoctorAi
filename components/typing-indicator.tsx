export function TypingIndicator() {
  return (
    <div className="flex w-full gap-3 py-2">
      <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.7 10.7a1 1 0 0 0-.3-.7 1 1 0 0 0-1.4 0l-5 5-5-5a1 1 0 0 0-1.4 0 1 1 0 0 0 0 1.4l5 5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.2-.2.3-.4.3-.7Z" />
        </svg>
      </div>
      <div className="rounded-lg px-4 py-2 bg-slate-100 text-slate-800">
        <div className="flex space-x-1">
          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></div>
          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
