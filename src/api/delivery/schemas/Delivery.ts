import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Models
export type DeliveryDocument = HydratedDocument<Delivery>;

@Schema({ timestamps: true })
export class Delivery {
  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  cedula: string;

  @Prop()
  placa: string;

  @Prop()
  state: boolean
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
