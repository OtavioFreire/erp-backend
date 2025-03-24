import { Logger, Module, OnModuleInit } from "@nestjs/common";
import { CategoriesController } from "./web-api/categories.controller";
import { CategoriesService } from "./application/categories.service";
import { CategoriesRepository } from "./infrastructure/repositories/categories.repository";
import { KnexModule } from "nest-knexjs";
import knex, { Knex } from "knex";
import databaseConfig from "src/config/database.config";


@Module({
    imports: [KnexModule.forRoot({ config: databaseConfig })],
    controllers: [CategoriesController],
    providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule implements OnModuleInit{
    private readonly logger = new Logger(CategoriesModule.name);
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
        process.exit(1); // Encerra a aplicação se a conexão falhar
    }
    }
}