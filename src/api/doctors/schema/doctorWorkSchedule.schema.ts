import { Schema, SchemaFactory, Prop, raw } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Auth } from 'src/api/auth/schemas/auth.schema';

// Models
export type DoctorWorkScheduleDocument = HydratedDocument<DoctorWorkSchedule>;

@Schema({ timestamps: true })
export class DoctorWorkSchedule {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Auth.name })
  user: Auth
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  lunes: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  martes: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  miercoles: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  jueves: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  viernes: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  sabado: {
    hours: string[]
    available: boolean
  }
  @Prop(raw({
    hours: { type: Array },
    available: { type: Boolean },
  }))
  domingo: {
    hours: string[]
    available: boolean
  }
}

export const DoctorWorkScheduleSchema = SchemaFactory.createForClass(DoctorWorkSchedule);
