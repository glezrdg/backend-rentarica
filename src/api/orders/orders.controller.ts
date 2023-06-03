import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from './orders.service';

// DTO
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @HttpCode(201)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return this.ordersService.create(createOrderDto);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @HttpCode(200)
  @Get()
  async findAll() {
    try {
      return this.ordersService.findAll();
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @HttpCode(200)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.ordersService.findOne(id);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    try {
      return this.ordersService.update(id, updateOrderDto);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.ordersService.remove(id);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Patch('/:id/deliver')
  deliverOrder(@Param('id') id: string) {
    try {
      return this.ordersService.deliverOrder(id);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
