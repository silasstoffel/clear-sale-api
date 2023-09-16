import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';

@injectable()
export class DeleteCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(id: string): Promise<void> {
        await this.customerRepository.delete(id)
    }
}
