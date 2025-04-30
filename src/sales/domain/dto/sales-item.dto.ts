import { ApiProperty } from "@nestjs/swagger";

export class SaleItensDto {
  @ApiProperty({ example: 'Batom mate', description: 'Id do produto' })
  productId: string;

  @ApiProperty({ example: 'Batom mate', description: 'Quantidade do produto' })
  quantity: number;
}