import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config'


import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './api/auth/auth.module';
import { PropertiesModule } from './api/properties/properties.module';

let MONGO_URI =
  'mongodb://127.0.0.1:27017/rentarica'

console.log(process.env.MONGO_PUBLIC_URL)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_PUBLIC_URL || MONGO_URI),
    MulterModule.register({ dest: join(__dirname, '..', 'public/uploads') }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    PropertiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
