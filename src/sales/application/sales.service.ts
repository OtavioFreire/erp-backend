import { Inject, Injectable } from "@nestjs/common";
import ISalesService  from "../domain/interfaces/sales-service.interface";
import { LoggerService } from "src/logger/application/logger.service";
import ISalesRepository from "../domain/interfaces/sales-repository.interface";
import { CreateSaleDto } from "../domain/dto/sales-create.dto";

@Injectable()
export class SalesService implements ISalesService {
  constructor(
    private readonly logger: LoggerService,
    @Inject('ISalesRepository')
    private readonly salesRepository: ISalesRepository
  ) {}
  
  async getAll(): Promise<string> {
    try {
      this.logger.log("SalesService", "Get all sales");
      return "xana";
    } 
    catch (error) {
      throw new Error(error.message);
    }
  }

  async createSale(newSale: CreateSaleDto) {
    try {
      return this.salesRepository.createSale(newSale);
    } 
    catch (error) {
      throw new Error(error.message);
    }
  }
}
