"use client"

import type { CartItem as CartItemType } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "./cart-provider"
import Link from "next/link"
import Image from "next/image"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity } = item

  return (
    <div className="flex items-start gap-4 py-4">
      <Link href={`/store/${product.id}`} className="shrink-0">
        <div className="h-20 w-20 overflow-hidden rounded-md bg-slate-50">
          <Image 
          width={80}
          height={80}
          src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
        </div>
      </Link>
      <div className="flex-1 space-y-1">
        <Link href={`/store/${product.id}`}>
          <h3 className="font-medium">{product.name}</h3>
        </Link>
        <p className="text-sm text-slate-500 line-clamp-1">{product.description}</p>
        <div className="text-sm">
          ${product.price.toFixed(2)} × {quantity} ={" "}
          <span className="font-semibold">${(product.price * quantity).toFixed(2)}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center rounded-md border">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-r-none"
            onClick={() => updateQuantity(product.id, quantity - 1)}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="w-8 text-center">{quantity}</div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-l-none"
            onClick={() => updateQuantity(product.id, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
          onClick={() => removeItem(product.id)}
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  )
}
