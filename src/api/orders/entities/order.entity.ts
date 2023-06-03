import { Shipping } from "src/models/shipping.entity"

export class Order {
  _id?: string
  client: string
  orderItems: OrderItem[]
  shippingAddress: Shipping
  paymentMethod: string
  taxPrice: number
  shippingPrice: number
  totalPrice: number
  isDelivered: boolean
  deliveredAt: number
  completed: boolean
  createdAt: string
  updatedAt: string
}

export class OrderItem {
  product: string
  qty: number
  size: string
}
