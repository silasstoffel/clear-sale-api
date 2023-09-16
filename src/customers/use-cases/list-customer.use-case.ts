import { injectable, inject } from 'tsyringe';
import { ICustomerRepository, IFindAllParameters, IListResponse } from '../domain/customer.repository';

@injectable()
export class ListCustomerUseCase {
    public constructor(
        @inject("CustomerRepository")
        private readonly customerRepository: ICustomerRepository,
    ) {}

    public async execute(params: IFindAllParameters): Promise<IListResponse> {
        return this.customerRepository.findAll(params)
    }
}