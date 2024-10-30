import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Appointment, AppointmentDocument } from './schema/appointment.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppointmentService {

  constructor(
    @InjectModel(Appointment.name) private appointment: Model<AppointmentDocument>,
  ) { }

  async create(createAppointmentDto: CreateAppointmentDto) {
    try {
      const createdAppointment = await this.appointment.create(createAppointmentDto)
      return createdAppointment
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll(queries?: any) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

    const { date } = queries
    const query: any = {
      date: { $gte: today, $lt: firstDayOfNextMonth }
    }

    console.log('QUERIES', queries)

    if (date) query.date = new Date(new Date(date).setHours(0, 0, 0, 0)).toISOString()
    console.log('Query', query)

    try {
      const appointments = await this.appointment.find(query).sort({ date: 1 })
      return appointments
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAppointmentsDashboard(queries?: any) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log(today)
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
    firstDayOfWeek.setHours(0, 0, 0, 0);

    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);

    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month
    const firstDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1); // Start of the next month    

    try {
      const result = this.appointment.aggregate([
        {
          $facet: {
            today: [
              { $match: { date: { $gte: today, $lt: tomorrow } } },
              { $count: "count" }
            ],
            week: [
              { $match: { date: { $gte: firstDayOfWeek, $lt: lastDayOfWeek } } },
              { $count: "count" }
            ],
            month: [
              { $match: { date: { $gte: firstDayOfMonth, $lt: firstDayOfNextMonth } } },
              { $count: "count" }
            ]
          }
        },
        {
          $project: {
            today: { $arrayElemAt: ["$today.count", 0] },
            week: { $arrayElemAt: ["$week.count", 0] },
            month: { $arrayElemAt: ["$month.count", 0] }
          }
        }
      ]);
      return result
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async checkBusyDays(days: number[]) {
    console.log('DAYSSSS', days)
    let data = []
    try {
      for (let index = 0; index < days?.length; index++) {
        const appointments = await this.appointment.find({ date: new Date(new Date(new Date().setDate(days[index])).setHours(0, 0, 0, 0)).toISOString() })
        if (appointments?.length) data.push({ dayNumber: days[index], isBusy: true, })
        if (!appointments?.length) data.push({ dayNumber: days[index], isBusy: false })
      }
      console.log(data)
      return data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const appointment = await this.appointment.findById(id)
      return appointment
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateAppointmentDto: UpdateAppointmentDto) {
    try {
      const updatedAppointment = await this.appointment.findByIdAndUpdate(id, updateAppointmentDto)
      return updatedAppointment
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async remove(id: string) {
    try {
      await this.appointment.findByIdAndDelete(id)
      return 'Borrado con exito'
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
