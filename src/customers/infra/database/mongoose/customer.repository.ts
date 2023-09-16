import { injectable, } from 'tsyringe';
import model from './schema'

import { ICustomerRepository } from '../../../domain/customer.repository';
import { Customer } from '../../../domain/customer';

@injectable()
export class CustomerRepository implements ICustomerRepository {
    
    async create(customer: Customer): Promise<Customer> {
        const data = await model.create<Customer>(customer);
        return new Customer(data);
    }

    async update(id: string, customer: Customer): Promise<Customer> {
        throw new Error('Method not implemented.');
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async find(id: string): Promise<Customer | null> {
        const customer = await model.findOne({ id });
        return customer ? new Customer(customer) : null;
    }

    findAll(id: string): Promise<Customer[]> {
        throw new Error('Method not implemented.');
    }

}