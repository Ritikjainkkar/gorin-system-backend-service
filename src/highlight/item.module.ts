import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './item.schema';
import { HighlightsService } from './item.service';
import { HighlightsController } from './item.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Highlight.name, schema: HighlightSchema }]), // Register Highlight schema
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService],
})
export class HighlightsModule {}
