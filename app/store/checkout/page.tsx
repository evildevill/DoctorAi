"use client"

import type React from "react"

import { useState } from "react"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, ChevronLeft, ShieldCheck, MapPin, CreditCardIcon, Truck } from "lucide-react"
import { useRouter } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + shipping

  if (items.length === 0) {
    router.push("/store")
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      clearCart()
      router.push("/store/payment-success")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6 flex items-center text-slate-600" onClick={() => router.back()}>
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Cart
      </Button>

      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-bold">Shipping Information</h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required className="mt-1" />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input id="zipCode" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Truck className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-bold">Shipping Method</h2>
                </div>

                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1">
                      <div className="font-medium">Standard Shipping</div>
                      <div className="text-sm text-slate-500">3-5 business days</div>
                    </Label>
                    <div>{shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}</div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-3">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="flex-1">
                      <div className="font-medium">Express Shipping</div>
                      <div className="text-sm text-slate-500">1-2 business days</div>
                    </Label>
                    <div>$12.99</div>
                  </div>
                </RadioGroup>
              </div>

              <div className="rounded-lg border bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CreditCardIcon className="h-5 w-5 text-indigo-600" />
                  <h2 className="text-lg font-bold">Payment Method</h2>
                </div>

                <Tabs defaultValue="card">
                  <TabsList className="w-full">
                    <TabsTrigger value="card" className="flex-1">
                      Credit Card
                    </TabsTrigger>
                    <TabsTrigger value="paypal" className="flex-1">
                      PayPal
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="card" className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-1" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input id="expiryDate" placeholder="MM/YY" required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required className="mt-1" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="nameOnCard">Name on Card</Label>
                      <Input id="nameOnCard" required className="mt-1" />
                    </div>
                  </TabsContent>
                  <TabsContent value="paypal" className="mt-4">
                    <div className="rounded-md border border-dashed p-6 text-center">
                      <p className="mb-4 text-slate-600">
                        You will be redirected to PayPal to complete your purchase securely.
                      </p>
                      <Button type="button" className="bg-[#0070ba]">
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.067 8.478c.492.88.694 1.934.57 3.213-.504 5.046-4.525 6.705-9.013 6.705h-.69a.906.906 0 0 0-.896.767l-.014.077-.641 4.061-.018.092a.906.906 0 0 1-.896.767H4.804a.563.563 0 0 1-.557-.647l2.04-12.954a.9.9 0 0 1 .891-.767h5.135c.075 0 .15.006.224.018 2.114.326 3.84 1.306 4.287 4.016.176 1.073.089 1.985-.17 2.734l.011-.005a3.19 3.19 0 0 0 3.402-3.324z"
                            fill="#fff"
                          />
                          <path
                            d="M18.819 3.174c.492.88.694 1.934.57 3.213-.504 5.046-4.525 6.705-9.013 6.705h-.69a.906.906 0 0 0-.896.767l-.014.077-.641 4.061-.018.092a.906.906 0 0 1-.896.767H3.556a.563.563 0 0 1-.557-.647l2.04-12.954a.9.9 0 0 1 .891-.767h5.135c.075 0 .15.006.224.018 2.114.326 3.84 1.306 4.287 4.016.176 1.073.089 1.985-.17 2.734l.011-.005a3.19 3.19 0 0 0 3.402-3.324z"
                            fill="#fff"
                          />
                        </svg>
                        Continue with PayPal
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Order
                      <CreditCard className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="rounded-lg border bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Order Summary</h2>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-slate-50">
                    <Image
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      width={64}
                      height={64}
                      priority
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium line-clamp-1">{item.product.name}</h3>
                    <div className="text-sm text-slate-500">
                      ${item.product.price.toFixed(2)} × {item.quantity}
                    </div>
                  </div>
                  <div className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Shipping</span>
                <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4" />
              <span>Secure checkout powered by Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
