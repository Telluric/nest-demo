import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: true }))],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
