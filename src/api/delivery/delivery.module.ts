import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Delivery, DeliverySchema } from './schemas/Delivery';

import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { Agent, AgentSchema } from './schemas/Agent';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Delivery.name, schema: DeliverySchema },
      { name: Agent.name, schema: AgentSchema }
    ])
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService]
})
export class DeliveryModule { }
