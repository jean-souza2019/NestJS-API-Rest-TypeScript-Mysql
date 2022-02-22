import { Injectable } from '@nestjs/common';
import { Produto } from './../models/produto.model';

@Injectable()
export class ProdutosService {

    produtos: Produto[] = [
        new Produto("LIV01", "Livro TDD e BDD na Prática", 29.90),
        new Produto("LIV02", "Clean Code", 99.90),
        new Produto("LIV03", "Nest JS - Pratica", 29.90)
    ];

    obterTodos(): Produto[] {
        return this.produtos;
    }

    obterProduto(id: number): Produto {
        return this.produtos[0];
    }

    criarProduto(produto: Produto) {
        this.produtos.push(produto);
    }

    alterarProduto(produto: Produto): Produto {
        return produto;
    }

    apagarProduto(id: number) {
        this.produtos.pop();
    }
}