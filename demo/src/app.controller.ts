import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('JD') private readonly jd: string[],
    @Inject('sync') private readonly sync: string,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('rika')
  getRika(): string {
    return this.jd.join('');
  }

  @Get('sync')
  getSync(): string {
    return this.sync;
  }
}
