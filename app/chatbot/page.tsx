import { ChatbotProvider } from "@/components/chatbot-provider"
import { ChatContainer } from "@/components/chat-container"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <NavBar />
      <main className="container mx-auto px-4 py-20 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Medical Chatbot
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              Get instant medical advice and information from our AI-powered assistant
            </p>
          </div>

          <div className="h-[600px] md:h-[700px]">
            <ChatbotProvider>
              <ChatContainer />
            </ChatbotProvider>
          </div>

          <div className="mt-8 text-center text-sm text-slate-500">
            <p>
              This chatbot provides general medical information and is not a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may
              have regarding a medical condition.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
