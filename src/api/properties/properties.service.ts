import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Property, PropertyDocument } from './schema/property.schema';
import { Model } from 'mongoose';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel(Property.name) private property: Model<PropertyDocument>
  ) { }

  async create(createDoctorDto: CreatePropertyDto) {
    try {
      const createdDoctor = await this.property.create(createDoctorDto)
      return createdDoctor
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll(queries: any) {

    const { title, active, category, bathMax, bathMin, priceMin, priceMax, floorMin, floorMax, sizeMin, sizeMax } = queries
    const query: any = {}

    if (title) query.title = { $regex: title, $options: 'i' }
    if (category) query.category = category
    if (active) query.active = active
    if (bathMin) query.bathrooms = { $gte: Number(bathMin), $lte: Number(bathMax) }
    if (priceMin) query.price = { $gte: Number(priceMin), $lte: Number(priceMax) }
    if (floorMin) query.floors = { $gte: Number(floorMin), $lte: Number(floorMax) }
    if (sizeMin) query.size = { $gte: Number(sizeMin), $lte: Number(sizeMax) }

    try {
      const properties = await this.property.find(query)
      return properties
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const property = await this.property.findById(id)
      return property
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateDoctorDto: UpdatePropertyDto) {
    try {
      const properties = await this.property.findByIdAndUpdate(id, updateDoctorDto)
      return properties
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const properties = await this.property.findByIdAndRemove(id)
      return properties
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async addProductImage(id: string, paths: string[]) {
    try {
      const product = await this.property.findByIdAndUpdate(id, { images: paths })
      return product
    } catch (error) {
      throw new Error(error.message)
    }
  }

}