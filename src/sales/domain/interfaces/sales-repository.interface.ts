export default interface ISalesRepository {
  getAll(): Promise<string>;
  createSale();
}

export const ISalesRepository = 'ISalesRepository';