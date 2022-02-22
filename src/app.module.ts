import { LivrosController } from './controllers/livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './serivces/app.service';
import { LivrosService } from './serivces/livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livros } from './models/livros.model';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'livraria',
    autoLoadModels: true,
    synchronize: true
  }),
  SequelizeModule.forFeature([Livros])
  ],
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
