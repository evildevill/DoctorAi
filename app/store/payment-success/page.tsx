"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function PaymentSuccessPage() {
  const [orderNumber] = useState(`ORD-${Math.floor(100000 + Math.random() * 900000)}`)
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="rounded-full bg-green-100 p-6">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h1 className="mb-4 text-2xl font-bold">Payment Successful!</h1>
        <p className="mb-2 text-slate-600">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        <p className="mb-8 text-slate-600">
          Your order number is: <span className="font-medium">{orderNumber}</span>
        </p>

        <div className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-4 text-lg font-medium">Order Details</h2>
          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-slate-600">Order Number</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Date</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Payment Method</span>
              <span className="font-medium">Credit Card</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Shipping Method</span>
              <span className="font-medium">Standard Shipping</span>
            </div>
          </div>
        </div>

        <p className="mb-2 text-sm text-slate-500">A confirmation email has been sent to your email address.</p>
        <p className="mb-8 text-sm text-slate-500">You will be redirected to the store in {countdown} seconds.</p>

        <Button asChild className="bg-gradient-to-r from-violet-600 to-indigo-600">
          <Link href="/store">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  )
}
