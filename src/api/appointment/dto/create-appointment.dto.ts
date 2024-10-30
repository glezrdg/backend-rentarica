import { ApiProperty } from "@nestjs/swagger"

export class CreateAppointmentDto {
  @ApiProperty()
  fullname: string
  @ApiProperty()
  email: string
  @ApiProperty()
  date: string
  @ApiProperty()
  time: string
  @ApiProperty()
  reason: string
}

