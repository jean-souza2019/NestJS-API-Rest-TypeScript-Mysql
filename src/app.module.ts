import { LivrosController } from './controllers/livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './serivces/app.service';
import { LivrosService } from './serivces/livros.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    LivrosController
  ],
  providers: [
    AppService,
    LivrosService
  ],
})
export class AppModule { }
