"use client"

import { useCart } from "@/components/cart-provider"
import { CartItem } from "@/components/cart-item"
import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronLeft, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { items, itemCount, subtotal, clearCart } = useCart()
  const router = useRouter()

  const tax = subtotal * 0.08
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + shipping

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-slate-100 p-6">
              <ShoppingCart className="h-12 w-12 text-slate-400" />
            </div>
          </div>
          <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
          <p className="mb-8 text-slate-600">Looks like you haven&apos;t added any products to your cart yet.</p>
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

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6 flex items-center text-slate-600" onClick={() => router.back()}>
        <ChevronLeft className="mr-1 h-4 w-4" />
        Continue Shopping
      </Button>

      <h1 className="mb-8 text-3xl font-bold">
        Your Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border bg-white">
            <div className="p-6">
              {items.map((item) => (
                <div key={item.product.id}>
                  <CartItem item={item} />
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
            <div className="border-t p-4">
              <Button variant="outline" className="text-red-500 hover:bg-red-50 hover:text-red-600" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border bg-white p-6">
            <h2 className="mb-4 text-lg font-bold">Order Summary</h2>

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

            <div className="mt-6 text-xs text-slate-500">
              {shipping > 0 ? <p>Free shipping on orders over $50</p> : <p>Your order qualifies for free shipping!</p>}
            </div>

            <Button className="mt-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600" size="lg" asChild>
              <Link href="/store/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
