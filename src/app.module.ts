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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGO_PUBLIC_URL),
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
console.log(process.env.MONGO_PUBLIC_URL)
