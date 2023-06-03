import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Models
export type AgentDocument = HydratedDocument<Agent>;

@Schema({ timestamps: true })
export class Agent {
  @Prop()
  name: string;

  @Prop()
  price: number
}

export const AgentSchema = SchemaFactory.createForClass(Agent);
