import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role?: string;
}
