import { ApiProperty } from "@nestjs/swagger";
import { SaleItensDto } from "./sales-item.dto";

export class CreateSaleDto {

  @ApiProperty({ example: "34", description: 'Id do cliente' })
  clientId: number;

  @ApiProperty({ example: [{productId: 232 , quantity: 10 }], description: 'Itens da venda' })
  salesItens: SaleItensDto[];

  @ApiProperty({ example: "42.12", description: 'Valor de desconto' })
  discount: string;

  @ApiProperty({ example: "5", description: 'Forma de pagamento' })
  payment: string;

  @ApiProperty({ example: "542.46", description: 'Valor total' })
  total: string;
}