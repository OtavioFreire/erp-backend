import { ApiProperty } from "@nestjs/swagger";


export class CreateCustomerDto {
    @ApiProperty({ example: "Jessica Louro", description: 'Nome' })
    name: string;

    @ApiProperty({ example: "04/03/1998", description: 'Data de nascimento' })
    date_birth: string;

    @ApiProperty({ example: "99999999977", description: 'CPF' })
    cpf: string;

    @ApiProperty({ example: "(19) 99999-9999", description: 'Telefone' })
    phone: string;
}