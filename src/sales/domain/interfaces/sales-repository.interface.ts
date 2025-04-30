import { CreateSaleDto } from "../dto/sales-create.dto";

export default interface ISalesRepository {
  getAll(): Promise<string>;
  createSale(newSale: CreateSaleDto);
}

export const ISalesRepository = 'ISalesRepository';