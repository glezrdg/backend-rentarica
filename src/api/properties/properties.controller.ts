import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UploadedFiles, HttpException, HttpStatus, Query } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { saveFileStorage } from 'src/utils/multerConfig';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Properties')
@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) { }

  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto) {
    try {
      return await this.propertiesService.create(createPropertyDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get()
  async findAll(@Query() queries: any) {
    try {
      return this.propertiesService.findAll(queries);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.propertiesService.findOne(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    try {
      return this.propertiesService.update(id, updatePropertyDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return this.propertiesService.remove(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // UPLOAD PROPERTY IMAGES
  @Post('/:id/images')
  @UseInterceptors(FilesInterceptor('images', 8, saveFileStorage))
  async uploadImages(@UploadedFiles() files: Array<Express.Multer.File>, @Param('id') id: string) {

    try {
      await this.propertiesService.addPropertyImage(id, files.map((f) => f.filename))
      // return this.propertiesService.findOne(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  // UPLOAD PROPERTY TITLE
  @Post('/:id/title_images')
  @UseInterceptors(FilesInterceptor('images', 3, saveFileStorage))
  async uploadTitle(@UploadedFiles() files: Array<Express.Multer.File>, @Param('id') id: string) {

    try {
      await this.propertiesService.addPropertyTitle(id, files.map((f) => f.filename))
      // return this.propertiesService.findOne(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  // UPLOAD PROPERTY CAPTACION
  @Post('/:id/captacion_images')
  @UseInterceptors(FilesInterceptor('images', 3, saveFileStorage))
  async uploadCaptacion(@UploadedFiles() files: Array<Express.Multer.File>, @Param('id') id: string) {

    try {
      await this.propertiesService.addPropertyCaptacion(id, files.map((f) => f.filename))
      return this.propertiesService.findOne(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

