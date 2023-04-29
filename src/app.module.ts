import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { ProductsModule } from './api/products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://bloodysi:bloodysi@atlascluster.fohieyx.mongodb.net/?retryWrites=true&w=majority'),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
