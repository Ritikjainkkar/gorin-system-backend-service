import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './Highlight.schema';
import { HighlightsService } from './Highlights.service';
import { HighlightsController } from './Highlights.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Highlight.name, schema: HighlightSchema }]), // Register Highlight schema
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService],
})
export class HighlightsModule {}
