import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './schema/doctor.schema';
import { AuthModule } from '../auth/auth.module';
import { DoctorWorkSchedule, DoctorWorkScheduleSchema } from './schema/doctorWorkSchedule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Doctor.name, schema: DoctorSchema },
      { name: DoctorWorkSchedule.name, schema: DoctorWorkScheduleSchema }]),
    AuthModule
  ],
  controllers: [DoctorsController],
  providers: [DoctorsService]
})
export class DoctorsModule { }
