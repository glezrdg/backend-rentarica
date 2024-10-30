import { ApiProperty } from "@nestjs/swagger"

export class Doctor {
  @ApiProperty()
  _id: string
  @ApiProperty()
  fullname: string
  @ApiProperty()
  specialty: string
  @ApiProperty()
  email: string
  @ApiProperty()
  phone: string
}
