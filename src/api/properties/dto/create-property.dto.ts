import { ApiProperty } from '@nestjs/swagger';

export class CreatePropertyDto {
  @ApiProperty()
  title: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  category: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  province: string;
  @ApiProperty()
  items: string[];
  @ApiProperty()
  images: any[];
  @ApiProperty()
  bathrooms: number;
  @ApiProperty()
  rooms: number;
  @ApiProperty()
  size: number;
  @ApiProperty()
  floors: number;
  @ApiProperty()
  sector: string;
  @ApiProperty()
  owner_name: string;
  @ApiProperty()
  owner_contact: string;
  @ApiProperty()
  airbnb: string;
  @ApiProperty()
  isShared: boolean;
  @ApiProperty()
  isNegotiable: boolean;
  @ApiProperty()
  isActive: boolean;
  @ApiProperty()
  code: string;
  @ApiProperty()
  agent: string;
  @ApiProperty()
  sharedAgent: string;
  @ApiProperty()
  youtube: string;
  @ApiProperty()
  unitPrice: string;
}
