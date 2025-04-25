import { Logger, Module, OnModuleInit } from "@nestjs/common";
import knex, { Knex } from "knex";
import databaseConfig from "src/config/database.config";
import { SalesController } from "./web-api/sales.controller";
import { SalesService } from "./application/sales.service";
import { ISalesService } from "./domain/interfaces/sales-service.interface";
import { KnexModule } from "nest-knexjs";
import { ISalesRepository } from "./domain/interfaces/sales-repository.interface";
import { SalesRepository } from "./infrastructure/repositories/sales.repository";
import { LoggerService } from "src/logger/application/logger.service";

@Module({
    imports: [KnexModule.forRoot({ config: databaseConfig })],
    controllers: [SalesController],
    providers: [
      {
        provide: ISalesService,
        useClass: SalesService,
      },
      {
        provide: ISalesRepository,
        useClass: SalesRepository,
      },
      LoggerService
    ]
})
export class SalesModule implements OnModuleInit {
    private readonly logger = new Logger(SalesModule.name);
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