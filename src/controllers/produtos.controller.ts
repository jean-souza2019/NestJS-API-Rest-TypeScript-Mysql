import { ProdutosService } from './../serivces/produtos.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from '../models/produto.model';


@Controller('produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[] {
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtoService.obterProduto(params.id);
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 100;
        this.produtoService.criarProduto(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtoService.alterarProduto(produto);
    }

    @Delete(':id')
    apagar(@Param() params) {
        this.produtoService.apagarProduto(params.id);
    }

}