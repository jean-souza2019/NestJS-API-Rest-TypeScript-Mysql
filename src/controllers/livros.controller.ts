import { LivrosService } from '../serivces/livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livros } from '../models/livros.model';


@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) {

    }

    @Get()
    async obterTodos(): Promise<Livros[]> {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Livros> {
        return this.livrosService.obterLivro(params.id);
    }

    @Post()
    async criar(@Body() livro: Livros) {
        this.livrosService.criarLivro(livro);
    }

    @Put()
    async alterar(@Body() livro: Livros): Promise<[number, Livros[]]> {
        return this.livrosService.alterarLivro(livro);
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.livrosService.apagarLivro(params.id);
    }

}