import { LoggerService } from "src/logger/application/logger.service";
import ICustomersService from "../domain/interfaces/customers-service.interface";
import { Inject } from "@nestjs/common";
import ICustomersRepository from "../domain/interfaces/customers-repository.interface";
import { CreateCustomerDto } from "../domain/dto/customers-create.dto";


export class CustomersService implements ICustomersService {
    constructor(
        private readonly logger: LoggerService,
        @Inject('ICustomersRepository')
        private readonly customersRepository: ICustomersRepository
    ) {}

    async createCustomer(newCustomer: CreateCustomerDto) {     
        try {
            return await this.customersRepository.createCustomer(newCustomer);
        } 
        catch (error) {
            throw new Error(error.message);
        }
    }
}