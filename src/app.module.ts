import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { ProductsModule } from './api/products/products.module';
import { CategoryModule } from './api/category/category.module';
import { BrandModule } from './api/brand/brand.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bloodysi:bloodysi@atlascluster.fohieyx.mongodb.net/?retryWrites=true&w=majority'),
    ProductsModule,
    CategoryModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
