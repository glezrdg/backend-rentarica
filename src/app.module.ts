import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { ProductsModule } from './api/products/products.module';
import { CategoryModule } from './api/category/category.module';
import { BrandModule } from './api/brand/brand.module';
import { OrdersModule } from './api/orders/orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DeliveryModule } from './api/delivery/delivery.module';
import { AuthModule } from './api/auth/auth.module';

let MONGO_URI =
  // 'mongodb+srv://bloodysi:bloodysi@atlascluster.fohieyx.mongodb.net/?retryWrites=true&w=majority'
  'mongodb://127.0.0.1:27017/ecommerce1'

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    MulterModule.register({ dest: './files' }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'files'),
    }),
    ProductsModule,
    CategoryModule,
    BrandModule,
    OrdersModule,
    DeliveryModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
