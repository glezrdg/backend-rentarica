import { ApiProperty } from "@nestjs/swagger"

export class CreateDoctorDto {
  @ApiProperty()
  fullname: string
  @ApiProperty()
  specialty: string
  @ApiProperty()
  email: string
  @ApiProperty()
  phone: string
}
