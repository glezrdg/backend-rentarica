import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';
import { Model } from 'mongoose';
import { AuthService } from '../auth/auth.service';
import { DoctorWorkSchedule, DoctorWorkScheduleDocument } from './schema/doctorWorkSchedule.schema';

@Injectable()
export class DoctorsService {

  constructor(
    @InjectModel(Doctor.name) private doctor: Model<DoctorDocument>,
    @InjectModel(DoctorWorkSchedule.name) private shcedule: Model<DoctorWorkScheduleDocument>,
    private auth: AuthService
  ) { }

  async create(createDoctorDto: CreateDoctorDto) {
    try {
      const createdDoctor = await this.doctor.create(createDoctorDto)
      let user = await this.auth.register({ fullname: createDoctorDto.fullname, email: createDoctorDto.email, password: '123456', role: 'doctor' })
      await this.shcedule.create({ user: user._id })
      return createdDoctor
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll() {
    try {
      const doctors = await this.doctor.find()
      return doctors
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const doctor = await this.doctor.findById(id)
      return doctor
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateDoctorDto: UpdateDoctorDto) {
    try {
      const doctors = await this.doctor.findByIdAndUpdate(id, updateDoctorDto)
      return doctors
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      const doctors = await this.doctor.findByIdAndRemove(id)
      return doctors
    } catch (error) {
      throw new Error(error.message)
    }
  }

  // Schedule
  async findAllDoctorSchedule() {
    try {
      const schedule = await this.shcedule.find().populate('user')
      return schedule
    } catch (error) {
      throw new Error(error.message)
    }
  }
  async findDoctorSchedule(doctorId: string) {
    try {
      const schedule = await this.shcedule.findOne({ user: doctorId }).select('-_id -user -createdAt -updatedAt -__v')
      return schedule
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async updateDoctorSchedule(id: string, schedule: any) {
    try {
      const updatedSchedule = await this.shcedule.findOneAndUpdate({ user: id }, schedule)
      return updatedSchedule
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
