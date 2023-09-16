import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';
import { Customer } from '../domain/customer';
import { CustomerDto } from './customer.dto';

@injectable()
export class CreateCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(customer: CustomerDto): Promise<Customer> {
        return this.customerRepository.create(new Customer(customer));
    }
}