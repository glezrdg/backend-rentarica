import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Models
export type DoctorDocument = HydratedDocument<Doctor>;

@Schema({ timestamps: true })
export class Doctor {
  @Prop()
  fullname: string
  @Prop()
  specialty: string
  @Prop()
  email: string
  @Prop()
  phone: string
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
