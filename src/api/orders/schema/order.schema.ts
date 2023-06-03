import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

// Models
import { Product } from 'src/api/products/schema/product.schema';
import { Shipping } from 'src/models/shipping.entity';

// Models
export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop()
  client: string

  @Prop(raw([{
    product: { type: mongoose.Schema.Types.ObjectId, ref: Product.name },
    qty: { type: Number }
  }]))
  orderItems: Record<string, any>

  @Prop({ type: Shipping })
  shippingAddress: Shipping

  @Prop()
  paymentMethod: string

  @Prop()
  taxPrice: number

  @Prop()
  shippingPrice: number

  @Prop()
  totalPrice: number

  @Prop({ default: false })
  isDelivered: boolean

  @Prop()
  deliveredAt: number

  @Prop({ default: false })
  completed: boolean
}
// {
//   "client": "Carlos Bueno",
//   "orderItems": [
//     {"product": "644d42152698c996cbfe826f", "qty": 2}
//   ],
//   "shippingAddress": {
//    "province": "Santo Domingo",
//    "delivery": "Caribe pack",
//    "phone": 8494087034
// },
//   "paymentMethod": "Paypal",
//   "taxPrice": 38,
//   "shippingPrice": 200,
//   "totalPrice": 3900,
//   "isDelivered": false,
//   "complete": falsex 


export const OrderSchema = SchemaFactory.createForClass(Order);
