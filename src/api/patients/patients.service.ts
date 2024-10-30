import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Patient, PatientDocument } from './schema/patient.schema';
import { Model } from 'mongoose';

@Injectable()
export class PatientsService {
  constructor(
    @InjectModel(Patient.name) private patient: Model<PatientDocument>
  ) { }

  async create(createDoctorDto: CreatePatientDto) {
    try {
      const createdDoctor = await this.patient.create(createDoctorDto)
      return createdDoctor
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const patients = await this.patient.find()
      return patients
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const patient = await this.patient.findById(id)
      return patient
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateDoctorDto: UpdatePatientDto) {
    try {
      const patients = await this.patient.findByIdAndUpdate(id, updateDoctorDto)
      return patients
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const patients = await this.patient.findByIdAndRemove(id)
      return patients
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
