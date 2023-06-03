import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Models
import { Order, OrderSchema } from './schema/order.schema';

// Controller
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule { }
