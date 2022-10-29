import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

const PORT = process.env.PORT;
async function bootstrap() {

  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'error', 'verbose', 'warn'],
    bodyParser: true
  });

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(PORT, () => console.log(`🚀 Application listing on port ${PORT} 🚀`));
}
bootstrap();
