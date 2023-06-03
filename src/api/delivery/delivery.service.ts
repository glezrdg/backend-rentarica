import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Models
import { Agent, AgentDocument } from './schemas/Agent';
import { Delivery, DeliveryDocument } from './schemas/Delivery';

// DTOS
import { CreateDeliveryDto, CreateAgentDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto, UpdateAgentDto } from './dto/update-delivery.dto';

@Injectable()
export class DeliveryService {

  constructor(
    @InjectModel(Agent.name) private agent: Model<AgentDocument>,
    @InjectModel(Delivery.name) private delivery: Model<DeliveryDocument>
  ) { }

  async createAgent(createAgentDto: CreateAgentDto) {
    try {
      return await this.agent.create(createAgentDto)
    } catch (error) {
      return error
    }
  }

  async createDelivery(createDeliveryDto: CreateDeliveryDto) {
    try {
      return await this.delivery.create(createDeliveryDto)
    } catch (error) {
      return error
    }
  }

  async finAllAgent() {
    try {
      return await this.agent.find()
    } catch (error) {
      return error
    }
  }

  async finAllDelivery() {
    try {
      return await this.delivery.find()
    } catch (error) {
      return error
    }
  }

  async removeAgent(id: string) {
    try {
      return await this.agent.findByIdAndRemove(id)
    } catch (error) {
      return error
    }
  }

  async removeDelivery(id: string) {
    try {
      return await this.delivery.findByIdAndRemove(id)
    } catch (error) {
      return error
    }
  }



  // findOne(id: number) {
  //   return `This action returns a #${id} delivery`;
  // }

  // update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
  //   return `This action updates a #${id} delivery`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} delivery`;
  // }
}
