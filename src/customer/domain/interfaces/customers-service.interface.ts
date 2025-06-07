import { CreateCustomerDto } from "../dto/customers-create.dto";


export default interface ICustomersService {
    createCustomer(newCustomer: CreateCustomerDto);
}

export const ICustomersService = 'ICustomersService'