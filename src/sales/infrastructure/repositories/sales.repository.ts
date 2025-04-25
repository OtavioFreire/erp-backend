import ISalesRepository from "src/sales/domain/interfaces/sales-repository.interface";

export class SalesRepository implements ISalesRepository {
  constructor() {

  }

  async getAll(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async createSale() {
    throw new Error("Method not implemented.");
  }
    
}