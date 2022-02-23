import { LivrosController } from './controllers/livros.controller';
import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './serivces/app.service';
import { LivrosService } from './serivces/livros.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Livros } from './models/livros.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: parseInt(process.env.PORT_BD),
    username: process.env.USER_BD,
    password: process.env.PWD_BD,
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
