import { ApiProperty } from "@nestjs/swagger"
import { ISizes } from "../entities/product.entity"

export class CreateProductDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  price: number

  @ApiProperty()
  description: string

  @ApiProperty({ type: [ISizes] })
  sizes: [ISizes]

  @ApiProperty()
  category: string

  @ApiProperty()
  brand: string

  @ApiProperty()
  ofert: string

  @ApiProperty()
  images: string[]
}
