import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Models
export type PatientDocument = HydratedDocument<Patient>;

@Schema({ timestamps: true })
export class Patient {
  @Prop()
  name: string
  @Prop()
  dob: string
  @Prop()
  email: string
  @Prop()
  phone: string
  @Prop()
  address: string
  @Prop()
  medicalHistory: string
  @Prop()
  allergies: string
  @Prop()
  currentMedications: string
  @Prop()
  observations: string
}

export const PatientSchema = SchemaFactory.createForClass(Patient);
