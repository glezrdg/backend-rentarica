import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Appointment, AppointmentSchema } from './schema/appointment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
    ])
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService]
})
export class AppointmentModule { }
