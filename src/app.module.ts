import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CadastroModule } from './cadastro/cadastro.module';
import { Cadastro } from './cadastro/entities/cadastro.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_empregadev',
      entities: [Cadastro],
      synchronize: true,
    }),
    CadastroModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
