import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import ISalesService from "../domain/interfaces/sales-service.interface";
import { CreateSaleDto } from "../domain/dto/sales-create.dto";

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
  constructor(
    @Inject('ISalesService') 
    private readonly salesService: ISalesService
  ) {}

  @Get('All')
  async getAll(): Promise<string>{
    return this.salesService.getAll()
  }

  @Post('Create')
  async createSale(@Body() newSale: CreateSaleDto) {
    try {
      return this.salesService.createSale(newSale);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
