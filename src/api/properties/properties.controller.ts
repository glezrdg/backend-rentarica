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
  create(@Body() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @Get()
  findAll(@Query() queries: any) {
    return this.propertiesService.findAll(queries);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(id, updatePropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(id);
  }

  // UPLOAD PROPERTY IMAGES
  @Post('/:id/images')
  @UseInterceptors(FilesInterceptor('images', 8, saveFileStorage))
  async uploadImages(@UploadedFiles() files: Array<Express.Multer.File>, @Param('id') id: string) {
    console.log('FILES', files)
    try {
      await this.propertiesService.addProductImage(id, files.map((f) => f.filename))
      return this.propertiesService.findOne(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}

