import { Logger, Module, OnModuleInit } from "@nestjs/common";
import knex, { Knex } from "knex";
import databaseConfig from "src/config/database.config";
import { ProvidersController } from "./web-api/providers.controller";
import { KnexModule } from "nest-knexjs";
import { ProvidersService } from "./application/providers.service";
import { ProvidersRepository } from "./infrastructure/providers.repository";


@Module({
    imports: [KnexModule.forRoot({ config: databaseConfig })],
    controllers: [ProvidersController],
    providers: [ProvidersService, ProvidersRepository]
})
export class ProvidersModule  implements OnModuleInit{
    private readonly logger = new Logger(ProvidersModule.name);
    private readonly database: Knex;
    constructor() {
    this.database = knex(databaseConfig);
    }
    async onModuleInit() {
    try {
        await this.database.raw('SELECT 1');
        this.logger.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        this.logger.error('Erro ao conectar com o banco de dados:', error);
        process.exit(1);
    }
    }
}