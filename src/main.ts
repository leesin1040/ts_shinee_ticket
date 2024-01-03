import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API 명세')
    .setDescription('API명세 스웨거 시도')
    .setVersion('1.0')
    .addTag('example')
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
