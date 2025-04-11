import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProvidersService } from "src/providers/application/providers.service";
import { CreateSaleDto } from "../domain/dto/create-sales.dto";


@ApiTags('Sales')
@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) {}

    @Post('Create')
    async createSale(@Body() sale: CreateSaleDto) {
        
    }
}

