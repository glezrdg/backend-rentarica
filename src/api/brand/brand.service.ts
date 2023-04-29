import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

// Model
import { Brand, BrandDocument } from './schema/brand.schema';

// DTO
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {

  constructor(@InjectModel(Brand.name) private brand: Model<BrandDocument>) { }

  async create(createBrandDto: CreateBrandDto) {
    try {
      const createdBrand = await this.brand.create(createBrandDto)
      return createdBrand
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const brands = await this.brand.find().limit(50)
      return brands
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const brand = await this.brand.findById(id)
      return brand
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    try {
      const brand = await this.brand.findByIdAndUpdate(id, updateBrandDto)
      return brand
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const brand = await this.brand.findByIdAndRemove(id)
      return brand
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
