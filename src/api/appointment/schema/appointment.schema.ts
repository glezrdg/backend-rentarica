import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Doctor } from 'src/api/doctors/schema/doctor.schema';

// Models
export type AppointmentDocument = HydratedDocument<Appointment>;

@Schema({ timestamps: true })
export class Appointment {
  @Prop()
  fullname: string
  @Prop()
  email: string
  @Prop()
  date: Date
  @Prop()
  time: string
  @Prop()
  reason: string
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Doctor.name })
  doctor: Doctor
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
