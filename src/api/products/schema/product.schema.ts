import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ISizes } from '../entities/product.entity';

// Models

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  category: string;

  @Prop()
  brand: string;

  @Prop()
  ofert: string;

  @Prop()
  description: string;

  @Prop()
  sizes: ISizes[];

  @Prop()
  images: string[];

}

export const ProductSchema = SchemaFactory.createForClass(Product);
