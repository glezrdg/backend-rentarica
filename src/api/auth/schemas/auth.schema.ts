import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop()
  fullname: string

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  role: 'administrador' | "doctor"

}

export const AuthSchema = SchemaFactory.createForClass(Auth);
