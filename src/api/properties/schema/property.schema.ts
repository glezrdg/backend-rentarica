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
  @Prop({ default: false })
  active: boolean
  @Prop()
  description: string
  @Prop()
  items: string[]
  @Prop()
  images: string[]
  @Prop()
  bathrooms: number
  @Prop()
  rooms: number
  @Prop()
  size: number
  @Prop()
  floors: number
  @Prop()
  type: string
  @Prop()
  province: string
  @Prop()
  price: number
}

export const PropertySchema = SchemaFactory.createForClass(Property);
