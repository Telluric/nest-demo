import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('Index')
  public index() {
    // initial props
    return {
      title: 'Amazing NextJS',
    };
  }
}
