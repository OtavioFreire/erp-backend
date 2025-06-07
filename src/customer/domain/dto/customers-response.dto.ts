import { ApiProperty } from "@nestjs/swagger";


export class CustomerResponseDto {

    @ApiProperty({ example: "5", description: 'Id do cliente' })
    idClient: string;

    @ApiProperty({ example: "Jessica Louro", description: 'Nome' })
    name: string;

    @ApiProperty({ example: "04/03/1998", description: 'Data de nascimento' })
    date_birth: string;

    @ApiProperty({ example: "999.999.999-77", description: 'CPF' })
    cpf: string;

    @ApiProperty({ example: "(19) 99999-9999", description: 'Telefone' })
    phone: string;
}