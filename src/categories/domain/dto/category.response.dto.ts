import { ApiProperty } from "@nestjs/swagger";

export class CategoryResponseDto {
    @ApiProperty({ example: '1', description: 'Category id' })
    id: number;

    @ApiProperty({ example: 'Corpo', description: 'Name of the category' })
    name: string;
}