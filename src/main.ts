import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS
  app.enableCors();

  // PREFIX
  app.setGlobalPrefix('api');

  // SWAGGER
  const config = new DocumentBuilder()
    .setTitle('Ecommerce Backend')
    .setDescription(
      'Api consumida por el proyecto de ecommerce v1',
    )
    .setVersion('1.0')
    .addTag('Auth')
    .addTag('Properties')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
