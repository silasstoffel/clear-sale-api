import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';
import { Customer } from '../domain/customer';
import { CustomerNotFoundException } from '../domain/exceptions/customer-not-found';

@injectable()
export class LoadCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(id: string): Promise<Customer> {
        const customer = await this.customerRepository.find(id);
        if (!customer) {
            throw new CustomerNotFoundException();
        }

        return customer;
    }
}