import { ApiProperty } from "@nestjs/swagger"

export class CreatePatientDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  dob: string
  @ApiProperty()
  email: string
  @ApiProperty()
  phone: string
  @ApiProperty()
  address: string
  @ApiProperty()
  medicalHistory: string
  @ApiProperty()
  allergies: string
  @ApiProperty()
  currentMedications: string
  @ApiProperty()
  observations: string
}
