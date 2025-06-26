import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_cadastro' })
export class Cadastro {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  cargo: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  setor: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 10, scale: 2, nullable: false })
  salario: number;
}
