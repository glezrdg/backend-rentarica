import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  Query,
  HttpStatus,
  HttpException,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'
import { FileInterceptor } from '@nestjs/platform-express/multer'

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProductQueries } from './interfaces';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  // CREATE PRODUCT
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productsService.create(createProductDto);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // FIND ALL PRODUCTS
  @Get()
  async findAll(
    @Query('search') search: string,
    @Query('category') category: string,
    @Query('brand') brand: string,
  ) {
    try {
      let queries: ProductQueries = { search, category, brand }
      return this.productsService.findAll(queries);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // FIND ONE PRODUCT
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.productsService.findOne(id);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // UPDATE ONE PRODUCT
  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return this.productsService.update(id, updateProductDto);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // DELETE ONE PRODUCT
  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.productsService.remove(id);
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  // UPLOAD PRODUCT IMAGES
  @Post('/:id/images')
  @UseInterceptors(FileInterceptor('images', {
    storage: diskStorage({
      destination: './files',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        const ext = extname(file.originalname)
        const filename = `${file.originalname}-${uniqueSuffix}${ext}`
        cb(null, filename)
      }

    })
  }))
  async uploadImages(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
    try {
      await this.productsService.addProductImage(id, file.filename)
      return this.productsService.findOne(id)
    } catch (error) {
      return new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
