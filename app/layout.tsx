import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar"
import {Footer} from "@/components/footer"
import { CartProvider } from "@/components/cart-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Doctor AI - Healthcare Platform",
  description: "AI-powered healthcare platform for symptom analysis, doctor appointments, and medication",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
