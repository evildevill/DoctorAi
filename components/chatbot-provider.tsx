"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useRef, useCallback } from "react"
import type { ChatMessage, UserInfo, QuickReply } from "@/lib/chatbot/types"
import { initialMessages, botResponses, fallbackResponses, commonQuestions, commonSymptoms } from "@/lib/chatbot/data"

interface ChatbotContextType {
  messages: ChatMessage[]
  userInfo: UserInfo
  isTyping: boolean
  quickReplies: QuickReply[] | null
  sendMessage: (content: string) => void
  setUserName: (name: string) => void
  setUserAge: (age: number) => void
  clearChat: () => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [userInfo, setUserInfo] = useState<UserInfo>({ hasSharedInfo: false })
  const [isTyping, setIsTyping] = useState(false)
  const [quickReplies, setQuickReplies] = useState<QuickReply[] | null>(null)
  const nameAsked = useRef(false)
  const ageAsked = useRef(false)
  const chatbotStage = useRef<"greeting" | "askName" | "askAge" | "conversation">("greeting")

  // Generate a response based on user input
  const generateResponse = useCallback(
    (userMessage: string) => {
      const lowercaseMessage = userMessage.toLowerCase()

      // Handle expected responses during onboarding flow
      if (!userInfo.name && !nameAsked.current) {
        // First message should be the user's name
        const name = userMessage.trim()
        setUserInfo((prev) => ({ ...prev, name, hasSharedInfo: prev.hasSharedInfo || !!name }))
        nameAsked.current = true
        chatbotStage.current = "askAge"
        return {
          content: `Nice to meet you, ${name}! How old are you? This helps me provide more relevant health information.`,
          quickReplies: null,
        }
      } else if (!userInfo.age && nameAsked.current && !ageAsked.current) {
        // Second message should be the user's age
        const ageMatch = userMessage.match(/\d+/)
        if (ageMatch) {
          const age = Number.parseInt(ageMatch[0])
          setUserInfo((prev) => ({ ...prev, age, hasSharedInfo: true }))
          ageAsked.current = true
          chatbotStage.current = "conversation"
          return {
            content: `Thank you, ${userInfo.name}! I now know you're ${age} years old. How can I help you today?`,
            quickReplies: [...commonSymptoms, ...commonQuestions],
          }
        } else {
          return {
            content:
              "I need your age as a number to provide better assistance. Could you please tell me how old you are?",
            quickReplies: null,
          }
        }
      }

      // Main conversation flow - check for matches in predefined responses
      for (const item of botResponses) {
        if (item.keywords.some((keyword) => lowercaseMessage.includes(keyword.toLowerCase()))) {
          return {
            content: `${item.response}${item.followUp ? `\n\n${item.followUp}` : ""}`,
            quickReplies: item.quickReplies || null,
          }
        }
      }

      // Fallback response if no matches
      return {
        content: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        quickReplies: [...commonSymptoms, ...commonQuestions],
      }
    },
    [userInfo],
  )

  // Send a message and get a response
  const sendMessage = useCallback(
    (content: string) => {
      if (!content.trim()) return

      // Add user message
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        content,
        role: "user",
        timestamp: new Date(),
      }

      setMessages((prevMessages) => [...prevMessages, userMessage])

      // Show typing indicator
      setIsTyping(true)
      setQuickReplies(null)

      // Simulate thinking time and then respond
      setTimeout(
        () => {
          const { content: responseContent, quickReplies: respQuickReplies } = generateResponse(content)

          const botMessage: ChatMessage = {
            id: `bot-${Date.now()}`,
            content: responseContent,
            role: "bot",
            timestamp: new Date(),
          }

          setMessages((prevMessages) => [...prevMessages, botMessage])
          setIsTyping(false)
          setQuickReplies(respQuickReplies)
        },
        1000 + Math.random() * 1000,
      ) // Random delay between 1-2 seconds
    },
    [generateResponse],
  )

  // Handle user name setter
  const setUserName = useCallback((name: string) => {
    setUserInfo((prev) => ({ ...prev, name, hasSharedInfo: prev.hasSharedInfo || !!name }))
    nameAsked.current = true
  }, [])

  // Handle user age setter
  const setUserAge = useCallback((age: number) => {
    setUserInfo((prev) => ({ ...prev, age, hasSharedInfo: true }))
    ageAsked.current = true
  }, [])

  // Clear chat history and reset state
  const clearChat = useCallback(() => {
    setMessages(initialMessages)
    setUserInfo({ hasSharedInfo: false })
    nameAsked.current = false
    ageAsked.current = false
    chatbotStage.current = "greeting"
    setQuickReplies(null)
  }, [])

  // Load chat from localStorage when component mounts
  useEffect(() => {
    const loadedChat = localStorage.getItem("doctorAiChat")
    const loadedUserInfo = localStorage.getItem("doctorAiUserInfo")

    if (loadedChat) {
      try {
        const parsedMessages = JSON.parse(loadedChat)
        // Convert string timestamps back to Date objects
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))

        setMessages(messagesWithDates)
      } catch (error) {
        console.error("Failed to parse saved chat:", error)
      }
    }

    if (loadedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(loadedUserInfo)
        setUserInfo(parsedUserInfo)
        if (parsedUserInfo.name) nameAsked.current = true
        if (parsedUserInfo.age) ageAsked.current = true

        // Set proper stage based on loaded user info
        if (parsedUserInfo.name && parsedUserInfo.age) {
          chatbotStage.current = "conversation"
          setQuickReplies([...commonSymptoms, ...commonQuestions])
        } else if (parsedUserInfo.name) {
          chatbotStage.current = "askAge"
        }
      } catch (error) {
        console.error("Failed to parse saved user info:", error)
      }
    }
  }, [])

  // Save chat to localStorage when it changes
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("doctorAiChat", JSON.stringify(messages))
    }

    if (userInfo.hasSharedInfo) {
      localStorage.setItem("doctorAiUserInfo", JSON.stringify(userInfo))
    }
  }, [messages, userInfo])

  return (
    <ChatbotContext.Provider
      value={{
        messages,
        userInfo,
        isTyping,
        quickReplies,
        sendMessage,
        setUserName,
        setUserAge,
        clearChat,
      }}
    >
      {children}
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (context === undefined) {
    throw new Error("useChatbot must be used within a ChatbotProvider")
  }
  return context
}
