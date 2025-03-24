import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";


export class CreateSubCategoryDto{
    

    @ApiProperty({ description: 'Category id' })
    @IsNotEmpty()
    @IsNumber()
    idcategory:number;

    @ApiProperty({ description: 'Name of the subcategory' })
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    name:string;
}