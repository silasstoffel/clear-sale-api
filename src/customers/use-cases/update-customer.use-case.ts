import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';
import { Customer } from '../domain/customer';

@injectable()
export class UpdateCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(id: string, customer: Partial<Customer>): Promise<Customer> {
        return this.customerRepository.update(id, customer);
    }
}