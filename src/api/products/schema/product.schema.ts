import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

// Models
import { Category } from 'src/api/category/schema/category.schema';
import { Brand } from 'src/api/brand/schema/brand.schema';
import { ISizes } from '../entities/product.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
  category: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Brand.name })
  brand: Brand;

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
