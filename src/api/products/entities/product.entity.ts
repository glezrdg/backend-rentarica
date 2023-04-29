export class Product {
  _id: string
  name: string
  price: number
  description: string
  sizes: ISizes[]
  category: string
  brand: string
  ofert: string
  images: string[]
}

export class ISizes {
  name: string
  qty: number
}
