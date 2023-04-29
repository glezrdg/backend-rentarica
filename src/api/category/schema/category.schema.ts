import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SubCategory } from '../entities/category.entity';

// Models
export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop()
  name: string;

  @Prop()
  subcategories: SubCategory[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
