import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Model
import { Order, OrderDocument } from './schema/order.schema';

//DTO 
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private order: Model<OrderDocument>) { }

  async create(createOrderDto: CreateOrderDto) {
    try {
      const createdOrder = await this.order.create(createOrderDto)
      return createdOrder
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const orders = await this.order.find().limit(50)
      return orders
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.order.findById(id).populate('orderItems.product', '-sizes')
      return order
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const order = await this.order.findByIdAndUpdate(id, updateOrderDto)
      return order
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const order = await this.order.findByIdAndRemove(id)
      return order
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async deliverOrder(id: string) {
    try {
      const order = await this.order.findByIdAndUpdate(id, { isDelivered: true, deliveredAt: Date.now() })
      return order
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
