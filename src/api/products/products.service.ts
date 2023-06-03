import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';

// Model
import { Product, ProductDocument } from './schema/product.schema';

// DTO
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductQueries } from './interfaces';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private product: Model<ProductDocument>) { }

  async create(createProductDto: CreateProductDto) {
    try {
      if (!createProductDto.name && !createProductDto.price && !createProductDto.category && !createProductDto.sizes) {
        throw new Error('Fields are missing')
      }
      const createdProduct = await this.product.create(createProductDto)
      return createdProduct
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll(queries: ProductQueries) {
    try {
      console.log(queries.search)
      const products = await this.product.find({
        name: { $regex: queries.search || "" },
      }).limit(50)
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
      await this.product.findByIdAndUpdate(id, updateProductDto)
      return updateProductDto
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

  async addProductImage(id: string, path: string) {
    try {
      const product = await this.product.findByIdAndUpdate(id, { images: [path] })
      return product
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
