import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import LokiTransport from 'winston-loki';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  const lokiTransport = new LokiTransport({
    host: 'http://qweasd',
  });

  await app.listen(3000);
}

bootstrap();
