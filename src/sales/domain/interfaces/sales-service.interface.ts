export default interface ISalesService {
    getAll(): Promise<string>;
    createSale();
}

export const ISalesService = 'ISalesService';