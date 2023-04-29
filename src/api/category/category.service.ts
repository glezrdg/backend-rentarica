import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

// Model
import { Category, CategoryDocument } from './schema/category.schema';

// DTO
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {

  constructor(@InjectModel(Category.name) private category: Model<CategoryDocument>) { }

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const createdCategory = await this.category.create(createCategoryDto)
      return createdCategory
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const categories = await this.category.find().limit(50)
      return categories
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const category = await this.category.findById(id)
      return category
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.category.findByIdAndUpdate(id, updateCategoryDto)
      return category
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const category = await this.category.findByIdAndRemove(id)
      return category
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
