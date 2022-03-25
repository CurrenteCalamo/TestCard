import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CardDto } from './dto/card.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  createUser(@Body() dto: CardDto) {
    return this.appService.create(dto);
  }
}
