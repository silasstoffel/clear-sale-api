import { injectable, } from 'tsyringe';
import model from './schema'

import { ICustomerRepository } from '../../../domain/customer.repository';
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

    findAll(id: string): Promise<Customer[]> {
        throw new Error('Method not implemented.');
    }

}