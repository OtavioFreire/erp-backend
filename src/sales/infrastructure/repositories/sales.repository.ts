import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { CreateSaleDto } from "src/sales/domain/dto/sales-create.dto";
import ISalesRepository from "src/sales/domain/interfaces/sales-repository.interface";

export class SalesRepository implements ISalesRepository {
  private readonly TABLE_NAME_SALES = 'sales';
  private readonly TABLE_NAME_SALES_ITENS = 'salesitens';

  constructor(@InjectModel() private readonly knex: Knex) {}

  async getAll(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async createSale(newSale: CreateSaleDto) {
    const createSale = await this.knex(this.TABLE_NAME_SALES)
      .insert({
        idclient: newSale.clientId,
        discount: newSale.discount,
        idtypepayment: newSale.payment,
        total: newSale.total
      }).returning('*');

    const createSaleItens = newSale.salesItens.map(async (item) => {
      await this.knex(this.TABLE_NAME_SALES_ITENS)
        .insert({
          idsale: createSale[0].id,
          idproduct: item.productId,
          quantity: item.quantity
        })
    })

    return createSale[0];
  }
}