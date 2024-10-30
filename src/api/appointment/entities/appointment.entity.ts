import { ApiProperty } from "@nestjs/swagger";

export class Appointment {
  @ApiProperty()
  _id: string
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
