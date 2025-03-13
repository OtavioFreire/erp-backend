import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
    @ApiProperty({ example: '9', description: 'Product id' })
    id: string;

    @ApiProperty({ example: 'Batom mate', description: 'Name of the product' })
    name: string;

    @ApiProperty({ example: '5181165', description: 'Product barcode' })
    barcode: string;

    @ApiProperty({ example: '5284', description: 'Stock Keeping Unit' })
    sku: string;

    @ApiProperty({ example: '5', description:'Category Id' })
    idcategory: number;
    
    @ApiProperty({ example: '7', description:'SubCategory Id' })
    idsubcategory: number;

    @ApiProperty({ example: '7', description:'Provider Id' })
    idprovider: number;

    @ApiProperty({ example: '59', description: 'Price of product'})
    costprice: number;

    @ApiProperty({ example: '89', description: 'Price of product'})
    price: number;
}