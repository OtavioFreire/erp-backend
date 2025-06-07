import { Knex } from "knex";
import { InjectModel } from "nest-knexjs";
import { CreateCustomerDto } from "src/customer/domain/dto/customers-create.dto";
import { CustomerResponseDto } from "src/customer/domain/dto/customers-response.dto";
import ICustomerRepository from "src/customer/domain/interfaces/customers-repository.interface";


export class CustomersRepository implements ICustomerRepository {
    private readonly TABLE_NAME_CUSTOMER = 'customer';
    constructor(
        @InjectModel() private readonly knex: Knex
    ) {}

    async createCustomer(newCustomer: CreateCustomerDto): Promise<CustomerResponseDto> {
        const createCustomer = await this.knex(this.TABLE_NAME_CUSTOMER) 
            .insert(newCustomer).returning<CustomerResponseDto>('*');
        
        return createCustomer
    }
    
}