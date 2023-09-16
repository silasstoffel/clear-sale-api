import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';
import { Customer } from '../domain/customer';

@injectable()
export class LoadCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(id: string): Promise<Customer | null> {
        return this.customerRepository.find(id);
    }
}