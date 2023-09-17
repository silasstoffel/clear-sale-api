import { injectable, inject } from 'tsyringe';
import { ICustomerRepository } from '../domain/customer.repository';
import { Customer } from '../domain/customer';
import { CustomerDto } from './customer.dto';
import { EmailAlreadyExistsException } from '../domain/exceptions/email-already-exists';
import { DocumentAlreadyExistsException } from '../domain/exceptions/document-already-exists';

@injectable()
export class CreateCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(customer: CustomerDto): Promise<Customer> {
        await this.check(customer);
        return this.customerRepository.create(new Customer(customer));
    }

    private async check(customer: CustomerDto): Promise<void> {
        let records = await this.customerRepository.findAll({
            filter: { email: customer.email }
        })
        if (records.data.length) {
            throw new EmailAlreadyExistsException()
        }

        records = await this.customerRepository.findAll({
            filter: { document: customer.document }
        })
        if (records.data.length) {
            throw new DocumentAlreadyExistsException()
        }
    }
}
