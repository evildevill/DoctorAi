"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { getProductById } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, ChevronLeft, Pill, AlertCircle, Check, Minus, Plus } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import Link from "next/link"
import { toast } from "sonner"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { addItem } = useCart()
  const [product] = useState(getProductById(params.productId as string))
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!product) {
      router.push("/store")
    }
  }, [product, router])

  if (!product) {
    return null
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast("Added to cart")
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" className="mb-6 flex items-center text-slate-600" onClick={() => router.back()}>
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Store
      </Button>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <div className="aspect-square overflow-hidden rounded-md bg-slate-50">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} width={300} height={300} className="h-full w-full object-cover" />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center gap-2">
            {product.prescription && (
              <Badge variant="outline" className="border-amber-500 text-amber-500">
                Prescription Required
              </Badge>
            )}
            <Badge variant="outline" className="border-indigo-500 text-indigo-500">
              {product.category}
            </Badge>
          </div>

          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>

          <div className="mb-4 flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-slate-500">({product.reviews} reviews)</span>
          </div>

          <p className="mb-6 text-lg text-slate-600">{product.description}</p>

          <div className="mb-6 text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</div>

          {product.inStock ? (
            <div className="mb-6 flex items-center gap-2 text-green-600">
              <Check className="h-5 w-5" />
              <span>In Stock</span>
            </div>
          ) : (
            <div className="mb-6 flex items-center gap-2 text-red-600">
              <AlertCircle className="h-5 w-5" />
              <span>Out of Stock</span>
            </div>
          )}

          {!product.prescription && product.inStock && (
            <div className="mb-6">
              <div className="mb-2 font-medium">Quantity</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-md border">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-r-none" onClick={decreaseQuantity}>
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <div className="w-12 text-center">{quantity}</div>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-l-none" onClick={increaseQuantity}>
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.prescription || !product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.prescription ? "Requires Prescription" : product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/store/cart">View Cart</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="dosage">Dosage & Usage</TabsTrigger>
            <TabsTrigger value="sideEffects">Side Effects</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="py-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Description</h3>
                <p className="text-slate-600">{product.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Category</h3>
                <p className="text-slate-600">{product.category}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="dosage" className="py-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-indigo-100 p-2">
                <Pill className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Recommended Dosage</h3>
                <p className="text-slate-600">
                  {product.dosage ||
                    "No specific dosage information available. Please consult with a healthcare professional before use."}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sideEffects" className="py-4">
            <div className="flex items-start gap-3">
              <div className="rounded-full bg-amber-100 p-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Possible Side Effects</h3>
                {product.sideEffects && product.sideEffects.length > 0 ? (
                  <ul className="mt-2 list-inside list-disc space-y-1 text-slate-600">
                    {product.sideEffects.map((effect) => (
                      <li key={effect}>{effect}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600">
                    No specific side effects listed. All medications may cause side effects. Please consult with a
                    healthcare professional for more information.
                  </p>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
