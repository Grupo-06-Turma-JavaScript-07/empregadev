import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async criarFuncionario(data: Partial<Funcionario>): Promise<Funcionario> {
    const funcionario = this.funcionarioRepository.create(data);
    return this.funcionarioRepository.save(funcionario);
  }

  async listarFuncionarios(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async buscarPorId(id: number): Promise<Funcionario | null> {
    return this.funcionarioRepository.findOneBy({ id });
  }

  async atualizarFuncionario(id: number, data: Partial<Funcionario>): Promise<Funcionario> {
    await this.funcionarioRepository.update(id, data);
    return this.buscarPorId(id);
  }

  async removerFuncionario(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }
}
