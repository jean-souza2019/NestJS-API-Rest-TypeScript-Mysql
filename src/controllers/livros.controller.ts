import { LivrosService } from '../serivces/livros.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Livros } from '../models/livros.model';


@Controller('livros')
export class LivrosController {
    constructor(private livrosService: LivrosService) {

    }

    @Get()
    obterTodos(): Livros[] {
        return this.livrosService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Livros {
        return this.livrosService.obterLivro(params.id);
    }

    @Post()
    criar(@Body() livro: Livros) {
        livro.id = 100;
        this.livrosService.criarLivro(livro);
    }

    @Put()
    alterar(@Body() livro: Livros): Livros {
        return this.livrosService.alterarLivro(livro);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.livrosService.apagarLivro(params.id);
    }

}