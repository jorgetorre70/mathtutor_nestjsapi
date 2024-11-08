import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // app.enableCors({
  //   origin: [
  //     'https://aimathmentor.com',
  //     'https://main.d1p89hswv7ju6x.amplifyapp.com',
  //     'https://main.d1p89hswv7ju6x.amplifyapp.com/',
  //     'http://localhost:5173/',
  //   ],
  //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  //   allowedHeaders: ['Content-Type', 'Authorization'],
  //   credentials: true,
  // });

  await app.listen(3000);
}
bootstrap();
