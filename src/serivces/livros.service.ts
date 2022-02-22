import { Injectable } from '@nestjs/common';
import { Livros } from '../models/livros.model';

@Injectable()
export class LivrosService {

    livros: Livros[] = [
        // new Livros("LIV01", "Livro TDD e BDD na Prática", 29.90),
        // new Livros("LIV02", "Clean Code", 99.90),
        // new Livros("LIV03", "Nest JS - Pratica", 29.90)
    ];

    obterTodos(): Livros[] {
        return this.livros;
    }

    obterLivro(id: number): Livros {
        return this.livros[0];
    }

    criarLivro(livro: Livros) {
        this.livros.push(livro);
    }

    alterarLivro(livro: Livros): Livros {
        return livro;
    }

    apagarLivro(id: number) {
        this.livros.pop();
    }
}