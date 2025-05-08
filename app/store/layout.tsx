import type React from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { CartProvider } from "../../components/cart-provider"
import { Toaster } from "@/components/ui/sonner"

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <NavBar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  )
}
