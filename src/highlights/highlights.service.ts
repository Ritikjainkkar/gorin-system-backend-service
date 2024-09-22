import { Injectable } from '@nestjs/common';
import { Highlights } from './highlights.interface';

@Injectable()
export class highlightsService {
  private highlights: Highlights[] = [];
  private idCounter = 1;

  findAll(): Highlights[] {
    return this.highlights.sort((a, b) => a.position - b.position);
  }

  findOne(id: number): Highlights {
    return this.highlights.find((Highlights) => Highlights.id === id);
  }

  create(text: string, position: number): Highlights {
    const existingHighlight = this.highlights.find(highlight => highlight.position === position);
  
    if (existingHighlight) {
      throw new Error(`Highlight with position ${position} already exists.`);
    }
    const newHighlights: Highlights = {
      id: this.idCounter++,
      text,
      position,
      timestamp: new Date(),
    };
  
    this.highlights.push(newHighlights);
    return newHighlights;
  }
  
  update(id: number, text: string, position: number): Highlights {
    const Highlights = this.findOne(id);
    if (Highlights) {
      Highlights.text = text;
      Highlights.position = position;
      Highlights.timestamp = new Date();
    }
    return Highlights;
  }

  delete(id: number): void {
    this.highlights = this.highlights.filter((Highlights) => Highlights.id !== id);
  }
}
