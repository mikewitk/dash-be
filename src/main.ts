import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      // make sure incoming requests do not have extra properties.
      // Any additional properties are removed
      whitelist: true,
    }),
  );
  await app.listen(4000);
}
bootstrap();
