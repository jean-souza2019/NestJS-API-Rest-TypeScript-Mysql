import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from '../models/livros.model';

@Injectable()
export class LivrosService {

    constructor(
        @InjectModel(Livros)
        private livroModel: typeof Livros
    ) { }

    async obterTodos(): Promise<Livros[]> {
        return this.livroModel.findAll();
    }

    async obterLivro(id: number): Promise<Livros> {
        return this.livroModel.findByPk(id);
    }

    async criarLivro(livro: Livros) {
        this.livroModel.create(livro);
    }

    async alterarLivro(livro: Livros): Promise<[number, Livros[]]> {
        return this.livroModel.update(livro, {
            where: {
                id: livro.id
            }
        });
    }

    async apagarLivro(id: number) {
        const livro: Livros = await this.obterLivro(id);
        livro.destroy();
    }
}