import { ProdutosController } from './controllers/produtos.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './serivces/app.service';
import { ProdutosService } from './serivces/produtos.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProdutosController
  ],
  providers: [
    AppService,
    ProdutosService
  ],
})
export class AppModule { }
