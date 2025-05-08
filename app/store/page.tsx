"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { SearchBar } from "@/components/search-bar"
import { categories, products, searchProducts } from "../../lib/products"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Filter } from "lucide-react"
import { useCart } from "../../components/cart-provider"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function StorePage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get("search")
  const categoryParam = searchParams.get("category")

  const [displayedProducts, setDisplayedProducts] = useState(products)
  const [activeCategory, setActiveCategory] = useState<string | null>(categoryParam)
  const { itemCount } = useCart()

  useEffect(() => {
    if (searchQuery) {
      setDisplayedProducts(searchProducts(searchQuery))
      setActiveCategory(null)
    } else if (categoryParam) {
      setDisplayedProducts(products.filter((product) => product.category === categoryParam))
      setActiveCategory(categoryParam)
    } else {
      setDisplayedProducts(products)
      setActiveCategory(null)
    }
  }, [searchQuery, categoryParam])

  const filterByCategory = (categoryId: string) => {
    if (activeCategory === categoryId) {
      setDisplayedProducts(products)
      setActiveCategory(null)
    } else {
      setDisplayedProducts(products.filter((product) => product.category === categoryId))
      setActiveCategory(categoryId)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Medical Store</h1>
          <p className="text-slate-600">Browse our selection of medications, supplements, and medical devices</p>
        </div>
        <div className="flex items-center gap-4">
          <SearchBar />
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
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={activeCategory === category.id ? "bg-indigo-600" : ""}
            onClick={() => filterByCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Mobile filter */}
      <div className="mb-6 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filter Products
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <div className="grid gap-4 py-4">
              <h3 className="text-lg font-medium">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={activeCategory === category.id ? "bg-indigo-600" : ""}
                    onClick={() => filterByCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {searchQuery && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Search results for: <span className="text-indigo-600">&quot;{searchQuery}&quot;</span>
          </h2>
          <p className="text-slate-600">{displayedProducts.length} products found</p>
        </div>
      )}

      {activeCategory && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Category: <span className="text-indigo-600">{categories.find((c) => c.id === activeCategory)?.name}</span>
          </h2>
          <p className="text-slate-600">{displayedProducts.length} products found</p>
        </div>
      )}

      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
          <h3 className="mb-2 text-xl font-medium">No products found</h3>
          <p className="mb-6 text-center text-slate-600">
            We couldn&apos;t find any products matching your search criteria.
          </p>
          <Button asChild>
            <Link href="/store">View All Products</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
