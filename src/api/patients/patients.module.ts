import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient } from './entities/patient.entity';
import { PatientSchema } from './schema/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema }])
  ],
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule { }
