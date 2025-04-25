import { Inject, Injectable } from "@nestjs/common";
import ISalesService  from "../domain/interfaces/sales-service.interface";
import { LoggerService } from "src/logger/application/logger.service";

@Injectable()
export class SalesService implements ISalesService {
  constructor(
    
    private readonly logger: LoggerService
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

  async createSale() {
    throw new Error("Method not implemented.");
  }
}
