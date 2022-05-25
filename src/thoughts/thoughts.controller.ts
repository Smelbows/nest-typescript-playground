import { Controller, Get, Post } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';

@Controller()
export class ThoughtsController {
  constructor(private readonly thoughtService: ThoughtsService) {}

  @Get()
  getThoughts(): object {
    return this.thoughtService.findAll();
  }

  @Post()
  createThought(message: string): object {
    return this.thoughtService.create(message);
  }

  @Post()
  updateHearts(thoughtId: string): object {
    return this.thoughtService.findAndUpdate(thoughtId);
  }
}
