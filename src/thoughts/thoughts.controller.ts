import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';

interface CreateThoughtBody {
  message: string;
}

@Controller()
export class ThoughtsController {
  constructor(private readonly thoughtService: ThoughtsService) {}

  @Get('/thoughts')
  getThoughts(): object {
    return this.thoughtService.findAll();
  }

  @Post('/thoughts')
  createThought(@Body() body: CreateThoughtBody): object {
    return this.thoughtService.create(body);
  }

  @Post('/thoughts/:thoughtId/like')
  updateHearts(@Param('thoughtId') thoughtId: string): object {
    return this.thoughtService.findAndUpdate(thoughtId);
  }
}
