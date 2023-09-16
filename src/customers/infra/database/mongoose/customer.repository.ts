import { injectable, } from 'tsyringe';
import model from './schema'

import { ICustomerRepository, IFindAllParameters, IListResponse } from '../../../domain/customer.repository';
import { Customer } from '../../../domain/customer';
import { createSetAndUnsetOperators } from '../../../../infra/database/mongoose/utils';
import { CustomerNotException } from '../../../domain/exceptions/customer-not-found';

@injectable()
export class CustomerRepository implements ICustomerRepository {
    
    async create(customer: Customer): Promise<Customer> {
        const data = await model.create<Customer>(customer);
        return new Customer(data);
    }

    async update(id: string, customer: Partial<Customer>): Promise<Customer> {
        const { $set, $unset } = createSetAndUnsetOperators(customer);

        const customerUpdated = await model.findOneAndUpdate<Customer>(
            { id },
            { $set, $unset },
            { runValidators: true }
        ).exec();

        if (!customerUpdated) {
            throw new CustomerNotException();
        }

        return new Customer(customerUpdated as Customer);
    }

    async delete(id: string): Promise<void> {
        const customer = await model.findOneAndDelete<Customer>(
            { id },
        ).exec();

        if (!customer) {
            throw new CustomerNotException();
        }
    }

    async find(id: string): Promise<Customer | null> {
        const customer = await model.findOne({ id });
        return customer ? new Customer(customer) : null;
    }

    async findAll(params: IFindAllParameters): Promise<IListResponse> {
        const limit = Number(params.limit) ? Number(params.limit) : 10;
        const page = Number(params.page) ?? 1; 
        const skip = (page - 1) * limit;
        const records = await model.find(params.filter ?? {})
            .skip(skip)
            .limit(limit + 1)
            .exec();

        console.log(params);
        
        const next = records.length > limit ? page + 1 : null;
  
        if (next) {
            records.pop();
        }

        return {
            type: 'customers',
            url: '/v1/customers',
            data: records.map(record => new Customer(record)) ,
            previous: records.length && page > 1 ? page - 1 : null,
            next,
            currentPage: page,
        }
    }
}