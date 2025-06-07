import { Logger, Module, OnModuleInit } from "@nestjs/common";
import { ProductsController } from "./web-api/products.controller";
import { ProductsService } from "./application/products.service";
import { AuthModule } from "src/auth/auth.module";
import { ProductsRepository } from "./infrastructure/repositories/products.repository";
import knex, { Knex } from "knex";
import databaseConfig from "src/config/database.config";
import { KnexModule } from "nest-knexjs";

@Module({
    imports: [AuthModule, KnexModule.forRoot({ config: databaseConfig })],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository]
})

export class ProductsModule implements OnModuleInit{
    private readonly logger = new Logger(ProductsModule.name);
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