import { Logger, Module, OnModuleInit } from "@nestjs/common";
import knex, { Knex } from "knex";
import { KnexModule } from "nest-knexjs";
import databaseConfig from "src/config/database.config";
import { CustomersController } from "./web-api/customers.controller";
import { ICustomersRepository } from "./domain/interfaces/customers-repository.interface";
import { CustomersRepository } from "./infrastructure/repositories/customers.repository";
import { ICustomersService } from "./domain/interfaces/customers-service.interface";
import { CustomersService } from "./application/customers.service";
import { LoggerService } from "src/logger/application/logger.service";


@Module({
    imports: [KnexModule.forRoot({ config: databaseConfig })],
    controllers: [CustomersController],
    providers: [
        {
            provide: ICustomersService,
            useClass: CustomersService
        },
        {
            provide: ICustomersRepository,
            useClass: CustomersRepository
        },
        LoggerService
    ]
})
export class CustomersModule implements OnModuleInit{
    private readonly logger = new Logger(CustomersModule.name);
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