import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateSaleDto } from "../domain/dto/create-sales.dto";
import { SalesService } from "../application/sales.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import ISalesService from "../domain/interfaces/sales-service.interface";

@ApiTags('Sales')
@Controller('sales')
export class SalesController {
  constructor(
    @Inject('ISalesService') 
    private readonly salesService: ISalesService
  ) {}

  @Get('All')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getAll(): Promise<string>{
    return this.salesService.getAll()
  }

  @Post('Create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createSale(@Body() sale: CreateSaleDto) {
    try {
      return this.salesService.createSale();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
