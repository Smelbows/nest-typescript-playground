import { Controller, Get, Param, Post } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';

@Controller()
export class ThoughtsController {
  constructor(private readonly thoughtService: ThoughtsService) {}

  @Get('/thoughts')
  getThoughts(): object {
    return this.thoughtService.findAll();
  }

  @Post('/thoughts')
  createThought(message: string): object {
    return this.thoughtService.create(message);
  }

  @Post('/thoughts/:thoughtId/like')
  updateHearts(@Param('thoughtId') thoughtId: string): object {
    return this.thoughtService.findAndUpdate(thoughtId);
  }
}
