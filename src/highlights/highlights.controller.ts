import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { highlightsService } from './highlights.service';

@Controller('highlights')
export class highlightsController {
  constructor(private readonly highlightsService: highlightsService) {}

  @Get()
  findAll() {
    return this.highlightsService.findAll();
  }

  @Post()
  create(
    @Body('text') text: string,
    @Body('position') position: number,
  ) {
    return this.highlightsService.create(text, position);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('text') text: string,
    @Body('position') position: number,
  ) {
    return this.highlightsService.update(Number(id), text, position);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.highlightsService.delete(Number(id));
    return { message: 'Item deleted successfully' };
  }
}
