import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Appointments')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) { }

  @Post()
  async create(@Body() createAppointmentDto: CreateAppointmentDto) {
    try {
      return await this.appointmentService.create(createAppointmentDto);
    } catch (error) {
      throw new HttpException('Error creando cita', HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get()
  findAll(@Query() queries: { date: string }) {
    return this.appointmentService.findAll(queries);
  }

  @Post('days/busy')
  findBusyDays(@Body() body: any) {
    return this.appointmentService.checkBusyDays(body);
  }
  @Get('/month/dashboard')
  findAppointmentsDashboard() {
    return this.appointmentService.findAppointmentsDashboard();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: UpdateAppointmentDto) {
    return this.appointmentService.update(id, updateAppointmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentService.remove(id);
  }
}
