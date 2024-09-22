import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './Highlight.schema';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectModel(Highlight.name) private highlightModel: Model<HighlightDocument>,
  ) {}

  // Create a new highlight
  async create(text: string, position: number): Promise<Highlight> {
    const newHighlight = new this.highlightModel({ text, position });
    return newHighlight.save();
  }

  // Get all highlights
  async findAll(): Promise<Highlight[]> {
    return (await this.highlightModel.find().exec()).sort((a, b) => a.position - b.position);
  }

  // Get a single highlight by ID
  async findOne(id: string): Promise<Highlight> {
    return this.highlightModel.findById(id).exec();
  }

  // Update a highlight by ID
  async update(id: string, text: string, position: number): Promise<Highlight> {
    return this.highlightModel.findByIdAndUpdate(
      id,
      { text, position },
      { new: true },
    ).exec();
  }

  // Delete a highlight by ID
  async delete(id: string): Promise<any> {
    return this.highlightModel.findByIdAndDelete(id).exec();
  }
}
