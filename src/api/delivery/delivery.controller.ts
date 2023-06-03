import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto, CreateAgentDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Delivery')
@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) { }

  @Post()
  create(@Body() createDeliveryDto: CreateDeliveryDto) {
    return this.deliveryService.createDelivery(createDeliveryDto);
  }

  @Get()
  findAll() {
    return this.deliveryService.finAllDelivery();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryService.removeDelivery(id);
  }

  @Post('/agent')
  createAgent(@Body() createAgentDto: CreateAgentDto) {
    return this.deliveryService.createAgent(createAgentDto);
  }

  @Get('/agent')
  findAllAgent() {
    return this.deliveryService.finAllAgent();
  }


  @Delete('/agent/:id')
  removeAgent(@Param('id') id: string) {
    return this.deliveryService.removeAgent(id);
  }
}
