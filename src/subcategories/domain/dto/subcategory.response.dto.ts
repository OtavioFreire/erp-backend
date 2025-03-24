import { ApiProperty } from "@nestjs/swagger";

export class SubCategoryResponseDto {
    @ApiProperty({ example: '1', description: 'SubCategory id' })
    id: number;

    @ApiProperty({ example: '1', description: 'Category id' })
    idCategory: number;

    @ApiProperty({ example: 'Corpo', description: 'Name of the subcategory' })
    name: string;
}