import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import ICustomersService from "../domain/interfaces/customers-service.interface";
import { CreateCustomerDto } from "../domain/dto/customers-create.dto";

@ApiTags('Customers')
@Controller('Customers')
export class CustomersController {

  constructor(
    @Inject('ICustomersService')
    private readonly customersService: ICustomersService
  ) {}

  @Get('')
  getAll() {
    return ''
  }

  @Post('Create')
  createCustomer(@Body() newCustomer: CreateCustomerDto): string {
    return this.customersService.createCustomer(newCustomer);
  }
}