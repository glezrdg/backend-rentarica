import { ApiProperty } from "@nestjs/swagger"

export class CreateBrandDto {
  @ApiProperty()
  _id: string

  @ApiProperty()
  name: string
}
