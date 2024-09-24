import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'JD',
      useValue: ['JD', 'JD'],
    },
    {
      provide: 'sync',
      async useFactory() {
        return await new Promise((r) => {
          setTimeout(() => {
            r('异步');
          }, 3000);
        });
      },
    },
  ],
})
export class AppModule {}
