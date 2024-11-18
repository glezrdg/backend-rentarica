import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Models
export type PropertyDocument = HydratedDocument<Property>;

@Schema({ timestamps: true })
export class Property {
  @Prop()
  title: string
  @Prop()
  category: string
  @Prop()
  type: string
  @Prop()
  price: number
  @Prop({ default: false })
  active: boolean
  @Prop()
  description: string
  @Prop()
  items: string[]
  @Prop()
  images: string[]
  @Prop()
  titleImages: string[]
  @Prop()
  captacionImages: string[]
  @Prop()
  bathrooms: number
  @Prop()
  rooms: number
  @Prop()
  size: number
  @Prop()
  zone: string
  @Prop()
  floors: number
  @Prop()
  owner_name: string
  @Prop()
  owner_contact: string
  @Prop()
  airbnb: string
  @Prop()
  isShared: boolean
  @Prop()
  isNegotiable: boolean
  @Prop()
  isActive: boolean
  @Prop()
  code: string
  @Prop()
  unitPrice: string
}

export const PropertySchema = SchemaFactory.createForClass(Property);
