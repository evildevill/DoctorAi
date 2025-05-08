"use client"

import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"
import { toast } from "sonner"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, 1)
    toast("Added to cart")
  }

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <Link href={`/store/${product.id}`} className="block overflow-hidden">
        <div className="aspect-square overflow-hidden bg-slate-50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="ml-1 text-xs text-slate-500">({product.reviews})</span>
          </div>
          {product.prescription && (
            <Badge variant="outline" className="border-amber-500 text-amber-500">
              Prescription
            </Badge>
          )}
        </div>
        <Link href={`/store/${product.id}`} className="block">
          <h3 className="mb-1 font-semibold line-clamp-1">{product.name}</h3>
        </Link>
        <p className="mb-3 text-sm text-slate-500 line-clamp-2">{product.description}</p>
        <div className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600"
          disabled={product.prescription || !product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.prescription ? "Requires Prescription" : product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  )
}
