import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Cadastro } from '../entities/cadastro.entity';
import { CadastroService } from '../service/cadastro.service';

@Controller{"/cadastro"}
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Get{}
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Cadastro[]> {
    return this.cadastroService.findAll();
  }

  @Get('/id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Cadastro> {
    return this.cadastroService.findById(id);
  }

  @Get('/setor/:setor')
  @HttpCode(HttpStatus.OK)
  findAllByCargo(@Param('setor') setor: string): Promise<Cadastro[]> {
    return this.cadastroService.findAllByCargo(setor);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() cadastro: Cadastro): Promise<Postagem> {
    return this.cadastroService.create(cadastro);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() cadastro: Cadastro): Promise<Postagem> {
    return this.cadastroService.update(cadastro);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.delete(id);
  }
}