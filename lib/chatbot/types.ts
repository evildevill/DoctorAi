export interface ChatMessage {
    id: string
    content: string
    role: "user" | "bot"
    timestamp: Date
  }
  
  export interface UserInfo {
    name?: string
    age?: number
    hasSharedInfo: boolean
  }
  
  export interface QuickReply {
    text: string
    value: string
  }
  