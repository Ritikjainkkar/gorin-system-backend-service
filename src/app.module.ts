import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HighlightsModule } from './highlights/Highlights.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot("mongodb+srv://azone1:2JUZNWgAAPUk7yEX@soil.dlubpja.mongodb.net/gorin?retryWrites=true&w=majority"),
    HighlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
