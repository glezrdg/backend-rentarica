import { ApiProperty } from "@nestjs/swagger"

// Models
import { Shipping } from "src/models/shipping.entity"
import { OrderItem } from "../entities/order.entity"

export class CreateOrderDto {
  @ApiProperty()
  client: string

  @ApiProperty({ type: [OrderItem] })
  orderItems: OrderItem[]

  @ApiProperty()
  shippingAddress: Shipping

  @ApiProperty()
  paymentMethod: string

  @ApiProperty()
  taxPrice: number

  @ApiProperty()
  shippingPrice: number

  @ApiProperty()
  totalPrice: number

  @ApiProperty()
  isDelivered: boolean

  @ApiProperty()
  deliveredAt: number

  @ApiProperty()
  completed: boolean

  @ApiProperty()
  createdAt: string

  @ApiProperty()
  updatedAt: string
}

