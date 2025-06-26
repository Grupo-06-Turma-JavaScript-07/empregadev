import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Cadastro } from "../entities/cadastro.entity";

@Injectable()
export class CadastroService {
    constructor(
        @InjectRepository(Cadastro)
        private cadastroRepository: Repository<Cadastro>
    ) { }

    async findAll(): Promise<Cadastro[]> {
        return await this.cadastroRepository.find();
    }

    async findById(id: number): Promise<Cadastro> {

        let cadastro = await this.cadastroRepository.findOne({
            where: {
                id
            }
        });

        if (!cadastro)
            throw new HttpException('Funcionário não encontrado!', HttpStatus.NOT_FOUND);

        return cadastro;
    }

    async findAllBySetor(setor: string): Promise<Cadastro[]> {
        return await this.cadastroRepository.find({
            where: {
                cargo: ILike(`%${setor}%`)
            }
        })
    }

    async create(cadastro: Cadastro): Promise<Cadastro> {
        return await this.cadastroRepository.save(cadastro);
    }

    async update(cadastro: Cadastro): Promise<Cadastro> {

        let buscaCadastro = await this.findById(cadastro.id);

        if (!buscaCadastro || !cadastro.id)
            throw new HttpException('Funcionário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.cadastroRepository.save(cadastro);
    }

    async delete(id: number): Promise<DeleteResult> {

        let buscaCadastro = await this.findById(id);

        if (!buscaCadastro)
            throw new HttpException('Funcionário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.cadastroRepository.delete(id);

    }

}