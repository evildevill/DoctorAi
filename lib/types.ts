export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
  inStock: boolean
  rating: number
  reviews: number
  prescription: boolean
  dosage?: string
  sideEffects?: string[]
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Category {
  id: string
  name: string
  icon: string
}
