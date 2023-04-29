import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

//Model
import { Brand, BrandSchema } from './schema/brand.schema';

// Controller
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }])],
  controllers: [BrandController],
  providers: [BrandService]
})
export class BrandModule { }
