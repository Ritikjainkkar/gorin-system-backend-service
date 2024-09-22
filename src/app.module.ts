import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { highlightsController } from './highlights/highlights.controller';
import { highlightsService } from './highlights/highlights.service';

@Module({
  imports: [],
  controllers: [AppController, highlightsController],
  providers: [AppService, highlightsService],
})
export class AppModule {}
