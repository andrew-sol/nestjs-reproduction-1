import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  private readonly logger = new Logger(AppModule.name);

  async beforeApplicationShutdown(): Promise<void> {
    this.logger.log(1);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    this.logger.log(2);
  }
}
