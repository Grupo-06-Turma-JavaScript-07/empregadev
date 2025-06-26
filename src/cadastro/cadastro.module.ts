import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CadastroController } from "./controllers/cadastro.controller"
import { Cadastro } from "./entities/cadastro.entity";
import { CadastroService } from "./service/cadastro.service";


@Module({
    imports: [TypeOrmModule.forFeature([Cadastro])],
    providers: [CadastroService],
    controllers: [CadastroController],
    exports: [TypeOrmModule],
})
export class CadastroModule { }