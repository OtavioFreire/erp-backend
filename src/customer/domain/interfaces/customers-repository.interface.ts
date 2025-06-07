import { CreateCustomerDto } from "../dto/customers-create.dto";
import { CustomerResponseDto } from "../dto/customers-response.dto";


export default interface ICustomersRepository {
    createCustomer(newCustomer: CreateCustomerDto): Promise<CustomerResponseDto>;
}

export const ICustomersRepository = 'ICustomersRepository'