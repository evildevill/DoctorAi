"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, MessageSquare } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { usePathname } from "next/navigation"

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const pathname = usePathname()
  const isStoreActive = pathname?.startsWith("/store")
  const isChatbotActive = pathname?.startsWith("/chatbot")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Doctor AI
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              Features
            </Link>
            <Link
              href="/store"
              className={`font-medium transition-colors ${isStoreActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
            >
              Medical Store
            </Link>
            <Link
              href="/chatbot"
              className={`font-medium transition-colors ${isChatbotActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
            >
              Medical Chatbot
            </Link>
            <Link href="/#testimonials" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">
              Testimonials
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isStoreActive && (
              <Link href="/store/cart">
                <Button variant="outline" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                  {itemCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
            )}
            <Button variant="outline" className="font-medium">
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium">
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/#features"
              className="block text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/store"
              className={`block font-medium transition-colors ${isStoreActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Medical Store
            </Link>
            <Link
              href="/chatbot"
              className={`block font-medium transition-colors ${isChatbotActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Medical Chatbot
              </div>
            </Link>
            <Link
              href="/#testimonials"
              className="block text-slate-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            {isStoreActive && (
              <Link
                href="/store/cart"
                className="flex items-center text-slate-600 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart {itemCount > 0 && `(${itemCount})`}
              </Link>
            )}
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200">
              <Button variant="outline" className="w-full justify-center font-medium">
                Log In
              </Button>
              <Button className="w-full justify-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
