import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

// Model
import { Product, ProductDocument } from './schema/product.schema';

// DTO
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private product: Model<ProductDocument>) { }


  async create(createProductDto: CreateProductDto) {
    try {
      const createdProduct = await this.product.create(createProductDto)
      return createdProduct
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const products = await this.product.find().limit(50)
      return products
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.product.findById(id)
      return product
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.product.findByIdAndUpdate(id, updateProductDto)
      return product
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const product = await this.product.findByIdAndRemove(id)
      return product
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
