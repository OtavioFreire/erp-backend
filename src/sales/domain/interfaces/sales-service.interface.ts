import { CreateSaleDto } from "../dto/sales-create.dto";

export default interface ISalesService {
    getAll(): Promise<string>;
    createSale(newSale: CreateSaleDto);
}

export const ISalesService = 'ISalesService';