import { ApiProperty } from "@nestjs/swagger";

export class CreateProviderDto {
    
    @ApiProperty({ example: 'Batom mate', description: 'Name of the product' })
    providerName: string;
}