import { ApiProperty } from '@nestjs/swagger';


export class ProductResponseDto {
    @ApiProperty({ example: '9', description: 'Product id' })
    Id: string;

    @ApiProperty({ example: 'Batom mate', description: 'Name of the product' })
    Name: string;

    @ApiProperty({ example: '5181165', description: 'Product barcode' })
    Barcode: string;

    @ApiProperty({ example: '5284', description: 'Stock Keeping Unit' })
    Sku: string;

    @ApiProperty({ example: '5', description:'Category Id' })
    IdCategory: string;
    
    @ApiProperty({ example: '7', description:'SubCategory Id' })
    IdSubCategory: string;

    @ApiProperty({ example: '7', description:'Provider Id' })
    IdProvider: string;

    @ApiProperty({ example: '59,7', description: 'Price of product'})
    CostPrice: string;

    @ApiProperty({ example: '89,7', description: 'Price of product'})
    Price: string;
}