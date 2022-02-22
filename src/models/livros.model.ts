import { Livros as LivroModel } from './livros.model';
import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class Livros extends Model<LivroModel> {

    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    codigo: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(20, 2),
        allowNull: false,
    })
    preco: number;

}