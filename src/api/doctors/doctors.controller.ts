import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Doctor')
@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) { }

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOne(id);
  }

  @Get('/schedule/all')
  findAllSchedule() {
    return this.doctorsService.findAllDoctorSchedule();
  }

  @Get('/schedule/:id')
  findSchedule(@Param('id') id: string) {
    return this.doctorsService.findDoctorSchedule(id);
  }

  @Patch('/schedule/:id')
  updateSchedule(@Param('id') id: string, @Body() schedule: any) {
    return this.doctorsService.updateDoctorSchedule(id, schedule);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}
