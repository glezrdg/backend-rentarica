import { ApiProperty } from "@nestjs/swagger"
import { SubCategory } from "../entities/category.entity"

export class CreateCategoryDto {
  @ApiProperty()
  _id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  subcategories?: SubCategory[]
}
