import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import CustomExceptionFilter from './exception-filter/exception.filter';
import ResponseInterceptor from './interceptor/response.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({ origin: process.env.CLIENT_URL });
  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      // Strip any properties not defined in the DTO — unknown fields are silently removed
      whitelist: true,
      // Reject the request with a 400 if any unknown properties are sent, instead of silently stripping them
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
